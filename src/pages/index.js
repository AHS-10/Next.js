import axios from "axios";
import getConfig from "next/config";
import { useState } from "react"


export default function Home() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [number, setNumber] = useState('');
  const [getId, setGetId] = useState('');

  const post = async () => {

    const info = {
      name, email, password, number
    }

    try {
      const response = await axios.post("http://localhost:3000/api/userData", info);
      console.log(response.data);
    } catch (error) {
      console.log(error.message);
    }


    // axios.post("http://localhost:3000/api/userData",{
    //   name,email,password,number
    // })
    // .then(res => {
    //   console.log(res)
    // })
    // .catch(err => {
    //   console.error(err); 
    // })
  }


  const getById = async () => {

    const id = Number(getId);
    try {
      const response = await axios.get(`http://localhost:3000/api/userData/${id}`);
      console.log(response.data);
    } catch (error) {
      console.log(error.message);
    }
  }


  const get = async () => {

    try {
      const response = await axios.get("http://localhost:3000/api/userData/");
      console.log(response.data);
    } catch (error) {
      console.log(error.message);
    }
  }


  // const put = async () => {

  //   const info = {
  //     name, email, password, number
  //   }
  //   const id = Number(getId);

  //   try {
  //     const response = await axios.post(`http://localhost:3000/api/userData/${id}`, info);
  //     console.log(response.data);
  //   } catch (error) {
  //     console.log(error.message);
  //   }
  // }

  const del = async()=>{
    const id = Number(getId);
    try {
      const response = await axios.delete(`http://localhost:3000/api/userData/${id}`);
      console.log(response.data);
    } catch (error) {
      console.log(error.message);
    }
  }


  return (
    <>

      <input value={name} onChange={(val) => setName(val.target.value)} placeholder="Name" /> <br />
      <input value={email} onChange={(val) => setEmail(val.target.value)} placeholder="Email" /> <br />
      <input value={password} onChange={(val) => setPassword(val.target.value)} placeholder="Password" /> <br />
      <input value={number} onChange={(val) => setNumber(val.target.value)} placeholder="Number" /> <br />
      <button onClick={post}>Submit</button><br /><br />
      <button onClick={get}>Get All Data</button><br /><br />
      <input value={getId} onChange={(val) => setGetId(val.target.value)} placeholder="Id" /> <br />
      <button onClick={getById}>Get By Id</button><br /><br />
      {/* <button onClick={put}>Put</button><br /><br /> */}
      <button onClick={del}>Delete</button><br /><br />


    </>
  )
}
