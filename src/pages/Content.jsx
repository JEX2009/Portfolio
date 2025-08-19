import '/src/assets/Tailwind.css'
import { About_me } from '/src/components/About_me'
import { Contact_me } from '/src/components/Contact_me'
import { Proyects } from '/src/components/Proyects'

export function Content() {
  return (
    <main className="mt-24">
      <div>
        <section id="about-me" className="p-8 bg-gray-950">
          <About_me />
        </section>

        <section id="proyects" className="p-8 bg-gray-950 ">
          <Proyects/>
        </section>

        <section id="technologies" className="p-8 bg-gray-300">
          <h2 className="text-3xl font-bold mb-4">Technologies</h2>
          {/* Technologies content goes here */}
        </section>

        <section id="contact-me" className="p-8 bg-gray-400">
          <h2 className="text-3xl font-bold mb-4">Contact Me</h2>
          <Contact_me />
        </section>
      </div>
    </main>
  )
}