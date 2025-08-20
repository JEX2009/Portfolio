import '/src/assets/Tailwind.css'
import { FaChevronLeft } from "react-icons/fa";
import { FaChevronRight } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { IoIosGitMerge } from "react-icons/io";
import { BiLogoVisualStudio } from "react-icons/bi";
import { FaDocker } from "react-icons/fa";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { FaJs } from "react-icons/fa";
import { FaReact } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { FaPython } from "react-icons/fa";
import { TbBrandDjango } from "react-icons/tb";
import { FaJava } from "react-icons/fa";
import { SiSpring } from "react-icons/si";
import { DiMysql } from "react-icons/di";


export function Technologies() {
    return (
        <>
            <div>
                <div className='flex flex-col items-center justify-center gap-2'>
                    <h2 className="text-4xl font-bold mb-4 tracking-wide text-white"> Technologies</h2>
                    <p className="text-center text-white text-lg mb-10">
                        Here are some of the technologies I work with                        Feel free to explore them and see the code on GitHub.
                    </p>
                </div>
                <div className="bg-gray-800 p-4 rounded-lg flex justify-center  gap-4 overflow-x-auto">
                    <ul className="list-none pl-5 text-white flex gap-4 flex-wrap">
                        <div className='flex flex-col items-center gap-2'>
                            <li className="mb-1 ">Git</li>
                            <IoIosGitMerge
                                color='white'
                                size={32}
                                className='transition-transform duration-200 hover:scale-125'
                            />
                        </div>
                        <div className='flex flex-col items-center gap-2'>
                            <li className="mb-1">GitHub</li>
                            <FaGithub
                                color='white'
                                size={32}
                                className='transition-transform duration-200 hover:scale-125'
                            />
                        </div>
                        <div className='flex flex-col items-center gap-2'>
                            <li className="mb-1">Visual Studio Code</li>
                            <BiLogoVisualStudio
                                color='white'
                                size={32}
                                className='transition-transform duration-200 hover:scale-125'
                            />
                        </div>
                        <div className='flex flex-col items-center gap-2'>
                            <li className="mb-1">Docker</li>
                            <FaDocker
                                color='white'
                                size={32}
                                className='transition-transform duration-200 hover:scale-125'
                            />
                        </div>
                        <div className='flex flex-col items-center gap-2'>
                            <li className="mb-1">HTML</li>
                            <FaHtml5
                                color='white'
                                size={32}
                                className='transition-transform duration-200 hover:scale-125'
                            />
                        </div>
                        <div className='flex flex-col items-center gap-2'>
                            <li className="mb-1">CSS</li>
                            <FaCss3Alt
                                color='white'
                                size={32}
                                className='transition-transform duration-200 hover:scale-125'
                            />
                        </div>
                        <div className='flex flex-col items-center gap-2'>
                            <li className="mb-1">JavaScript</li>
                            <FaJs
                                color='white'
                                size={32}
                                className='transition-transform duration-200 hover:scale-125'
                            />
                        </div>
                        <div className='flex flex-col items-center gap-2'>
                            <li className="mb-1">React</li>
                            <FaReact
                                color='white'
                                size={32}
                                className='transition-transform duration-200 hover:scale-125'
                            />
                        </div>
                        <div className='flex flex-col items-center gap-2'>
                            <li className="mb-1">Tailwind CSS</li>
                            <RiTailwindCssFill
                                color='white'
                                size={32}
                                className='transition-transform duration-200 hover:scale-125'
                            />
                        </div>
                        <div className='flex flex-col items-center gap-2'>
                            <li className="mb-1">Python</li>
                            <FaPython
                                color='white'
                                size={32}
                                className='transition-transform duration-200 hover:scale-125'
                            />
                        </div>
                        <div className='flex flex-col items-center gap-2'>
                            <li className="mb-1">Django</li>
                            <TbBrandDjango
                                color='white'
                                size={32}
                                className='transition-transform duration-200 hover:scale-125'
                            />
                        </div>
                        <div className='flex flex-col items-center gap-2'>
                            <li className="mb-1">Java</li>
                            <FaJava
                                color='white'
                                size={32}
                                className='transition-transform duration-200 hover:scale-125'
                            />
                        </div>
                        <div className='flex flex-col items-center gap-2'>
                            <li className="mb-1">Spring Boot</li>
                            <SiSpring
                                color='white'
                                size={32}
                                className='transition-transform duration-200 hover:scale-125'
                            />
                        </div>
                        <div className='flex flex-col items-center gap-2'>
                            <li className="mb-1">MySQL</li>
                            <DiMysql
                                color='white'
                                size={32}
                                className='transition-transform duration-200 hover:scale-125'
                            />
                        </div>
                    </ul>
                </div >
            </div >
        </>
    )
}