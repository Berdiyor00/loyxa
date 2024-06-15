import React from 'react'

const Header = () => {
    
    return (
        <>

            <header>
                <div className="container">

                </div>
            </header>
            <section className='pt-[30px] pb-[20px] bagi'>
                <div className="container">
                    <div className="flex items-center justify-between flex-wrap gap-[30px]">

                        <div className="md:flex items-start flex-wrap hover:scale-110 shadows transition-all cursor-pointer  bg-white text-[#000]   md:rounded-tl-[10px] rounded-bl-[10px] ">
                            <img src="src/assets/Image/employment-contracts-faq-4815368171.jpg" alt="" className='md:w-[340px] object-cover md:h-[250px] md:rounded-tl-[10px] rounded-bl-[10px] ' />
                      
                            <div className="flex flex-col items-center justify-center  md:pt-[30px]  md:pl-[50px] pr-[100px]">
                                <h1>
                                    Instetut Haqida
                                </h1>
                            </div>
                        </div>
                        <div className="md:flex items-start flex-wrap hover:scale-110 shadows transition-all cursor-pointer bg-white text-[#000]   md:rounded-tr-[10px] rounded-br-[10px]   ">
                            <div className="flex flex-col items-center justify-center  md:pt-[30px] md:pr-[50px] pl-[100px]">
                                <h1>
                                    Instetut Haqida
                                </h1>
                            </div>
                            <img src="src/assets/Image/employment-contracts-faq-4815368171.jpg" alt="" className='md:w-[340px] object-cover md:h-[250px] md:rounded-tr-[10px] rounded-br-[10px] ' />
                        </div>
                        <div className="md:flex items-start flex-wrap hover:scale-110 shadows transition-all cursor-pointer  bg-white text-[#000]   md:rounded-tl-[10px] rounded-bl-[10px] ">
                            <img src="src/assets/Image/employment-contracts-faq-4815368171.jpg" alt="" className='md:w-[340px] object-cover md:h-[250px] md:rounded-tl-[10px] rounded-bl-[10px] ' />
                            <div className="flex flex-col items-center justify-center  md:pt-[30px]  md:pl-[50px] pr-[100px]">
                                <h1>
                                    Instetut Haqida
                                </h1>
                            </div>
                        </div>
                        <div className="md:flex items-start flex-wrap hover:scale-110 shadows transition-all cursor-pointer bg-white text-[#000]   md:rounded-tr-[10px] rounded-br-[10px]   ">
                            <div className="flex flex-col items-center justify-center  md:pt-[30px] md:pr-[50px] pl-[100px]">
                                <h1 >
                                    Instetut Haqida
                                </h1>
                            </div>
                            <img src="src/assets/Image/employment-contracts-faq-4815368171.jpg" alt="" className='md:w-[340px] object-cover md:h-[250px] md:rounded-tr-[10px] rounded-br-[10px] ' />
                        </div>
                    </div>
                </div>
            </section>
            <section className='bg-[#958d8d60] '>
                <div className="container">
                    <div className="flex items-center justify-center gap-[40px] flex-wrap">
                        <div className="text-[20px]">
                            <h1>
                                Hello world
                            </h1>
                            <p className='max-w-[590px] text-left'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perferendis, consequuntur aperiam! Sequi dicta ad aliquam dolore pariatur dolorem molestias amet!</p>
                        </div>
                        <div className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                        <img className="p-8 rounded-t-lg" src="src/assets/apple-watch.png" alt="product image" />
                            <div className="px-5 pb-5">
                                
                                    <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">Apple Watch Series 7 GPS, Aluminium Case, Starlight Sport</h5>
                
                                <div className="flex items-center mt-2.5 mb-5">
                                    <div className="flex items-center space-x-1 rtl:space-x-reverse">
                                        <svg className="w-4 h-4 text-yellow-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                                            <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
                                        </svg>
                                    </div>
                                    {/* Additional rating stars */}
                                    <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ms-3">5.0</span>
                                </div>
                                <div className="flex items-center justify-between">
                                    <span className="text-3xl font-bold text-gray-900 dark:text-white">$599</span>
                                    <a href="#" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Add to cart</a>
                                </div>
                            </div>
                        </div>
                        
                    </div>
                </div>
            </section>
        </>
    )
}

export default Header