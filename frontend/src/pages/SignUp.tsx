import { useState } from "react";
import { signupuser } from "../services";

function SignUp() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");

  async function handlesingup(e: React.FormEvent) {
    e.preventDefault();
    console.log(email, password, name);
    const data = await signupuser(email, password, name);
    console.log(data);

    
  }

  return (
  <div>
    <form  onSubmit={handlesingup} style={{display: "flex", flexDirection: "column" , width: "200px" , margin : "100px auto"}}>
    <input
      type="email" placeholder="Email" value={email} onChange={(e)=> setEmail(e.target.value)} style={{marginBottom: "10px"}}></input> 
    <input
      type="password" placeholder="Password" value={password} onChange={(e)=> setPassword(e.target.value)} style={{marginBottom: "10px"}}></input> 
    <input
      type="text" placeholder="Name" value={name} onChange={(e)=> setName(e.target.value)} style={{marginBottom: "10px"}}></input> 
    <button type="submit" style={{padding: "5px"}}>Sign Up</button> 
    </form>
  </div>
  )
}

export default SignUp


