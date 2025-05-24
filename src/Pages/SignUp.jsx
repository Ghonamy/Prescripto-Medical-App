import { useState } from "react";

const SignUp = () => {
  const [status, setStatus] = useState("Sign Up");
  return (
    <div className="flex items-center justify-center">
      <div className="p-8 rounded-lg shadow-lg w-full max-w-[430px] border border-[#dadada] text-[#5e5e5e] mt-10 text-[15px]">
        <h2 className="text-2xl font-semibold mb-6 text-center text-[#5e5e5e]">
          {status === "Sign Up" ? "Create an Account" : "Login"}
        </h2>
        <div>
          {status === "Sign Up" && (
            <div className="mb-3">
              <label for="name" className="block font-medium mb-2">
                Full Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="w-full px-4 py-1.5 border border-[#dadada] rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
              />
            </div>
          )}
          <div className="mb-3">
            <label for="email" className="block font-medium mb-2">
              Email Address
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full px-4 py-1.5 border border-[#dadada] rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
            />
          </div>
          <div className="mb-3">
            <label for="password" className="block font-medium mb-2">
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              className="w-full px-4 py-1.5 border border-[#dadada] rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-[var(--primary-color)] text-white py-3 rounded-lg font-medium mt-4 text-[16px]"
          >
            {status === "Sign Up" ? "Create Account" : "Login"}
          </button>
        </div>
        <p className="mt-4">
          {status === "Sign Up"
            ? "Already have an account?"
            : "Create an new account? "}{" "}
          <span
            onClick={() =>
              setStatus(status === "Sign Up" ? "Login" : "Sign Up")
            }
            className="text-[var(--primary-color)] underline cursor-pointer"
          >
            {status === "Sign Up" ? "Login Here" : "Create Account"}
          </span>
        </p>
      </div>
    </div>
  );
};

export default SignUp;
