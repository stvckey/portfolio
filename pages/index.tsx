import Head from 'next/head'
import {BsFillMoonStarsFill, BsFillArrowDownCircleFill} from 'react-icons/bs';
import {AiFillGithub, AiFillLinkedin, AiOutlineLink, AiFillFolderOpen, AiFillFolder} from 'react-icons/ai'
import Image from 'next/image';
import park from '../public/nationalpark.jpg'
import dream from '../public/dreamland.png'
import movies from '../public/movies.jpg'
import movies1 from '../public/movies(1).jpg'
import site from '../public/site.png'
import { useState } from 'react';
import Typewriter from 'typewriter-effect';
import { Helmet } from "react-helmet-async";




export default function Home() {

  const[darkMode, setDarkMode] = useState(false);
  const[mobileMode, setMobileMode] = useState(false);

  return (
    <>

    <Helmet>
      <script
        src="//code.tidio.co/gsprsrlvsn6d2wp1rqkjpa3x6hniy3wx.js"
        crossorigin="anonymous"
        async
      ></script>
    </Helmet>

      

    <div className={darkMode ? "dark" : ""}>
      <div className='dark:bg-white scroll-smooth'>
        <nav className="bg-black fixed w-full z-50 top-0">
          <div className='px-8 mx-auto max-w-7xl'>
            <div className='flex justify-between'>

              <div className='py-5'>
                <a className="md:text-4xl text-2xl font-tekobold hover:text-green-400 duration-500 cursor-pointer" href="#top">
                  
                    ETTIONE.STUCKEY
                  
                </a>
              </div>

              <div className='hidden md:flex items-center space-x-3'>
                <a href="#work" className='py-5 px-4 text-3xl font-tekobold hover:text-green-400 duration-500'>PROJECTS</a>
                <a href="#about" className='py-5 px-4 text-3xl font-tekobold hover:text-green-400 duration-500'>ABOUT</a>
                <a href="#tools" className='py-5 px-4 text-3xl font-tekobold hover:text-green-400 duration-500'>TOOLS</a>
                <a href="#contact" className='py-5 px-4 text-3xl font-tekobold hover:text-green-400 duration-500'>CONTACT</a>
              </div>

              <div className='hidden md:flex items-center space-x-6'>
                <div onClick={ () => setDarkMode(!darkMode)} className= "text-3xl cursor-pointer hover:text-green-400 duration-500">
                  <BsFillMoonStarsFill/>
                </div>
                <a href="https://docs.google.com/document/d/1UIadA06hGhrdPKCzhKx5LHiHsKyZ0JmRTdZ_2R5jtto/edit?usp=sharing">
                  <button className='text-xl bg-green-500 text-white font-tekobold duration-500 px-4 py-2 hover:bg-green-400 rounded'>RESUME</button>
                </a>
              </div>

              <div className='md:hidden flex items-center'>
                <button className='mobile-menu-button'
                        onClick={() => setMobileMode(!mobileMode)}
                        >
                          {mobileMode ? 
                          <AiFillFolderOpen className='text-4xl cursor-pointer hover:text-green-400' /> :
                          <AiFillFolder className='text-4xl cursor-pointer hover:text-green-400' />
                          }
                </button>
              </div>
              
            </div>
          </div>
          {mobileMode ?
          <div className='mobile-menu z-40 absolute h-screen w-full translate-x-0 duration-500 bg-black dark:bg-white'>

            <a href="#work" onClick={() => setMobileMode(!mobileMode)} className='dark:text-black block py-5 px-8 text-2xl font-tekobold hover:text-green-400 duration-500'>
              PROJECTS
              <p className='text-2xl md:text-4xl py-5 leading-11 font-teko text-gray-500'>//see some projects</p>
            </a>

            <a href="#about" onClick={() => setMobileMode(!mobileMode)} className='dark:text-black block py-5 px-8 text-2xl font-tekobold hover:text-green-400 duration-500'>
              ABOUT
              <p className='text-2xl md:text-4xl py-5 leading-11 font-teko text-gray-500'>//get to know me</p>
            </a>
            
            <a href="#tools" onClick={() => setMobileMode(!mobileMode)} className='dark:text-black block py-5 px-8 text-2xl font-tekobold hover:text-green-400 duration-500'>
              TOOLS
              <p className='text-2xl md:text-4xl py-5 leading-11 font-teko text-gray-500'>//how the magic happens</p>
            </a>
            
            <a href="#contact" onClick={() => setMobileMode(!mobileMode)} className='dark:text-black block py-5 px-8 text-2xl font-tekobold hover:text-green-400 duration-500'>
              CONTACT
              <p className='text-2xl md:text-4xl py-5 leading-11 font-teko text-gray-500'>//get in touch</p>
            </a>

             <a className="py-5 px-8" href="https://docs.google.com/document/d/1UIadA06hGhrdPKCzhKx5LHiHsKyZ0JmRTdZ_2R5jtto/edit?pli=1">
               <button className='text-xl bg-green-500 text-white font-tekobold duration-500 px-4 py-2 hover:bg-green-400 rounded'>RESUME</button>
               <p className='px-8 text-2xl md:text-4xl py-5 leading-11 font-teko text-gray-500'>//see more</p>
             </a>

          </div> :
          <div className='mobile-menu absolute h-screen w-full bg-black dark:bg-white -translate-x-full duration-500'>

            <a href="#work" className='dark:text-black block py-5 px-8 text-2xl font-tekobold hover:text-green-400 duration-500'>
              PROJECTS
              <p className='text-2xl md:text-4xl py-5 leading-11 font-teko text-gray-500'>//see some projects</p>
            </a>

            <a href="#about" className='dark:text-black block py-5 px-8 text-2xl font-tekobold hover:text-green-400 duration-500'>
              ABOUT
              <p className='text-2xl md:text-4xl py-5 leading-11 font-teko text-gray-500'>//get to know me</p>
            </a>
            
            <a href="#tools" className='dark:text-black block py-5 px-8 text-2xl font-tekobold hover:text-green-400 duration-500'>
              TOOLS
              <p className='text-2xl md:text-4xl py-5 leading-11 font-teko text-gray-500'>//how the magic happens</p>
            </a>
            
            <a href="#contact" className='dark:text-black block py-5 px-8 text-2xl font-tekobold hover:text-green-400 duration-500'>
              CONTACT
              <p className='text-2xl md:text-4xl py-5 leading-11 font-teko text-gray-500'>//get in touch</p>
            </a>

             <a className="py-5 px-8" href="https://drive.google.com/file/d/1E2MQ2Bo_ih3e8eERFTtyLENq6fmm9rve/view?usp=sharing">
               <button className='text-xl bg-green-500 text-white font-tekobold duration-500 px-4 py-2 hover:bg-green-400 rounded'>RESUME</button>
               <p className='px-8 text-2xl md:text-4xl py-5 leading-11 font-teko text-gray-500'>//see more</p>
             </a>
          </div> 
          }
        </nav>

      <Head>
        <title>Ettione Stuckey Portfolio</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className='dark:bg-white flex-grow px-10 max-w-[1280px] md:mx-auto'>

        <section id=' top' className='min-h-screen'>
          <div className='text-left pt-32 md:pt-20 h-96 mb-32'>
            <h2 className='text-5xl dark:text-black py-2 pt-40 text-green-400 font-medium font-tekobold md:pt-52 md:text-9xl'>HEY!<br/> I'M ETTIONE &#128075;&#127998;</h2>

            <h3 className='dark:text-green-400 text-5xl py-5 leading-11 font-teko mb-96 md:text-9xl'>
              <h3 className='dark:text-green-400 text-5xl py-5 leading-11 font-teko mb-96 md:text-9xl'>
              <Typewriter
                options={{
                  strings: [
                    'Full Stack Developer', 
                    'Front End Developer', 
                    'Back End Developer',
                  ],
                  autoStart: true,
                  loop: true,
                }}
              />
              </h3>
            </h3>

            
          </div>

          <div className='flex pt-20 md:h-96 md:mt-50 md:pt-64 md:mb-20'>
            <a href='#work'>
              <BsFillArrowDownCircleFill className='dark:text-black cursor-pointer md:text-6xl text-5xl h-96 md:h-80 animate-bounce'/>
            </a>
          </div>
        </section>


        <section id='work' className='mb-20 md:mt-5'>
            
          <h3 className='text-5xl md:text-7xl py-5 leading-11 font-teko text-green-400'>
            &lt;wrapper id="PROJECTS"&gt;
          </h3>

          <div className='pb-20 md:max-w-[900px] md:mx-auto'>
            <div className='relative overflow-hidden bg-white/40 mb-2 md:h-auto'>

              <Image width={300} height={300} alt='park' src={park} className="h-full w-full md:aspect-video" />
              <div className='absolute h-full w-full bg-black/70 flex items-center justify-center bottom-0 opacity-100 '>
                <div>
                  <h3 className='text-4xl md:text-6xl p-5 leading-11 font-tekobold'>National Parks Finder</h3>
                  <p className='text-xl md:text-3xl py-5 leading-11 font-teko px-5'>
                    With a Back-End powered by <span className='text-green-400'>FLASK</span>, I used 
                    <span className='text-green-400'> REST API</span> to find local parks, explore amenities, and track weather information. I then used
                    <span className='text-green-400'> SQLALCHEMY</span> to create user authentication, and
                    <span className='text-green-400'> HEROKU</span> to host it all. 
                    </p>
                    <p className='text-xl md:text-2xl py-5 leading-11 font-teko px-5'>
                      This project is hosted on <span className='text-green-400'>HEROKU</span>-free tier and may take a moment to spin up! 
                    </p>
                </div>
              </div>
            </div>

            <h3 className='text-2xl md:text-4xl py-5 leading-11 font-teko text-gray-500'>//Tech stack</h3>
            <div className='flex-wrap flex gap-4 w-auto md:text-3xl'>
              <div className='border px-3 py-1 font-tekobold bg-white dark:bg-black dark:text-white text-black text-xl'>PYTHON</div>
              <div className='border px-3 py-1 font-tekobold bg-white dark:bg-black dark:text-white text-black text-xl'>FLASK</div>
              <div className='border px-3 py-1 font-tekobold bg-white dark:bg-black dark:text-white text-black text-xl'>HTML</div>
              <div className='border px-3 py-1 font-tekobold bg-white dark:bg-black dark:text-white text-black text-xl'>CSS</div>
              <div className='border px-3 py-1 font-tekobold bg-white dark:bg-black dark:text-white text-black text-xl'>JAVASCRIPT</div>
              <div className='border px-3 py-1 font-tekobold bg-white dark:bg-black dark:text-white text-black text-xl'>SQLALCHEMY</div>
            </div>
            <h3 className='text-2xl md:text-4xl py-5 leading-11 font-teko text-gray-500'>//See it in action</h3>

            <div className='flex mb-2'> 
              <p className='dark:text-black font-teko text-xl md:text-4xl pr-3'>See the code</p>
              <a href='https://github.com/stvckey/National-Park-Finder' className='flex cursor-pointer pl-0'><AiFillGithub className='dark:text-black text-2xl md:text-4xl'/></a>
            </div>

            <div className='flex'> 
              <p className='dark:text-black font-teko text-xl md:text-4xl pr-3'>Visit the site</p>
              <a href='https://morning-scrubland-18297.herokuapp.com/' className='flex cursor-pointer pl-0'><AiOutlineLink className='dark:text-black text-2xl md:text-4xl'/></a>
            </div> 
          </div>



          <div className='pb-20 md:max-w-[900px] md:mx-auto'>
            <div className='relative overflow-hidden bg-white/40 mb-2 md:h-auto'>
              <Image width={300} height={300} alt='dream' src={dream} className="h-full w-full md:aspect-video"/>
              <div className='absolute h-full w-full bg-black/70 flex items-center justify-center bottom-0 opacity-100'>
                <div>
                  <h3 className='text-4xl md:text-6xl p-5 leading-11 font-tekobold'>Dreamland Estate</h3>
                  <p className='text-xl md:text-3xl py-5 leading-11 font-teko px-5'>
                    This time using <span className='text-green-400'>PHP</span> for the Back-End and <span className='text-green-400'>SQL</span> for user authentication, 
                    I worked with a group to produce a faux realtor website to facilitate the buying of homes between buyers, sellers, and the website admin.
                  </p>
                  <p className='text-xl md:text-2xl py-5 leading-11 font-teko px-5'>
                    This project makes use of <span className='text-green-400'>Javascript</span> and <span className='text-green-400'>SCSS</span> for it's Front-End
                  </p>
                </div>
              </div>
            </div>

            <h3 className='text-2xl md:text-4xl py-5 leading-11 font-teko text-gray-500'>//Tech stack</h3>
            <div className='flex-wrap flex gap-4 w-auto md:text-3xl'>
              <div className='border px-3 py-1 font-tekobold bg-white dark:bg-black dark:text-white text-black text-xl md:text-3xl'>PHP</div>
              <div className='border px-3 py-1 font-tekobold bg-white dark:bg-black dark:text-white text-black text-xl md:text-3xl'>HTML</div>
              <div className='border px-3 py-1 font-tekobold bg-white dark:bg-black dark:text-white text-black text-xl md:text-3xl'>CSS</div>
              <div className='border px-3 py-1 font-tekobold bg-white dark:bg-black dark:text-white text-black text-xl md:text-3xl'>SQL</div>
              <div className='border px-3 py-1 font-tekobold bg-white dark:bg-black dark:text-white text-black text-xl md:text-3xl'>JAVASCRIPT</div>
            </div>
            <h3 className='text-2xl md:text-4xl py-5 leading-11 font-teko text-gray-500'>//See it in action</h3>

            <div className='flex mb-2'> 
              <p className='dark:text-black font-teko text-xl md:text-4xl pr-3'>See the code</p>
              <a href='https://github.com/stvckey/Dreamland-Real-Estate' className='flex cursor-pointer pl-0'><AiFillGithub className='dark:text-black text-2xl md:text-4xl'/></a>
            </div>

            <div className='flex'> 
              <p className='dark:text-black font-teko text-xl md:text-4xl pr-3'>View the demo</p>
              <a href='https://drive.google.com/file/d/1HWhT2vaWcVMCIHKVeaZwxQp6UcqNQC-b/view?usp=sharing' className='flex cursor-pointer pl-0'><AiOutlineLink className='dark:text-black md:text-4xl text-2xl'/></a>
            </div> 
          </div>



          <div className='pb-20 md:max-w-[900px] md:mx-auto'>

            <div className='relative overflow-hidden bg-white/40 mb-2 md:h-auto'>
              <Image width={300} height={300} alt='movies' src={movies1} className="object-cover h-full w-full md:aspect-video" />
              <div className='absolute h-full w-full bg-black/70 flex items-center justify-center bottom-0 opacity-100 transition-all duration-300'>
                <div>
                  <h3 className='text-4xl md:text-6xl p-5 leading-11 font-tekobold'>Movie Rater</h3>
                  <p className='text-xl md:text-3xl py-5 leading-11 font-teko px-5'>
                    With a Back-End powered by <span className='text-green-400'>FLASK</span>, I used 
                    <span className='text-green-400'> REST API</span> to collect data on recently released films. I then used
                    <span className='text-green-400'> SQLALCHEMY</span> to create user authentication, and
                    <span className='text-green-400'> HEROKU</span> to host it all. 
                    </p>
                </div>
              </div>
            </div>

            <h3 className='text-2xl md:text-4xl py-5 leading-11 font-teko text-gray-500'>//Tech stack</h3>
            <div className='flex-wrap flex gap-4 w-auto md:text-3xl'>
              <div className='border px-3 py-1 font-tekobold bg-white dark:bg-black dark:text-white text-black text-xl'>JAVASCRIPT</div>
              <div className='border px-3 py-1 font-tekobold bg-white dark:bg-black dark:text-white text-black text-xl'>SQLALCHEMY</div>
              <div className='border px-3 py-1 font-tekobold bg-white dark:bg-black dark:text-white text-black text-xl'>PYTHON</div>
              <div className='border px-3 py-1 font-tekobold bg-white dark:bg-black dark:text-white text-black text-xl'>FLASK</div>
              <div className='border px-3 py-1 font-tekobold bg-white dark:bg-black dark:text-white text-black text-xl'>HTML</div>
              <div className='border px-3 py-1 font-tekobold bg-white dark:bg-black dark:text-white text-black text-xl'>CSS</div>
            </div>
            <h3 className='text-2xl md:text-4xl py-5 leading-11 font-teko text-gray-500'>//See it in action</h3>

            <div className='flex mb-2'> 
              <p className='dark:text-black font-teko text-xl md:text-4xl pr-3'>See the code</p>
              <a href='https://github.com/stvckey/Movie-Rating-App' className='flex cursor-pointer pl-0'><AiFillGithub className='dark:text-black text-2xl md:text-4xl'/></a>
            </div>
          </div>



          <div className='pb-20 md:max-w-[900px] md:mx-auto'>
            <div className='relative overflow-hidden bg-white/40 mb-2 md:h-auto'>
              <Image width={300} height={300} alt='site' src={site} className="h-full w-full md:aspect-video" />               
              <div className='absolute h-full w-full bg-black/70 flex items-center justify-center bottom-0 opacity-100 transition-all duration-300'>
                <div>

                  <h3 className='text-4xl md:text-6xl p-5 leading-11 font-tekobold'>Web Portfolio</h3>
                  <p className='text-xl md:text-3xl py-5 leading-11 font-teko px-5'>
                    You're already here! Thanks for visiting &#127881;
                  </p>
                </div>
              </div>
            </div>

            <h3 className='text-2xl md:text-4xl py-5 leading-11 font-teko text-gray-500'>//Tech stack</h3>
            <div className='flex-wrap flex gap-4 w-auto text-xl md:text-3xl'>
              <div className='border px-3 py-1 font-tekobold bg-white dark:bg-black dark:text-white text-black'>JAVASCRIPT</div>
              <div className='border px-3 py-1 font-tekobold bg-white dark:bg-black dark:text-white text-black'>NEXT.JS</div>
              <div className='border px-3 py-1 font-tekobold bg-white dark:bg-black dark:text-white text-black'>HTML</div>
              <div className='border px-3 py-1 font-tekobold bg-white dark:bg-black dark:text-white text-black'>CSS</div>
              <div className='border px-3 py-1 font-tekobold bg-white dark:bg-black dark:text-white text-black'>TAILWIND</div>
            </div>
            <h3 className='text-2xl md:text-4xl py-5 leading-11 font-teko text-gray-500'>//See it in action</h3>

            <div className='flex mb-2'> 
              <p className='dark:text-black font-teko text-xl md:text-4xl pr-3'>See the code</p>
              <a href='' className='flex cursor-pointer pl-0'><AiFillGithub className='dark:text-black text-2xl md:text-4xl'/></a>
            </div>
          </div>

          <h3 className='text-5xl md:text-7xl py-5 leading-11 font-teko text-green-400'>
            &lt;/wrapper&gt;
          </h3>

        </section>


        <section id='about' className='mb-20'>
          <h2 className='text-5xl md:text-7xl py-5 leading-10 font-teko text-green-400'>
            &lt;wrapper id="about"&gt;
          </h2>

          <p className='py-1 font-teko dark:text-black text-white text-xl md:text-5xl tracking-wide'>
            I'm a Full Stack Developer who's been building web applications 
            since the start of my college career. Since then, I've worked on 
            a number of personal projects, and even taken on freelance projects 
            for clients in my community.
          </p>

          <p className='py-5 md:text-4xl font-teko text-gray-500 text-xl tracking-wide'>
            // for more details on my experience ⬇️
          </p>



          <h3 className='dark:text-black text-5xl md:text-7xl pt-5 leading-normal font-teko tracking-wide'>
            0. Georgia State University
          </h3>
          <h4 className='font-teko text-green-400 text-2xl md:text-5xl tracking-wide'>
            Student
          </h4>
          <h5 className='dark:text-black font-teko text-white text-2xl md:text-4xl tracking-wide'>
            GRAD: 2022
          </h5>
          <p className='dark:text-black mb-5 font-teko text-white text-2xl tracking-wide'>
            Majoring in Computer Science with a concentration in Computer 
            Software Systems, I am proud to say I've graduated from Georgia 
            State University.
          </p>
          <h5 className='font-teko text-green-400 text-2xl md:text-3xl tracking-wide'>
            Check out some of my relevant course work:
          </h5>

          <ul className='decoration-green-400'>
            <li className='dark:text-black font-teko text-white text-2xl md:text-3xl tracking-wide'>
              &#8226; Data Structures
            </li>
            <li className='dark:text-black font-teko text-white text-2xl md:text-3xl tracking-wide'>
              &#8226; Software Engineering
            </li>
            <li className='dark:text-black font-teko text-white text-2xl md:text-3xl tracking-wide'>
              &#8226; Web Programming
            </li>
          </ul>

          <h3 className='dark:text-black text-5xl md:text-7xl pt-5 leading-normal font-teko tracking-wide'>
            1. CarMax
          </h3>
          <h4 className='font-teko text-green-400 text-2xl md:text-5xl tracking-wide'>
            Inventory Associate
          </h4>
          <h5 className='dark:text-black font-teko text-white text-2xl md:text-4xl tracking-wide'>
            2018-CURRENT
          </h5>
          <p className='dark:text-black mb-5 font-teko text-white text-2xl md:text-3xl tracking-wide'>
            Conducted quality vehicle inspections and 
            appraisals to assist customers with the buying and selling of their vehicle.
          </p>


          <h3 className='dark:text-black text-5xl md:text-7xl pt-5 leading-normal font-teko tracking-wide'>
            2. RaceTrac
          </h3>
          <h4 className='font-teko text-green-400 text-2xl md:text-5xl tracking-wide'>
            Cashier
          </h4>
          <h5 className='dark:text-black font-teko text-white text-2xl md:text-4xl tracking-wide'>
            2018-2018
          </h5>
          <p className='dark:text-black mb-5 font-teko text-white text-2xl md:text-3xl tracking-wide'>
            Provided prompt, efficient, and courteous guest service.
          </p>


          <h3 className='dark:text-black text-5xl md:text-7xl pt-5 leading-normal font-teko tracking-wide'>
            3. Chick-Fil-A
          </h3>
          <h4 className='font-teko text-green-400 text-2xl md:text-5xl tracking-wide'>
            Cashier
          </h4>
          <h5 className='dark:text-black font-teko text-white text-2xl md:text-4xl tracking-wide'>
            2016-2018
          </h5>
          <p className='dark:text-black mb-5 font-teko text-white text-2xl md:text-3xl tracking-wide'>
            Completed sales transactions within establishment. (<span className='text-green-400'> My Pleasure! &#128020;</span>)
          </p>
          
          <h3 className='text-5xl md:text-7xl py-5 leading-11 font-teko text-green-400'>
            &lt;/wrapper&gt;
          </h3>







        </section>

        <section id='tools' className='mb-20'>
          <h2 className='text-5xl md:text-7xl py-5 leading-10 font-teko text-green-400'>
            &lt;wrapper id="tools"&gt;
          </h2>
          <h3 className='text-2xl md:text-4xl py-5 leading-11 font-teko text-gray-500'>
            // I like to see myself as somewhat of a programming aficionado, 
            but here are some of my favorite tools currently
          </h3>

          <div className='md:grid md:grid-cols-3'>
            <div>
              <h2 className='text-2xl py-5 leading-10 font-teko text-green-400'>
                Back-End Technology
              </h2>
              <h2 className='dark:text-black text-2xl leading-10 font-teko white'>Node</h2>
              <h2 className='dark:text-black text-2xl leading-10 font-teko white'>PostgreSQL</h2>
              <h2 className='dark:text-black text-2xl leading-10 font-teko white'>REST API</h2>
              <h2 className='dark:text-black text-2xl leading-10 font-teko white'>Python</h2>
              <h2 className='dark:text-black text-2xl leading-10 font-teko white'>Java</h2>
              <h2 className='dark:text-black text-2xl leading-10 font-teko white'>Flask</h2>
            </div>

            <div>
              <h2 className='text-2xl py-5 leading-10 font-teko text-green-400'>
                Front-End Technology
              </h2>
              <h2 className='dark:text-black text-2xl leading-10 font-teko white'>JavaScript</h2>
              <h2 className='dark:text-black text-2xl leading-10 font-teko white'>React</h2>
              <h2 className='dark:text-black text-2xl leading-10 font-teko white'>HTML5</h2>
              <h2 className='dark:text-black text-2xl leading-10 font-teko white'>CSS3</h2>
              <h2 className='dark:text-black text-2xl leading-10 font-teko white'>Next.js</h2>
              <h2 className='dark:text-black text-2xl leading-10 font-teko white'>Tailwind</h2>
            </div>

            <div>
              <h2 className='text-2xl py-5 leading-10 font-teko text-green-400'>
                Other
              </h2>
              <h2 className='dark:text-black text-2xl leading-10 font-teko white'>Agile</h2>
              <h2 className='dark:text-black text-2xl leading-10 font-teko white'>Heroku</h2>
              <h2 className='dark:text-black text-2xl leading-10 font-teko white'>Git</h2>
              <h2 className='dark:text-black text-2xl leading-10 font-teko white'>OAuth</h2>
              <h2 className='dark:text-black text-2xl leading-10 font-teko white'>TDD</h2>
              <h2 className='dark:text-black text-2xl leading-10 font-teko white'>CI/CD</h2>
            </div>

          </div>



          <h3 className='text-5xl md:text-7xl py-10 leading-11 font-teko text-green-400'>
            &lt;/wrapper&gt;
          </h3>
        </section>

        <section id='contact' className='mb-20 pb-10'>
          <h2 className='dark:text-black text-5xl md:text-7xl py-5 leading-10 font-teko text-green-400'>
            &lt;wrapper id="contact"&gt;
          </h2>
          <h2 className='dark:text-black text-5xl md:text-8xl py-5 leading-10 font-teko text-white'>
            Get in touch &#x1F4E1;
          </h2>

          <h3 className='dark:text-black text-2xl md:text-4xl pb-5 leading-11 font-teko text-white'>Have any questions? Feel free to email me or find me on the web!</h3>

          <h3 className='text-2xl md:text-4xl pb-5 leading-11 font-teko text-gray-500'>//Socials</h3>

          <div className='dark:text-black text-5xl md:text-8xl justify-center flex gap-10 py-3'>
            <a href="https://github.com/stvckey">
              <AiFillGithub />
            </a>
            <a href="https://www.linkedin.com/in/ettione-stuckey-ii-143b8a242/">
              <AiFillLinkedin />
            </a>
          </div>
          
          <div className='mt-6'>
          <form className='space-y-8' action='https://formsubmit.co/ettionestuckeyii@gmail.com' method='POST'>
            <input className='shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5' type="text" name="name" placeholder='Name' required></input>
            <input className='shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5' type="email" name="email" placeholder='Email Address' required></input>
            <input className='shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5' type="text" name="message" placeholder='Type your message here..' required></input>

            <input type="hidden" name="_next" value="http://mydomain.co/thankyou.tsx"></input>
            <button className="bg-green-400 rounded-lg block w-full p-2.5" type="submit">Send</button>
          </form>
          </div>
        </section>  
  
      </main>
      </div>
    </div>
    </>
  )

  
}
