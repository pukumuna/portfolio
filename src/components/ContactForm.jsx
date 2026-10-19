import { useState } from 'react'

import emailjs from '@emailjs/browser'

const initialValues = {
  nom: '',
  prenom: '',
  email: '',
  telephone: '',
  message: ''
}

export default function ContactForm() {
  const [form, setForm] = useState(initialValues)
  const [errors, setErrors] = useState({})
  const [status, setStatus] = useState('')
  const [sending, setSending] = useState(false)

  const handleChange = (event) => {
    const { name, value } = event.target
    setForm((previous) => ({ ...previous, [name]: value }))
    setErrors((previous) => ({ ...previous, [name]: '' }))
    setStatus('')
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    const nextErrors = {}

    if (!form.nom.trim()) nextErrors.nom = 'Veuillez saisir votre nom.'
    if (!form.prenom.trim()) nextErrors.prenom = 'Veuillez saisir votre prénom.'
    if (!form.email.trim()) {
      nextErrors.email = 'Veuillez saisir votre adresse e-mail.'
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim())) {
      nextErrors.email = 'Veuillez saisir une adresse e-mail valide.'
    }
    if (!form.message.trim()) nextErrors.message = 'Veuillez saisir votre message.'

    setErrors(nextErrors)
    if (Object.keys(nextErrors).length > 0) {
      setStatus('Veuillez corriger les champs signalés.')
      return
    }

    setSending(true)
    setStatus('Envoi du message en cours ...')

    try {
      console.log('Service ID présent :',
      Boolean(import.meta.env.VITE_EMAILJS_SERVICE_ID))

      console.log('Template ID présent :',
        Boolean(import.meta.env.VITE_EMAILJS_TEMPLATE_ID))

      console.log('Public Key présente :',
        Boolean(import.meta.env.VITE_EMAILJS_PUBLIC_KEY))
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        {
          nom: form.nom.trim(),
          prenom: form.prenom.trim(),
          email: form.email.trim(),
          telephone: form.telephone.trim(),
          message: form.message.trim()
        },
        {
          publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY
        }
      )

      setStatus('Votre message a été envoyé avec succès.')
      setForm(initialValues)
      setErrors({})
    } catch (error) {
      console.error('Erreur EmailJS :', error)
      console.error('Code HTTP :', error.status)
      console.error('Détail EmailJS :', error.text)
      setStatus("L'envoi a échoué. Veuillez réessayer.")
    } finally {
      setSending(false)
    }
  }

  return (
    <form className="contact-form" onSubmit={handleSubmit} noValidate>
      <div className="contact-form-grid">
        <div className="form-field">
          <label htmlFor="nom">Nom </label>
          <input id="nom" name="nom" autoComplete="family-name"
            value={form.nom} onChange={handleChange}
            aria-invalid={Boolean(errors.nom)}
            aria-describedby={errors.nom ? 'erreur-nom' : undefined} aria-required="true" />
          {errors.nom && <p id="erreur-nom" className="form-error">{errors.nom}</p>}
        </div>

        <div className="form-field">
          <label htmlFor="prenom">Prénom </label>
          <input id="prenom" name="prenom" autoComplete="given-name"
            value={form.prenom} onChange={handleChange}
            aria-invalid={Boolean(errors.prenom)}
            aria-describedby={errors.prenom ? 'erreur-prenom' : undefined} aria-required="true" />
          {errors.prenom && <p id="erreur-prenom" className="form-error">{errors.prenom}</p>}
        </div>

        <div className="form-field">
          <label htmlFor="email">Adresse e-mail </label>
          <input id="email" name="email" type="email" autoComplete="email"
            value={form.email} onChange={handleChange}
            aria-invalid={Boolean(errors.email)}
            aria-describedby={errors.email ? 'erreur-email' : undefined} aria-required="true" />
          {errors.email && <p id="erreur-email" className="form-error">{errors.email}</p>}
        </div>

        <div className="form-field">
          <label htmlFor="telephone">Téléphone (facultatif)</label>
          <input id="telephone" name="telephone" type="tel" autoComplete="tel"
            value={form.telephone} onChange={handleChange} />
        </div>

      </div> {/** className="contact-form-grid */}

      <div className="form-field">
        <label htmlFor="message">Message </label>
        <textarea id="message" name="message" rows={6}
          value={form.message} onChange={handleChange}
          aria-invalid={Boolean(errors.message)}
          aria-describedby={errors.message ? 'erreur-message' : undefined} aria-required="true" />
        {errors.message && <p id="erreur-message" className="form-error">{errors.message}</p>}
      </div>
      <div className="center-envoyer" >
        <button className="btn primary" type="submit" disabled={sending} >
          {sending ? 'Envoi en cours ...' : 'Envoyer'}
        </button>
      </div>
       
      {status && <p role="status"> {status} </p>}
    </form>
  )
}
