import React from 'react'

const VNavbar = (props) => {
    let { show } = props;
    return (
        <div className={`pr-4 bg-[#2b2b2b] sticky top-12 z-50 p-4 w-full shadow-sm shadow-black ssm:hidden transition-all duration-500 ease-in-out  ${show ? '-translate-x-0 block' : 'sssm:translate-x-full hidden'}`}>
            <ul className=" flex flex-col gap-y-3 items-center justify-center w-full">
                <li className="font-custom text-[15px] text-white pb-2 border-b-2 border-b-green-400 w-full text-center hover:text-green-400 transition-all duration-500 ease-in-out">
                    <a href="#home">Home</a>
                </li>
                <li className="font-custom text-[15px] text-white pb-2 border-b-2 border-b-green-400 w-full text-center hover:text-green-400 transition-all duration-500 ease-in-out">
                    <a href="#about">About</a>
                </li>
                <li className="font-custom text-[15px] text-white pb-2 border-b-2 border-b-green-400 w-full text-center hover:text-green-400 transition-all duration-500 ease-in-out">
                    <a href="#skills">Skills</a>
                </li>
                <li className="font-custom text-[15px] text-white pb-2 border-b-2 border-b-green-400 w-full text-center hover:text-green-400 transition-all duration-500 ease-in-out">
                    <a href="#projects">Projects</a>
                </li>
                <li className="font-custom text-[15px] text-white pb-2 border-b-2 border-b-green-400 w-full text-center hover:text-green-400 transition-all duration-500 ease-in-out">
                    <a href="#Cv">Resume</a>
                </li>
                <li className="font-custom text-[15px] text-white pb-2 border-b-2 border-b-green-400 w-full text-center hover:text-green-400 transition-all duration-500 ease-in-out">
                    <a href="#contact">Contact</a>
                </li>
            </ul>
        </div>
    )
}

export default VNavbar