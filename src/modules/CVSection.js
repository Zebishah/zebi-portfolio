import React, { useRef, useEffect } from 'react'
import profile from '../images/profile-pic (4)_preview_rev_1 (1).png'
import Cv from '../images/White Black Elegant Modern Corporate CV Resume (final).pdf'
import ScrollReveal from 'scrollreveal';
import { Link, Element } from 'react-scroll';
const CVSection = () => {
    const content = useRef();

    const sr = ScrollReveal({
        origin: 'top',
        distance: '100px',
        duration: 2000,
        delay: 10,

    });

    useEffect(() => {

        sr.reveal(content.current);
    }, []);
    return (
        <Element name="Cv" className="Cv">
            <section ref={content} className="bg-[#3a3f44] w-full flex flex-col mt-10 justify-center items-center gap-y-8" id="Cv">
                <h1 className="text-[#39fd85] font-custom font-bold text-3xl mt-10">
                    CV-Section
                </h1>
                <div className="flex flex-col justify-center items-center smd:w-[70%] sssm:w-[90%] bg-[#2c3033] rounded-lg shadow-sm shadow-black p-4">
                    <div className="flex flex-col justify-center items-center w-70">
                        <img
                            src={profile}
                            alt="profile"
                            className="h-48 w-48 rounded-full object-cover"
                        />
                    </div>
                    <div className="flex flex-col gap-y-1 justify-center items-center">
                        <h6 className="font-custom text-[#39fd85] ssm:text-2xl sssm:text-lg">
                            Syed Zohaib Haider
                        </h6>
                        <h4 className="font-custom text-[#39fd85] ssm:text-lg sssm:text-sm">
                            "New Mern-stack and front-end developer"
                        </h4>
                        <p className="font-custom text-white ssm:text-lg w-full text-center sssm:text-sm">
                            "I am a budding MERN stack and front-end developer, specializing in web
                            development using MongoDB, Express, React, and Node.js. My focus is on
                            creating dynamic and interactive web applications, and I'm passionate
                            about crafting user-friendly interfaces and robust back-end systems."
                        </p>
                        <a href={Cv} download="Zohaib Cv">
                            <button className="bg-[#39fd85] font-custom text-black p-2 rounded-md hover:bg-white hover:text-[#2ebb64] transition-all duration-500 ease-in-out">
                                Download CV
                            </button>
                        </a>
                    </div>
                </div>
            </section>
        </Element>


    )
}

export default CVSection