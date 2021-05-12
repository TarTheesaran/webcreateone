import React from "react";

const sizeClasses = {
    height: "h-full",
    width: "w-full",
};

export default function Allpage() {
    return (

        <div className="page-width flex-col">
            <div class="grid grid-cols-1 px-2 bg-purblepage1 sm:px-4 md:px-8 lg:px-18 xl:px-24 2xl:px-44">
                <div class="flex my-4 justify-between ">
                    <div>
                        <img className="h-8" src="/img/logo.png" alt="" />
                    </div>
                    <div>
                        <img className="h-8" src="/img/menu.png" alt="" />
                    </div>
                </div>
                <div class="grid grid-cols-12 mx-6">
                    <div class="h-full col-span-12 md:col-span-5 overflow-hidden">
                        <p class="my-20"></p>
                        <h1 class="text-white text-5xl font-bold my-8">
                            <p>Web Software</p>
                            <p>Developers</p>
                        </h1>
                        <p class="text-white text-xl">Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
                        nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
                        reprehenderit in voluptate velit esse cillum</p>
                        <p class="flex text-white my-5 text-lg"><span> Image from </span><span
                            class="underline mx-2">Freepik</span></p>
                        <p class="my-20">
                            <span
                                class=" text-center text-white tracking-widest font-bold bg-buttonblue cursor-pointer hover:bg-buttonbluewhover rounded-full px-10 py-3 text-md">
                                READ MORE</span>
                        </p>
                    </div>
                    <div class=" col-span-12 md:col-span-7 mx-1 flex items-center">
                        <div>
                            <img className="mx-auto" src="/img/compage1.jpg" height="550px" width="550px" layout="intrinsic" quality="100" alt="" />
                        </div>
                    </div>
                </div>
            </div>
            <div class="grid grid-cols-1 px-5 bg-white my-10 sm:px-5 md:px-12 lg:px-18 xl:px-24 2xl:px-44">
                <div>
                    <h1 class="text-center text-5xl font-bold my-4">Key Features</h1>
                    <p class="text-center">Sample text. Click to select the text box. Click again or double click to start
                    editing the text.</p>
                    <p class="my-14"></p>
                </div>
                <div class="flex justify-center flex-col gap-7 lg:flex-row">
                    <div class="grid grid-cols-1">
                        <div>
                            <img src="/img/twopeople.png" class="object-cover w-full" alt="" />
                        </div>
                    </div>
                    <div class="grid grid-cols-1 gap-7 sm:grid-cols-2">
                        <div><img src="/img/development.png" class="object-cover w-full" alt="" /></div>
                        <div><img src="/img/topskills.png" class="object-cover w-full" alt="" /></div>
                        <div><img src="/img/design.png" class="object-cover w-full" alt="" /></div>
                        <div><img src="/img/responsive.png" class="object-cover w-full" alt="" /></div>
                    </div>
                </div>
                <div class="">
                    <p class="text-center text-black my-5 text-md"><span> Image from </span><span
                        class="underline mx-1">Freepik</span></p>
                </div>
            </div>
            <div class="grid grid-cols-1 px-2 bg-purblepage1 sm:px-4 md:px-8 lg:px-18 xl:px-24 2xl:px-44">
                <div class="grid grid-cols-12 mx-6 my-16">
                    <div class="h-full col-span-12 lg:col-span-7 lg:col-8 xl:col-span-8">
                        <div>
                            <h1 class="text-white text-4xl font-bold my-8 xl:text-7xl">
                                Data Visualization
                        </h1>
                        </div>
                        <div class="flex items-center">
                            <img src="/img/datavis.jpg" class="object-scale-down" alt="" />
                        </div>
                        <div class="">
                            <p class="flex text-white my-5 text-xl"><span> Image from </span><span
                                class="underline mx-2  cursor-pointer ">Freepik</span></p>
                        </div>
                    </div>
                    <div class="flex flex-col col-span-12 ml-4 md:ml-12 mt-20 lg:col-span-5 lg:col-4 xl:col-span-4">
                        <div class="text-white grid grid-cols-1 gap-16 md:grid-cols-2 lg:grid-cols-1 lg:gap-32">
                            <div>
                                <p class="text-2xl font-bold">01. GOALS</p>
                                <p class="text-lg ml-12 my-6">Sample text. Click to select the text box. Click again or double
                                click to start editing the text.</p>
                                <p class="ml-12 text-xl underline cursor-pointer ">MORE</p>
                            </div>
                            <div>
                                <p class="text-2xl font-bold">02. STRATEGY</p>
                                <p class="text-lg ml-12 my-6">Sample text. Click to select the text box. Click again or double
                                click to start editing the text.</p>
                                <p class="ml-12 text-xl underline cursor-pointer ">MORE</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="grid grid-cols-1 px-2 bg-white sm:px-4 md:px-8 lg:px-18 xl:px-24 2xl:px-44 my-10">
                <div class="grid grid-cols-12 mx-6 justify-around">
                    <div class="h-full col-span-12 md:col-span-5 lg:col-span-4 xl:col-span-3 overflow-hidden ">
                        <p>
                            <h1 class="text-buttonblue text-5xl font-bold my-8 text-center md:text-left mt-10 sm:mt-20">
                                <p>IT solutions</p>
                            </h1>
                            <p class="text-black text-xl text-center md:text-left">We collaborate with you to create new value through digital
                            transformation. We have hundreds of specialists at your service.</p>
                            <p class=" text-black my-5 text-lg  text-center md:text-left">
                                <span> Image from </span>
                                <span class="underline mx-1 text-buttonblue">Freepik</span>
                            </p>
                            <p class="my-8 text-center md:text-left">
                                <span
                                    class=" text-center text-white tracking-widest font-bold bg-buttonblue cursor-pointer hover:bg-buttonbluewhover rounded-full px-10 py-3 text-md">
                                    LEARN MORE</span>
                            </p>
                            <p class="my:10 sm:my-40"></p>
                        </p>
                    </div>
                    <div class=" flex items-center mx-10 col-span-12 md:col-span-7 lg:col-span-8 xl:col-span-9">
                        <div>
                            <img class="w-full" src="/img/compage2.jpg" alt="" />
                        </div>
                    </div>
                </div>
            </div>
            {/* ทำต่อ page DEVELOPMENT*/}
            <div class=" grid grid-cols-1 px-2 my-20 bg-purblepage1 sm:px-4 md:px-8 lg:px-18 xl:px-24 2xl:px-44">
                <div className="grid grid-cols-12 mx-6 justify-around my-14 bg-scanfinger bg-no-repeat bg-auto bg-left">
                    <div className="col-span-12">
                        <div className=" h-0 w-80 sm:h-40 flex items-center">
                        </div>
                        <div className=" h-0 w-80 md:h-40 flex items-center">
                        </div>
                    </div>
                    <div className="col-span-0 lg:col-span-4 xl:col-span-6"></div>
                    <div className="col-span-12 lg:col-span-8 xl:col-span-6">
                        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                            <div className="bg-white h-72 w-90 flex items-center">
                                <div className="mx-auto">
                                    <img class="mx-auto h-20" src="/img/handping.png" alt="" />
                                    <p className="font-nomal text-center text-2xl my-5">DEVELOPMENT</p>
                                </div>
                            </div>
                            <div className="bg-white h-72 w-90 flex items-center">
                                <div className="mx-auto">
                                    <img class="mx-auto h-20" src="/img/handping.png" alt="" />
                                    <p className="font-nomal text-center text-2xl my-5">DEVELOPMENT</p>
                                </div>
                            </div>
                            <div className="bg-white h-72 w-90 flex items-center">
                                <div className="mx-auto">
                                    <img class="mx-auto h-20" src="/img/handping.png" alt="" />
                                    <p className="font-nomal text-center text-2xl my-5">DEVELOPMENT</p>
                                </div>
                            </div>
                            <div className="bg-white h-72 w-90 flex items-center">
                                <div className="mx-auto">
                                    <img class="mx-auto h-20" src="/img/handping.png" alt="" />
                                    <p className="font-nomal text-center text-2xl my-5">DEVELOPMENT</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* ทำต่อ */}
            <div class="grid grid-cols-1 px-2 bg-white sm:px-4 md:px-8 lg:px-18 xl:px-24 2xl:px-44 my-10 md:my-20">
                <div class="grid grid-cols-12 mx-6 justify-around">
                    <div class=" flex items-center mx-10 col-span-12 md:col-span-6 lg:col-span-7 xl:col-span-8">
                        <div>
                            <img class="w-full" src="/img/mentiktik.jpg" alt="" />
                        </div>
                    </div>
                    <div class="h-full mx-8 col-span-12 md:col-span-6 lg:col-span-5 xl:col-span-4 overflow-hidden mt-12 ">
                        <p>
                            <h1 class="text-buttonblue text-5xl font-bold my-8 text-center md:text-4xl lg:text-5xl md:text-right">
                                <p>IT solutions</p>
                            </h1>
                            <p class="text-black text-xl text-center md:text-right">We collaborate with you to create new value through digital
                            transformation. We have hundreds of specialists at your service.</p>
                            <p class=" text-black my-5 text-lg  text-center md:text-right">
                                <span> Image from </span>
                                <span class="underline mx-1 text-buttonblue">Freepik</span>
                            </p>
                            <p class="my-8 text-center md:text-right">
                                <span
                                    class=" text-center text-white tracking-widest font-bold bg-buttonblue cursor-pointer hover:bg-buttonbluewhover rounded-full px-10 py-3 text-md">
                                    LEARN MORE</span>
                            </p>
                            <p class="my:10 sm:my-40"></p>
                        </p>
                    </div>
                </div>
            </div>
            {/* ทำต่อ */}
            <div class=" grid grid-cols-1 px-2 my-20 bg-purblepage1 sm:px-4 md:px-8 lg:px-18 xl:px-24 2xl:px-44">
                <div className="grid grid-cols-12 mx-6 my-28 justify-around bg-phoneholo bg-no-repeat bg-auto bg-right">
                    <div className="col-span-12">
                        <div className=" h-0 w-80 sm:h-40 flex items-center">
                        </div>
                        <div className=" h-0 w-80 md:h-40 flex items-center">
                        </div>
                    </div>
                    <div className="col-span-12 lg:col-span-8 xl:col-span-6 py">
                        <div className="bg-white h-auto">
                            <div class="h-full col-span-12 md:col-span-5 overflow-hidden mx-20 py-10">
                                <p class="my-5"></p>
                                <h1 class= " text-purblepage1 text-5xl font-bold my-8">
                                    <p>Web Software</p>
                                </h1>
                                <p class="text-black text-xl">Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
                                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
                        reprehenderit in voluptate velit esse cillum</p>
                                <p class="flex text-black my-5 text-lg"><span> Image from </span><span
                                    class="underline mx-2">Freepik</span></p>
                                <p class="my-10">
                                    <span
                                        class=" text-center text-white tracking-widest font-bold bg-buttonblue cursor-pointer hover:bg-buttonbluewhover rounded-full px-10 py-3 text-md">
                                        READ MORE</span>
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-span-0 lg:col-span-4 xl:col-span-6"></div>
                </div>
            </div>
            {/* ทำต่อ */}
            <div className="grid grid-cols-1 sm:grid-cols-2 px-2 bg-white sm:px-4 md:px-8 lg:px-18 xl:px-24 2xl:px-44 my-24">
                <div className="grid grid-cols-1 mx-8">
                    <div>
                        <p className="text-5xl leading-tight mb-3">We are directly involved in t​he process</p>
                    </div>
                    <div className="border-t-8 border-buttonblue w-1/4"></div>
                    <p></p>
                    <p></p>
                    <p className="my-8"></p>
                </div>
                <div className="mx-10 leading-tight">
                    <p className="text-xl leading-tight text-gray-500">Nibh tortor id aliquet lectus. Platea dictumst
                    vestibulum rhoncus est pellentesque elit ullamcorper. In hac habitasse platea dictumst quisque. </p>
                    <p className="text-xl my-10 leading-tight">Non quam lacus suspendisse faucibus interdum. Tempor nec
                    feugiat nisl pretium. Mi in nulla posuere sollicitudin aliquam ultrices. Quisque egestas diam
                    in arcu cursus euismod quis. Libero volutpat sed cras ornare arcu dui vivamus arcu. </p>
                    <span class=" text-center text-white tracking-widest font-bold bg-buttonblue cursor-pointer hover:bg-buttonbluewhover rounded-full px-10 py-3 text-md">
                        LEARN MORE</span>
                </div>
            </div>
            <div class="grid grid-cols-1 px-5 bg-purblepage1 py-20 sm:px-5 md:px-12 lg:px-18 xl:px-24 2xl:px-44">
                <div>
                    <h1 class="text-center text-5xl my-4 text-white">Get in Touch!</h1>
                    <p class="text-center text-white text-xl my-5">
                        <p>We align leaders around a shared purpose and strategic story that</p>
                        <p>catalyzes their business and brand to take action.</p>
                    </p>
                    <p class="my-14"></p>
                </div>
                <div class=" flex justify-center mx-auto lg:mx-0 gap-8 flex-col lg:flex-row text-center">
                    <div className="bg-white h-72 w-80 flex items-center">
                        <div className="mx-auto">
                            <img class="mx-auto h-20" src="/img/mappin.png" alt="" />
                            <p className="font-bold text-2xl my-5">Address:</p>
                            <p className="text-lg">
                                <p>121 Rock Sreet, 21 Avenue,</p>
                                <p>New York, NY 92103-9000</p>
                            </p>
                        </div>
                    </div>
                    <div className="bg-white h-72 w-80 flex items-center">
                        <div className="mx-auto">
                            <img class="mx-auto h-20" src="/img/email.png" alt="" />
                            <p className="font-bold text-2xl my-5">Email:</p>
                            <p className="text-lg">
                                <p>hello@company.com</p>
                                <p>support@company.com</p>
                            </p>
                        </div>
                    </div>
                    <div className="bg-white h-72 w-80 flex items-center">
                        <div className="mx-auto">
                            <img class="mx-auto h-20" src="/img/call.png" alt="" />
                            <p className="font-bold text-2xl my-5">Call us:</p>
                            <p className="text-lg">
                                <p>1 (234) 567-891</p>
                                <p>1 (234) 987-654</p>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="grid grid-cols-1 bg-endpagebg px-5 sm:px-5 md:px-12 lg:px-18 xl:px-24 2xl:px-44 ">
                <div className="my-8">
                    <p class="text-center text-white text-sm my-4">
                        <p>Sample text. Click to select the text box. Click again or double</p>
                        <p>click to start editing the text.</p>
                    </p>
                    <p class="my-20"></p>s
                    <p class="text-center text-2xs" >
                        <span className="text-endpagefont cursor-pointer underline hover:text-gray-400">Website Templates</span>
                        <span className="text-white mx-1">created with</span>
                        <span className="text-endpagefont cursor-pointer underline hover:text-gray-400">Website Builder Software.</span>
                    </p>
                </div>
            </div>
        </div>
    );
}
