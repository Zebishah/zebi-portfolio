import React from 'react'

const Navbar = () => {
    return (
        <div className="navbar flex flex-row justify-between items-center h-16 sticky top-0 z-50 bg-[#2c3033] w-full">
            <div className="pl-24 flex flex-row items-center">
                <img
                    src="Screenshot_2023-09-25-22-26-24-146_com.android.chrome_2-removebg-preview.png"
                    className="w-[10rem] "
                    alt=""
                />
                {/* <h1 class="font-custom1 text-[30px] text-[#fffc53]">^Zohaib^"</h1> */}
            </div>
            <div className="pr-24 ">
                <ul className=" flex flex-row gap-8">
                    <li className="font-custom text-[15px] text-white">
                        <a href="#home">Home</a>
                    </li>
                    <li className="font-custom text-[15px] text-white">
                        <a href="#about">About</a>
                    </li>
                    <li className="font-custom text-[15px] text-white">
                        <a href="#skills">Skills</a>
                    </li>
                    <li className="font-custom text-[15px] text-white">
                        <a href="#projects">Projects</a>
                    </li>
                    <li className="font-custom text-[15px] text-white">
                        <a href="#Cv">Resume</a>
                    </li>
                    <li className="font-custom text-[15px] text-white">
                        <a href="#contact">Contact</a>
                    </li>
                </ul>
            </div>
        </div>

    )
}

export default Navbar