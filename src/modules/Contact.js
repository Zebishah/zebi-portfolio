import React from 'react'

const contact = () => {
    return (
        <div
            className="bg-[#3a3f44] h-[39rem] gap-y-10 mt-10 w-full flex flex-col justify-center items-center"
            id="contact"
        >
            <h1 className="text-[#39fd85] font-custom font-bold text-3xl mt-5">
                Contact-Me
            </h1>
            <div className="flex flex-row gap-x-6 justify-center items-center w-[90%]">
                <div className="flex flex-col gap-y-4 w-[30%] justify-start items-start p-4 bg-[#1f2022] rounded-md shadow-sm shadow-black">
                    <h1 className="text-green-400 text-lg font-custom">Contact Info</h1>
                    <div className="flex flex-row gap-x-3 justify-center items-center">
                        <i className="fas fa-envelope text-green-400" />
                        <p className="text-green-400 text-sm font-custom">
                            Zebihaider123@gmail.com
                        </p>
                    </div>
                    <div className="flex flex-row gap-x-3 justify-center items-center">
                        <i className="fab fa-linkedin text-green-400" />
                        <p className="text-green-400 text-sm font-custom">
                            https://www.linkedin.com/in/syed-zohaib-haider-390530228
                        </p>
                    </div>
                    <div className="flex flex-row gap-x-3 justify-center items-center">
                        <i className="fab fa-whatsapp text-green-400" />
                        <p className="text-green-400 text-sm font-custom">+92-310-5904269</p>
                    </div>
                </div>
                <form
                    onsubmit="sendEmail(); reset(); return false;"
                    method="POST"
                    className="w-[55%] bg-[#1f2022] flex flex-col gap-y-3 justify-center items-center rounded-md shadow-sm shadow-black p-4"
                >
                    <div className="flex flex-col gap-y-2 justify-center items-center w-[70%]">
                        <label htmlFor="name" className="text-green-400 font-custom text-sm">
                            Name
                        </label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            placeholder="Your Name"
                            className="w-full bg-[#2b2929] text-green-400 rounded-md focus:outline-none focus:border-green-500 p-2 placeholder:font-custom placeholder:text-sm placeholder:text-white"
                            required=""
                        />
                    </div>
                    <div className="flex flex-col gap-y-2 justify-center items-center w-[70%]">
                        <label
                            htmlFor="Contact No"
                            className="text-green-400 font-custom text-sm"
                        >
                            Contact No
                        </label>
                        <input
                            type="ContactNo"
                            id="ContactNo"
                            name="ContactNo"
                            placeholder="Your Contact-No"
                            className="w-full bg-[#2b2929] text-green-400 rounded-md focus:outline-none focus:border-green-500 p-2 placeholder:font-custom placeholder:text-sm placeholder:text-white"
                            required=""
                        />
                    </div>
                    <div className="flex flex-col gap-y-2 justify-center items-center w-[70%]">
                        <label htmlFor="email" className="text-green-400 font-custom text-sm">
                            Email
                        </label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            placeholder="Your Email"
                            className="w-full bg-[#2b2929] text-green-400 rounded-md focus:outline-none focus:border-green-500 p-2 placeholder:font-custom placeholder:text-sm placeholder:text-white"
                            required=""
                        />
                    </div>
                    <div className="flex flex-col gap-y-2 justify-center items-center w-[70%]">
                        <label htmlFor="message" className="text-green-400 font-custom text-sm">
                            Message
                        </label>
                        <textarea
                            id="message"
                            name="message"
                            rows={4}
                            placeholder="Your Message"
                            className="w-full bg-[#2b2929] text-green-400 rounded-md focus:outline-none focus:border-green-500 p-2 placeholder:font-custom placeholder:text-sm placeholder:text-white resize-none"
                            required=""
                            defaultValue={""}
                        />
                    </div>
                    <div className="flex flex-col justify-center items-center w-[70%]">
                        <button
                            type="submit"
                            className="bg-green-500 text-white px-4 py-2 font-custom rounded-md hover:bg-white hover:text-green-500 focus:outline-none transition-all duration-500 ease-in-out"
                        >
                            Submit
                        </button>
                    </div>
                </form>
            </div>
        </div>

    )
}

export default contact