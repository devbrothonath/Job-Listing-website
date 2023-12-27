import { useState } from "react";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(email, password);
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

      <button>Sign in</button>
    </form>
  );
};

export default Login;
