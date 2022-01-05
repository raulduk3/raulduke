import React from 'react'
import Link from 'next/link'
import style from '../../styles/Footer.module.css'
import { FaInstagram, FaYoutube, FaInfo} from "react-icons/fa";

const Footer : React.FC = ({ children }) => {
    return (
        <div className={style.footer}>
            <div className={style.row}>
                <div className={style.row}>
                    <Link href="https://www.instagram.com/rauldukevfx/" passHref><FaInstagram></FaInstagram></Link>
                    <Link href="https://www.youtube.com/channel/UCtn5rjH9-l1LeHULyc8udwQ" passHref><FaYoutube></FaYoutube></Link>
                    <Link href="https://link.raulduke.com" passHref><FaInfo></FaInfo></Link>
                </div>
            </div>
            <div className={style.row}>
                <h6>© Copyright 2021</h6>
            </div>
        </div>
    )
};

export default Footer