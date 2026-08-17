import { useState } from "react";

function Contact() {

  const [formData, setFormData] =
    useState({
      name: "",
      email: "",
      subject: "",
      message: "",
    });


  const [errors, setErrors] =
    useState({});


  const [submitted, setSubmitted] =
    useState(false);


  const handleChange = (event) => {

    setFormData({
      ...formData,
      [event.target.name]:
        event.target.value,
    });

  };


  const handleSubmit = (event) => {

    event.preventDefault();

    const newErrors = {};


    if (!formData.name.trim()) {
      newErrors.name =
        "Name is required";
    }


    if (!formData.email.trim()) {
      newErrors.email =
        "Email is required";
    }


    if (!formData.subject.trim()) {
      newErrors.subject =
        "Subject is required";
    }


    if (!formData.message.trim()) {
      newErrors.message =
        "Message is required";
    }


    setErrors(newErrors);


    if (
      Object.keys(newErrors).length === 0
    ) {

      setSubmitted(true);

      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });

    }

  };


  return (
    <div className="page">

      <div className="contact-container">

        <div className="contact-info">

          <span className="page-label">
            GET IN TOUCH
          </span>

          <h1>
            Contact Us
          </h1>

          <p>
            Have questions or feedback?
            We'd love to hear from you.
          </p>


          <div className="contact-item">

            <span></span>

            <div>
              <h4>Email</h4>
              <p>
                support@EduTrack.com
              </p>
            </div>

          </div>


          <div className="contact-item">

            <span></span>

            <div>
              <h4>Phone</h4>
              <p>
                +91 98765 43210
              </p>
            </div>

          </div>


          <div className="contact-item">

            <span></span>

            <div>
              <h4>Location</h4>
              <p>
                Tamil Nadu, India
              </p>
            </div>

          </div>

        </div>


        <div className="contact-form">

          {submitted && (
            <div className="success-message">
              ✅ Your message has been sent successfully!
            </div>
          )}


          <form onSubmit={handleSubmit}>

            <div className="form-group">

              <label>
                Name *
              </label>

              <input
                name="name"
                placeholder="Your name"
                value={formData.name}
                onChange={handleChange}
              />

              {errors.name && (
                <small className="field-error">
                  {errors.name}
                </small>
              )}

            </div>


            <div className="form-group">

              <label>
                Email *
              </label>

              <input
                type="email"
                name="email"
                placeholder="Your email"
                value={formData.email}
                onChange={handleChange}
              />

              {errors.email && (
                <small className="field-error">
                  {errors.email}
                </small>
              )}

            </div>


            <div className="form-group">

              <label>
                Subject *
              </label>

              <input
                name="subject"
                placeholder="Subject"
                value={formData.subject}
                onChange={handleChange}
              />

              {errors.subject && (
                <small className="field-error">
                  {errors.subject}
                </small>
              )}

            </div>


            <div className="form-group">

              <label>
                Message *
              </label>

              <textarea
                name="message"
                rows="5"
                placeholder="Write your message..."
                value={formData.message}
                onChange={handleChange}
              />

              {errors.message && (
                <small className="field-error">
                  {errors.message}
                </small>
              )}

            </div>


            <button
              type="submit"
              className="primary-btn full-btn"
            >
              Send Message →
            </button>

          </form>

        </div>

      </div>

    </div>
  );
}

export default Contact;