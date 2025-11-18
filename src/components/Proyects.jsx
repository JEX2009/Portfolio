import '/src/assets/Tailwind.css'
import { LuGithub } from "react-icons/lu";
import TherapySystem from '../assets/TherapySystem.png' 
import Bank from '../assets/Bank.png'
import PosSystem from '../assets/PosSystem.png'

export function Proyects() {

    return (
        <>
            <div className='flex flex-col items-center justify-center pt-12 pb-10'>
                <div className='h-20 w-1 bg-teal-400 rounded-full mb-2'></div>
                <div className='h-5 w-5 bg-teal-400 rounded-full'></div>
                <div className='h-20 w-1 bg-teal-400 rounded-full mt-2'></div>
                
                <h2 className="text-5xl font-extrabold mt-8 mb-4 tracking-wider text-white"> 
                    FEATURED PROJECTS
                </h2>
                <p className="text-center text-gray-300 text-xl max-w-3xl mb-12">
                    Here you'll find a selection of my most relevant work, developed using various technologies.
                    Explore the code on GitHub!
                </p>
            </div>
            
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 px-6 max-w-7xl mx-auto'>
                
                <div className='bg-gray-800 p-6 rounded-xl shadow-2xl hover:shadow-cyan-500/50 transition-all duration-500 flex flex-col h-full'>
                    <h3 className="text-3xl font-bold text-teal-400 mb-4 text-center">
                        Therapy Management System
                    </h3>
                    
                    <img 
                        src={TherapySystem} 
                        alt="Image of the therapy system website" 
                        className='w-full h-auto object-cover rounded-lg mb-4 border-2 border-cyan-500/50' 
                        loading="lazy" 
                    />
                    
                    <p className="text-gray-300 text-base mb-6 flex-grow">
                        This is a full-stack project that implements a comprehensive management system for a daycare center or clinical care facility, focused on the administration of patients, medical appointments, tests, and reports. It demonstrates strong experience in building robust, secure APIs with Python (Django) and creating dynamic, responsive user interfaces with React.js. A significant challenge during the enterprise implementation was the initial learning curve involved in designing and delivering features for dynamic configuration of medical tests and the reliable, efficient generation of complex clinical reports from large datasets, skills which were successfully mastered and deployed.
                    </p>
                    
                    <div className='mt-auto flex justify-center'>
                        <a 
                            href="https://github.com/JEX2009/Centro-Diurno-Francisca-Valerio.git" 
                            className="inline-flex items-center justify-center gap-2 py-2 px-6 bg-cyan-600 hover:bg-cyan-500 text-white font-semibold rounded-full shadow-lg transition duration-300" 
                            target='_blank' 
                            rel="noopener noreferrer"
                        >
                            <LuGithub size={24} />
                            <span>View on GitHub</span>
                        </a>
                    </div>
                </div>

                <div className='bg-gray-800 p-6 rounded-xl shadow-2xl hover:shadow-cyan-500/50 transition-all duration-500 flex flex-col h-full'>
                    <h3 className="text-3xl font-bold text-teal-400 mb-4 text-center">
                        Money Envelopes
                    </h3>
                    
                    <img 
                        src={Bank} 
                        alt="Image of the money envelopes system" 
                        className='w-full h-auto object-cover rounded-lg mb-4 border-2 border-cyan-500/50' 
                        loading="lazy" 
                    />
                    
                    <p className="text-gray-300 text-base mb-6 flex-grow">
                        A web application for managing personal finances using the envelope budgeting method. Developed with Django, it helps users organize their expenses and savings efficiently.
                    </p>
                    
                    <div className='mt-auto flex justify-center'>
                        <a 
                            href="https://github.com/JEX2009/BancoConDjango.git" 
                            className="inline-flex items-center justify-center gap-2 py-2 px-6 bg-cyan-600 hover:bg-cyan-500 text-white font-semibold rounded-full shadow-lg transition duration-300" 
                            target='_blank' 
                            rel="noopener noreferrer"
                        >
                            <LuGithub size={24} />
                            <span>View on GitHub</span>
                        </a>
                    </div>
                </div>
                
                <div className='bg-gray-800 p-6 rounded-xl shadow-2xl hover:shadow-cyan-500/50 transition-all duration-500 flex flex-col h-full'>
                    <h3 className="text-3xl font-bold text-teal-400 mb-4 text-center">
                        POS System
                    </h3>
                    
                    <img 
                        src={PosSystem} 
                        alt="Image of the money envelopes system" 
                        className='w-full h-auto object-cover rounded-lg mb-4 border-2 border-cyan-500/50' 
                        loading="lazy" 
                    />
                    
                    <p className="text-gray-300 text-base mb-6 flex-grow">
                        A Point of Sale (POS) system designed for small businesses. Built with React and Django, it is still in development but aims to provide a user-friendly interface for managing sales, inventory, and customer data.
                    </p>
                    
                    <div className='mt-auto flex justify-center'>
                        <a 
                            href="https://github.com/JEX2009/PosSystem.git" 
                            className="inline-flex items-center justify-center gap-2 py-2 px-6 bg-cyan-600 hover:bg-cyan-500 text-white font-semibold rounded-full shadow-lg transition duration-300" 
                            target='_blank' 
                            rel="noopener noreferrer"
                        >
                            <LuGithub size={24} />
                            <span>View on GitHub</span>
                        </a>
                    </div>
                </div>
            </div>
        </