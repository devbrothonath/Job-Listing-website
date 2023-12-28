import { useState } from "react";
import { useLogin } from "../hooks/useLogin";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login, error, isLoading} = useLogin()

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(email, password);

    await login(email, password)
    
  };

  return (
    <form className="login" onSubmit={handleSubmit}>
      <h3>Already have an account?</h3>
      <h4>Your personal job finder is here</h4>

      <input
        type="email"
        placeholder="Email"
        onChange={(e) => setEmail(e.target.value)}
        value={email}
      />

      <input
        type="password"
        placeholder="Password"
        onChange={(e) => setPassword(e.target.value)}
        value={password}
      />

      <button disabled={isLoading}>Sign in</button>
      {error && <div className="error">{error}</div>}
    </form>
  );
};

export default Login;
