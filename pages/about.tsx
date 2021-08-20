// TODO: Create whole about page (should be kinda out there web experience where you click to reveal information)

import React from "react"
import Link from "next/link"
import { motion } from "framer-motion"

const About : React.FC = () => {
        return (
            <div className='frame'>
                <h1>
                    About.
                    <br />
                    <Link href="/" passHref><motion.span
                        initial={{backgroundColor: 'white', color: 'black'}}
                        whileTap={{opacity: 1, backgroundColor: 'black', color: 'white'}}
                        transition={{duration: 0.3}}
                        whileHover={{opacity: 1, backgroundColor: 'black', color: 'white'}} className='button'>Back</motion.span>
                    </Link>
                </h1>
            </div>
        )
}

export default About;