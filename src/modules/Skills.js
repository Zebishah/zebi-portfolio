import React, { useEffect, useRef } from 'react'
import ScrollReveal from 'scrollreveal'
import { Link, Element } from 'react-scroll';
const Skills = () => {
    const content = useRef();

    const sr = ScrollReveal({
        origin: 'top',
        distance: '100px',
        duration: 2000,
        delay: 10,
        reset: true

    });

    useEffect(() => {

        sr.reveal(content.current);

    }, []);
    return (
        <Element name="skills" className="skills">
            <section
                ref={content} className="bg-[#3a3f44] w-full flex flex-col pt-11 justify-center items-center"
                id="skills"
            >
                <div className="flex flex-col gap-y-0 justify-center items-center text-[#39fd85]">
                    <h1 className="font-custom font-bold text-3xl">Skills</h1>
                    <h3 className="font-custom text-lg">My Expertise Area</h3>
                </div>
                <div className="flex ssm:flex-row gap-x-10 w-full p-2 sssm:flex-col justify-center items-center sssm:gap-y-0 ">
                    <div className=" flex flex-col gap-y-4 ssm:justify-start ssm:items-start ssm:w-[50%] sssm:justify-center sssm:items-center sssm:w-[80%] p-4 ">
                        <div className="flex flex-col gap-y-2 bg-[#2c3033] w-full p-2 shadow-sm shadow-black">
                            <div className="flex flex-row w-full justify-between font-custom text-[#39fd85] ">
                                <p>HTML-5</p>
                                <p className="text-sm">90%</p>
                            </div>
                            <div className="border-1 border-white rounded-xl bg-slate-50 w-100% h-5 shadow-lg shadow-black">
                                <div className="rounded-xl bg-[#39fd85] h-[1.12rem] w-[90%] border-none " />
                            </div>
                        </div>
                        <div className="flex flex-col gap-y-2 bg-[#2c3033] w-full p-2 shadow-sm shadow-black">
                            <div className="flex flex-row w-full justify-between font-custom text-[#39fd85] ">
                                <p>CSS-3</p>
                                <p className="text-sm">83%</p>
                            </div>
                            <div className="border-1 border-white rounded-xl bg-slate-50 h-5 shadow-lg shadow-black">
                                <div className="border-2 rounded-xl bg-[#39fd85] h-[1.12rem] w-[83%] border-none" />
                            </div>
                        </div>
                        <div className="flex flex-col gap-y-2 bg-[#2c3033] w-full p-2 shadow-sm shadow-black">
                            <div className="flex flex-row w-full justify-between font-custom text-[#39fd85] ">
                                <p>JAVASCRIPT</p>
                                <p className="text-sm">73%</p>
                            </div>
                            <div className="border-1 border-white rounded-xl bg-slate-50 w-100% h-5 shadow-lg shadow-black">
                                <div className="border-2 rounded-xl bg-[#39fd85] h-[1.12rem] w-[73%] border-none" />
                            </div>
                        </div>
                        <div className="flex flex-col gap-y-2 bg-[#2c3033] w-full p-2 shadow-sm shadow-black">
                            <div className="flex flex-row w-full justify-between font-custom text-[#39fd85] ">
                                <p>REACT-JS</p>
                                <p className="text-sm">65%</p>
                            </div>
                            <div className="border-1 border-white rounded-xl bg-slate-50 w-100% h-5 shadow-lg shadow-black">
                                <div className="border-2 rounded-xl bg-[#39fd85] h-[1.12rem] w-[65%] border-none" />
                            </div>
                        </div>
                        <div className="flex flex-col gap-y-2 bg-[#2c3033] w-full p-2 shadow-sm shadow-black">
                            <div className="flex flex-row w-full justify-between font-custom text-[#39fd85] ">
                                <p>JAVA</p>
                                <p className="text-sm">65%</p>
                            </div>
                            <div className="border-1 border-white rounded-xl bg-slate-50 w-100% h-5 shadow-lg shadow-black">
                                <div className="border-2 rounded-xl bg-[#39fd85] h-[1.12rem] w-[65%] border-none" />
                            </div>
                        </div>
                    </div>
                    <div className=" flex flex-col gap-y-4 justify-start items-start ssm:w-[50%] sssm:w-[80%] p-4 ssm:relative ssm:bottom-0 sssm:bottom-4 sssm:relative  ">
                        <div className="flex flex-col gap-y-2 bg-[#2c3033] w-full p-2 shadow-sm shadow-black">
                            <div className="flex flex-row w-full justify-between font-custom text-[#39fd85] ">
                                <p>NODE-JS &amp; EXPRESS</p>
                                <p className="text-sm">70%</p>
                            </div>
                            <div className="border-1 border-white rounded-xl bg-slate-50 w-100% h-5 shadow-lg shadow-black">
                                <div className="border-2 rounded-xl bg-[#39fd85] h-[1.12rem] w-[70%] border-none" />
                            </div>
                        </div>
                        <div className="flex flex-col gap-y-2 bg-[#2c3033] w-full p-2 shadow-sm shadow-black">
                            <div className="flex flex-row w-full justify-between font-custom text-[#39fd85] ">
                                <p>MONGO-DB</p>
                                <p className="text-sm">85%</p>
                            </div>
                            <div className="border-1 border-white rounded-xl bg-slate-50 w-100% h-5 shadow-lg shadow-black">
                                <div className="border-2 rounded-xl bg-[#39fd85] h-[1.12rem] w-[85%] border-none" />
                            </div>
                        </div>
                        <div className="flex flex-col gap-y-2 bg-[#2c3033] w-full p-2 shadow-sm shadow-black">
                            <div className="flex flex-row w-full justify-between font-custom text-[#39fd85] ">
                                <p>TAILWIND-CSS</p>
                                <p className="text-sm">80%</p>
                            </div>
                            <div className="border-1 border-white rounded-xl bg-slate-50 w-100% h-5 shadow-lg shadow-black">
                                <div className="border-2 rounded-xl bg-[#39fd85] h-[1.12rem] w-[78%] border-none" />
                            </div>
                        </div>
                        <div className="flex flex-col gap-y-2 bg-[#2c3033] w-full p-2 shadow-sm shadow-black">
                            <div className="flex flex-row w-full justify-between font-custom text-[#39fd85] ">
                                <p>GIT &amp; GITHUB</p>
                                <p className="text-sm">78%</p>
                            </div>
                            <div className="border-1 border-white rounded-xl bg-slate-50 w-100% h-5 shadow-lg shadow-black">
                                <div className="border-2 rounded-xl bg-[#39fd85] h-[1.12rem] w-[77%] border-none" />
                            </div>
                        </div>
                        <div className="flex flex-col gap-y-2 bg-[#2c3033] w-full p-2 shadow-sm shadow-black">
                            <div className="flex flex-row w-full justify-between font-custom text-[#39fd85] ">
                                <p>C++</p>
                                <p className="text-sm">77%</p>
                            </div>
                            <div className="border-1 border-white rounded-xl bg-slate-50 w-100% h-5 shadow-lg shadow-black">
                                <div className="border-2 rounded-xl bg-[#39fd85] h-[1.12rem] w-[75%] border-none" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </Element>
    )
}

export default Skills