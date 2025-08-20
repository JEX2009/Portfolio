import '/src/assets/Tailwind.css'
import { FaComputer } from "react-icons/fa6";
import resume from '/src/assets/Jason_Reynaldo_Orozco_Ruiz.pdf'

export function About_me() {

    const handleAbrirPdf = () => {
        window.open(resume, "_blank");
    };


    return (
        <>
            <div className="p-8 flex gap-8 mt-20 justify-evenly items-center">
                <div>
                    <h2 className="text-3xl font-bold mb-4 tracking-wide text-white"> Hello <br />I'm Jason</h2>
                    <h3 className="text-3x0 font-bold mb-4 tracking-wide text-white">Full Stack Developer</h3>
                    <div className='flex gap-4 mt-4 '>
                        <a href="`${import.meta.env.BASE_URL}Jason_Reynaldo_Orozco_Ruiz.pdf`" target="_blank" rel="noopener noreferrer">
                            <button type="button" className='text-white border border-orange-900 p-2 cursor-pointer' >My Resume</button>
                        </a>
                    </div>
                </div>
                <div className='w-50 h-50 rounded-full outline-2 outline-offset-2 outline-amber-800 grid grid-cols-2 grid-rows-2 justify-items-center items-center'>
                    <span className="text-amber-800 text-7xl ">&lt;</span>
                    <span>&nbsp;</span>
                    <span>&nbsp;</span>
                    <span className="text-amber-800 text-7xl">&gt;</span>
                </div>
            </div>
            <div className='p-8 flex gap-8 justify-evenly items-center'>
                <div>
                    <div className='flex gap-4 items-center'>
                        <FaComputer
                            size={70}
                            title='computer icon'
                            color="white"
                        />
                        <p className='text-3x0 text-white'>Full Stack Developer</p>
                    </div>
                </div>
                <div className='max-w-3xl'>
                    <h3 className='text-3xl font-bold mb-4 text-white'>About me</h3>
                    <p className='text-3x0 text-white'>My journey into the world of software was born from a deep cur   iosity to transform ideas into something real. It was a fascination with the process of creating from scratch that first drove me. Since then, software development has become my passion, as it fulfills my love for constant learning and the challenge of building things that work and provide value.</p>
                </div>

            </div>
        </>
    )
}