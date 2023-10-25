import React from 'react'

const Projects = () => {
    return (
        <div
            className="bg-[#3a3f44] w-full pt-14 flex flex-col gap-y-4 justify-center items-center "
            id="projects"
        >
            <h1 className="text-[#39fd85] font-custom font-bold text-3xl">Projects</h1>
            <div className="flex flex-row gap-x-4 w-[95%] flex-wrap justify-center items-center mt-8 gap-y-4">
                <div className="flex flex-col gap-y-1 w-[30%] bg-[#0f1011] shadow-sm shadow-black">
                    <img src="../images/weather.png" alt="project" className="w-full object-cover" />
                    <div className="flex flex-col gap-y-3 p-4">
                        <h1 className="text-[#39fd85] font-custom text-xl">Weather Website</h1>
                        <h5 className="text-white font-custom text-sm">
                            A Weather website made By using html css javascript and weather api{" "}
                        </h5>
                        <div className="flex flex-row gap-x-2">
                            <a href="https://github.com/Zebishah/weatherappp.git">
                                {" "}
                                <button className="flex justify-center text-sm font-custom items-center p-2 bg-[#39fd85] cursor-pointer text-black rounded-md hover:bg-white hover:text-green-700 transition-all duration-500 ease-in-out">
                                    View Code
                                </button>
                            </a>
                            <a href="https://weatherapp-by-zebi.netlify.app">
                                <button className="flex justify-center text-sm font-custom items-center p-2 bg-[#39fd85] cursor-pointer text-black rounded-md hover:bg-white hover:text-green-700 transition-all duration-500 ease-in-out">
                                    View Site
                                </button>
                            </a>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col gap-y-1 w-[30%] bg-[#0f1011] shadow-sm shadow-black">
                    <img src="../images/todo.png" alt="project" className="w-full object-cover" />
                    <div className="flex flex-col gap-y-3 p-4">
                        <h1 className="text-[#39fd85] font-custom text-xl">
                            Todo-App(Tasks-App)
                        </h1>
                        <h5 className="text-white font-custom text-sm">
                            A Todo website made By using html css javascript and Local Storage{" "}
                        </h5>
                        <div className="flex flex-row gap-x-2">
                            <a href="https://github.com/Zebishah/todolist-app.git">
                                <button className="flex justify-center items-center text-sm p-2 bg-[#39fd85] text-black cursor-pointer rounded-md hover:bg-white hover:text-green-700 transition-all duration-500 ease-in-out">
                                    View Code
                                </button>
                            </a>
                            <a href="https://todolist-by-zebi.netlify.app">
                                <button className="flex justify-center items-center text-sm p-2 bg-[#39fd85] text-black cursor-pointer rounded-md hover:bg-white hover:text-green-700 transition-all duration-500 ease-in-out">
                                    View Site
                                </button>
                            </a>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col gap-y-1 w-[30%] bg-[#0f1011] shadow-sm shadow-black">
                    <img src="../images/travelo.png" alt="project" className="w-full object-cover" />
                    <div className="flex flex-col gap-y-3 p-4">
                        <h1 className="text-[#39fd85] font-custom text-xl">
                            Travelo(tour website)
                        </h1>
                        <h5 className="text-white font-custom text-sm">
                            A tour&amp;travel website made By using html css javascript and with
                            validations.{" "}
                        </h5>
                        <div className="flex flex-row gap-x-2">
                            <a href="https://github.com/Zebishah/travelo-tourandtravel-app.git">
                                <button className="flex justify-center items-center text-sm p-2 bg-[#39fd85] text-black cursor-pointer rounded-md hover:bg-white hover:text-green-700 transition-all duration-500 ease-in-out">
                                    View Code
                                </button>
                            </a>
                            <a href="https://travelo-by-zebi.netlify.app">
                                <button className="flex justify-center items-center text-sm p-2 bg-[#39fd85] text-black cursor-pointer rounded-md hover:bg-white hover:text-green-700 transition-all duration-500 ease-in-out">
                                    View Site
                                </button>
                            </a>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col gap-y-1 w-[30%] bg-[#0f1011] shadow-sm shadow-black">
                    <img src="../images/notia.png" alt="project" className="w-full object-cover" />
                    <div className="flex flex-col gap-y-3 p-4">
                        <h1 className="text-[#39fd85] font-custom text-xl">
                            Notia-Notes website
                        </h1>
                        <h5 className="text-white font-custom text-sm">
                            This is a notes website made by Html,Tailwind-css,Mern-stack and with
                            validations{" "}
                        </h5>
                        <div className="flex flex-row gap-x-2">
                            <a href="https://github.com/Zebishah/notia.git">
                                <button className="flex justify-center items-center text-sm p-2 bg-[#39fd85] text-black cursor-pointer rounded-md hover:bg-white hover:text-green-700 transition-all duration-500 ease-in-out">
                                    View Code
                                </button>
                            </a>
                            <a href="https://notia-amber.vercel.app">
                                <button className="flex justify-center items-center text-sm p-2 bg-[#39fd85] text-black cursor-pointer rounded-md hover:bg-white hover:text-green-700 transition-all duration-500 ease-in-out">
                                    View Site
                                </button>
                            </a>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col gap-y-1 w-[30%] bg-[#0f1011] shadow-sm shadow-black">
                    <img src="../images/regform.png" alt="project" className="w-full object-cover" />
                    <div className="flex flex-col gap-y-3 p-4">
                        <h1 className="text-[#39fd85] font-custom text-xl">
                            Internship Registration
                        </h1>
                        <h5 className="text-white font-custom text-sm">
                            This internship registration app is made by using html, css, react-js
                            ,validations and local storage.
                        </h5>
                        <div className="flex flex-row gap-x-2">
                            <a href="https://github.com/Zebishah/form_data_valid.git">
                                <button className="flex justify-center items-center text-sm p-2 bg-[#39fd85] text-black cursor-pointer rounded-md hover:bg-white hover:text-green-700 transition-all duration-500 ease-in-out">
                                    View Code
                                </button>
                            </a>
                            <a href="https://form-data-valid.vercel.app">
                                <button className="flex justify-center items-center text-sm p-2 bg-[#39fd85] text-black cursor-pointer rounded-md hover:bg-white hover:text-green-700 transition-all duration-500 ease-in-out">
                                    View Site
                                </button>
                            </a>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col gap-y-1 w-[30%] bg-[#0f1011] shadow-sm shadow-black">
                    <img src="../images/calculator.png" alt="project" className="w-full object-cover" />
                    <div className="flex flex-col gap-y-3 p-4">
                        <h1 className="text-[#39fd85] font-custom text-xl">Calculator App</h1>
                        <h5 className="text-white font-custom text-sm">
                            This is a calculator which is made by using html css react-js and
                            Validations{" "}
                        </h5>
                        <div className="flex flex-row gap-x-2">
                            <a href="https://github.com/Zebishah/calculator-html-css-reactjs.git">
                                <button className="flex justify-center items-center text-sm p-2 bg-[#39fd85] text-black cursor-pointer rounded-md hover:bg-white hover:text-green-700 transition-all duration-500 ease-in-out">
                                    View Code
                                </button>
                            </a>
                            <a href="https://calculator-html-css-reactjs.vercel.app">
                                <button className="flex justify-center items-center text-sm p-2 bg-[#39fd85] text-black cursor-pointer rounded-md hover:bg-white hover:text-green-700 transition-all duration-500 ease-in-out">
                                    View Site
                                </button>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Projects