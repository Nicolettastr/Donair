const Contact = () => {
  return (
    <form
        action="https://formsubmit.co/nicolettastruggia@hotmail.com"
        method="POST"
      >
        <h2 className="w-100 txt-center mg-tb salmon">Contact Us</h2>
        <div className="contact_container d-flex justify-content-center">
          <div className="input_container bg-lighter-blue one_pad">
            <input
              className="contact-input"
              type="text"
              name="name"
              placeholder="Name"
              required
            />
            <input
              className="contact-input"
              type="email"
              name="email"
              placeholder="Email"
              required
            />
            <textarea
              className="contact-text"
              type="text"
              name="name"
              placeholder="Message"
              required
            ></textarea>
            <input type="hidden" name="_next" value="https://localhost:5173/thanks"></input>
            <button
              type="submit"
              className="btn red_Btn general_button white_letter mg-tb"
            >
              Send
            </button>
          </div>
        </div>
      </form>
  )
}

export default Contact;
