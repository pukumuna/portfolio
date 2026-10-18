import ContactForm from './ContactForm.jsx'

export default function Contact() {
  return (
    <section id="contact" className="section contact">

            <div className="container narrow">

                <p className="eyebrow">CONTACT</p>

                <div className="echangeons" >
                    <h2>Échangeons</h2>

                    <p>
                        Vous souhaitez me contacter au sujet d'un projet
                        ou d'une collaboration ? Remplissez le formulaire
                        ci-dessous.
                    </p>
                </div>

                < ContactForm />

            </div>

        </section>
  )
}
