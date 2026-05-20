import { useState } from 'react'
import useForm from '../hooks/useForm'
import SubmitButton from './Buttons/submit'

const FORM_ENDPOINT = 'https://whitebricks.com/tsacademy.php'

function Forms() {
  const [showSuccessDialog, setShowSuccessDialog] = useState(false)
  const [submitStatus, setSubmitStatus] = useState('')
  const { values: form, handleChange, reset } = useForm({
    name: '',
    email: '',
    phone: '',
    city: '',
    message: '',
  })

  const handleSubmit = async (event) => {
    event.preventDefault()
    setSubmitStatus('')

    const formData = new FormData(event.currentTarget)

    try {
      await fetch(FORM_ENDPOINT, {
        method: 'POST',
        mode: 'no-cors',
        body: formData,
      })

      setShowSuccessDialog(true)
      event.currentTarget.reset()
      reset()
    } catch (error) {
      console.error('Contact form submission failed', error)
      setSubmitStatus('Unable to submit right now. Please try again.')
    }
  }

  return (
    <section id="contact-section" className="contact-section">
      <h2 className="contact-heading">Have Questions About Planetary Science?</h2>
      <p className="contact-sub">
        Interested in learning more about space, astronomy, or how planetary data is collected and analyzed? Reach out and we’ll get back to you.
      </p>

      <form className="contact-form" onSubmit={handleSubmit}>
        <div className="contact-grid">
          <div>
            <div className="contact-field">
              <label className="contact-label" htmlFor="contact-name">
                Full Name <span className="required">*</span>
              </label>
              <input
                id="contact-name"
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="Full name"
                required
                className="contact-input"
              />
            </div>

            <div className="contact-field">
              <label className="contact-label" htmlFor="contact-city">
                City <span className="required">*</span>
              </label>
              <select
                id="contact-city"
                name="city"
                value={form.city}
                onChange={handleChange}
                required
                className="contact-input"
              >
                <option value="" disabled>
                  Choose city
                </option>
                <option value="new-york">New York</option>
                <option value="london">London</option>
                <option value="sydney">Sydney</option>
                <option value="tokyo">Tokyo</option>
              </select>
            </div>

            <div className="contact-field contact-field--message">
              <label className="contact-label" htmlFor="contact-message">
                Message <span className="required">*</span>
              </label>
              <textarea
                id="contact-message"
                name="message"
                value={form.message}
                onChange={handleChange}
                placeholder="Enter your message"
                maxLength={100}
                required
                className="contact-textarea"
              />
              <div className="contact-row">
                <div className="hint-count">100 characters</div>
              </div>
            </div>
          </div>

          <div>
            <div className="contact-field">
              <label className="contact-label" htmlFor="contact-email">
                Email <span className="required">*</span>
              </label>
              <input
                id="contact-email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="example@example.com"
                type="email"
                required
                className="contact-input"
              />
            </div>

            <div className="contact-field">
              <label className="contact-label" htmlFor="contact-phone">
                Phone Number <span className="required">*</span>
              </label>
              <input
                id="contact-phone"
                name="phone"
                value={form.phone}
                onChange={handleChange}
                placeholder="Please enter a valid phone number."
                required
                className="contact-input"
              />
            </div>

            <div className="contact-field contact-group">
              <span className="contact-label">How should we contact you?</span>
              <div className="contact-options contact-options--radio">
                <label className="contact-choice">
                  <input type="radio" name="contactPreference" value="phone" />
                  <span>Phone</span>
                </label>
                <label className="contact-choice">
                  <input type="radio" name="contactPreference" value="email" />
                  <span>Email</span>
                </label>
                <label className="contact-choice">
                  <input type="radio" name="contactPreference" value="both" />
                  <span>Both</span>
                </label>
              </div>
            </div>

            <div className="contact-field contact-group">
              <span className="contact-label">How did you hear about us?</span>
              <div className="contact-options contact-options--checkbox">
                <label className="contact-choice">
                  <input type="checkbox" name="heardAbout" value="friend" />
                  <span>Friend</span>
                </label>
                <label className="contact-choice">
                  <input type="checkbox" name="heardAbout" value="ts-academy" />
                  <span>TS Academy</span>
                </label>
                <label className="contact-choice">
                  <input type="checkbox" name="heardAbout" value="others" />
                  <span>Others</span>
                </label>
              </div>
            </div>
          </div>
        </div>

        <div className="contact-footer">
          <SubmitButton className="btn-wide">Submit <span className="space-btn">&gt;</span></SubmitButton>
        </div>

        {submitStatus ? <p className="contact-status contact-status--error">{submitStatus}</p> : null}
      </form>

      {showSuccessDialog ? (
        <div className="success-overlay" role="presentation" onClick={() => setShowSuccessDialog(false)}>
          <div
            className="success-dialog"
            role="dialog"
            aria-modal="true"
            aria-labelledby="success-title"
            aria-describedby="success-message"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="success-mark" aria-hidden="true">
              ✓
            </div>
            <h3 id="success-title" className="success-title">
              Submitted successfully
            </h3>
            <p id="success-message" className="success-message">
              Your form has been sent successfully.
            </p>
            <button type="button" className="success-close" onClick={() => setShowSuccessDialog(false)}>
              OK
            </button>
          </div>
        </div>
      ) : null}
    </section>
  )
}

export default Forms