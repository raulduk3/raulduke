import type { NextPage } from "next"
import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { FaRegHandPointer } from "react-icons/fa"

import style  from '../styles/Index.module.css'

const Index: NextPage = () => {
  return (
    <>
    <div className={style.image}>
      <Image
        src="/images/cup-coffee-stain-8.png"
        alt="Coffee stain"
        className={style.image}
        width={323}
        height={323}
      ></Image>
    </div>
    <div className="frame">
      <div>
        <Link href="https://link.raulduke.com" passHref>
              <motion.h1
                initial={{x: -1000, opacity: 0}}
                animate={{x: 0, opacity: 1 }}
                transition={{duration: 1.2}}
                className='raulDukeLink'
              >
                  RA
                  <motion.span transition={{duration: 4.2}} initial={{opacity: 0}} animate={{opacity: 1}}>Ü</motion.span>
                  L D
                  <motion.span transition={{duration: 4.2}} initial={{opacity: 0}} animate={{opacity: 1}}>Ü</motion.span>
                  KE
                </motion.h1>
        </Link>
      </div>
      {/* <div className={style.imageContainer}>
        <ul>
            <li>
              <Image
                    src="/images/cover_II.png"
                    alt="Still frame from latest video."
                    className={style.image}
                    width={1920}
                    height={1080}
                    layout="responsive"
                  ></Image>
            </li>
            <li>
              <Image
                    src="/images/cover_I.png"
                    alt="Still frame from latest video."
                    className={style.image}
                    width={768}
                    height={576}
                    layout="responsive"
                  ></Image>
            </li>
            <li>
              <Image
                    src="/images/33 (383).jpg"
                    alt="Still frame from latest video."
                    className={style.image}
                    width={1920}
                    height={816}
                    layout="responsive"
                  ></Image>
            </li>
        </ul>
      </div> */}
      <ul className={style.buttons + " under"}>
          <Link href="/posts" passHref>
            <motion.li
              className='button'
              initial={{backgroundColor: 'white', color: 'black'}}
              transition={{duration: 0.3}}
              whileTap={{opacity: 1, backgroundColor: 'black', color: 'white'}}
              whileHover={{opacity: 1, backgroundColor: 'black', color: 'white'}}>
                Digital Hell
            </motion.li>
          </Link>
          <Link href="https://link.raulduke.com/" passHref>
              <motion.li
                className='button'
                initial={{backgroundColor: 'white', color: 'black'}}
                transition={{duration: 0.3}}
                whileTap={{opacity: 1, backgroundColor: 'black', color: 'white'}}
                whileHover={{opacity: 1, backgroundColor: 'black', color: 'white'}}>VFX & Video</motion.li>
            </Link>
          {/* <Link href="/" passHref>
            <motion.li
              className='button'
              initial={{backgroundColor: 'white', color: 'black'}}
              whileTap={{opacity: 1, backgroundColor: 'black', color: 'black'}}
              transition={{duration: 0.3}}
              whileHover={{opacity: 1, backgroundColor: 'black', color: 'black'}}>Web</motion.li>
          </Link> */}
          <Link href="/about" passHref>
            <motion.li
              className='button'
              initial={{backgroundColor: 'white', color: 'black'}}
              whileTap={{opacity: 1, backgroundColor: 'black', color: 'white'}}
              transition={{duration: 0.3}}
              whileHover={{opacity: 1, backgroundColor: 'black', color: 'white'}}>About</motion.li>
          </Link>
      </ul>
      <ul>
        Quick Links
        <li className="under"><a href="https://www.youtube.com/watch?v=pqWJXORX1r8&t=589s" target="_blank" rel="noreferrer">Horn Student Band Showcase 2021</a></li>
        <li className="under"><a href="https://www.youtube.com/watch?v=z_O_n9QNYKo" target="_blank" rel="noreferrer">Poltergeist - 5ouley (Prod. Kyle McLaughlin) (Official Music Video)</a></li>
      </ul>
    </div>
    <FaRegHandPointer className="emoji"></FaRegHandPointer>
    </>
  )
}

export default Index
