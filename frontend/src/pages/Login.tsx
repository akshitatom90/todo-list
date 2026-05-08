import { useState } from "react";
// import { loginUser } from "../services";
import { loginUser } from "../services";
import { useNavigate } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    console.log(email, password);
      const data = await loginUser(email, password);
      console.log(data)

    if (data.success) {
      navigate("/todos");
    }
//     if (data.success) {
//   window.location.href = "/todos";
// }
  }

  return (
    <div style={{ display: "flex", justifyContent: "center", marginTop: "100px" }}>
      <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", width: "200px" }}>
        
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          style={{ marginBottom: "10px", padding: "5px" }}
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          style={{ marginBottom: "10px", padding: "5px" }}
        />

        <button type="submit" style={{ padding: "5px" }}>
          Login
        </button>

      </form>
    </div>
  );
}

export default Login;