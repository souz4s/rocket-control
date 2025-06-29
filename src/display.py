from rich.align import Align
from rich.console import Group
from rich.panel import Panel
from rich.table import Table


def build_root_table(root_data):
    table = Table(show_header=True, title="Root")
    table.add_column("Current stage")
    table.add_column("Electric charge")
    table.add_column("Comms power")
    table.add_column("Can comunicate")
    table.add_row(*root_data)
    return table


def build_telemetry_table(telemetry_data):
    table = Table(show_header=True, title="Telemetry")
    table.add_column("Dry mass")
    table.add_column("Current mass")
    table.add_column("Altitude")
    table.add_row(*telemetry_data)
    return table


def build_parachute_table(parachute_data):
    table = Table(show_header=True, title="Parachutes")
    table.add_column("#")
    table.add_column("Armed")
    table.add_column("Deployed")
    for row in parachute_data:
        table.add_row(*row)
    return table


def build_panel(vessel_name, root_table, telemetry_table, parachute_table):
    group = Group(
        Align.center(root_table),
        Align.center(telemetry_table),
        Align.center(parachute_table)
    )
    panel = Panel(
        group,
        title=f"[bold]{vessel_name}[/bold]",
        border_style="blue"
    )
    return panel
