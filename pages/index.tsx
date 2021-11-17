import type { NextPage } from "next"
import Image from "next/image"
import Link from "next/link"

import { motion } from "framer-motion"
import { FaRegHandPointer } from "react-icons/fa"

import style  from "../styles/Index.module.css"

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
      <div className={style.name}>
        <Link href="https://link.raulduke.com" passHref>
              <motion.h1
                initial={{x: -1000, opacity: 0}}
                animate={{x: 0, opacity: 1 }}
                transition={{duration: 1.2}}
                className="raulDukeLink"
              >
                  RA
                  <motion.span transition={{duration: 4.2}} initial={{opacity: 0}} animate={{opacity: 1}}>Ü</motion.span>
                  L D
                  <motion.span transition={{duration: 4.2}} initial={{opacity: 0}} animate={{opacity: 1}}>Ü</motion.span>
                  KE
                </motion.h1>
        </Link>
      </div>
      <ul className={style.buttons + " under"}>
          <Link href="/posts" passHref>
            <motion.li
              className="button"
              initial={{backgroundColor: "white", color: "black"}}
              transition={{duration: 0.3}}
              whileTap={{opacity: 1, backgroundColor: "black", color: "white"}}
              whileHover={{opacity: 1, backgroundColor: "black", color: "white"}}>
                Digital Hell
            </motion.li>
          </Link>
          <Link href="https://link.raulduke.com/" passHref>
              <motion.li
                className="button"
                initial={{backgroundColor: "white", color: "black"}}
                transition={{duration: 0.3}}
                whileTap={{opacity: 1, backgroundColor: "black", color: "white"}}
                whileHover={{opacity: 1, backgroundColor: "black", color: "white"}}>VFX & Video</motion.li>
            </Link>
          {/* <Link href="/" passHref>
            <motion.li
              className="button"
              initial={{backgroundColor: "white", color: "black"}}
              whileTap={{opacity: 1, backgroundColor: "black", color: "black"}}
              transition={{duration: 0.3}}
              whileHover={{opacity: 1, backgroundColor: "black", color: "black"}}>Web</motion.li>
          </Link> */}
          <Link href="/about" passHref>
            <motion.li
              className="button"
              initial={{backgroundColor: "white", color: "black"}}
              whileTap={{opacity: 1, backgroundColor: "black", color: "white"}}
              transition={{duration: 0.3}}
              whileHover={{opacity: 1, backgroundColor: "black", color: "white"}}>About</motion.li>
          </Link>
      </ul>
      <ul className={style.links}>
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
