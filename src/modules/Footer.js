import React from 'react'

const Footer = () => {
    return (
        <div className="flex w-full">
            <footer className="bg-gray-800 text-white p-4 w-full">
                <div className="container mx-auto">
                    <div className="flex flex-row gap-x-3 justify-center items-center">
                        <div className="text-sm">© 2023 Your Name. All rights reserved.</div>
                        <div className="flex flex-row gap-x-1 justify-start items-start ">
                            <div className="flex flex-row gap-x-1 justify-center items-center">
                                <i className="fas fa-envelope text-green-400" />
                                <p className="text-green-400 text-xs font-custom">
                                    Zebihaider123@gmail.com
                                </p>
                            </div>
                            <div className="flex flex-row gap-x-1 justify-center items-center">
                                <i className="fab fa-linkedin text-green-400" />
                                <p className="text-green-400 text-xs font-custom">
                                    https://www.linkedin.com/in/syed-zohaib-haider-390530228
                                </p>
                            </div>
                            <div className="flex flex-row gap-x-1 justify-center items-center">
                                <i className="fab fa-whatsapp text-green-400" />
                                <p className="text-green-400 text-xs font-custom">
                                    +92-310-5904269
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </div>

    )
}

export default Footer