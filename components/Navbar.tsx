import Image from 'next/image'
import React from 'react'

type Props = {}

function Navbar({ }: Props) {
    return (
        <div className="bg-white w-full">
            <div x-data="{ open: false }" className="flex flex-col p-5 mx-auto md:items-center md:justify-between md:flex-row md:px-6 lg:px-8">
                <div className="flex flex-row items-center justify-between lg:justify-start">
                    <button className="rounded-lg hidden md:block focus:outline-none focus:shadow-outline">
                        <Image
                            src={'/logo2.png'}
                            width={40}
                            height={40}
                            alt="Picture of the author"
                        />
                    </button>
                    <p style={{
                        fontFamily: "'Fira Sans', sans-serif",
                    }} className="text-lg ml-2 font-bold tracking-tighter text-blue-600 transition duration-500 ease-in-out transform tracking-relaxed lg:pr-8"> Google Cloud Study Jam, DCRUST </p>
                    <button className="rounded-lg md:hidden focus:outline-none focus:shadow-outline">
                        <Image
                            src={'/logo2.png'}
                            width={30}
                            height={30}
                            alt="Picture of the author"
                        />
                    </button>
                </div>
            </div >
        </div >
    )
}

export default Navbar