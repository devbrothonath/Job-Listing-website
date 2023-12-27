import { useState } from "react";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(name, email, mobile, password);
  };

  return (
    <form className="register" onSubmit={handleSubmit}>
      <h3>Create an account</h3>
      <h4>Your personal job finder is here</h4>

      <input
        type="text"
        placeholder="Name"
        onChange={(e) => setName(e.target.value)}
        value={name}
      />
      <input
        type="email"
        placeholder="Email"
        onChange={(e) => setEmail(e.target.value)}
        value={email}
      />
      <input
        type="number"
        placeholder="Mobile"
        onChange={(e) => setMobile(e.target.value)}
        value={mobile}
      />
      <input
        type="password"
        placeholder="Password"
        onChange={(e) => setPassword(e.target.value)}
        value={password}
      />

      <button>Create Account</button>
    </form>
  );
};

export default Register;
