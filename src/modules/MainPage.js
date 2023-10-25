import React from 'react'

const MainPage = () => {
    return (


        <div className="bg-[#2c3033] w-full h-[45rem] flex flex-col">

            <div
                className="flex ssm:w-full flex-row justify-between pt-14 md:w-[full]"
                id="home"
            >
                <div className="text xl:ml-[6rem] xl:w-[39%] flex flex-col items-start justify-center md:w-[50%] smd:ml-[2rem] smd:w-[50%] border-2 border-red-500 ">
                    <div className="3lines w-[100%] flex flex-col gap-y-0 pl-2 ">
                        <h2 className="font-sans text-white font-semibold xl:text-[27px] md:[27px] ">
                            <span className="text-[#39fd85]">Greetings</span> , it's Me
                        </h2>
                        <h1 className="font-sans text-white font-extrabold xl:text-[40px] md:text-[28px] ">
                            Syed Zohaib Haider
                        </h1>
                        <h2 className="font-sans text-white font-semibold text-[27px]">
                            And i'm a{" "}
                            <span className="font-extrabold xl:text-[30px] text-[#39fd85] md:text-[24px]">
                                Web Developer
                            </span>
                        </h2>
                    </div>
                    <div className="3liness flex flex-col text-white font-custom gap-y-5 p-2">
                        <p className="text-sm">
                            I am a burgeoning MERN stack developer with a passion for crafting
                            exceptional, user-centric websites. My focus lies in creating web
                            solutions that seamlessly blend aesthetics, responsiveness, and
                            usability. Furthermore, I am currently in my final year of
                            undergraduate studies.
                        </p>
                        <div className="links flex flex-row gap-x-4">
                            <a href="https://instagram.com/eren_yeager935?igshid=NTc4MTIwNjQ2YQ==">
                                <i className="fab fa-instagram text-[#39fd85] text-2xl" />
                            </a>
                            <a href="https://www.facebook.com/profile.php?id=100076453797776&mibextid=ZbWKwL">
                                <i className="fab fa-facebook text-[#39fd85] text-2xl" />
                            </a>
                            <a href="https://github.com/zebishah">
                                <i className="fab fa-github text-[#39fd85] text-2xl" />
                            </a>
                            <a href="https://www.linkedin.com/in/syed-zohaib-haider-390530228/">
                                <i className="fab fa-linkedin text-[#39fd85] text-2xl" />
                            </a>
                        </div>
                        <div className="btns flex flex-row gap-x-2">
                            <a href="https://github.com/Zebishah">
                                <button className="p-2 rounded-md bg-[#39fd85] text-black text-[15px] font-custom">
                                    View Github
                                </button>
                            </a>
                            <a href="blog.html">
                                <button className="p-2 rounded-md bg-[#39fd85] text-black text-[15px] font-custom">
                                    My Blog
                                </button>
                            </a>
                        </div>
                        {/* <button class="p-2 rounded-md bg-[#14ffa5] text-black text-[14px] font-custom">View Github</button> */}
                    </div>
                </div>
                <div className="image mt-[2.7rem] md:w-[54%] flex items-center justify-center smd:w-[54%]">
                    <img
                        src="profile-pic (4)_preview_rev_1 (1).png"
                        className="w-[70%] h-[]"
                        alt=""
                    />
                </div>
            </div>
        </div>

    )
}

export default MainPage