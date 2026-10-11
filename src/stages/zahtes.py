import time

from utils import ParachuteActivator


def auto_stage(vessel):
    " Zahtes I"
    vessel.control.throttle = 1.0

    # First engine
    time.sleep(10)
    vessel.control.activate_next_stage()

    # Parachute activation logic
    time.sleep(10)
    activator = ParachuteActivator(vessel)

    while not activator.activated:
        altitude = vessel.flight().mean_altitude
        activator.receive_altitude(altitude)
        time.sleep(1)
