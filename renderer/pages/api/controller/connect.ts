import type { NextApiRequest, NextApiResponse } from "next";
import { connect } from "../../../functions/connect";

export default function common(req: NextApiRequest, res: NextApiResponse) {
    const client = async () => {
        const response = await connect();
        return response;
    };

    client().then(response => {
        res.status(200).json({ "Connected": response });
    });
};
