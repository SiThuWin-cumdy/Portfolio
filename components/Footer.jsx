import { RiFacebookFill } from "react-icons/ri";
import { RiTwitterXFill } from "react-icons/ri";
import { RiInstagramFill } from "react-icons/ri";
import { SiLinkedin } from "react-icons/si";
import { ImGithub } from "react-icons/im";

export default function FooterComponent() {
  return (
    <>
      <div className="flex  ">
        <a
          href="#"
          className="mr-2 transform hover:transition duration-700 hover:scale-150 hover:fill-cyan-700"
        >
          <RiFacebookFill />
        </a>
        <a
          href="#"
          className="mr-2 transform hover:transition duration-700 hover:scale-150"
        >
          <RiTwitterXFill />
        </a>
        <a
          href="#"
          className="mr-2 transform hover:transition duration-700 hover:scale-150"
        >
          <RiInstagramFill />
        </a>
        <a
          href="#"
          className="mr-2 transform hover:transition duration-700 hover:scale-150"
        >
          <SiLinkedin />
        </a>
        <a
          href="#"
          className="mr-2 transform hover:transition duration-700 hover:scale-150"
        >
          <ImGithub />
        </a>
      </div>
    </>
  );
}
