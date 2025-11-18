import '/src/assets/Tailwind.css'
import { FaComputer } from "react-icons/fa6";

export function About_me() {
    return (
        <section className="py-20 px-6 max-w-7xl mx-auto">
                
            <div className="flex flex-col md:flex-row gap-12 justify-between items-center pb-16 border-b border-gray-700">
                
                <div className="flex flex-col gap-4 text-center md:text-left">
                    <p className="text-xl text-teal-400 font-medium tracking-wider">Hi there!</p>
                    <h2 className="text-5xl lg:text-7xl font-extrabold text-white leading-tight">
                        I'm Jason <br className="hidden md:inline" /> Orozco
                    </h2>
                    <h3 className="text-2xl font-semibold text-gray-300">
                        Full Stack Developer
                    </h3>
                    
                    <div className='flex gap-4 mt-6 justify-center md:justify-start'>
                        <a 
                            href={`${import.meta.env.BASE_URL}Jason_Reynaldo_Orozco_Ruiz.pdf`}
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="inline-block"
                        >
                            <button 
                                type="button" 
                                className='bg-cyan-600 hover:bg-cyan-500 text-white font-bold py-3 px-8 rounded-full shadow-lg transition duration-300 transform hover:scale-105'
                            >
                                My Resume
                            </button>
                        </a>
                    </div>
                </div>
                
                <div className='w-52 h-52 flex items-center justify-center relative'>
                    <span className="absolute w-full h-full border-4 border-teal-400 rounded-full animate-pulse opacity-50"></span>
                    <span className="text-teal-400 text-8xl font-light z-10">&lt;/&gt;</span>
                </div>
            </div>
            
            <div className='pt-16 flex flex-col md:flex-row gap-12 justify-between items-start'>
                
                <div className='flex flex-col gap-3 items-center md:items-start w-full md:w-1/4'>
                    <FaComputer
                        size={80}
                        title='computer icon'
                        color="#4ECCA3" 
                        className="mb-2"
                    />
                    <h3 className='text-3xl font-bold text-teal-400'>
                        My Focus
                    </h3>
                    <p className='text-lg text-gray-400 text-center md:text-left'>
                        Full Stack Development
                    </p>
                </div>
                
                <div className='max-w-4xl w-full md:w-3/4'>
                    <h3 className='text-4xl font-extrabold mb-6 text-white'>
                        About Me
                    </h3>
                    <p className='text-xl text-gray-300 leading-relaxed'>
                        My journey into the world of software was born from a deep curiosity to transform ideas into something real. It was a fascination with the process of creating from scratch that first drove me in. Since then, software development has become my passion, as it fulfills my love for constant learning and the challenge of building things that work and provide value. I specialize in crafting robust **full-stack applications** and delivering impactful digital solutions.
                    </p>
                </div>
            </div>
        </section>
    )
}