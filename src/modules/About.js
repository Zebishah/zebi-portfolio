import React from 'react'

const About = () => {
    return (
        <div
            className=" bg-[#3a3f44] w-full flex flex-col pt-11 justify-center items-center"
            id="about"
        >
            <div className="flex md:flex-row justify-start items-center mt-[2.7rem] smd:flex-col">
                <div className="image md:w-[30%] flex ml-10 smd:[100%]">
                    <img
                        src="../images/profile-pic (4)_preview_rev_1 (1).png"
                        className="w-full h-full"
                        alt=""
                    />
                </div>
                <div className="text md:w-[68%] -ml-7 flex flex-col items-start justify-center gap-y-4 mb-4 smd:w-[90%] ">
                    <div className="bg-[#2c3033] flex flex-col shadow-sm shadow-black p-4 gap-y-4 w-[95%] ">
                        <div className="flex flex-col">
                            <h2 className="font-custom text-[#39fd85] font-normal text-[27px]">
                                About Me
                            </h2>
                            <p className=" md:text-white font-custom text-sm smd:text-green-500">
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
                        <div className="links flex flex-row gap-x-2 justify-center items-center xl:w-[100%] md:w-[100%] ">
                            <a href="https://instagram.com/eren_yeager935?igshid=NTc4MTIwNjQ2YQ==">
                                <i className="fab fa-instagram text-[#39fd85] text-2xl" />
                            </a>
                            <a className="text-white text-decoration-none font-custom text-sm">
                                {" "}
                                eren_yeager935
                            </a>
                            <a href="https://www.facebook.com/profile.php?id=100076453797776&mibextid=ZbWKwL">
                                <i className="fab fa-facebook text-[#39fd85] text-2xl" />
                            </a>
                            <a className="text-white font-custom text-sm">sarimshah</a>
                            <a href="https://github.com/zebishah">
                                <i className="fab fa-github text-[#39fd85] text-2xl" />
                            </a>
                            <a className="text-white font-custom text-sm">zebishah</a>
                            <a href="https://www.linkedin.com/in/syed-zohaib-haider-390530228/">
                                <i className="fab fa-linkedin text-[#39fd85] text-2xl" />
                            </a>
                            <a className="text-white font-custom text-sm">Syed Zohaib haider</a>
                            <a href="#">
                                <i className="fab fa-whatsapp text-[#39fd85] text-2xl" />
                            </a>
                            <a className="text-white font-custom text-sm">+92-310-5904269</a>
                        </div>
                    </div>
                    <div className="flex flex-row gap-x-4 w-[100%] ">
                        {/* education section */}
                        <div className="flex flex-col w-[44%] gap-y-3 justify-start items-start bg-[#2c3033] text-white shadow-sm shadow-black p-4">
                            <h1 className="text-[#39fd85] font-custom text-xl">Education</h1>
                            <div className="flex flex-col gap-y-1 ">
                                <p className="text-[#39fd85] font-custom text-sm">2021-2023</p>
                                <div className="flex flex-row justify-between">
                                    <h3 className="font-custom text-sm">
                                        Mastering Web Development Skills
                                    </h3>
                                    <p className=" font-custom text-sm">83%</p>
                                </div>
                            </div>
                            <div className="flex flex-col gap-y-1 ">
                                <p className="text-[#39fd85] font-custom text-sm">
                                    2020-2024(still going)
                                </p>
                                <div className="flex flex-row justify-between">
                                    <h3 className="font-custom text-sm">
                                        Bachelors in Software Engineering
                                    </h3>
                                    <p className=" font-custom text-sm">3.60(CGPA)</p>
                                </div>
                            </div>
                            <div className="flex flex-col gap-y-1 ">
                                <p className="text-[#39fd85] font-custom text-sm">2018-2020</p>
                                <div className="flex flex-row justify-between">
                                    <h3 className="font-custom text-sm">
                                        Intermediate in Pre-Engineering
                                    </h3>
                                    <p className=" font-custom text-sm">83%</p>
                                </div>
                            </div>
                        </div>
                        {/* experience section */}
                        <div className="flex flex-col w-[49%] gap-y-3 justify-center bg-[#2c3033] text-white shadow-sm shadow-black p-4">
                            <h1 className="text-[#39fd85] font-custom text-xl">Experience</h1>
                            <div className="flex flex-col gap-y-1 ">
                                <p className="text-[#39fd85] font-custom text-sm">2022-2023</p>
                                <div className="flex flex-row justify-between">
                                    <h3 className="font-custom text-sm">
                                        MERN stack and front-end internships(still doing)
                                    </h3>
                                </div>
                            </div>
                            <div className="flex flex-col gap-y-1 ">
                                <p className="text-[#39fd85] font-custom text-sm">2021-2022</p>
                                <div className="flex flex-row justify-between">
                                    <h3 className="font-custom text-sm">
                                        completed numerous frontend projects(9-10)
                                    </h3>
                                </div>
                            </div>
                            <div className="flex flex-col gap-y-1 ">
                                <p className="text-[#39fd85] font-custom text-sm">2020-2021</p>
                                <div className="flex flex-row justify-between">
                                    <h3 className="font-custom text-sm">
                                        Did console development and projects in c++,java
                                    </h3>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default About