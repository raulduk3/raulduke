import type { NextPage } from "next"
import Link from "next/link"
import { motion } from "framer-motion"
import style from '../styles/About.module.css'

const About : NextPage = () => {
        return (
            <div className='frame'>
                <>
                    <h1>
                        About.
                        <br />
                    </h1>
                    <p className={style.body}>
                        My name is Richard Alvarez. I was born in Chicago.
                        <span className={style.break}></span>
                        I am multimedia artist studying film at Kenyon College in Gambier, Ohio.
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
                </> 
            </div>
        )
}

export default About;