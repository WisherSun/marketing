import { useState } from "react";
import SectionTitle from "./blockComponents/SectionTitle";

const emptyForm = { name: '', email: '', phone: '', subject: '', message: '' }

function ContactsSection() {
    const [form, setForm] = useState(emptyForm)
    const [isSent, setIsSent] = useState(false)

    const title = 'Contact us'
    const subtitle = 'Rorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'

    // One handler for all fields: the input's "name" says which field to update
    function handleChange(event) {
        setForm({ ...form, [event.target.name]: event.target.value })
    }

    function handleSubmit(event) {
        event.preventDefault() // stop the browser from reloading the page
        // TODO: send `form` to a server / email service here
        setIsSent(true)
        setForm(emptyForm)
    }

    return (
        <section className="contacts">
            <SectionTitle title={title} subtitle={subtitle}></SectionTitle>
            <div className="container contacts__inner">
                <div className="contacts__form-box">
                    <form className="contacts__form" onSubmit={handleSubmit}>
                        <input className="contacts__field" type="text" name="name" placeholder="Name" aria-label="Name"
                            value={form.name} onChange={handleChange} required />
                        <input className="contacts__field" type="email" name="email" placeholder="Email" aria-label="Email"
                            value={form.email} onChange={handleChange} required />
                        <input className="contacts__field" type="tel" name="phone" placeholder="Phone number" aria-label="Phone number"
                            value={form.phone} onChange={handleChange} />
                        <input className="contacts__field" type="text" name="subject" placeholder="Subject" aria-label="Subject"
                            value={form.subject} onChange={handleChange} />
                        <textarea className="contacts__field contacts__field--message" name="message" placeholder="Message" aria-label="Message"
                            value={form.message} onChange={handleChange} required />
                        <button type="submit" className="contacts__submit">Submit Now</button>
                        {isSent && <p className="contacts__thanks">Thank you! We will contact you soon.</p>}
                    </form>
                </div>

                <iframe
                    className="contacts__map"
                    title="Our location on Google Maps"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3041.866686664623!2d30.77241375224721!3d50.12569062151946!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40d49176194a786d%3A0xec3e643df9599a26!2z0JrQuNGX0LLRgdGM0LrQuNC5INC-0LHQu9Cw0YHQvdC40Lkg0LDRgNGF0LXQvtC70L7Qs9GW0YfQvdC40Lkg0LzRg9C30LXQuQ!5e0!3m2!1suk!2sua!4v1774430942426!5m2!1suk!2sua"
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"></iframe>
            </div>
        </section>
    )
}
export default ContactsSection
