import Image from "next/image";
import NavBar from "@/components/NavBar";
import loginImage from "../public/assets/login-image.jpg";

export default function Home() {
  return (
    <div>
      <NavBar />
      <div className="mx-10 my-10">
        <Image className="w-full h-auto" src={loginImage} />
      </div>
      {/* <h1>Welcome to course selling website!</h1> */}
    </div>
  );
}
