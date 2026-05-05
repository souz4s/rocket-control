import time

from utils import ParachuteActivator


def auto_stage(vessel):
    " Zhempu II "

    # Flight control setup
    vessel.control.throttle = 1.0
    vessel.auto_pilot.target_pitch_and_heading(90, 90)
    vessel.auto_pilot.engage()

    # First engine
    time.sleep(10)
    vessel.control.activate_next_stage()

    # Launch Clamp
    time.sleep(3)
    vessel.control.activate_next_stage()

    # Maneuver 1
    time.sleep(10)
    vessel.auto_pilot.target_pitch_and_heading(80, 90)

    # Parachute activation logic
    time.sleep(10)
    activator = ParachuteActivator(vessel)

    while not activator.activated:
        altitude = vessel.flight().mean_altitude
        activator.receive_altitude(altitude)
        time.sleep(1)

    vessel.auto_pilot.disengage()
