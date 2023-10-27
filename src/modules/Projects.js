import React, { useRef, useEffect } from 'react'
import weather from '../images/weather.png'
import todo from '../images/todo.png'
import travelo from '../images/travelo.png'
import notia from '../images/notia.png'
import form from '../images/regform.png'
import calculator from '../images/calculator.png'
import ScrollReveal from 'scrollreveal';
import { Link, Element } from 'react-scroll';
const Projects = () => {
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
        <Element name="projects" className="projects">
            <section ref={content}
                className="bg-[#3a3f44] w-full pt-14 flex flex-col gap-y-4 justify-center items-center "
                id="projects"
            >
                <h1 className="text-[#39fd85] font-custom font-bold text-3xl">Featured Projects</h1>
                <div className="flex flex-row gap-x-4 w-[95%] flex-wrap justify-center items-center mt-8 gap-y-4">
                    <div className="flex flex-col gap-y-1 smd:w-[30%] ssm:w-[40%] sssm:w-[80%] bg-[#2c3033] xl:h-[22rem] md:h-[20rem] smd:h-[18.5rem] ssm:h-[20rem] sssm:h-[23rem] shadow-sm shadow-black">
                        <img src={weather} alt="project" className="w-full object-cover " />
                        <div className="flex flex-col gap-y-3 p-4">
                            <h1 className="text-[#39fd85] font-custom xl:text-xl md:text-lg ssm:text-sm">Weather Website</h1>
                            <h5 className="text-white font-custom md:text-sm ssm:text-[13px]">
                                A Weather website made By using html css javascript and weather api{" "}
                            </h5>
                            <div className="flex flex-row gap-x-2">
                                <a href="https://github.com/Zebishah/weatherappp.git">
                                    {" "}
                                    <button className="flex justify-center text-sm font-custom items-center md:p-2 sssm:p-[5px] bg-[#39fd85] cursor-pointer text-black rounded-md hover:bg-white hover:text-green-700 transition-all duration-500 ease-in-out">
                                        View Code
                                    </button>
                                </a>
                                <a href="https://weatherapp-by-zebi.netlify.app">
                                    <button className="flex justify-center text-sm font-custom items-center md:p-2 sssm:p-[5px] bg-[#39fd85] cursor-pointer text-black rounded-md hover:bg-white hover:text-green-700 transition-all duration-500 ease-in-out">
                                        View Site
                                    </button>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col gap-y-1 smd:w-[30%] ssm:w-[40%] sssm:w-[80%] bg-[#2c3033] xl:h-[22rem] md:h-[20rem] smd:h-[18.5rem] ssm:h-[20rem] sssm:h-[23rem] shadow-sm shadow-black">
                        <img src={todo} alt="project" className="w-full object-cover" />
                        <div className="flex flex-col gap-y-3 p-4">
                            <h1 className="text-[#39fd85] font-custom xl:text-xl md:text-lg ssm:text-sm">
                                Todo-App(Tasks-App)
                            </h1>
                            <h5 className="text-white font-custom md:text-sm ssm:text-[13px]">
                                A Todo website made By using html css javascript and Local Storage{" "}
                            </h5>
                            <div className="flex flex-row gap-x-2">
                                <a href="https://github.com/Zebishah/todolist-app.git">
                                    <button className="flex justify-center items-center text-sm md:p-2 sssm:p-[5px] bg-[#39fd85] text-black cursor-pointer rounded-md hover:bg-white hover:text-green-700 transition-all duration-500 ease-in-out">
                                        View Code
                                    </button>
                                </a>
                                <a href="https://todolist-by-zebi.netlify.app">
                                    <button className="flex justify-center items-center text-sm md:p-2 sssm:p-[5px] bg-[#39fd85] text-black cursor-pointer rounded-md hover:bg-white hover:text-green-700 transition-all duration-500 ease-in-out">
                                        View Site
                                    </button>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col gap-y-1 smd:w-[30%] ssm:w-[40%] sssm:w-[80%] bg-[#2c3033] xl:h-[22rem] md:h-[20rem] smd:h-[18.5rem] ssm:h-[20rem] sssm:h-[23rem] shadow-sm shadow-black">
                        <img src={travelo} alt="project" className="w-full object-cover" />
                        <div className="flex flex-col gap-y-3 p-4">
                            <h1 className="text-[#39fd85] font-custom xl:text-xl md:text-lg ssm:text-sm">
                                Travelo(tour website)
                            </h1>
                            <h5 className="text-white font-custom md:text-sm ssm:text-[13px]">
                                A tour&amp;travel website made By using html css javascript and with
                                validations.{" "}
                            </h5>
                            <div className="flex flex-row gap-x-2">
                                <a href="https://github.com/Zebishah/travelo-tourandtravel-app.git">
                                    <button className="flex justify-center items-center text-sm md:p-2 sssm:p-[5px] bg-[#39fd85] text-black cursor-pointer rounded-md hover:bg-white hover:text-green-700 transition-all duration-500 ease-in-out">
                                        View Code
                                    </button>
                                </a>
                                <a href="https://travelo-by-zebi.netlify.app">
                                    <button className="flex justify-center items-center text-sm md:p-2 sssm:p-[5px] bg-[#39fd85] text-black cursor-pointer rounded-md hover:bg-white hover:text-green-700 transition-all duration-500 ease-in-out">
                                        View Site
                                    </button>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col gap-y-1 smd:w-[30%] ssm:w-[40%] sssm:w-[80%] bg-[#2c3033] xl:h-[22rem] md:h-[20rem] smd:h-[18.5rem] ssm:h-[20rem] sssm:h-[23rem] shadow-sm shadow-black">
                        <img src={notia} alt="project" className="w-full object-cover" />
                        <div className="flex flex-col gap-y-3 p-4">
                            <h1 className="text-[#39fd85] font-custom xl:text-xl md:text-lg ssm:text-sm">
                                Notia-Notes website
                            </h1>
                            <h5 className="text-white font-custom md:text-sm ssm:text-[13px]">
                                This is a notes website made by Html,Tailwind-css,Mern-stack and with
                                validations{" "}
                            </h5>
                            <div className="flex flex-row gap-x-2">
                                <a href="https://github.com/Zebishah/notia.git">
                                    <button className="flex justify-center items-center text-sm md:p-2 sssm:p-[5px] bg-[#39fd85] text-black cursor-pointer rounded-md hover:bg-white hover:text-green-700 transition-all duration-500 ease-in-out">
                                        View Code
                                    </button>
                                </a>
                                <a href="https://notia-amber.vercel.app">
                                    <button className="flex justify-center items-center text-sm md:p-2 sssm:p-[5px] bg-[#39fd85] text-black cursor-pointer rounded-md hover:bg-white hover:text-green-700 transition-all duration-500 ease-in-out">
                                        View Site
                                    </button>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col gap-y-1 smd:w-[30%] ssm:w-[40%] sssm:w-[80%] bg-[#2c3033] xl:h-[22rem] md:h-[20rem] smd:h-[18.5rem] ssm:h-[20rem] sssm:h-[23rem] shadow-sm shadow-black">
                        <img src={form} alt="project" className="w-full object-cover" />
                        <div className="flex flex-col gap-y-3 p-4">
                            <h1 className="text-[#39fd85] font-custom xl:text-xl md:text-lg ssm:text-sm">
                                Internship Registration
                            </h1>
                            <h5 className="text-white font-custom text-sm md:text-sm ssm:text-[13px]">
                                This internship registration app is made by using html, css, react-js
                                ,validations and local storage.
                            </h5>
                            <div className="flex flex-row gap-x-2">
                                <a href="https://github.com/Zebishah/form_data_valid.git">
                                    <button className="flex justify-center items-center text-sm md:p-2 sssm:p-[5px] bg-[#39fd85] text-black cursor-pointer rounded-md hover:bg-white hover:text-green-700 transition-all duration-500 ease-in-out">
                                        View Code
                                    </button>
                                </a>
                                <a href="https://form-data-valid.vercel.app">
                                    <button className="flex justify-center items-center text-sm md:p-2 sssm:p-[5px] bg-[#39fd85] text-black cursor-pointer rounded-md hover:bg-white hover:text-green-700 transition-all duration-500 ease-in-out">
                                        View Site
                                    </button>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col gap-y-1 smd:w-[30%] ssm:w-[40%] sssm:w-[80%] bg-[#2c3033] xl:h-[22rem] md:md:h-[20rem] smd:h-[18.5rem] ssm:h-[20rem] sssm:h-[23rem] shadow-sm shadow-black">
                        <img src={calculator} alt="project" className="w-full object-cover" />
                        <div className="flex flex-col gap-y-3 p-4">
                            <h1 className="text-[#39fd85] font-custom xl:text-xl md:text-lg ssm:text-sm">Calculator App</h1>
                            <h5 className="text-white font-custom text-sm md:text-sm ssm:text-[13px]">
                                This is a calculator which is made by using html css react-js and
                                Validations{" "}
                            </h5>
                            <div className="flex flex-row gap-x-2">
                                <a href="https://github.com/Zebishah/calculator-html-css-reactjs.git">
                                    <button className="flex justify-center items-center text-sm md:p-2 sssm:p-[5px] bg-[#39fd85] text-black cursor-pointer rounded-md hover:bg-white hover:text-green-700 transition-all duration-500 ease-in-out">
                                        View Code
                                    </button>
                                </a>
                                <a href="https://calculator-html-css-reactjs.vercel.app">
                                    <button className="flex justify-center items-center text-sm md:p-2 sssm:p-[5px] bg-[#39fd85] text-black cursor-pointer rounded-md hover:bg-white hover:text-green-700 transition-all duration-500 ease-in-out">
                                        View Site
                                    </button>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </Element >
    )
}

export default Projects