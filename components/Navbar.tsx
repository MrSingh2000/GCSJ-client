import Image from 'next/image'
import React from 'react'
import Link from 'next/link';

type Props = {}

function Navbar({ }: Props) {
    return (
        <div className="bg-white w-full shadow-md flex justify-between">
            <div className="p-3 w-fit items-center">
                <div className="logo mob:border-b mob:border-b-gray-200 flex justify-center items-center">
                    <div className="img w-16 h-1w-16 rounded-full ">
                        <Image src="/assets/gdsc-logo.png" alt="me" width="64" height="64" />
                    </div>
                    <div className="text flex flex-col justify-start items-start">
                        <p className="text-base">Google Devloper Student Club</p>
                        <p className="text-xs">Deenbandhu Chhotu Ram University of Science and Technology</p>

                    </div>
                </div>
            </div>

            <div className="px-6 links mob:py-3 flex justify-center items-center space-x-5">

        
            <Link href="https://instagram.com/gdsc.dcrust?igshid=MzRlODBiNWFlZA==" target='_blank'><div className="cursor-pointer insta">

              <svg className='w-6' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z" fill="#" /></svg>
            </div></Link>

          </div>
        </div >
    )
}

export default Navbar