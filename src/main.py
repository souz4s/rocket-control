import time
from rich.live import Live

from krpc_client import get_connection, get_active_vessel
from telemetry import (
    get_electric_charge,
    get_parachutes,
    get_telemetry_data,
    get_root_data,
    get_parachute_data,
)
from display import (
    build_root_table,
    build_telemetry_table,
    build_parachute_table,
    build_panel,
)


def main():
    conn = get_connection()
    vessel = get_active_vessel(conn)

    with Live(refresh_per_second=10) as live:
        while True:
            electric_charge = get_electric_charge(vessel)
            parachutes = get_parachutes(vessel)
            telemetry_data = get_telemetry_data(vessel)
            root_data = get_root_data(vessel, electric_charge)
            parachute_data = get_parachute_data(parachutes)

            root_table = build_root_table(root_data)
            telemetry_table = build_telemetry_table(telemetry_data)
            parachute_table = build_parachute_table(parachute_data)
            panel = build_panel(vessel.name, root_table,
                                telemetry_table, parachute_table)

            live.update(panel)
            time.sleep(0.1)


if __name__ == "__main__":
    main()
