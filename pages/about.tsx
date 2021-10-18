import type { NextPage } from "next"
import Link from "next/link"
import { motion } from "framer-motion"

const About : NextPage = () => {
        return (
            <div className='frame'>
                <div>
                    <h1>
                        About.
                        <br />
                    </h1>
                    <p>
                        My name is Richard Alvarez. I was born in Chicago.
                    </p>
                    <ul>
                        <Link href="/" passHref>
                            <motion.li
                                initial={{backgroundColor: 'white', color: 'black'}}
                                whileTap={{opacity: 1, backgroundColor: 'black', color: 'white'}}
                                transition={{duration: 0.3}}
                                whileHover={{opacity: 1, backgroundColor: 'black', color: 'white'}} className="button">
                                    Back
                            </motion.li>
                        </Link>
                    </ul>
                </div>
            </div>
        )
}

export default About;