'use client'
import { useState } from "react";
import Link from "next/link";
import InputField from "../../components/inputField/InputField";
import CustomButton from "../../components/customButton/CustomButton";
import CustomText from "../../components/customText/CustomText";
import IMAGES from "../../assets/images";

export default function SignUpRegister() {
  const [formData, setFormData] = useState({
    email: "",
    name: "",
    password: "",
    confirmPassword: ""
  });
  // Explicitly type error as string or null
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async () => {
    // Basic validation
    if (formData.password !== formData.confirmPassword) {
      setError("Passwords don't match");
      return;
    }

    setLoading(true);
    setError(null);

    try {
      const response = await fetch('/api/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        console.log("Registration successful:", data);
        setFormData({
          email: "",
          name: "",
          password: "",
          confirmPassword: ""
        });
      } else {
        setError(data.message || "Registration failed");
      }
    } catch (error) {
      setError("An error occurred during registration");
      console.error("Registration error:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <main 
      className="bg-[#0B101B] flex flex-col items-center justify-center"
      style={{
        backgroundImage: `url(${IMAGES.backgroundimg.src})`,
        backgroundPositionX: '50%',
        backgroundPositionY: '80%',
        backgroundRepeat: "no-repeat",
        width: "100%",
      }}
    >
      <div 
        className="z-30 w-full px-4 flex flex-col justify-evenly h-full items-center min-h-screen"
      >
        <h1 className="text-[36px] font-[800] mb-[50px] bg-gradient-to-r from-[#EB568E] to-[#144EE3] text-transparent bg-clip-text">
          Linkly
        </h1>
        <CustomText />
        <div className="w-full max-w-[660px] space-y-4 flex flex-col justify-center items-center">
        <InputField 
  name="email"
  type="email" 
  placeholder="Email" 
  value={formData.email}
  onChange={handleInputChange}
/>
<InputField 
  name="name"
  type="text" 
  placeholder="Name" 
  value={formData.name}
  onChange={handleInputChange}
/>
<InputField 
  name="password"
  type="password" 
  placeholder="Password" 
  value={formData.password}
  onChange={handleInputChange}
/>
<InputField
  name="confirmPassword"
  type="password"
  placeholder="Confirm Password"
  value={formData.confirmPassword}
  onChange={handleInputChange}
/>
        </div>
        
        {error && (
          <div className="text-red-500 text-sm mt-2">
            {error}
          </div>
        )}
        
        <div>
          <CustomButton 
            title={loading ? "Registering..." : "Register"} 
            width="268px" 
            onClick={handleSubmit}
            disabled={loading}
          />
        </div>

        <div className="mt-6 text-gray-400 text-sm">
          <Link href="/signIn" className="text-[#0066FF] hover:underline">
            Sign In
          </Link>{" "}
          if already registered
        </div>
      </div>
    </main>
  );
}