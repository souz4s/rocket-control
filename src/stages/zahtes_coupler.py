import time

from utils import StageActivator, adjust_angle


def auto_stage(vessel):
    " Zahtes I at Zahtes III - Coupler"

    # Flight control setup (Zhempu II - Coupler)
    vessel.control.throttle = 1.0
    vessel.auto_pilot.target_pitch_and_heading(90, 90)
    vessel.auto_pilot.engage()

    # Stage 6
    time.sleep(10)
    vessel.control.activate_next_stage()

    # Stage 5
    time.sleep(3)
    vessel.control.activate_next_stage()

    # Maneuver 1
    time.sleep(5)
    adjust_angle(vessel, 90, 60)

    # Stage 4 (transition to Zahtes III - Coupler)
    first_activator = StageActivator(vessel)

    while not first_activator.activated:
        g_force = vessel.flight().g_force
        first_activator.check_g_force(g_force)
        time.sleep(1)

    # Stage 3
    second_activator = StageActivator(vessel)

    while not second_activator.activated:
        g_force = vessel.flight().g_force
        second_activator.check_g_force(g_force)
        time.sleep(1)

    # Stage 2
    time.sleep(5)
    vessel.control.activate_next_stage()

    # Stage 1
    time.sleep(1)
    vessel.control.activate_next_stage()

    # Stage 0
    time.sleep(10)
    vessel.control.activate_next_stage()
