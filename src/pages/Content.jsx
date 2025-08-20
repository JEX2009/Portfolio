import '/src/assets/Tailwind.css'
import { About_me } from '/src/components/About_me'
import { Contact_me } from '/src/components/Contact_me'
import { Proyects } from '/src/components/Proyects'
import { Technologies } from '/src/components/Technologies'

export function Content() {
  return (
    <main className="mt-24">
      <div>
        <section id="about-me" className="p-8 bg-gray-950">
          <About_me />
        </section>

        <section id="proyects" className="p-8 bg-gray-950 ">
          <Proyects />
        </section>

        <section id="technologies" className="p-8 bg-gray-950">
          <Technologies />
        </section>

        <section id="contact-me" className="p-8 bg-gray-950">
          <Contact_me />
        </section>
      </div>
    </main>
  )
}