import Link from "next/link"

import { FaGithub } from "react-icons/fa"
import { FaLinkedin } from "react-icons/fa6";


const socials = [
    { icon: <FaGithub />, path: "" },
    { icon: <FaLinkedin />, path: "" },
]

const Social = ({ containerStyles, iconStyles }) => {
    return (
        <>
            <div className={containerStyles}>
                {socials.map((items, index) => {
                    return (
                        <Link key={index} href={items.path} className={iconStyles}>
                            {items.icon}
                        </Link>
                    )
                })}
            </div>
        </>
    )
}

export default Social;