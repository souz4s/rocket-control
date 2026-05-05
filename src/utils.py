import time


class ParachuteActivator:
    def __init__(self, vessel):
        self.last_altitude = None
        self.activated = False
        self.vessel = vessel

    def receive_altitude(self, altitude):
        if self.last_altitude is not None and altitude < self.last_altitude and not self.activated:
            self.activate_parachute()
            self.activated = True
        self.last_altitude = altitude

    def activate_parachute(self):
        self.vessel.control.activate_next_stage()


class StageActivator:
    def __init__(self, vessel):
        self.activated = False
        self.vessel = vessel

    def check_g_force(self, g_force):
        if g_force < 1 and not self.activated:
            self.activate_next_stage()
            self.activated = True

    def activate_next_stage(self):
        self.vessel.control.activate_next_stage()


def adjust_angle(vessel, current_angle, target_angle):
    if current_angle < target_angle:
        while current_angle < target_angle:
            current_angle += 1
            vessel.auto_pilot.target_pitch_and_heading(current_angle, 90)
            time.sleep(0.5)
    elif current_angle > target_angle:
        while current_angle > target_angle:
            current_angle -= 1
            vessel.auto_pilot.target_pitch_and_heading(current_angle, 90)
            time.sleep(0.5)
