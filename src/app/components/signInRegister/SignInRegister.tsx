"use client";
import Link from "next/link";
import InputField from "../../components/inputField/InputField";
import CustomButton from "../../components/customButton/CustomButton";
import CustomText from "../../components/customText/CustomText";
import IMAGES from "../../assets/images";
import { useState } from "react";

export default function SignInRegister() {
  const [formData, setFormData] = useState({
    email: "",
    name: "",
    password: "",
    confirmPassword: "",
  });
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    console.log("Email:", email);
    console.log("Password:", password);

    setEmail("");
    setPassword("");
  };

  return (
    <main className="bg-[#0B101B] flex flex-col items-center justify-center">
      <div
        className="z-30 w-full px-4 flex flex-col justify-around h-full items-center min-h-screen"
        style={{
          backgroundImage: `url(${IMAGES.backgroundimg.src})`,
          backgroundPositionX: "50%",
          backgroundPositionY: "80%",
          backgroundRepeat: "no-repeat",
          width: "100%",
        }}
      >
        <h1 className="text-[36px] font-[800] mb-[50px] bg-gradient-to-r from-[#EB568E] to-[#144EE3] text-transparent bg-clip-text">
          Linkly
        </h1>

        <form
          onSubmit={handleSubmit}
          className="flex flex-col items-center justify-between gap-5"
        >
          <div>
            <CustomText />
          </div>

          <div className="w-full max-w-[660px] space-y-4 flex flex-col justify-center items-center">
            <InputField
              name="email"
              type="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleInputChange}
            />
            <InputField
              name="password"
              type="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleInputChange}
            />
          </div>

          <div>
            <CustomButton title="Login" width="268px" />
          </div>
        </form>

        <div className="mt-6 text-gray-400 text-sm">
          <Link href="/signUp" className="text-[#0066FF] hover:underline">
            Register
          </Link>{" "}
          if already registered
        </div>
      </div>
    </main>
  );
}
