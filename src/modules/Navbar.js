import React, { useState } from 'react'
import logo from '../images/Screenshot_2023-09-25-22-26-24-146_com.android.chrome_2-removebg-preview.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons'

import VNavbar from './VNavbar';
import { Link } from 'react-router-dom';
const Navbar = () => {
    let [showMenu, setShowMenu] = useState(false)
    let [showBtn1, setShowBtn1] = useState(true)
    let [showCount, setShowCount] = useState(0)
    let openMenu = () => {

        if (showCount === 0) {
            console.log("c==1");
            setShowMenu(true)
            setShowCount(2);
            setShowBtn1(false)
        }
        if (showCount === 2) {
            console.log("c==2");
            setShowMenu(false)
            setShowCount(0);
            setShowBtn1(true)
        }


    }
    return (
        <>

            <div className="navbar flex flex-row justify-between items-center h-16 sticky top-0 z-50 bg-[#2c3033] w-full overflow-x-none">
                <div className="md:pl-24 flex flex-row items-center ssm:pl-5">
                    <img
                        src={logo}
                        className="smd:w-[10rem] sssm:w-[8rem]"
                        alt="logo"
                    />
                    {/* <h1 class="font-custom1 text-[30px] text-[#fffc53]">^Zohaib^"</h1> */}
                </div>
                <div className=" ssm:block md:pr-24 smd:pr-14 ssm:pr-8 sssm:pr-3 sssm:hidden ">
                    <ul className=" flex flex-row md:gap-x-8 smd:gap-x-4 sssm:gap-x-2 ">

                        <li className="font-custom smd:text-[15px] sssm:text-[12px] text-white">
                            <a href="#home">Home</a>
                        </li>
                        <li className="font-custom smd:text-[15px] sssm:text-[12px] text-white">
                            <a href="#about">About</a>
                        </li>
                        <li className="font-custom smd:text-[15px] sssm:text-[12px] text-white">
                            <a href="#skills">Skills</a>
                        </li>
                        <li className="font-custom smd:text-[15px] sssm:text-[12px] text-white">
                            <a href="#projects">Projects</a>
                        </li>
                        <li className="font-custom smd:text-[15px] sssm:text-[12px] text-white">
                            <a href="#Cv">Resume</a>
                        </li>
                        <li className="font-custom smd:text-[15px] sssm:text-[12px] text-white">
                            <a href="#contact">Contact</a>
                        </li>
                    </ul>
                </div>
                <FontAwesomeIcon icon={showBtn1 ? faBars : faXmark} className=" text-green-400 ssm:hidden sssm:visible sssm:mr-8" onClick={openMenu} />

            </div>

            <VNavbar show={showMenu} />
        </>
    )
}

export default Navbar