import React, { useEffect, useRef } from 'react'
import profile from '../images/profile-pic (4)_preview_rev_1 (1).png'
import ScrollReveal from 'scrollreveal'
import { Element, Link } from 'react-scroll'
const About = () => {
    const content = useRef();
    const image = useRef();
    const sr = ScrollReveal({
        origin: 'left',
        distance: '100px',
        duration: 2000,
        delay: 10,
        reset: true

    });
    const sr2 = ScrollReveal({
        origin: 'top',
        distance: '100px',
        duration: 2000,
        delay: 10,
        reset: true
    });
    useEffect(() => {

        sr.reveal(content.current);
        sr2.reveal(image.current);
    }, []);
    return (
        <Element name="about" className="about">
            <section className=" bg-[#3a3f44] w-full flex flex-col pt-11 justify-center items-center" id="about">

                <div className="flex smd:flex-row justify-start items-center mt-[2.7rem] sssm:flex-col ">
                    <div ref={image} className="image smd:w-[40%] flex ssm:ml-10 ssm:w-[50%] sssm:ml-2">
                        <img
                            src={profile}
                            className="w-full h-full"
                            alt=""
                        />
                    </div>
                    <div ref={content} className="text smd:ml-0 smd:w-[68%] flex flex-col items-start justify-center gap-y-4 mb-4 sssm:w-[90%] sssm:ml-4">
                        <div className="bg-[#2c3033] flex flex-col shadow-sm shadow-black p-4 gap-y-4 smd:w-[95%] sssm:w-[96%] ">
                            <div className="flex flex-col justify-center items-center">
                                <h2 className="font-custom text-[#39fd85] font-normal text-[27px]">
                                    About Me
                                </h2>
                                <p className=" text-white font-custom md:text-sm smd:text-xs">
                                    I am Syed Zohaib Haider, a dedicated final-year bachelor's student.
                                    I have successfully completed comprehensive training in MERN stack
                                    and front-end development, equipping myself with the latest industry
                                    skills. I am currently engaged in valuable internships to further
                                    hone my expertise and practical knowledge, with the ultimate goal of
                                    securing a challenging and rewarding position as a front-end and
                                    MERN stack developer. My portfolio boasts a diverse array of
                                    projects, and I remain committed to continuous learning,
                                    particularly in the advanced realms of backend development, while
                                    consistently enhancing my problem-solving abilities.
                                </p>
                            </div>
                            <div className="links flex md:flex-row md:gap-x-2 justify-center items-center xl:w-[100%] sssm:w-[100%] sssm:flex-col sssm:gap-y-3">
                                <div className='flex flex-row ssmd:gap-x-3 sssm:gap-x-2 justify-center items-center'>


                                    <Link to="https://instagram.com/eren_yeager935?igshid=NTc4MTIwNjQ2YQ==">
                                        <i className="fab fa-instagram text-[#39fd85] xl:text-2xl ssm:text-lg sssm:text-sm hover:text-white transition-all duration-300 ease-in-out" />
                                    </Link>
                                    <Link to='https://instagram.com/eren_yeager935?igshid=NTc4MTIwNjQ2YQ==' className="text-white text-decoration-none font-custom xl:text-sm sssm:text-xs hover:text-green-400 transition-all duration-300 ease-in-out">
                                        {" "}
                                        eren_yeager935
                                    </Link>
                                    <Link to="https://www.facebook.com/profile.php?id=100076453797776&mibextid=ZbWKwL">
                                        <i className="fab fa-facebook text-[#39fd85] xl:text-2xl ssm:text-lg sssm:text-sm hover:text-white transition-all duration-300 ease-in-out" />
                                    </Link>

                                    <Link to='https://www.facebook.com/profile.php?id=100076453797776&mibextid=ZbWKwL' className="text-white font-custom xl:text-sm sssm:text-xs hover:text-green-400 transition-all duration-300 ease-in-out">sarimshah</Link>
                                    <Link to="https://github.com/zebishah">
                                        <i className="fab fa-github text-[#39fd85] xl:text-2xl ssm:text-lg sssm:text-sm hover:text-white transition-all duration-300 ease-in-out" />
                                    </Link>
                                    <Link to='https://github.com/zebishah' className="text-white font-custom xl:text-sm sssm:text-xs hover:text-green-400 transition-all duration-300 ease-in-out">zebishah</Link>
                                </div>
                                <div className='flex flex-row gap-x-3 justify-center items-center'>
                                    <Link to="https://www.linkedin.com/in/syed-zohaib-haider-390530228/">
                                        <i className="fab fa-linkedin text-[#39fd85] xl:text-2xl ssm:text-lg sssm:text-sm hover:text-white transition-all duration-300 ease-in-out" />
                                    </Link>
                                    <Link to='https://www.linkedin.com/in/syed-zohaib-haider-390530228/' className="text-white font-custom xl:text-sm sssm:text-xs hover:text-green-400 transition-all duration-300 ease-in-out">Syed Zohaib haider</Link>
                                    <Link to="https://whatsapp.com/dl/">
                                        <i className="fab fa-whatsapp text-[#39fd85] xl:text-2xl ssm:text-lg sssm:text-sm hover:text-white transition-all duration-300 ease-in-out" />
                                    </Link>
                                    <Link to='https://whatsapp.com/dl/' className="text-white font-custom xl:text-sm sssm:text-xs hover:text-green-400 transition-all duration-300 ease-in-out">+92-310-5904269</Link>
                                </div>
                            </div>
                        </div>
                        <div className="flex ssmd:flex-row ssmd:gap-x-4 w-[100%] sssm:flex-col sssm:gap-y-2 ">
                            {/* education section */}
                            <div className="flex flex-col ssmd:w-[49%] sssm:w-[95%] gap-y-3 justify-start items-start bg-[#2c3033] text-white shadow-sm shadow-black p-4">
                                <h1 className="text-[#39fd85] font-custom text-xl">Education</h1>
                                <div className="flex flex-col gap-y-1 ">
                                    <p className="text-[#39fd85] font-custom text-sm">2021-2023</p>
                                    <div className="flex flex-row justify-between gap-x-12">
                                        <h3 className="font-custom md:text-sm sssm:text-[12px]">
                                            Mastering Web Development Skills
                                        </h3>
                                        <p className=" font-custom md:text-sm sssm:text-[12px]">83%</p>
                                    </div>
                                </div>
                                <div className="flex flex-col gap-y-1 ">
                                    <p className="text-[#39fd85] font-custom text-sm">
                                        2020-2024(still going)
                                    </p>
                                    <div className="flex flex-row justify-between gap-x-12">
                                        <h3 className="font-custom md:text-sm sssm:text-[12px]">
                                            Bachelors in Software Engineering
                                        </h3>
                                        <p className=" font-custom md:text-sm sssm:text-[12px]">3.60(CGPA)</p>
                                    </div>
                                </div>
                                <div className="flex flex-col gap-y-1 ">
                                    <p className="text-[#39fd85] font-custom text-sm">2018-2020</p>
                                    <div className="flex flex-row justify-between gap-x-12 ">
                                        <h3 className="font-custom md:text-sm sssm:text-[12px]">
                                            Intermediate in Pre-Engineering
                                        </h3>
                                        <p className=" font-custom md:text-sm sssm:text-[12px]">83%</p>
                                    </div>
                                </div>
                            </div>
                            {/* experience section */}
                            <div className="flex flex-col smd:w-[42%] ssmd:w-[49%] sssm:w-[95%] gap-y-3 justify-start bg-[#2c3033] text-white shadow-sm shadow-black p-4">
                                <h1 className="text-[#39fd85] font-custom text-xl">Experience</h1>
                                <div className="flex flex-col gap-y-1 ">
                                    <p className="text-[#39fd85] font-custom text-sm">2022-2023</p>
                                    <div className="flex flex-row justify-between">
                                        <h3 className="font-custom md:text-sm sssm:text-[12px]">
                                            MERN stack and front-end internships(still doing)
                                        </h3>
                                    </div>
                                </div>
                                <div className="flex flex-col gap-y-1 ">
                                    <p className="text-[#39fd85] font-custom text-sm">2021-2022</p>
                                    <div className="flex flex-row justify-between">
                                        <h3 className="font-custom md:text-sm sssm:text-[12px]">
                                            completed numerous frontend projects(9-10)
                                        </h3>
                                    </div>
                                </div>
                                <div className="flex flex-col gap-y-1 ">
                                    <p className="text-[#39fd85] font-custom text-sm">2020-2021</p>
                                    <div className="flex flex-row justify-between">
                                        <h3 className="font-custom md:text-sm sssm:text-[12px]">
                                            Did console development and projects in c++,java
                                        </h3>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </Element>
    )
}

export default About