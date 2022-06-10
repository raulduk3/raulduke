import React from 'react'
import Link from 'next/link'
import style from '../../styles/Footer.module.css'
import { FaInstagram, FaYoutube, FaInfoCircle} from "react-icons/fa";

const Footer : React.FC = ({ children }) => {
    return (
        <div className={style.footer}>
            <div className={style.column}>
                <div className={style.rowList}>
                    <Link href="https://raulduke.com" passHref><FaInfoCircle></FaInfoCircle></Link>
                    <span className={style.divider}></span>
                    <Link href="https://www.instagram.com/rick_noisy/" passHref><FaInstagram></FaInstagram></Link>
                    <span className={style.divider}></span>
                    <Link href="https://www.youtube.com/channel/UCtn5rjH9-l1LeHULyc8udwQ" passHref><FaYoutube></FaYoutube></Link>
                </div>
                <div className={style.rowText}>
                    <h6 className={style.footerText}>© 2022 Digital Natives</h6>
                </div>
            </div>  
        </div>
    )
};

export default Footer