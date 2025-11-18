import '/src/assets/Tailwind.css'
import { LuGithub } from "react-icons/lu";
import TherapySystem from '../assets/TherapySystem.png'
import Bank from '../assets/Bank.png'
import PosSystem from '../assets/PosSystem.png'

export function Proyects() {

    return (
        <>
            <div className='flex flex-col items-center justify-center gap-2'>
                <div className='h-20 w-1 bg-amber-500 rounded-full'></div>
                <div className='h-5 w-5 bg-amber-500 rounded-full'></div>
                <div className='h-20 w-1 bg-amber-500 rounded-full'></div>
                <h2 className="text-4xl font-bold mb-4 tracking-wide text-white"> Proyects</h2>
                <p className="text-center text-white text-lg mb-10">
                    Here you can find some of my projects, which I have developed using various technologies and frameworks.
                    Feel free to explore them and see the code on GitHub.
                </p>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-4'>
                <div className='bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 text-center grid grid-cols-1 grid-rows-2 items-center gap-4'>
                    <h3 className="text-2xl font-semibold text-white mb-4">Website Portfolio</h3>
                    <p className="text-white mb-2">
                        This is a full-stack project that implements a comprehensive management system for a daycare center or clinical care facility, focused on the administration of patients, medical appointments, tests, and reports. It demonstrates strong experience in building robust, secure APIs with Python (Django) and creating dynamic, responsive user interfaces with React.js. A significant challenge during the enterprise implementation was the initial learning curve involved in designing and delivering features for dynamic configuration of medical tests and the reliable, efficient generation of complex clinical reports from large datasets, skills which were successfully mastered and deployed.
                    </p>
                    <img src={TherapySystem} alt="Imagen of the website portfolio" className='border border-sky-50  shadow drop-shadow-cyan-500/50 mb-2 rounded-lg' loading="lazy" />
                    <div className='flex items-center justify-center gap-2 mt-4 border border-sky-50 rounded-xl p-1 '>
                        <LuGithub
                            color='white'
                            size={30}
                        />
                        <a href="https://github.com/JEX2009/Centro-Diurno-Francisca-Valerio.git" className="text-blue-500 hover:underline" target='_blank'>View on GitHub</a>
                    </div>
                </div>
                <div className='bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 text-center grid grid-cols-1 grid-rows-2 items-center gap-4'>
                    <h3 className="text-2xl font-semibold text-white mb-4">Money Envelopes</h3>
                    <p className="text-white mb-2">
                        A web application for managing personal finances using the envelope budgeting method. Developed with Django, it helps users organize their expenses and savings efficiently.
                    </p>
                    <img src={Bank} alt="Imagen of the money envelopes system" className='border border-sky-50  shadow drop-shadow-cyan-500/50 mb-2 rounded-lg' loading="lazy" />
                    <div className='flex items-center justify-center gap-2 mt-4 border border-sky-50 rounded-xl p-1 '>
                        <LuGithub
                            color='white'
                            size={30}
                        />
                    <a href="https://github.com/JEX2009/BancoConDjango.git" className="text-blue-500 hover:underline" target='_blank'>View on GitHub</a>
                    </div>
                </div>
                <div className='bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 text-center grid grid-cols-1 grid-rows-2 items-center gap-4'>
                    <h3 className="text-2xl font-semibold text-white mb-4">PosSystem</h3>
                    <p className="text-white mb-2">
                        A Point of Sale (POS) system designed for small businesses. Built with React and Django, it still in development but aims to provide a user-friendly interface for managing sales, inventory, and customer data.
                    </p>
                    <img src={PosSystem} alt="Imagen of the money envelopes system" className='border border-sky-50  shadow drop-shadow-cyan-500/50 mb-2 rounded-lg' loading="lazy" />
                    <div className='flex items-center justify-center gap-2 mt-4 border border-sky-50 rounded-xl p-1'>
                        <LuGithub
                            color='white'
                            size={30}
                        />
                    <a href="https://github.com/JEX2009/PosSystem.git" className="text-blue-500 hover:underline" target='_blank'>View on GitHub</a>
                    </div>
                </div>
            </div>
        </>
    )
}

