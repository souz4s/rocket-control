import time


def auto_stage(vessel):
    " Zahtes I at Zahtes III"
    vessel.control.throttle = 1.0

    # First engine
    time.sleep(10)
    vessel.control.activate_next_stage()

    # Decoupler
    time.sleep(0.15)
    vessel.control.activate_next_stage()

    # Second engine
    vessel.control.activate_next_stage()

    # Parachute
    time.sleep(10)
    vessel.control.activate_next_stage()
