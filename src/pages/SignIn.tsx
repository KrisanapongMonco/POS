import React, { useState } from "react";

interface SignInProps {
  onLogin: (email: string, password: string) => void;
}

const SignIn: React.FC<SignInProps> = ({ onLogin }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onLogin(email, password);
  };

  return (
    <div className="p-4">
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="email" className="block mb-2 text-sm font-medium">
            Your email
          </label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="bg-gray-50 border border-gray-300 text-sm rounded-lg block w-full p-2.5"
            required
          />
        </div>
        <div>
          <label htmlFor="password" className="block mb-2 text-sm font-medium">
            Your password
          </label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="bg-gray-50 border border-gray-300 text-sm rounded-lg block w-full p-2.5"
            required
          />
        </div>
        <button
          type="submit"
          className="w-full text-white bg-blue-700 hover:bg-blue-800 font-medium rounded-lg text-sm px-5 py-2.5"
        >
          Login
        </button>
      </form>
    </div>
  );
};

export default SignIn;
