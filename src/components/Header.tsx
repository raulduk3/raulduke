'use client';

import Link from 'next/link';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';

const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <header className="w-full z-10 transition duration-300 flex items-center ease-in-out p-3  bg-black">
            <Link href="/" aria-label="Richard Alvarez">
                <h1 className='text-4xl uppercase tracking-widest whitespace-nowrap'>Rick Alvarez</h1>
            </Link>
            &nbsp;&nbsp;
            <Link className="text-orange hover:underline" href="/Richard_Alvarez_Resume.pdf">
                <h3 className='text-sm uppercase'>CV</h3>
            </Link>
            &nbsp;&nbsp;
            {/* <Link className="text-orange hover:underline" href="/contact">
                <h3 className='text-sm uppercase'>Contact</h3>
            </Link> */}
        </header>
    );
};

export default Header;