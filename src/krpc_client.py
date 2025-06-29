import krpc


def get_connection():
    return krpc.connect()


def get_active_vessel(conn):
    return conn.space_center.active_vessel
