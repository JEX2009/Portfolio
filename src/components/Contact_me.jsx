import '/src/assets/Tailwind.css'
import { CiMail } from "react-icons/ci";
import { FaLinkedin } from "react-icons/fa6";


export function Contact_me() {
    return (
        <section id="contact" className='py-20 px-6 max-w-7xl mx-auto'>
            <div className='bg-gray-800 p-10 rounded-xl shadow-2xl shadow-cyan-500/30 flex flex-col items-center justify-center gap-6'>
                
                <h2 className="text-5xl font-extrabold text-teal-400 tracking-wider mb-2">
                    GET IN TOUCH
                </h2>
                
                <p className="text-gray-300 text-center text-xl max-w-3xl">
                    If you have any questions, job opportunities, or just want to say hello, feel free to reach out! I'm always open to new collaborations and projects.
                </p>
                
                <div className="w-16 h-1 bg-cyan-600 my-4 rounded-full"></div>

                <p className="text-gray-400 text-center text-lg max-w-3xl">
                    Click the icons below to connect via email or LinkedIn.
                </p>
                
                <div className='flex gap-8 mt-4'>
                    {/* Email Icon */}
                    <CiMail
                        color='#4ECCA3' // Teal/Cyan color for consistency
                        size={56}
                        onClick={() => window.location.href = 'mailto:orozcojason816@gmail.com'}
                        className='cursor-pointer transition-transform duration-300 hover:scale-110 hover:text-cyan-400'
                    />

                    {/* LinkedIn Icon */}
                    <a
                        href="https://www.linkedin.com/in/jason-orozco-ruiz-65b149252"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Visit LinkedIn profile" 
                    >
                        <FaLinkedin
                            color='#4ECCA3' // Teal/Cyan color for consistency
                            size={50}
                            className='cursor-pointer transition-transform duration-300 hover:scale-110 hover:text-cyan-400'
                        />
                    </a>
                </div>
                
            </div>
        </section>
    )
}