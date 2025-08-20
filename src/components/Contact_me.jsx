import '/src/assets/Tailwind.css'
import { CiMail } from "react-icons/ci";
import { FaLinkedin } from "react-icons/fa6";


export function Contact_me() {
    return (
        <>
            <div className='flex flex-col items-center justify-center gap-2'>
                <h2 className="text-3xl font-bold mb-4 text-white">Contact Me</h2>
                <div className='flex flex-col items-center gap-4'>
                    <p className="text-white text-center text-lg text-wrap">
                        If you have any questions, suggestions, or just want to say hello, feel free to reach out!
                        I'm always open to new opportunities and collaborations.
                    </p>
                    <p className="text-white text-center text-lg text-wrap">Click in the icons below to contact me via email or LinkedIn.</p>
                    <div className='flex gap-4'>
                        <CiMail
                            color='white'
                            size={32}
                            onClick={() => window.location.href = 'mailto:orozcojason816@gmail.com'}
                            className='cursor-pointer transition-transform duration-200 hover:scale-125'
                        />

                        <a
                            href="https://www.linkedin.com/in/jason-orozco-ruiz-65b149252"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="Visitar perfil de LinkedIn" 
                        >
                            <FaLinkedin
                                color='white'
                                size={32}
                                className='cursor-pointer transition-transform duration-200 hover:scale-125'
                            />
                        </a>
                    </div>
                </div>
            </div>

        </>
    )
}