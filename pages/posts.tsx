import type { NextPage } from "next";
import Image from "next/image";
import Link from "next/link";
import style from '../styles/Posts.module.css'
import { motion } from 'framer-motion'
import { Parallax, Background } from 'react-parallax';


const Posts : NextPage = () => {
    return (
        <>
            <div className="frame">
                <ul className={style.listAlpha}>
                    <li><h1>Digital Hell, Personal Blog</h1></li>
                    <li><span className="ital">Ricky Alvarez</span></li>
                    <Link href="/" passHref><motion.li
                        initial={{backgroundColor: 'white', color: 'black'}}
                        whileTap={{opacity: 1, backgroundColor: 'black', color: 'white'}}
                        transition={{duration: 0.3}}
                        whileHover={{opacity: 1, backgroundColor: 'black', color: 'white'}} className='button'>Back</motion.li></Link>
                </ul>
            </div >
        </>
    );
}

export default Posts;