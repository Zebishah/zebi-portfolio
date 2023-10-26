import React from 'react'

const Footer = () => {
    return (
        <div className="flex w-full">
            <footer className="bg-[#2c3033] text-white p-4 w-full mt-10">
                <div className="container mx-auto">
                    <div className="flex smd:flex-row smd:gap-x-5 sssm:flex-col sssm:gap-y-3 justify-center items-center">
                        <div className="text-sm text-green-400">© 2023 Zohaib Haider. All rights reserved.</div>
                        <div className="flex flex-row smd:gap-x-3 sssm:gap-x-6 justify-start items-start ">
                            <div className="flex flex-row gap-x-1 justify-center items-center">
                                <i className="fas fa-envelope text-green-400" />
                                <p className="text-green-400 text-xs font-custom">
                                    Zebihaider123@gmail.com
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