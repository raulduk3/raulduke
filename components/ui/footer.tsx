import React from 'react'
import Link from 'next/link'
import style from '../../styles/Footer.module.css'
import { FaInstagram, FaYoutube, FaInfo} from "react-icons/fa";

const Footer : React.FC = ({ children }) => {
    return (
        <div className={style.footer}>
            <div className={style.rowText}>
                <h6 className={style.footerText}>© Copyright 2022</h6>
            </div>
            {/* <div className={style.rowList}>
                <Link href="https://link.raulduke.com" passHref><FaInfo></FaInfo></Link>
                <Link href="https://www.instagram.com/rauldukevfx/" passHref><FaInstagram></FaInstagram></Link>
                <Link href="https://www.youtube.com/channel/UCtn5rjH9-l1LeHULyc8udwQ" passHref><FaYoutube></FaYoutube></Link>
            </div> */}
        </div>
    )
};

export default Footer