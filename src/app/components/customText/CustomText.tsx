function CustomText() {
  return (
    <div className="flex flex-col items-center justify-between gap-5">
      
        <h2 className="text-4xl md:text-[60px] font-bold text-center mb-4">
          <span className="bg-gradient-to-r from-[#144EE3] to-[#EB568E] text-transparent bg-clip-text">
            Shorten{" "}
          </span>
          <span className="bg-gradient-to-r from-[#EB568E] to-[#A353AA] text-transparent bg-clip-text">
            Your Loooong{" "}
          </span>
          <span className="bg-gradient-to-r from-[#A353AA] to-[#144EE3] text-transparent bg-clip-text">
            Links :){" "}
          </span>
          </h2>
          <p className="text-[#C9CED6] text-center text-[16px]   max-w-lg">
          Linkly is an efficient and easy-to-use URL shortening service that streamlines your online experience.
        </p>
    </div>
  )
}

export default CustomText
