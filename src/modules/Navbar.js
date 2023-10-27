import React, { useEffect, useState, useRef } from 'react'
import logo from '../images/Screenshot_2023-09-25-22-26-24-146_com.android.chrome_2-removebg-preview.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons'
import VNavbar from './VNavbar';
import { Link } from 'react-scroll';

const Navbar = () => {

    // Get the current route location

    let [active, setActive] = useState('#home')
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

                        <Link to="mainpage"
                            spy={true}
                            smooth={true}
                            offset={-70}
                            duration={500}><li className={`${active === "#home" ? "text-green-400" : "text-white"} font-custom smd:text-[15px] sssm:text-[12px] hover:text-green-400 transition-all duration-300 ease-in-out`}>
                                <a href="#home" onClick={() => setActive('#home')}>Home</a>
                            </li>
                        </Link>
                        <Link to="about"
                            spy={true}
                            smooth={true}
                            offset={-70}
                            duration={500}><li className={`${active === "#about" ? "text-green-400" : "text-white"} font-custom smd:text-[15px] sssm:text-[12px] hover:text-green-400 transition-all duration-300 ease-in-out"`}>
                                <a href="#about" onClick={() => setActive('#about')}>About</a>
                            </li>
                        </Link>
                        <Link to="skills"
                            spy={true}
                            smooth={true}
                            offset={-70}
                            duration={500}><li className={`${active === "#skills" ? "text-green-400" : "text-white"} font-custom smd:text-[15px] sssm:text-[12px] hover:text-green-400 transition-all duration-300 ease-in-out`} >
                                <a href="#skills" onClick={() => setActive('#skills')}>Skills</a>
                            </li></Link>
                        <Link to="projects"
                            spy={true}
                            smooth={true}
                            offset={-70}
                            duration={500}><li className={`${active === "#projects" ? "text-green-400" : "text-white"} font-custom smd:text-[15px] sssm:text-[12px] hover:text-green-400 transition-all duration-300 ease-in-out`} >
                                <a href="#projects" onClick={() => setActive('#projects')}>Projects</a>
                            </li></Link>
                        <Link to="Cv"
                            spy={true}
                            smooth={true}
                            offset={-70}
                            duration={500}><li className={`${active === "#Cv" ? "text-green-400" : "text-white"} font-custom smd:text-[15px] sssm:text-[12px] hover:text-green-400 transition-all duration-300 ease-in-out`} >
                                <a href="#Cv" onClick={() => setActive('#Cv')}>Resume</a>
                            </li></Link>
                        <Link to="contact"
                            spy={true}
                            smooth={true}
                            offset={-70}
                            duration={500}><li className={`${active === "#contact" ? "text-green-400" : "text-white"} font-custom smd:text-[15px] sssm:text-[12px] hover:text-green-400 transition-all duration-300 ease-in-out`} >
                                <a href="#contact" onClick={() => setActive('#contact')}>Contact</a>
                            </li></Link >
                    </ul >
                </div >
                <FontAwesomeIcon icon={showBtn1 ? faBars : faXmark} className=" text-green-400 ssm:hidden sssm:visible sssm:mr-8" onClick={openMenu} />

            </div >

            <VNavbar show={showMenu} />
        </>
    )
}

export default Navbar