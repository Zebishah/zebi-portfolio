import React, { useRef, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons'
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import emailjs from '@emailjs/browser';
import ScrollReveal from 'scrollreveal';
import { Link, Element } from 'react-scroll';
const Contact = () => {
    const form = useRef();
    const content = useRef();
    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_grvvoco', 'template_b43o5dr', form.current, 'xbyll0irew58RPUxg')
            .then((result) => {
                alert("Your message sent successfully to Zohaib");
            }, (error) => {
                alert("Your message did'nt sent to Zohaib Try again ");
            });
    };


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
        <Element name="contact" className="contact">
            <section ref={content}
                className="bg-[#3a3f44] gap-y-10 mt-10 w-full flex flex-col justify-center items-center"
                id="contact"
            >
                <h1 className="text-[#39fd85] font-custom font-bold text-3xl mt-5">
                    Contact-Me
                </h1>
                <div className="flex smd:flex-row smd:gap-x-6 justify-center items-center w-[90%] sssm:flex-col sssm:gap-y-4 ">
                    <div className="flex flex-col gap-y-4 smd:w-[50%] ssm:w-[80%] justify-start items-start p-4 bg-[#2c3033] rounded-md shadow-sm shadow-black">
                        <h1 className="text-green-400 text-lg font-custom">Contact Info</h1>
                        <div className="flex flex-row gap-x-3 justify-center items-center">
                            <FontAwesomeIcon icon={faEnvelope} className=" text-green-400" />

                            <p className="text-green-400 text-sm font-custom">
                                Zebihaider123@gmail.com
                            </p>
                        </div>
                        <div className="flex flex-row gap-x-3 justify-center items-center">
                            <FontAwesomeIcon icon={faLinkedin} className=" text-green-400" />
                            <p className="text-green-400 text-sm font-custom">
                                https://www.linkedin.com/in/syed-zohaib-haider-390530228
                            </p>
                        </div>
                        <div className="flex flex-row gap-x-3 justify-center items-center">
                            <FontAwesomeIcon icon={faPhone} className=" text-green-400" />
                            <p className="text-green-400 text-sm font-custom">+92-310-5904269</p>
                        </div>
                    </div>
                    <form
                        onSubmit={sendEmail}
                        ref={form}
                        method="POST"
                        className="smd:w-[55%] ssmd:w-[80%] sssm:w-[92%] bg-[#2c3033] flex flex-col gap-y-3 justify-center items-center rounded-md shadow-sm shadow-black p-4"
                    >
                        <div className="flex flex-col gap-y-2 justify-center items-center md:w-[70%] sssm:w-[90%]">
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
                        <div className="flex flex-col gap-y-2 justify-center items-center md:w-[70%] sssm:w-[90%]">
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
                        <div className="flex flex-col gap-y-2 justify-center items-center md:w-[70%] sssm:w-[90%]">
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
                        <div className="flex flex-col gap-y-2 justify-center items-center md:w-[70%] sssm:w-[90%]">
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
            </section>
        </Element>
    )
}

export default Contact