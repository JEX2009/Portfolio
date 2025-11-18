import '/src/assets/Tailwind.css'
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


function TechCard({ Icon, name, color = 'text-teal-400', hoverColor = 'hover:text-cyan-300' }) {
    return (
        <div className='flex flex-col items-center p-4 w-28 h-28 bg-gray-800 rounded-lg shadow-xl transition-all duration-300 transform hover:scale-105 hover:shadow-cyan-500/30'>
            <Icon
                className={`text-5xl mb-2 ${color} ${hoverColor}`}
                aria-label={name}
            />
            <span className="text-sm font-medium text-white text-center">{name}</span>
        </div>
    );
}


export function Technologies() {
    return (
        <section className="py-20 px-6 max-w-7xl mx-auto">
            
            <div className='flex flex-col items-center justify-center gap-4 mb-12'>
                <h2 className="text-5xl font-extrabold tracking-wider text-white">
                    MY TECH STACK
                </h2>
                <p className="text-center text-gray-300 text-xl max-w-3xl">
                    I focus on modern, efficient tools across the full stack. Here are the core technologies I work with:
                </p>
            </div>
            
            <div className="flex justify-center">
                <div className="grid grid-cols-3 sm:grid-cols-5 lg:grid-cols-8 xl:grid-cols-8 gap-6 w-full">
                    
                    <TechCard Icon={IoIosGitMerge} name="Git" color="text-red-500" hoverColor="hover:text-red-400" />
                    <TechCard Icon={FaGithub} name="GitHub" color="text-white" hoverColor="hover:text-gray-300" />
                    <TechCard Icon={BiLogoVisualStudio} name="VS Code" color="text-blue-500" hoverColor="hover:text-blue-400" />
                    <TechCard Icon={FaDocker} name="Docker" color="text-blue-400" hoverColor="hover:text-blue-300" />

                    <TechCard Icon={FaHtml5} name="HTML5" color="text-orange-500" hoverColor="hover:text-orange-400" />
                    <TechCard Icon={FaCss3Alt} name="CSS3" color="text-blue-600" hoverColor="hover:text-blue-500" />
                    <TechCard Icon={FaJs} name="JavaScript" color="text-yellow-400" hoverColor="hover:text-yellow-300" />
                    <TechCard Icon={FaReact} name="React" color="text-cyan-400" hoverColor="hover:text-cyan-300" />
                    <TechCard Icon={RiTailwindCssFill} name="Tailwind CSS" color="text-sky-400" hoverColor="hover:text-sky-300" />
                    
                    <TechCard Icon={FaPython} name="Python" color="text-yellow-600" hoverColor="hover:text-yellow-500" />
                    <TechCard Icon={TbBrandDjango} name="Django" color="text-green-700" hoverColor="hover:text-green-600" />
                    <TechCard Icon={FaJava} name="Java" color="text-red-600" hoverColor="hover:text-red-500" />
                    <TechCard Icon={SiSpring} name="Spring Boot" color="text-green-500" hoverColor="hover:text-green-400" />
                    
                    <TechCard Icon={DiMysql} name="MySQL" color="text-blue-500" hoverColor="hover:text-blue-400" />
                </div>
            </div>
        </section>
    )
}