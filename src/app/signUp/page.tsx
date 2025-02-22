import Link from "next/link";
import InputField from "../components/inputField/InputField";
import CustomButton from "../components/customButton/CustomButton";
import CustomText from "../components/customText/CustomText";
import IMAGES from "../assets/images";
export default function Page() {
  return (
    <main className="bg-[#0B101B]  flex flex-col items-center justify-center "  style={{
      backgroundImage: `url(${IMAGES.backgroundimg.src})`,
     
backgroundPositionX:'50%',
backgroundPositionY:'80%',

      backgroundRepeat: "no-repeat",
     width: "100%",
    }}>
      <div className="z-30 w-full px-4 flex flex-col justify-evenly h-full items-center min-h-screen" >
        <h1 className="text-[36px] font-[800] mb-[50px] bg-gradient-to-r from-[#EB568E] to-[#144EE3] text-transparent bg-clip-text">
          Linkly
        </h1>
        <CustomText />
        <div className="w-full max-w-[660px] space-y-4 flex flex-col justify-center items-center">
          <InputField type="email" placeholder="Email" width="w-full" />
          <InputField type="text" placeholder="Name" width="w-full" />
          <InputField type="password" placeholder="Password" width="w-full" />
          <InputField
            type="password"
            placeholder="Confirm Password"
            width="w-full"
          />
        </div>
        <div>
          {" "}
          <CustomButton title="Register" width="268px" />
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
