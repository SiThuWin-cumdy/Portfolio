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
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.linkedin.com/in/si-thu-win-960656180/"
          className="mr-2 transform hover:transition duration-700 hover:scale-150 hover:fill-cyan-700"
        >
          <RiFacebookFill />
        </a>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.linkedin.com/in/si-thu-win-960656180/"
          className="mr-2 transform hover:transition duration-700 hover:scale-150"
        >
          <RiTwitterXFill />
        </a>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.linkedin.com/in/si-thu-win-960656180/"
          className="mr-2 transform hover:transition duration-700 hover:scale-150"
        >
          <RiInstagramFill />
        </a>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.linkedin.com/in/si-thu-win-960656180/"
          className="mr-2 transform hover:transition duration-700 hover:scale-150"
        >
          <SiLinkedin />
        </a>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://github.com/SiThuWin-cumdy"
          className="mr-2 transform hover:transition duration-700 hover:scale-150"
        >
          <ImGithub />
        </a>
      </div>
    </>
  );
}
