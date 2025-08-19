import '/src/assets/Tailwind.css'


export function Navbar() {
  return (
    <div>
      <nav>
        <div className="fixed w-full top-0 left-0 right-0 z-10 bg-gray-950 p-4">
          <div className='text-center container mx-auto p-4'>
          </div>
          <div className='container mx-auto'>
            <h1 className='text-white font-bold text-2xl'>Jason Orozco</h1>
            <ul className="flex items-center justify-end gap-8 text-white">
              <li><a href="#about-me">About Me</a></li>
              <li><a href="#proyects">Proyects</a></li>
              <li><a href="#technologies">Technologies</a></li>
              <li><a href="#contact-me">Contact Me</a></li>
            </ul>
          </div>
          <hr className='bg-amber-800 mt-4 h-1 border-0' />  
        </div>
      </nav>
    </div>
  )
}
