// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import { getAll, post } from "../../../../services/user";




export default function handler(req, res) {
  if (req.method === "GET") {
    const data = getAll();
   return res.status(200).json(data)
  }
  else if (req.method === "POST") {
    const {name, email, password, phone_number} = req.body;
    post(name, email, password, phone_number);
    return res.status(201).json(getAll())
}
return res.status(404).send();
}

