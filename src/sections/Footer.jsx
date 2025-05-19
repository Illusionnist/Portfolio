import React from 'react'
import {socialImgs} from "../constants/index.js";

const Footer = () => {
    return (
        <footer className={'footer'}>
            <div className="footer-container">
                <div className="flex flex-col justify-center items-center md:items-start">
                    <a href="/">Blog</a>
                </div>
                <div className="socials">
                    {socialImgs.map((img) => (
                        <a href={img.url} className={'icon'} target={"_blank"} key={img.url}>
                            <img src={img.imgPath} a/>
                        </a>
                    ))}
                </div>
                <div className={'flex flex-col justify-center'}>
                    <p className="text-center md:text-end">
                         ©{new Date().getFullYear()} Prashast Gupta. All rights reserved
                    </p>
                </div>
            </div>
        </footer>
    )
}
export default Footer
