import threading
import time

import krpc

from staging import auto_stage
from telemetry import get_telemetry, plot_realtime_telemetry

conn = krpc.connect(name="KSP Telemetry")
vessel = conn.space_center.active_vessel


def print_telemetry():
    while True:
        print(get_telemetry(vessel))
        time.sleep(1)


print_thread = threading.Thread(target=print_telemetry, daemon=True)
print_thread.start()

stage_thread = threading.Thread(
    target=auto_stage, args=(vessel,), daemon=True)
stage_thread.start()


try:
    plot_realtime_telemetry(get_telemetry, vessel,
                            interval=1000, save_path="telemetria.png")
except KeyboardInterrupt:
    print("\nKeyboardInterrupt detected. Saving plot and exiting...")
finally:
    import matplotlib.pyplot as plt
    plt.savefig("telemetria.png")
    print("Plot saved to: telemetria.png")
