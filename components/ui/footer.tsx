import React from 'react'
import Link from 'next/link'
import style from '../../styles/Footer.module.css'
import { FaInstagram, FaYoutube, FaInfoCircle} from "react-icons/fa";

const Footer : React.FC = ({ children }) => {
    return (
        <div className={style.footer}>
            <div className={style.column}>
                {/* <div className={style.rowList}>
                    <Link href="https://raulduke.com" passHref><FaInfoCircle></FaInfoCircle></Link>
                    <Link href="https://www.instagram.com/rick_noisy/" passHref><FaInstagram></FaInstagram></Link>
                    <Link href="https://www.youtube.com/channel/UCtn5rjH9-l1LeHULyc8udwQ" passHref><FaYoutube></FaYoutube></Link>
                </div> */}
                <div className={style.rowText}>
                    <h5 className={style.footerText}>© 2023 Richard Álvarez   |        <a href="mailto:alvarez1@kenyon.edu">alvarez1@kenyon.edu</a></h5>
                </div>
            </div>  
        </div>
    )
};

export default Footer