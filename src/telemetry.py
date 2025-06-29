def get_electric_charge(vessel):
    return next(
        (res.amount for res in vessel.parts.root.resources.all if res.name ==
         "ElectricCharge"),
        "N/A"
    )


def get_parachutes(vessel):
    return vessel.parts.parachutes


def get_telemetry_data(vessel):
    return [
        f"{vessel.dry_mass:,.2f} kg",
        f"{vessel.mass:,.2f} kg",
        f"{vessel.flight().mean_altitude:,.2f} m"
    ]


def get_root_data(vessel, electric_charge):
    return [
        str(vessel.control.current_stage),
        str(electric_charge),
        str(vessel.comms.power),
        str(vessel.comms.can_communicate)
    ]


def get_parachute_data(parachutes):
    return [
        (str(idx), str(chute.armed), str(chute.deployed))
        for idx, chute in enumerate(parachutes, 1)
    ]
