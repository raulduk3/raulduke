import type { NextPage } from "next";
import Image from "next/image";
import Link from "next/link";
import style from '../styles/Posts.module.css'
import { motion } from 'framer-motion'
import { Parallax, Background } from 'react-parallax';


const Posts : NextPage = () => {
    return (
        <>
            <div className='frame'>
                <ul className={style.listAlpha}>
                    <li><h1>Digital Hell, Personal Blog</h1></li>
                    <li>Scroll down to see more</li>
                    <li ><h1 style={{fontSize: 9}}><span className='italic'>Demo site built by Raul Duke</span></h1></li>
                    <Link href="/" passHref><motion.li 
                        initial={{backgroundColor: 'white', color: 'black'}}
                        whileTap={{opacity: 1, backgroundColor: 'black', color: 'white'}}
                        transition={{duration: 0.3}}
                        whileHover={{opacity: 1, backgroundColor: 'black', color: 'white'}}className='button'>Back</motion.li></Link>
                </ul>
            </div >
            <motion.div
                className={'frame ' + style.customImageContainer}
                transition={{duration: 2.85}}
                animate={{opacity: 1}}
            >
                <Parallax strength={220} blur={300} className='frame'>
                    <Background className="frame">
                        <Image
                            src='https://assets.awwwards.com/awards/images/2015/04/pattern.jpg'
                            alt="Net Art"
                            layout="fill"
                            className={style.customImage}
                        />
                    </Background>
                    <div className="frame">
                        <h1 className={style.textHighlight}>
                            Yes.
                        </h1>
                    </div>
                </Parallax>
            </motion.div>
        </>
    );
}

export default Posts;