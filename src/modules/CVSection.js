import React from 'react'

const CVSection = () => {
    return (
        <div
            className="bg-[#3a3f44] h-[39rem] w-full flex flex-col justify-center items-center"
            id="Cv"
        >
            <h1 className="text-[#39fd85] font-custom font-bold text-3xl mt-10">
                CV-Section
            </h1>
            <div className="flex flex-col justify-center items-center w-[80%] bg-[#1f2022] relative top-4 rounded-lg shadow-sm shadow-black p-2">
                <div className="flex flex-col justify-center items-center w-[70%]">
                    <img
                        src="profile-pic (4)_preview_rev_1 (1).png"
                        alt="image"
                        className="h-[12rem] w-[12rem] rounded-full object-cover"
                    />
                </div>
                <div className="flex flex-col gap-y-1 justify-center items-center w-[70%]">
                    <h6 className="font-custom text-green-400 text-2xl">
                        Syed Zohaib Haider
                    </h6>
                    <h4 className="font-custom text-green-400 text-lg">
                        "New Mern-stack and front-end developer"
                    </h4>
                    <p className="font-custom text-white text-lg">
                        "I am a budding MERN stack and front-end developer, specializing in web
                        development using MongoDB, Express, React, and Node.js. My focus is on
                        creating dynamic and interactive web applications, and I'm passionate
                        about crafting user-friendly interfaces and robust back-end systems."
                    </p>
                    <a
                        href="White Black Elegant Modern Corporate CV Resume (final).pdf"
                        download="Zohaib Cv"
                    >
                        <button className="bg-green-500 font-custom  text-black p-2 rounded-md hover:bg-white hover:text-green-600 transition-all duration-500 ease-in-out">
                            Download CV
                        </button>
                    </a>
                </div>
            </div>
        </div>

    )
}

export default CVSection