import type { NextPage } from "next"
import Link from "next/link"
import { motion } from "framer-motion"
import style from '../styles/About.module.css'

const About : NextPage = () => {
        return (
            <div className='frame-v'>
                <div className={style.row}>
                    <h1 className={style.header}>
                        About.
                        <br />
                    </h1>
                    <p className={style.body}>
                        RAÜL DÜKE is the artist project of Richard Alvarez, a programmer and video artist from Chicago.
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