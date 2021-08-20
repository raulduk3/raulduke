import type { NextPage } from "next"
import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"
import { FaRegHandPointer } from "react-icons/fa"


const Index: NextPage = () => {
  return (
    <div className="frame">
      <Link href="https://link.raulduke.com" passHref>
          <motion.h1
            initial={{x: -1000, opacity: 0}}
            animate={{x: 0, opacity: 1 }}
            transition={{duration: 2}}
            className='raulDukeLink'
          >
            RA
            <motion.span transition={{duration: 4.2}} initial={{opacity: 0}} animate={{opacity: 1}}>Ü</motion.span>
            L D
            <motion.span transition={{duration: 4.2}} initial={{opacity: 0}} animate={{opacity: 1}}>Ü</motion.span>
            KE
            <FaRegHandPointer className='emoji'></FaRegHandPointer>
          </motion.h1>
        </Link>
      <motion.ul
        initial={{
          x: 80,
          opacity: 0
        }}
        animate={{
          x: 0,
          opacity: 1
        }}
        transition={{
          duration: 2
        }}
        className="animatedUl">
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
          <Link href="/" passHref>
              <motion.li
                className='button'
                initial={{backgroundColor: 'white', color: 'black'}}
                whileTap={{opacity: 1, backgroundColor: 'black', color: 'white'}}
                transition={{duration: 0.3}}
                whileHover={{opacity: 1, backgroundColor: 'black', color: 'white'}}>Video & VFX</motion.li>
            </Link>
          <Link href="/" passHref>
            <motion.li
              className='button'
              initial={{backgroundColor: 'white', color: 'black'}}
              whileTap={{opacity: 1, backgroundColor: 'black', color: 'white'}}
              transition={{duration: 0.3}}
              whileHover={{opacity: 1, backgroundColor: 'black', color: 'white'}}>Web Portfolio</motion.li>
          </Link>
          <Link href="/about" passHref>
            <motion.li
              className='button'
              initial={{backgroundColor: 'white', color: 'black'}}
              whileTap={{opacity: 1, backgroundColor: 'black', color: 'white'}}
              transition={{duration: 0.3}}
              whileHover={{opacity: 1, backgroundColor: 'black', color: 'white'}}>Who am I?</motion.li>
          </Link>
        </motion.ul>
    </div>
  )
}

export default Index
