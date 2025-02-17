import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import Link from "next/link";

const socials = [
  {
    icon: <FaGithub />,
    path: "",
  },
  {
    icon: <FaLinkedinIn />,
    path: "",
  },
];
const Social = ({ containerStyles, iconStyles }) => {
  return (
    <div className={containerStyles}>
      {socials.map((social, index) => (
        <Link href={social.path} key={index} className={iconStyles}>
          {social.icon}
        </Link>
      ))}
    </div>
  );
};

export default Social;
