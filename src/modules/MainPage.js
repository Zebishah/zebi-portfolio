import React, { useRef, useEffect } from 'react'
import profile from '../images/profile-pic (4)_preview_rev_1 (1).png'
import ScrollReveal from 'scrollreveal';
import { Link, Element } from 'react-scroll';
const MainPage = () => {
    const content = useRef();
    const image = useRef();
    const sr = ScrollReveal({
        origin: 'left',
        distance: '100px',
        duration: 2000,
        delay: 10,

    });
    const sr2 = ScrollReveal({
        origin: 'top',
        distance: '100px',
        duration: 2000,
        delay: 10,

    });
    useEffect(() => {

        sr.reveal(content.current);
        sr2.reveal(image.current);
    }, []);
    return (
        <Element name="mainpage" className="mainpage">
            <section id='home' className="bg-[#2c3033] w-full flex flex-col justify-center items-center overflow-x-hidden scroll-x-none">

                <div
                    className="flex ssm:w-full ssm:flex-row justify-between smd:w-[full] sssm:flex-col"
                    id="home"
                >

                    <div ref={content} className=" text xl:ml-[6rem] xl:w-[39%] flex flex-col ssm:order-1 sssm:order-2 items-start justify-center md:w-[50%] smd:ml-[2rem] sssm:ml-[1rem] ssm:w-[50%] sssm:w-[80%]">
                        <div className="3lines w-[100%] flex flex-col gap-y-0 pl-2 ">
                            <h2 className="font-sans text-white font-semibold xl:text-[27px] sssm:[27px] ">
                                <span className="text-[#39fd85]">Greetings</span> , it's Me
                            </h2>
                            <h1 className="font-sans text-white font-extrabold md:text-[40px] smd:text-[28px] sssm:text-[22px] ">
                                Syed Zohaib Haider
                            </h1>
                            <h2 className="font-sans text-white font-semibold smd:text-[24px] sssm:text-[18px]">
                                And i'm a{" "}
                                <span className="font-extrabold font-custom md:text-[30px] text-[#39fd85] smd:text-[24px] sssm:text-[19px]">
                                    Web Developer
                                </span>
                            </h2>
                        </div>
                        <div className="3liness flex flex-col text-white font-custom ssm:gap-y-5 sssm:gap-y-3 p-2">
                            <p className="text-sm">
                                I am a burgeoning MERN stack developer with a passion for crafting
                                exceptional, user-centric websites. My focus lies in creating web
                                solutions that seamlessly blend aesthetics, responsiveness, and
                                usability. Furthermore, I am currently in my final year of
                                undergraduate studies.
                            </p>
                            <div className="links flex flex-row gap-x-4">
                                <Link to="https://instagram.com/eren_yeager935?igshid=NTc4MTIwNjQ2YQ==">
                                    <i className="fab fa-instagram text-[#39fd85] text-2xl hover:text-white transition-all duration-300 ease-in-out" />
                                </Link>
                                <Link to="https://www.facebook.com/profile.php?id=100076453797776&mibextid=ZbWKwL">
                                    <i className="fab fa-facebook text-[#39fd85] text-2xl hover:text-white transition-all duration-300 ease-in-out" />
                                </Link>
                                <Link to="https://github.com/zebishah">
                                    <i className="fab fa-github text-[#39fd85] text-2xl hover:text-white transition-all duration-300 ease-in-out" />
                                </Link>
                                <Link to="https://www.linkedin.com/in/syed-zohaib-haider-390530228/">
                                    <i className="fab fa-linkedin text-[#39fd85] text-2xl hover:text-white transition-all duration-300 ease-in-out" />
                                </Link>
                            </div>
                            <div className="btns flex flex-row gap-x-2">
                                <a href="https://github.com/Zebishah">
                                    <button className="p-2 rounded-md bg-[#39fd85] text-black text-[15px] font-custom hover:bg-white hover:text-green-600 transition-all duration-300 ease-in-out">
                                        View Github
                                    </button>
                                </a>

                                <Link to={'/blog'}><button className="p-2 rounded-md bg-[#39fd85] text-black text-[15px] font-custom hover:bg-white hover:text-green-600 transition-all duration-300 ease-in-out" >
                                    My Blog
                                </button>
                                </Link>

                            </div>
                            {/* <button class="p-2 rounded-md bg-[#14ffa5] text-black text-[14px] font-custom">View Github</button> */}
                        </div>
                    </div>
                    <div ref={image} className=" md:mt-14 md:w-[54%] flex ssm:order-2 sssm:order-1  sssm:items-center sssm:justify-center ssm:w-[54%] smd:mr-0 sssm:w-full ">
                        <img src={profile} alt='profile' className="md:w-[80%] sssm:w-[80%] object-cover" />
                    </div>
                </div>
            </section>
        </Element>
    )
}

export default MainPage