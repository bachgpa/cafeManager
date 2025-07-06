"use client";

import { useState } from "react";
import { useRouter } from "next/router";
import "./form.css";
import Link from "next/link";
export default function Form() {
  // const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const onSubmit = () => {
    console.log(`email: ${email}`);
    console.log(`password: ${password}`);
  };
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        onSubmit();
      }}
      className="loginForm"
    >
      <div className="field">
        <input
          className="input"
          required
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          id="email"
          type="email"
        />
        <p className="errorMail"></p>
      </div>

      <div className="field">
        <input
          className="input"
          required
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          id="password"
          type="password"
        />
        <p className="errorPass"></p>
      </div>
      <div className="optionalChoose flex items-center justify-between">
        <div className="checkboxContain">
          <input id="remember" type="checkbox"></input>
          Remember me
        </div>
        <div>
          <Link href="#"> Forgot password?</Link>
        </div>
      </div>
      {/* {error && <Alert>{error}</Alert>} */}
      <div className="w-full">
        <button className="button w-full" size="lg">
          Login
        </button>
        <button
          className="button w-full btn-google"
          size="lg"
        >
          <i class="googleLogin fa-brands fa-google"></i>
          Login with Google
        </button>
      </div>
    </form>
  );
}
