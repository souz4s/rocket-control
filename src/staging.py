import time


def auto_stage(vessel):
    vessel.control.throttle = 1.0

    # Zahtes I.III (family)

    # First engine
    time.sleep(10)
    vessel.control.activate_next_stage()

    # Decoupler
    time.sleep(0.2)
    vessel.control.activate_next_stage()

    # Second engine
    vessel.control.activate_next_stage()

    # Parachute
    time.sleep(10)
    vessel.control.activate_next_stage()
