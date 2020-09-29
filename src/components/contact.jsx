import React from "react";

const Contact = () => {
  return (
    <div className="contact-div" id="contact">
      <div className="head mx-5">
        <div className="main-div">
          <section className="div-1 contact">
            <h1 className="my-3">Get In Touch</h1>
            <p>
              Have doubts? Need something? I'm always here to answer your
              queries. Click on the button below, drop a message and I'll try my
              best to get back to you!
            </p>
            <a
              href="mailto:rkanwar0708@gmail.com"
              className="button btn btn-outline-success my-3"
            >
              Say Hello
            </a>
          </section>
          <p className="footer">Designed and Built by Roshan Kanwar</p>
        </div>
      </div>
    </div>
  );
};

export default Contact;