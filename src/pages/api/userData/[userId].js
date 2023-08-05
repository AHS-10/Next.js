
import { del, getAll, getById, put } from "../../../../services/user";

export default function handler(req, res) {
    if (req.method === "GET") {
        const { userId } = req.query;
        const data = getById(userId);
        return res.status(200).json(data)
    } 
    // else if (req.method === "PUT") {
    //     const { userId } = req.query;
    //     const {name, email, password, phone_number} = req.body;
    //     put(userId, name, email, password, phone_number);
    //     const data = getAll()
    //     return res.status(200).json(data);
    // }
    else if (req.method == "DELETE"){
        const { userId } = req.query;
        const data = del(userId);
        return res.status(200).json(getAll())
    }
    return res.status(404).send();
}

