import Head from 'next/head'
import {BsFillMoonStarsFill, BsFillArrowDownCircleFill} from 'react-icons/bs';
import {AiFillGithub, AiFillLinkedin, AiOutlineLink, AiFillFolderOpen, AiFillFolder} from 'react-icons/ai'
import Image from 'next/image';
import park from '../public/nationalpark.jpg'
import dream from '../public/dreamland.png'
import pep2 from '../public/PEP2-portfolio-img.png'
import pep1 from '../public/PEP1-portfolio-img.png'
import autojobapp from '../public/job-applier-img.png'
import { useState } from 'react';
import Typewriter from 'typewriter-effect';




export default function Home() {

  const[darkMode, setDarkMode] = useState(false);
  const[mobileMode, setMobileMode] = useState(false);

  return (
    <>

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
                <a href="#skills" className='py-5 px-4 text-3xl font-tekobold hover:text-green-400 duration-500'>SKILLS</a>
                <a href="#experience" className='py-5 px-4 text-3xl font-tekobold hover:text-green-400 duration-500'>EXPERIENCE</a>
                <a href="#projects" className='py-5 px-4 text-3xl font-tekobold hover:text-green-400 duration-500'>PROJECTS</a>
                <a href="#contact" className='py-5 px-4 text-3xl font-tekobold hover:text-green-400 duration-500'>CONTACT</a>
              </div>

              <div className='hidden md:flex items-center space-x-6'>
                <div onClick={ () => setDarkMode(!darkMode)} className= "text-3xl cursor-pointer hover:text-green-400 duration-500">
                  <BsFillMoonStarsFill/>              
                </div>

                <div className= "text-3xl cursor-pointer hover:text-green-400 duration-500">
                  <a className="text-4xl"href="https://github.com/stvckey" target="_blank"><AiFillGithub /></a>                  
                </div>

                <div className= "text-3xl cursor-pointer hover:text-green-400 duration-500">
                  <a className="text-4xl"href="https://www.linkedin.com/in/ettione-stuckey/" target="_blank"><AiFillLinkedin /></a>                  
                </div>

                
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
            
            <a href="#skills" onClick={() => setMobileMode(!mobileMode)} className='dark:text-black block py-5 px-8 text-2xl font-tekobold hover:text-green-400 duration-500'>
              SKILLS
              <p className='text-2xl md:text-4xl py-4 leading-11 font-teko text-gray-500'>//how the magic happens</p>
            </a>

            <a href="#experience" onClick={() => setMobileMode(!mobileMode)} className='dark:text-black block py-5 px-8 text-2xl font-tekobold hover:text-green-400 duration-500'>
              EXPERIENCE
              <p className='text-2xl md:text-4xl py-4 leading-11 font-teko text-gray-500'>//get to know me</p>
            </a>

            <a href="#projects" onClick={() => setMobileMode(!mobileMode)} className='dark:text-black block py-5 px-8 text-2xl font-tekobold hover:text-green-400 duration-500'>
              PROJECTS
              <p className='text-2xl md:text-4xl py-4 leading-11 font-teko text-gray-500'>//see my projects</p>
            </a>

            <a href="#contact" onClick={() => setMobileMode(!mobileMode)} className='dark:text-black block py-5 px-8 text-2xl font-tekobold hover:text-green-400 duration-500'>
              CONTACT
              <p className='text-2xl md:text-4xl py-4 leading-11 font-teko text-gray-500'>//get in touch</p>
            </a>

            <div onClick={ () => setDarkMode(!darkMode)} className= "dark:text-black py-5 px-8 text-3xl hover:text-green-400 duration-500">
              <BsFillMoonStarsFill/>
              <p className='text-2xl md:text-4xl py-4 leading-11 font-teko text-gray-500'>//toggle darkmode!</p>
            </div>

            <div>
              <div className= "text-3xl py-5 px-8 flex flex-row">
              <a className="text-4xl cursor-pointer hover:text-green-400 duration-500"href="https://github.com/stvckey" target="_blank"><AiFillGithub /></a>
              <a className="text-4xl px-2 cursor-pointer hover:text-green-400 duration-500"href="https://www.linkedin.com/in/ettione-stuckey/" target="_blank"><AiFillLinkedin /></a>                 
              </div>
              <p className='text-2xl md:text-4xl px-8 leading-11 font-teko text-gray-500'>//Github | LinkedIn</p>
            </div>

          </div> :
          <div className='mobile-menu absolute h-screen w-full bg-black dark:bg-white -translate-x-full duration-500'>

            <a href="#skills" className='dark:text-black block py-5 px-8 text-2xl font-tekobold hover:text-green-400 duration-500'>
              SKILLS
              <p className='text-2xl md:text-4xl py-5 leading-11 font-teko text-gray-500'>//how the magic happens</p>
            </a>

            <a href="#experience" className='dark:text-black block py-5 px-8 text-2xl font-tekobold hover:text-green-400 duration-500'>
              EXPERIENCE
              <p className='text-2xl md:text-4xl py-5 leading-11 font-teko text-gray-500'>//get to know me</p>
            </a>

            <a href="#projects" className='dark:text-black block py-5 px-8 text-2xl font-tekobold hover:text-green-400 duration-500'>
              PROJECTS
              <p className='text-2xl md:text-4xl py-5 leading-11 font-teko text-gray-500'>//see some projects</p>
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
                    'Full Stack Software Engineer', 
                    'Data Engineer', 
                    'AWS Cloud Practitioner'
                  ],
                  autoStart: true,
                  loop: true,
                }}
              />
              </h3>
            </h3>

            
          </div>

          <div className='flex pt-20 md:h-96 md:mt-50 md:pt-64 md:mb-20'>
            <a href='#skills'>
              <BsFillArrowDownCircleFill className='dark:text-black cursor-pointer md:text-6xl text-5xl h-96 md:h-80 animate-bounce'/>
            </a>
          </div>
        </section>

        <section id='skills' className='mb-20'>
          <h2 className='text-5xl md:text-7xl py-5 leading-10 font-teko text-green-400'>
            &lt;wrapper id="<span className='text-white dark:text-black'>SKILLS</span>"&gt;
          </h2>
          <h3 className='text-2xl md:text-4xl py-5 leading-11 font-teko text-gray-500'>
            // These are some of the skills and technologies I'm proficient in.
          </h3>

          <div className='md:grid md:grid-cols-3'>
            <div>
              <h2 className='text-2xl py-5 leading-10 font-teko text-green-400'>
                Back-End Technology
              </h2>
              <h2 className='dark:text-black text-2xl leading-10 font-teko white'>Python</h2>
              <h2 className='dark:text-black text-2xl leading-10 font-teko white'>Java</h2>
              <h2 className='dark:text-black text-2xl leading-10 font-teko white'>PostgreSQL</h2>
              <h2 className='dark:text-black text-2xl leading-10 font-teko white'>MySQL</h2>
              <h2 className='dark:text-black text-2xl leading-10 font-teko white'>ServiceNow</h2>
              <h2 className='dark:text-black text-2xl leading-10 font-teko white'>PHP</h2>
            </div>

            <div>
              <h2 className='text-2xl py-5 leading-10 font-teko text-green-400'>
                Front-End Technology
              </h2>
              <h2 className='dark:text-black text-2xl leading-10 font-teko white'>JavaScript</h2>
              <h2 className='dark:text-black text-2xl leading-10 font-teko white'>React</h2>
              <h2 className='dark:text-black text-2xl leading-10 font-teko white'>HTML5</h2>
              <h2 className='dark:text-black text-2xl leading-10 font-teko white'>CSS3</h2>
            </div>

            <div>
              <h2 className='text-2xl py-5 leading-10 font-teko text-green-400'>
                Other Skills
              </h2>
              <h2 className='dark:text-black text-2xl leading-10 font-teko white'>Selenium</h2>
              <h2 className='dark:text-black text-2xl leading-10 font-teko white'>AWS</h2>
              <h2 className='dark:text-black text-2xl leading-10 font-teko white'>Git</h2>
              <h2 className='dark:text-black text-2xl leading-10 font-teko white'>REST API</h2>
              <h2 className='dark:text-black text-2xl leading-10 font-teko white'>Pandas</h2>
              <h2 className='dark:text-black text-2xl leading-10 font-teko white'>NumPy</h2>
            </div>

          </div>
          
          <h3 className='text-5xl md:text-7xl py-10 leading-11 font-teko text-green-400'>
            &lt;/wrapper&gt;
          </h3>
        </section>

        
        <section id='experience' className='mb-20'>
          <h2 className='text-5xl md:text-7xl py-5 leading-10 font-teko text-green-400'>
            &lt;wrapper id="<span className='text-white dark:text-black'>EXPERIENCE</span>"&gt;
          </h2>

          <p className='py-1 font-teko dark:text-black text-white text-xl md:text-5xl tracking-wide'>
          Recent JUMP graduate pursuing a <span className="text-green-400">PYTHON</span> Development career, 
          looking to combine nearly 18 months of industry equivalent experience with a strong digital 
          mindset to become a valued asset your organization.
          </p>

          <br></br>

          <p className='py-1 font-teko dark:text-black text-white text-xl md:text-5xl tracking-wide'>
          I've spent meaningful time building applications with <span className="text-green-400">PYTHON</span>, 
          creating dynamic web applications with <span className="text-green-400">REACT</span>, managing databases 
          with <span className="text-green-400">SQL</span>, and deploying / managing scalable cloud infrastructure on 
          <span className="text-green-400"> AWS</span>.
          </p>

          <p className='py-5 md:text-4xl font-teko text-gray-500 text-xl tracking-wide'>
            // See more details on my experience ⬇️
          </p>


          <h3 className='dark:text-black text-5xl md:text-7xl pt-5 leading-normal font-teko tracking-wide'>
            0. Cognixia
          </h3>
          <h4 className='font-teko text-green-400 text-2xl md:text-5xl tracking-wide'>
            Data Engineer
          </h4>
          <h5 className='dark:text-black font-teko text-white text-3xl md:text-4xl tracking-wide'>
            DEC 2023 - PRESENT
          </h5>
          <br></br>
          <p className='dark:text-black mb-5 font-teko text-white text-2xl md:text-3xl tracking-wide'>
          Cognixia’s JUMP program is a hyper-intense technical training program that gives top STEM talent 
          from across the U.S. the equivalent of 12-18 months of industry experience. Not only do they up-skill 
          their technical abilities, they also evolve their digital mindset to successfully adapt and utilize 
          technology in an efficient manner so they can JUMP start their careers via deployment with Collabera clients.
          </p>

          <ul className='decoration-green-400'>
            <li className='dark:text-black font-teko mb-2 text-white text-2xl md:text-3xl tracking-wide'>
              &#8226;	<span className="text-green-400">Database Design</span> – Designed databases under ETL, ACID, and SOLID principles.
            </li>
            <li className='dark:text-black font-teko mb-2 text-white text-2xl md:text-3xl tracking-wide'>
              &#8226;	<span className="text-green-400">Data Visualization</span> – Used Python libraries Matplotlib and Seaborn to communicate 
              findings with shareholders.
            </li>
            <li className='dark:text-black font-teko mb-2 text-white text-2xl md:text-3xl tracking-wide'>
              &#8226;	<span className="text-green-400">Data Analysis</span> – Validated and analyzed real-world datasets with Pandas. 
            </li>
            <li className='dark:text-black font-teko mb-2 text-white text-2xl md:text-3xl tracking-wide'>
              &#8226;	<span className="text-green-400">Cloud Computing</span> – Developed a database on Amazon Web Services and utilized its data 
              analytics services to draw conclusions 
            </li>
            <li className='dark:text-black font-teko mb-2 text-white text-2xl md:text-3xl tracking-wide'>
              &#8226;	<span className="text-green-400">Database Management</span> – Used RDBMs such as MySQL and MySQL Workbench 
            </li>
            <li className='dark:text-black font-teko mb-2 text-white text-2xl md:text-3xl tracking-wide'>
              &#8226;	<span className="text-green-400">Technical Articulation</span> – Generation of ETL Pipelines via Scrum, including data extraction, 
              cleaning, transformation, and loading into a SQL database 
            </li>
            <li className='dark:text-black font-teko mb-2 text-white text-2xl md:text-3xl tracking-wide'>
              &#8226;	<span className="text-green-400">Collaberative Development</span> – Utilized Software Development Lifecycle Models such as Waterfall 
              and Agile to work effectively with teammates
            </li>
          </ul>

          <h3 className='dark:text-black text-5xl md:text-7xl pt-5 leading-normal font-teko tracking-wide'>
            1. Innovative IT
          </h3>
          <h4 className='font-teko text-green-400 text-2xl md:text-5xl tracking-wide'>
            ServiceNow Developer
          </h4>
          <h5 className='dark:text-black font-teko text-white text-2xl md:text-4xl tracking-wide'>
            JUN 2023-SEPT 2023
          </h5>
          <br></br>
          <p className='dark:text-black mb-5 font-teko text-white text-2xl md:text-3xl tracking-wide'>
          Designined, developed, and implemented solutions within the ServiceNow platform. Gained an in-depth 
          knowledge of IT service management (ITSM) processes, ServiceNow architecture, and best practices. 
          </p>
          
          <ul className='decoration-green-400'>
            <li className='dark:text-black font-teko mb-2 text-white text-2xl md:text-3xl tracking-wide'>
              &#8226;	<span className="text-green-400">ServiceNow API Development</span> Developed and 
              maintained ServiceNow workflows, business rules, client scripts, UI policies, and data policies 
              to automate and streamline business processes.
            </li>
            <li className='dark:text-black font-teko mb-2 text-white text-2xl md:text-3xl tracking-wide'>
              &#8226;	<span className="text-green-400">Module Design</span> Designed and implemented 
              ServiceNow modules, including Incident Management, Change
              Management, Problem Management, and Service Catalogs
            </li>
          </ul>

          <h3 className='dark:text-black my-10 text-6xl md:text-8xl pt-5 leading-normal font-teko tracking-wide'>
            Education & Achievements
          </h3>

          <h3 className='dark:text-black text-5xl md:text-7xl pt-5 leading-normal font-teko tracking-wide'>
            0. Bachelor of Computer Science
          </h3>
          <h4 className='font-teko text-green-400 text-4xl md:text-6xl tracking-wide'>
            Georgia State University
          </h4>
          <h5 className='dark:text-black font-teko text-white text-3xl md:text-5xl tracking-wide'>
            GRAD 2023
          </h5>

          <h3 className='dark:text-black text-5xl md:text-7xl pt-5 leading-normal font-teko tracking-wide'>
            1. Google Data Analysis by Google on Coursera
          </h3>
          <h4 className='font-teko text-green-400 text-4xl md:text-6xl tracking-wide'>
            Coursera
          </h4>
          <h5 className='dark:text-black font-teko text-white text-3xl md:text-5xl tracking-wide'>
            AUG 2023
          </h5>
          <div className='flex'> 
              <p className='dark:text-black font-teko text-4xl md:text-4xl pr-3'>View the achievement</p>
              <a href='https://www.coursera.org/account/accomplishments/professional-cert/R7786Y85D83W?utm_source=link&utm_medium=certificate&utm_content=cert_image&utm_campaign=sharing_cta&utm_product=prof' 
                target="_blank" className='flex cursor-pointer pl-0'>
                <AiOutlineLink className='dark:text-black text-2xl md:text-4xl'/>
              </a>
          </div>

          <h3 className='dark:text-black text-5xl md:text-7xl pt-5 leading-normal font-teko tracking-wide'>
            2. Lyft Back-End Engineering Job Simulation
          </h3>
          <h4 className='font-teko text-green-400 text-4xl md:text-6xl tracking-wide'>
            The Forage
          </h4>
          <h5 className='dark:text-black font-teko text-white text-3xl md:text-5xl tracking-wide'>
            OCT 2023
          </h5>
          <div className='flex'> 
              <p className='dark:text-black font-teko text-4xl md:text-4xl pr-3'>View the achievement</p>
              <a href='https://www.linkedin.com/feed/update/urn:li:activity:7121583684230529025/?originTrackingId=rp%2BKrAgGS52urhq3Wi4YfQ%3D%3D' 
                target="_blank" className='flex cursor-pointer pl-0'>
                <AiOutlineLink className='dark:text-black text-2xl md:text-4xl'/>
              </a>
          </div>


          
          <h3 className='text-5xl md:text-7xl py-5 leading-11 font-teko text-green-400'>
            &lt;/wrapper&gt;
          </h3>

        </section>

        <section id='projects' className='mb-20 md:mt-5'>
            
          <h3 className='text-5xl md:text-7xl py-5 leading-11 font-teko text-green-400'>
            &lt;wrapper id="<span className='text-white dark:text-black'>PROJECTS</span>"&gt;
          </h3>

        
          
          <div className='pb-20 md:max-w-[900px] md:mx-auto'>
            <div className='relative overflow-hidden bg-white/40 mb-2 md:h-auto'>

              <Image width={300} height={300} alt='park' src={pep2} className="h-full w-full md:aspect-video" />
              <div className='absolute h-full w-full bg-black/70 flex items-center justify-center bottom-0 opacity-100 '>
                <div>
                  <h3 className='text-4xl md:text-6xl p-5 leading-11 font-tekobold'>Respiratory Illness ETL Pipeline and Data Analysis</h3>
                  <p className='md:text-4xl px-5 font-teko'>(FEB 2024)</p>
                  <p className='text-xl md:text-3xl py-5 leading-11 font-teko px-5'>
                    &#8226; Worked with a team to extract, transforom, and load raw healthcare data into 
                    an <span className='text-green-400'>AWS RDS <br></br>MySQL</span> database using  
                    <span className='text-green-400'> AWS LAMBDA</span>.
                    <br></br><br></br> 
                    &#8226; Perfomred data analytics using  
                    <span className='text-green-400'> PANDAS</span>, and created insightful vsualizations
                    using <span className='text-green-400'>SEABORN</span>.
                    <br></br><br></br> 
                    &#8226; Created a website on an
                    <span className='text-green-400'> AWS EC2</span> instance to display our findings.
                  </p>
                </div>
              </div>
            </div>

            <h3 className='text-2xl md:text-4xl py-5 leading-11 font-teko text-gray-500'>//Tech stack</h3>
            <div className='flex-wrap flex gap-4 w-auto md:text-3xl'>
              <div className='border px-3 py-1 font-tekobold bg-white dark:bg-black dark:text-white text-black text-xl'>PYTHON</div>
              <div className='border px-3 py-1 font-tekobold bg-white dark:bg-black dark:text-white text-black text-xl'>PANDAS</div>
              <div className='border px-3 py-1 font-tekobold bg-white dark:bg-black dark:text-white text-black text-xl'>SEABORN</div>
              <div className='border px-3 py-1 font-tekobold bg-white dark:bg-black dark:text-white text-black text-xl'>JAVASCRIPT</div>
              <div className='border px-3 py-1 font-tekobold bg-white dark:bg-black dark:text-white text-black text-xl'>MYSQL</div>
              <div className='border px-3 py-1 font-tekobold bg-white dark:bg-black dark:text-white text-black text-xl'>EC2</div>
              <div className='border px-3 py-1 font-tekobold bg-white dark:bg-black dark:text-white text-black text-xl'>RDS</div>
              <div className='border px-3 py-1 font-tekobold bg-white dark:bg-black dark:text-white text-black text-xl'>LAMBDA</div>
            </div>
            <h3 className='text-2xl md:text-4xl py-5 leading-11 font-teko text-gray-500'>//See it in action</h3>

            <div className='flex mb-2'> 
              <p className='dark:text-black font-teko text-xl md:text-4xl pr-3'>See the code</p>
              <a href='https://github.com/JTQuinn/Healthcare-Data-Analysis' target="_blank" className='flex cursor-pointer pl-0'><AiFillGithub className='dark:text-black text-2xl md:text-4xl'/></a>
            </div>

            <div className='flex'> 
              <p className='dark:text-black font-teko text-xl md:text-4xl pr-3'>Visit the site</p>
              <a href='http://s3amigoshealthcare.net/' target="_blank" className='flex cursor-pointer pl-0'><AiOutlineLink className='dark:text-black text-2xl md:text-4xl'/></a>
            </div> 
          </div>







          <div className='pb-20 md:max-w-[900px] md:mx-auto'>
            <div className='relative overflow-hidden bg-white/40 mb-2 md:h-auto'>

              <Image width={300} height={300} alt='park' src={pep1} className="h-full w-full md:aspect-video" />
              <div className='absolute h-full w-full bg-black/70 flex items-center justify-center bottom-0 opacity-100 '>
                <div>
                  <h3 className='text-4xl md:text-6xl p-5 leading-11 font-tekobold'>Al Dente's ETL Pipeline and Data Analysis</h3>
                  <p className='md:text-4xl px-5 font-teko'>(JAN 2024)</p>
                  <p className='text-xl md:text-3xl py-5 leading-11 font-teko px-5'>
                    <p>
                      &#8226; Worked with a team to Leveraged mastery of <span className='text-green-400'>PYTHON</span>
                      and <span className='text-green-400'>PANDAS</span> to clean, analyze, load raw data into a <span>MySQL </span> 
                      database.
                    </p>
                    <br></br>
                    <p>
                      &#8226; Designed a <span className='text-green-400'>MySQL</span> database under 
                      <span className='text-green-400'>ETL</span>, <span className='text-green-400'>ACID</span>,
                      and <span className='text-green-400'>SOLID</span> principles.
                    </p> 
                    
                    <br></br> 
                    &#8226; Created insightful visualizations with <span className='text-green-400'>SEABORN</span>.
                  </p>
                </div>
              </div>
            </div>

            <h3 className='text-2xl md:text-4xl py-5 leading-11 font-teko text-gray-500'>//Tech stack</h3>
            <div className='flex-wrap flex gap-4 w-auto md:text-3xl'>
              <div className='border px-3 py-1 font-tekobold bg-white dark:bg-black dark:text-white text-black text-xl'>PYTHON</div>
              <div className='border px-3 py-1 font-tekobold bg-white dark:bg-black dark:text-white text-black text-xl'>PANDAS</div>
              <div className='border px-3 py-1 font-tekobold bg-white dark:bg-black dark:text-white text-black text-xl'>SEABORN</div>
              <div className='border px-3 py-1 font-tekobold bg-white dark:bg-black dark:text-white text-black text-xl'>MYSQL</div>
            </div>
            <h3 className='text-2xl md:text-4xl py-5 leading-11 font-teko text-gray-500'>//Take a look</h3>

            <div className='flex mb-2'> 
              <p className='dark:text-black font-teko text-xl md:text-4xl pr-3'>See the code</p>
              <a href='https://github.com/stvckey/PEP_1' target="_blank" className='flex cursor-pointer pl-0'><AiFillGithub className='dark:text-black text-2xl md:text-4xl'/></a>
            </div>

            <div className='flex'> 
              <p className='dark:text-black font-teko text-xl md:text-4xl pr-3'>View the Demo</p>
              <a href='https://github.com/stvckey/PEP_1/blob/main/documents/Al%20Dente%20ETL.pdf' target="_blank" className='flex cursor-pointer pl-0'><AiOutlineLink className='dark:text-black text-2xl md:text-4xl'/></a>
            </div> 
          </div>






          
          <div className='pb-20 md:max-w-[900px] md:mx-auto'>
            <div className='relative overflow-hidden bg-white/40 mb-2 md:h-auto'>

              <Image width={300} height={300} alt='park' src={autojobapp} className="h-full w-full md:aspect-video" />
              <div className='absolute h-full w-full bg-black/70 flex items-center justify-center bottom-0 opacity-100 '>
                <div>
                  <h3 className='text-4xl md:text-6xl p-5 leading-11 font-tekobold'>Automated LinkedIn Job applier</h3>
                  <p className='md:text-4xl px-5 font-teko'>(NOV. 2023)</p>
                  <p className='text-xl md:text-3xl py-5 leading-11 font-teko px-5'>
                    Leveraged mastery of <span className='text-green-400'>PYTHON</span> and 
                    < span className='text-green-400'>SELENIUM</span> to automate the job 
                    application process on LinkedIn. Simply provide your LinkedIn credentials and 
                    preferred job search,
                    and watch as your applications are done autotomatically. 
                  </p>
                </div>
              </div>
            </div>

            <h3 className='text-2xl md:text-4xl py-5 leading-11 font-teko text-gray-500'>//Tech stack</h3>
            <div className='flex-wrap flex gap-4 w-auto md:text-3xl'>
              <div className='border px-3 py-1 font-tekobold bg-white dark:bg-black dark:text-white text-black text-xl'>PYTHON</div>
              <div className='border px-3 py-1 font-tekobold bg-white dark:bg-black dark:text-white text-black text-xl'>SELENIUM</div>
            </div>
            <h3 className='text-2xl md:text-4xl py-5 leading-11 font-teko text-gray-500'>//Take a look</h3>

            <div className='flex mb-2'> 
              <p className='dark:text-black font-teko text-xl md:text-4xl pr-3'>See the code</p>
              <a href='https://github.com/stvckey/Automated-LinkedIn-Applier' target="_blank" className='flex cursor-pointer pl-0'><AiFillGithub className='dark:text-black text-2xl md:text-4xl'/></a>
            </div>
          </div>


          

          <div className='pb-20 md:max-w-[900px] md:mx-auto'>
            <div className='relative overflow-hidden bg-white/40 mb-2 md:h-auto'>
              <Image width={300} height={300} alt='dream' src={dream} className="h-full w-full md:aspect-video"/>
              <div className='absolute h-full w-full bg-black/70 flex items-center justify-center bottom-0 opacity-100'>
                <div>
                  <h3 className='text-4xl md:text-6xl p-5 leading-11 font-tekobold'>Dreamland Estate</h3>
                  <p className='md:text-4xl px-5 font-teko'>(MAY 2022)</p>
                    <p className='text-xl md:text-3xl py-5 leading-11 font-teko px-5'>
                      &#8226; Developed a dynamic web application designed to streamline the buying and selling 
                      of real estate properties.
                    </p>
                    <p className='text-xl md:text-3xl py-5 leading-11 font-teko px-5'>
                      &#8226; Engineered a feature-rich <span className="text-green-400">PHP </span> 
                      backend, handling user authentication, property management, and transaction processing.
                    </p>
                    <p className='text-xl md:text-3xl py-5 leading-11 font-teko px-5'>
                      &#8226; Designed and developed an admin dashboard, granting real estate 
                      professionals the ability to manage property listings, user accounts, and 
                      transactions with ease with <span className="text-green-400">JAVASCRIPT</span>.
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
            <h3 className='text-2xl md:text-4xl py-5 leading-11 font-teko text-gray-500'>//Take a look</h3>

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

              <Image width={300} height={300} alt='park' src={park} className="h-full w-full md:aspect-video" />
              <div className='absolute h-full w-full bg-black/70 flex items-center justify-center bottom-0 opacity-100 '>
                <div>
                  <h3 className='text-4xl md:text-6xl p-5 leading-11 font-tekobold'>National Parks Finder</h3>
                  <p className='md:text-4xl px-5 font-teko'>(IN PROGRESS)</p>
                  <p className='text-xl md:text-3xl py-5 leading-11 font-teko px-5'>
                    With a Back-End powered by <span className='text-green-400'>FLASK</span>, I used 
                    <span className='text-green-400'> REST API</span> to find local parks, explore amenities, and track weather information. I then used
                    <span className='text-green-400'> POSTGRESQL</span> to create user authentication, and
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
              <div className='border px-3 py-1 font-tekobold bg-white dark:bg-black dark:text-white text-black text-xl'>POSTGRESQL</div>
            </div>
            <h3 className='text-2xl md:text-4xl py-5 leading-11 font-teko text-gray-500'>//Take a look</h3>

            <div className='flex mb-2'> 
              <p className='dark:text-black font-teko text-xl md:text-4xl pr-3'>See the code</p>
              <a href='https://github.com/stvckey/National-Park-Finder' className='flex cursor-pointer pl-0'><AiFillGithub className='dark:text-black text-2xl md:text-4xl'/></a>
            </div>

            <div className='flex'> 
              <p className='dark:text-black font-teko text-xl md:text-4xl pr-3'>Under Construction</p>
              <a className='flex cursor-pointer pl-0'><AiOutlineLink className='dark:text-black text-2xl md:text-4xl'/></a>
            </div> 
          </div>

          <h3 className='text-5xl md:text-7xl py-5 leading-11 font-teko text-green-400'>
            &lt;/wrapper&gt;
          </h3>

        </section>


        <section id='contact' className='mb-20 pb-10'>
          <h2 className='dark:text-black text-5xl md:text-7xl py-5 leading-10 font-teko text-green-400'>
            &lt;wrapper id="<span className="text-white dark:text-black">CONTACT</span>"&gt;
          </h2>
          <h2 className='dark:text-black text-5xl md:text-8xl py-5 leading-10 font-teko text-white'>
            Get in touch &#x1F4E1;
          </h2>

          <h3 className='dark:text-black text-2xl md:text-4xl pb-5 leading-11 font-teko text-white'>Have any questions? Feel free to email me or find me on the web!</h3>

          <h3 className='text-2xl md:text-4xl pb-5 leading-11 font-teko text-gray-500'>//Socials</h3>

          <div className='dark:text-black text-5xl md:text-8xl justify-center flex gap-10 py-3'>
            <a href="https://github.com/stvckey" target="_blank"><AiFillGithub /></a>
            <a href="https://www.linkedin.com/in/ettione-stuckey/" target="_blank"><AiFillLinkedin /></a>
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
