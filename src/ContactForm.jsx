import { useState } from 'react'

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

  const handleChange = (event) => {
    const { name, value } = event.target
    setForm((previous) => ({ ...previous, [name]: value }))
    setErrors((previous) => ({ ...previous, [name]: '' }))
    setStatus('')
  }

  const handleSubmit = (event) => {
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

    // Étape suivante : remplacer ce message par l'envoi avec EmailJS.
    setStatus('Formulaire valide. Envoi par e-mail non encore configuré.')
  }

  return (
    <form className="contact-form" onSubmit={handleSubmit} noValidate>
      <div className="contact-form-grid">
        <div className="form-field">
          <label htmlFor="nom">Nom *</label>
          <input id="nom" name="nom" autoComplete="family-name"
            value={form.nom} onChange={handleChange}
            aria-invalid={Boolean(errors.nom)}
            aria-describedby={errors.nom ? 'erreur-nom' : undefined} />
          {errors.nom && <p id="erreur-nom" className="form-error">{errors.nom}</p>}
        </div>

        <div className="form-field">
          <label htmlFor="prenom">Prénom *</label>
          <input id="prenom" name="prenom" autoComplete="given-name"
            value={form.prenom} onChange={handleChange}
            aria-invalid={Boolean(errors.prenom)}
            aria-describedby={errors.prenom ? 'erreur-prenom' : undefined} />
          {errors.prenom && <p id="erreur-prenom" className="form-error">{errors.prenom}</p>}
        </div>

        <div className="form-field">
          <label htmlFor="email">Adresse e-mail *</label>
          <input id="email" name="email" type="email" autoComplete="email"
            value={form.email} onChange={handleChange}
            aria-invalid={Boolean(errors.email)}
            aria-describedby={errors.email ? 'erreur-email' : undefined} />
          {errors.email && <p id="erreur-email" className="form-error">{errors.email}</p>}
        </div>

        <div className="form-field">
          <label htmlFor="telephone">Téléphone (facultatif)</label>
          <input id="telephone" name="telephone" type="tel" autoComplete="tel"
            value={form.telephone} onChange={handleChange} />
        </div>
      </div>

      <div className="form-field">
        <label htmlFor="message">Message *</label>
        <textarea id="message" name="message" rows={6}
          value={form.message} onChange={handleChange}
          aria-invalid={Boolean(errors.message)}
          aria-describedby={errors.message ? 'erreur-message' : undefined} />
        {errors.message && <p id="erreur-message" className="form-error">{errors.message}</p>}
      </div>

      <p className="form-hint">* Champs obligatoires</p>
      <button className="btn primary" type="submit">Envoyer</button>
      {status && <p role="status">{status}</p>}
    </form>
  )
}
