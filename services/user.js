import fs from "fs";
import path from "path";

const filePath = path.join(process.cwd(), "data", "userData.json");

// GET DATA
export function getAll() {
    const data = fs.readFileSync(filePath);
    return (JSON.parse(data));

}

// GET DATA BY ID
export function getById(id) {
    const data = getAll();
    return data.find(x => x.id === Number(id))

}

// DELETE BY ID
export function del(id) {
    const data = getAll();
    
    const index = data.findIndex(
        indx => indx.id === Number(id)
    )
    data.splice(index, 1)
    fs.writeFileSync(filePath, JSON.stringify(data));
}

// POST
export function post(name, email, password, phone_number) {
    const data = getAll();
    data.push({
        id: data.length + 1,
        name, email, password, phone_number
    })
    fs.writeFileSync(filePath, JSON.stringify(data));
}

// // PUT
// export function put(id, name, email, password, phone_number) {

//     const data = getAll();
//     const info = {
//         name, email, password, phone_number
//     }
//     const index = data.findIndex(
//         indx => indx.id === Number(id)
//     )
//     data.splice(`${index}, 0, ${info}`)
//     fs.writeFileSync(filePath, JSON.stringify(data));

// }