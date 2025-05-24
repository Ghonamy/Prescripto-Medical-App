import Logo from "../Assets/logo.svg";
const Footer = () => {
  return (
    <div className="container mx-auto pt-16 pb-3 px-5 md:px-10 lg:px-20">
      <div className="flex flex-col md:flex-row justify-between gap-8 text-[#4B5563]">
        <div className="max-w-[500px]">
          <img className="w-[180px] md:w-[200px]" src={Logo} alt="Logo Image" />
          <p className="text-[14px] md:text-[15px] mt-5">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.
          </p>
        </div>
        <div>
          <h2 className="text-[22px] md:text-[25px] text-black font-medium mb-5">COMPANY</h2>
          <ul className="flex flex-col gap-2 cursor-pointer">
            <li className="hover:text-black duration-300">Home</li>
            <li className="hover:text-black duration-300">About Us</li>
            <li className="hover:text-black duration-300">Delivery</li>
            <li className="hover:text-black duration-300">Privacy Policy</li>
          </ul>
        </div>
        <div>
          <h2 className="text-[22px] md:text-[25px] text-[#000] font-medium mb-5">
            GET IN TOUCH
          </h2>
          <p className="mb-1">+123-456-789</p>
          <p>ghonamyebrahim@gmail.com</p>
        </div>
      </div>
      <hr className="border-0 h-[1px] bg-[#8082867d] rounded mt-10 mb-5" />
      <div>
        <p className="text-center">Copyright 2025 - All Right Reserved.</p>
      </div>
    </div>
  );
};

export default Footer;
