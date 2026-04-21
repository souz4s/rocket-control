import matplotlib.animation as animation
import matplotlib.pyplot as plt


def get_telemetry(vessel):
    print("------------------------------------")
    return {
        # Vessel data
        "Current stage": vessel.control.current_stage,
        "Resources": [
            {
                "Index": idx,
                "Name": res.name,
                "Amount": f"{res.amount:,.2f}",
            }
            for idx, res in enumerate(vessel.resources.all, 1)
        ],
        "G-Force": vessel.flight().g_force,
        "Mean altitude": vessel.flight().mean_altitude,
        "Apoapsis": vessel.orbit.apoapsis_altitude,
        "Surface Speed": vessel.flight(vessel.orbit.body.reference_frame).speed,
        "Position": (vessel.flight().latitude, vessel.flight().longitude),

        # Parachute data
        "Parachutes": [
            {
                "Index": idx,
                "Name": chute.part.title,
                "Armed": chute.armed,
                "Deployed": chute.deployed
            }
            for idx, chute in enumerate(vessel.parts.parachutes, 1)
        ],

        # Flight data
        "Throttle": vessel.control.throttle,
        "Situation": vessel.situation.name,
        "Control": vessel.comms.can_communicate,
        "Signal Strength": vessel.comms.signal_strength,
    }


def plot_realtime_telemetry(get_telemetry_func, vessel, interval=200, save_path="telemetria.png"):
    import time
    from collections import deque

    times = deque()
    speeds = deque()
    altitudes = deque()
    g_forces = deque()
    start_time = time.time()

    fig, ax1 = plt.subplots()
    ax2 = ax1.twinx()
    # Create a third y-axis for G-Force
    ax3 = ax1.twinx()
    ax3.spines["right"].set_position(("axes", 1.2))
    ax3.spines["right"].set_visible(True)

    line1, = ax1.plot([], [], 'b-', label='Speed (m/s)')
    line2, = ax2.plot([], [], 'r-', label='Mean Altitude (m)')
    line3, = ax3.plot([], [], 'g-', label='G-Force')

    ax1.set_xlabel('Time (s)')
    ax1.set_ylabel('Speed (m/s)', color='b')
    ax2.set_ylabel('Mean Altitude (m)', color='r')
    ax3.set_ylabel('G-Force', color='g')

    def init():
        line1.set_data([], [])
        line2.set_data([], [])
        line3.set_data([], [])
        return line1, line2, line3

    def update(frame):
        telemetry = get_telemetry_func(vessel)
        t = time.time() - start_time
        times.append(t)
        speeds.append(telemetry['Surface Speed'])
        altitudes.append(telemetry['Mean altitude'])
        g_forces.append(telemetry['G-Force'])
        line1.set_data(times, speeds)
        line2.set_data(times, altitudes)
        line3.set_data(times, g_forces)
        ax1.relim()
        ax1.autoscale_view()
        ax2.relim()
        ax2.autoscale_view()
        ax3.relim()
        ax3.autoscale_view()
        return line1, line2, line3

    ani = animation.FuncAnimation(
        fig, update, init_func=init, interval=interval, blit=False)
    plt.title('Speed, Mean Altitude, and G-Force (real time)')
    fig.tight_layout()
    plt.show()

    fig.savefig(save_path)
    print(f"Plot saved to: {save_path}")
