import Link from "next/link";

import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";

const socials = [
  { icon: <FaGithub />, path: "https://github.com/valchevvv" },
  {
    icon: <FaLinkedin />,
    path: "https://www.linkedin.com/in/daniel-valchev-87bb55285",
  },
];

const Social = ({ containerStyles, iconStyles }) => {
  return (
    <>
      <div className={containerStyles}>
        {socials.map((items, index) => {
          return (
            <Link key={index} href={items.path} className={iconStyles}>
              {items.icon}
            </Link>
          );
        })}
      </div>
    </>
  );
};

export default Social;
