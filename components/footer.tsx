import React from 'react'
import style from '../styles/Footer.module.css'

const Footer : React.FC = ({ children }) => {
    return (
        <div className={style.footer}>
            <div className={style.row}>
                <div>
                    {/* TODO: ADD FOOTER ELEMENTS */}
                </div>
            </div>
            <div className={style.row}>
                <h6>© Copyright 2021</h6>
            </div>
        </div>
    )
};

export default Footer