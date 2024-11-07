import React from "react";
import './Content.css';
export default function Content(){
    return(
        <>
        <head><link href="https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,100..1000;1,9..40,100..1000&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap" rel="stylesheet"/></head>
        <div className="flex flex-col justify-center items-center mx-auto">
           <div className="image-background w-[1200px] h-[784px] mx-auto flex items-center justify-center my-3">
                <h1 className="text-center text-9xl text-[#FD5948]">Ableton</h1>
            </div>
            <div className="mt-24 mb-24">
                <h1 className="w-[680px] h-[121px] text-2xl font-semibold">We make Live, Push, Note and Link — unique software and hardware for music creation and performance. With these products, our community of users creates amazing things.</h1>
                <p className="w-[680px] h-[90px]">Ableton was founded in 1999 and released the first version of Live in 2001. Our products are used by a community of dedicated musicians, sound designers, and artists from across the world.</p>
            </div>
        </div>
        <div className="flex flex-row justify-end items-center top-[190vh] mx-0">
                <div className="about-1 justify-center items-centers">
                <div className="about-1-img ml-32">

                </div>
                </div>
                <div className="about-2 flex flex-row justify-center items-center">
                    <div className="about-2-img ml-48">

                    </div>
                </div>
        </div>
        <div className="flex flex-col justify-center items-center mx-auto">
            <div className="mt-24 mb-24 text-left mx-auto">
                <h1 className="w-[800px] h-[84px] text-3xl font-semibold leading-10">Making music isn’t easy. It takes time, effort, and learning. But when you’re in the flow, it’s incredibly rewarding.</h1>
                <p className="w-[720px] h-[60px] mt-4 text-xl">We feel the same way about making Ableton products. The driving force behind Ableton is our passion for what we make, and the people we make it for.</p>
            </div>
            <div className="flex flex-col justify-center bg-gray-100">
                <div className="relative w-[720px] h-[405px] aspect-video rounded-lg overflow-hidden shadow-lg">
                    <iframe
                    className="w-full h-full"
                    src="https://www.youtube.com/embed/G64-yM0Bs78"
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    ></iframe>
                </div>
                <p className="text-left mt-2 ml-3 font-semibold">What is Ableton Live? - Ableton</p>
            </div>
            <div className="mt-24 mb-24">
                <h1 className="w-[720px] h-[126px] text-3xl mx-auto font-semibold block">We are more than 350 people from 30 different countries divided between our headquarters in Berlin and our offices in Los Angeles and Tokyo.</h1>
                <p className="w-[678px] h-[60px] mt-8 text-xl">Most of us are active musicians, producers, and DJs, and many of us use Live and Push every day. We come from a wide range of cultural and professional backgrounds. Some of us have PhDs, some are self-taught, and most of us are somewhere in between. What connects us is the shared belief that each of us has the skills and knowledge to contribute to something big: helping to shape the future of music culture.</p>
            </div>
        </div>
        <div className="flex flex-row justify-start items-start mt-32 mb-32">
                <div className="about-3 flex flex-col justify-center items-center gap-32 pr-24">
                    <div className="about-3a-img">

                    </div>
                    <div className="about-3b-img">

                    </div>
                </div>
                <div className="about-4 flex flex-col justify-center items-center">
                    <div className="about-4-img">

                    </div>
                </div>
        </div>  
        <div className="flex flex-col justify-center items-center">
            <h1 className="text-[1.875rem] w-[728px] h-[168px] font-semibold">We believe it takes focus to create truly outstanding instruments. We only work on a few products and we strive to make them great.</h1>
            <p className="w-[720px] h-[150px]">Rather than having a one-size-fits-all process, we try to give our people what they need to work their magic and grow. We’ve learned that achieving the best results comes from building teams that are richly diverse, and thus able to explore problems from a wider set of perspectives. We don’t always agree with each other, but opinion and debate are valued and openly encouraged.</p>
        </div>
        <div className="meet-the-makers mx-auto"></div>
        <div className="mt-12 flex flex-col justify-center items-center">
            <h1 className="w-[720px] h-[85px] text-3xl mb-5">We’re passionate about what we do, but we’re equally passionate about improving who we are.</h1>
            <p className="w-[720px] h-[90px] text-lg mb-5">We work hard to foster an environment where people can grow both personally and professionally, and we strive to create a wealth of opportunities to learn from and with each other.</p>
            <p className="w-[720px] h-[120px] text-lg">Alongside an internal training program, employees are actively supported in acquiring new knowledge and skills, and coached on applying these in their daily work. In addition, staff-organized development and music salons are a chance to discuss new technologies, production techniques and best practices.
            </p>
        </div>
        <div className="flex flex-row justify-center items-center mb-[120px] mt-[120px] py-[120px] relative">
            <div className="about-6-img"></div>
            <div className="w-[960px] h-[840px] bg-[#D5B3FF] absolute top-0 z-0"></div>
            <div className="about-7-img"></div>
        </div>
        <div className="mt-12 flex flex-col justify-start items-center">
            <h1 className="w-[720px] h-[168px] text-3xl mb-5 text-left tracking-tighter">We want our employees to love it here. Since we’re looking for exceptional talent from around the world, we will do everything we can to make your transition as easy as possible.</h1>
            <p className="w-[720px] h-[150px] text-xl tracking-tighter">If you're joining us in Berlin, we'll help with relocation and paperwork. We’ll even provide you with free German or English lessons. Plus, working in Germany means you can expect comprehensive health insurance for you and your family, as well as generous maternity and paternity leave. Office hours are flexible, but it’s not all work; we have several company and team outings throughout the year as well as a variety of fun, informal small-group activities.</p>
        </div>
        <div className="flex flex-row justify-center items-center my-24">
            <div className="about-8-img"></div>
            <div className="w-[600px] h-[600px] bg-[#B1C5FF] p-[120px] flex flex-col justify-center items-left">
                <h1 className="w-[360px] text-3xl h-[282px] tracking-tighter">We’re really proud of the work we’ve done so far. But there’s so much more to come. If you’d like to be a part of it, please join us.</h1>
                <h1 className="text-3xl text-[#0000FF]"><a href="">See latest jobs</a>&nbsp;&gt;</h1>
            </div>
        </div>
        <div className="h-[85.33px] bg-[#FFFFFF] border-t-2 border-[#efefef]">

        </div>
        {/*Footer*/}
        <div className="w-[1440px] h-[784px] px-[60px] mx-auto">
            <div className="pt-[120px] w-[1200px] h-[784px] mx-auto flex flex-col">
                <div className="ableton mb-[60px] mx-[60px]">

                </div>
                 {/*Footer First Row*/}
                <div className="flex flex-row justify-center items-center">
                <div className="w-[360px] h-[206px] flex flex-col">
                    <p>Register Live or Push &gt;</p>
                    <p>About Ableton &gt;</p>
                    <p>Jobs &gt;</p>
                    <div className="flex flex-row justify-start items-center gap-3 mt-3">
                    <svg xmlns="http://www.w3.org/2000/svg" width={32} height={32} viewBox="0 0 24 24">
                        <path fill="rgb(8, 102, 255)" d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c5.05-.5 9-4.76 9-9.95"></path>
                    </svg>
                    <svg xmlns="http://www.w3.org/2000/svg" width={32} height={32} viewBox="0 0 512 512">
                        <path fill="black" d="M389.2 48h70.6L305.6 224.2L487 464H345L233.7 318.6L106.5 464H35.8l164.9-188.5L26.8 48h145.6l100.5 132.9zm-24.8 373.8h39.1L151.1 88h-42z"></path>
                    </svg>
                    <svg xmlns="http://www.w3.org/2000/svg" width="1.9rem" height="1.5rem" viewBox="0 0 256 180">
                        <path fill="#f00" d="M250.346 28.075A32.18 32.18 0 0 0 227.69 5.418C207.824 0 127.87 0 127.87 0S47.912.164 28.046 5.582A32.18 32.18 0 0 0 5.39 28.24c-6.009 35.298-8.34 89.084.165 122.97a32.18 32.18 0 0 0 22.656 22.657c19.866 5.418 99.822 5.418 99.822 5.418s79.955 0 99.82-5.418a32.18 32.18 0 0 0 22.657-22.657c6.338-35.348 8.291-89.1-.164-123.134"></path>
                        <path fill="#fff" d="m102.421 128.06l66.328-38.418l-66.328-38.418z"></path>
                    </svg>
                    <svg xmlns="http://www.w3.org/2000/svg" width="1.9rem" height="1.7rem" viewBox="0 0 256 256">
                        <g fill="none">
                            <rect width={256} height={256} fill="url(#skillIconsInstagram0)" rx={60}></rect>
                            <rect width={256} height={256} fill="url(#skillIconsInstagram1)" rx={60}></rect>
                            <path fill="#fff" d="M128.009 28c-27.158 0-30.567.119-41.233.604c-10.646.488-17.913 2.173-24.271 4.646c-6.578 2.554-12.157 5.971-17.715 11.531c-5.563 5.559-8.98 11.138-11.542 17.713c-2.48 6.36-4.167 13.63-4.646 24.271c-.477 10.667-.602 14.077-.602 41.236s.12 30.557.604 41.223c.49 10.646 2.175 17.913 4.646 24.271c2.556 6.578 5.973 12.157 11.533 17.715c5.557 5.563 11.136 8.988 17.709 11.542c6.363 2.473 13.631 4.158 24.275 4.646c10.667.485 14.073.604 41.23.604c27.161 0 30.559-.119 41.225-.604c10.646-.488 17.921-2.173 24.284-4.646c6.575-2.554 12.146-5.979 17.702-11.542c5.563-5.558 8.979-11.137 11.542-17.712c2.458-6.361 4.146-13.63 4.646-24.272c.479-10.666.604-14.066.604-41.225s-.125-30.567-.604-41.234c-.5-10.646-2.188-17.912-4.646-24.27c-2.563-6.578-5.979-12.157-11.542-17.716c-5.562-5.562-11.125-8.979-17.708-11.53c-6.375-2.474-13.646-4.16-24.292-4.647c-10.667-.485-14.063-.604-41.23-.604zm-8.971 18.021c2.663-.004 5.634 0 8.971 0c26.701 0 29.865.096 40.409.575c9.75.446 15.042 2.075 18.567 3.444c4.667 1.812 7.994 3.979 11.492 7.48c3.5 3.5 5.666 6.833 7.483 11.5c1.369 3.52 3 8.812 3.444 18.562c.479 10.542.583 13.708.583 40.396s-.104 29.855-.583 40.396c-.446 9.75-2.075 15.042-3.444 18.563c-1.812 4.667-3.983 7.99-7.483 11.488c-3.5 3.5-6.823 5.666-11.492 7.479c-3.521 1.375-8.817 3-18.567 3.446c-10.542.479-13.708.583-40.409.583c-26.702 0-29.867-.104-40.408-.583c-9.75-.45-15.042-2.079-18.57-3.448c-4.666-1.813-8-3.979-11.5-7.479s-5.666-6.825-7.483-11.494c-1.369-3.521-3-8.813-3.444-18.563c-.479-10.542-.575-13.708-.575-40.413s.096-29.854.575-40.396c.446-9.75 2.075-15.042 3.444-18.567c1.813-4.667 3.983-8 7.484-11.5s6.833-5.667 11.5-7.483c3.525-1.375 8.819-3 18.569-3.448c9.225-.417 12.8-.542 31.437-.563zm62.351 16.604c-6.625 0-12 5.37-12 11.996c0 6.625 5.375 12 12 12s12-5.375 12-12s-5.375-12-12-12zm-53.38 14.021c-28.36 0-51.354 22.994-51.354 51.355s22.994 51.344 51.354 51.344c28.361 0 51.347-22.983 51.347-51.344c0-28.36-22.988-51.355-51.349-51.355zm0 18.021c18.409 0 33.334 14.923 33.334 33.334c0 18.409-14.925 33.334-33.334 33.334s-33.333-14.925-33.333-33.334c0-18.411 14.923-33.334 33.333-33.334"></path>
                            <defs>
                                <radialGradient id="skillIconsInstagram0" cx={0} cy={0} r={1} gradientTransform="matrix(0 -253.715 235.975 0 68 275.717)" gradientUnits="userSpaceOnUse">
                                    <stop stopColor="#fd5"></stop>
                                    <stop offset={0.1} stopColor="#fd5"></stop>
                                    <stop offset={0.5} stopColor="#ff543e"></stop>
                                    <stop offset={1} stopColor="#c837ab"></stop>
                                </radialGradient>
                                <radialGradient id="skillIconsInstagram1" cx={0} cy={0} r={1} gradientTransform="matrix(22.25952 111.2061 -458.39518 91.75449 -42.881 18.441)" gradientUnits="userSpaceOnUse">
                                    <stop stopColor="#3771c8"></stop>
                                    <stop offset={0.128} stopColor="#3771c8"></stop>
                                    <stop offset={1} stopColor="#60f" stopOpacity={0}></stop>
                                </radialGradient>
                            </defs>
                        </g>
                    </svg>
                        <svg xmlns="http://www.w3.org/2000/svg" width="1.7rem" height="1.7rem" viewBox="0 0 256 290">
                        <path fill="#ff004f" d="M189.72 104.421c18.678 13.345 41.56 21.197 66.273 21.197v-47.53a67 67 0 0 1-13.918-1.456v37.413c-24.711 0-47.59-7.851-66.272-21.195v96.996c0 48.523-39.356 87.855-87.9 87.855c-18.113 0-34.949-5.473-48.934-14.86c15.962 16.313 38.222 26.432 62.848 26.432c48.548 0 87.905-39.332 87.905-87.857v-96.995zm17.17-47.952c-9.546-10.423-15.814-23.893-17.17-38.785v-6.113h-13.189c3.32 18.927 14.644 35.097 30.358 44.898M69.673 225.607a40 40 0 0 1-8.203-24.33c0-22.192 18.001-40.186 40.21-40.186a40.3 40.3 0 0 1 12.197 1.883v-48.593c-4.61-.631-9.262-.9-13.912-.801v37.822a40.3 40.3 0 0 0-12.203-1.882c-22.208 0-40.208 17.992-40.208 40.187c0 15.694 8.997 29.281 22.119 35.9"></path>
                        <path d="M175.803 92.849c18.683 13.344 41.56 21.195 66.272 21.195V76.631c-13.794-2.937-26.005-10.141-35.186-20.162c-15.715-9.802-27.038-25.972-30.358-44.898h-34.643v189.843c-.079 22.132-18.049 40.052-40.21 40.052c-13.058 0-24.66-6.221-32.007-15.86c-13.12-6.618-22.118-20.206-22.118-35.898c0-22.193 18-40.187 40.208-40.187c4.255 0 8.356.662 12.203 1.882v-37.822c-47.692.985-86.047 39.933-86.047 87.834c0 23.912 9.551 45.589 25.053 61.428c13.985 9.385 30.82 14.86 48.934 14.86c48.545 0 87.9-39.335 87.9-87.857z"></path>
                        <path fill="#00f2ea" d="M242.075 76.63V66.516a66.3 66.3 0 0 1-35.186-10.047a66.47 66.47 0 0 0 35.186 20.163M176.53 11.57a68 68 0 0 1-.728-5.457V0h-47.834v189.845c-.076 22.13-18.046 40.05-40.208 40.05a40.06 40.06 0 0 1-18.09-4.287c7.347 9.637 18.949 15.857 32.007 15.857c22.16 0 40.132-17.918 40.21-40.05V11.571zM99.966 113.58v-10.769a89 89 0 0 0-12.061-.818C39.355 101.993 0 141.327 0 189.845c0 30.419 15.467 57.227 38.971 72.996c-15.502-15.838-25.053-37.516-25.053-61.427c0-47.9 38.354-86.848 86.048-87.833"></path>
                    </svg>
                    </div>
                </div>
                <div className="w-[360px] h-[206px] flex flex-col">
                   <p className="font-semibold">Education</p>
                   <p>Offers for students and teachers &gt;</p>
                   <p>Ableton for the Classroom &gt;</p>
                   <p>Ableton for Colleges and Universities &gt;</p>
                </div>
                <div className="w-[360px] h-[206px] flex flex-col">
                  <p className="font-semibold">Sign up to our newsletter</p>
                  <p>Enter your email address to stay up to date with the latest offers, tutorials, downloads, surveys and more.</p><br/>
                  <div className="flex flex-row">
                        <input type="text" placeholder="Email Address" className="bg-[#eeeeee] w-[360px] h-[42px] px-[15px] py-[8px]" />
                        <input type="submit" value={"Sign Up"} className="w-[120px] h-[42px] px-[30px] py-[7px] bg-[#0000FF] text-white"/>
                  </div>
                </div>
                </div>
                {/*Footer Second Row*/}
                <div className="flex flex-row mx-[60px] justify-start items-center">
                <div className="w-[360px] h-[206px] flex flex-col">
                    <p className="font-semibold">Community</p>
                    <p>Find Ableton User groups &gt;</p>
                    <p>Find Certified Training &gt;</p>
                    <p>Become a Certified Trainer &gt;</p>
                </div>
                <div className="w-[360px] h-[206px] flex flex-col">
                   <p className="font-semibold">Language and Education</p>
                    <div className="flex flex-row gap-1 mt-2">
                        <select id="default" class="w-[116px]  h-[30px] px-2 text-gray-900 mb-6 text-sm font-semibold rounded-sm dark:bg-[#EEEEEE] dark:border-0 dark:placeholder-gray-400 dark:text-gray-900 dark:focus:ring-0">
                            <option>English</option>
                            <option>Deutsch</option>
                            <option>Français</option>
                            <option>日本語</option>
                            <option>简体中文</option>
                            <option>Español</option>
                        </select>
                        {/* <select className="w-[200px] h-[30px] bg-[#EEEEEE] border-none">
                            <option>Philippines</option>
                        </select> */}
                         <select id="default" class="w-[200px] h-[30px] px-2 text-gray-900 mb-6 text-sm font-semibold rounded-sm dark:bg-[#EEEEEE] dark:border-0 dark:placeholder-gray-400 dark:text-gray-900 dark:focus:ring-0">
                            <option selected>Philippines</option>
                            
                        </select>
                    </div>
                </div>
                </div>
                  {/*Footer Bottom most part */}
                <div className="flex flex-row justify-between ml-[60px]">
                    <div className="flex flex-row gap-3">
                        <p className="text-sm font-semibold">Contact Us</p>
                        <p className="text-sm font-semibold">Page Resources</p>
                        <p className="text-sm font-semibold">Legal Info</p>
                        <p className="text-sm font-semibold">Privacy Policy</p>
                        <p className="text-sm font-semibold">Cookie Settings</p>
                        <p className="text-sm font-semibold">Imprint</p>
                    </div>
                    <div className="flex flex-row gap-3">
                        <p>Made in Berlin</p>
                        <svg role="img" aria-label="Logo Ableton" class="main-nav__logo__image" fill="currentColor" xmlns="http://www.w3.org/2000/svg" width="45" height="30" viewBox="0 0 45 21"><path d="M0 0h3v21H0zM6 0h3v21H6zM12 0h3v21h-3zM18 0h3v21h-3zM24 18h21v3H24zM24 12h21v3H24zM24 6h21v3H24zM24 0h21v3H24z"></path></svg>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}