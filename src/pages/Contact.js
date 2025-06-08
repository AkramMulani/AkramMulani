import React, { useState } from 'react';
import './Contact.css';
import { Util } from '../Util';
import FloatingMessage from '../components/FloatingMessage';

function Contact() {
  const [fName, setFName] = useState('');
  const [fEmail, setFEmail] = useState('');
  const [fMessage, setFMessage] = useState('');
  const [msg, setMsg] = useState('');

  const handleOnClickSend = async () => {
        try {
            if (fName && fEmail && fMessage) {
                const res = await fetch(Util.emailAPI, {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({ name: fName, email: fEmail, msg: fMessage }),
                });

                if (res.status === 200) {
                    setMsg("Message sent successfully!");
                } else {
                    setMsg(res.json.message);
                }
                console.log(res)
            } else {
                setMsg('All fields are required!!!');
                console.log('All fields are required!!!')
            }
        } catch (error) {
            console.error("Error sending message:", error);
            setMsg("An error occurred.\n"+error);
        }
    };

  return (
    <div className="container py-5 contact-page">
      <h2 className="text-center mb-4">Contact Me</h2>
      <p className="text-center mb-5 lead">
        Got a question or proposal? Let’s connect! I'd love to hear from you.
      </p>

      <div className="row justify-content-center">
        <div className="col-md-8">
          <form>
            <div className="mb-3">
              <label htmlFor="name" className="form-label">Full Name</label>
              <input type="text" className="form-control" id="name" placeholder="Your name"
               value={fName} onChange={(e)=>setFName(e.target.value)} />
            </div>

            <div className="mb-3">
              <label htmlFor="email" className="form-label">Email address</label>
              <input type="email" className="form-control" id="email" placeholder="your@example.com"
              value={fEmail} onChange={(e)=>setFEmail(e.target.value)} />
            </div>

            <div className="mb-3">
              <label htmlFor="message" className="form-label">Message</label>
              <textarea className="form-control" id="message" rows="5" placeholder="Your message..."
              value={fMessage} onChange={(e)=>setFMessage(e.target.value)}></textarea>
            </div>

            <button type="button" className="btn btn-primary"
            onClick={(e)=>handleOnClickSend()}>Send Message</button>
          </form>

          <hr className="my-5" />

          <div className="text-center">
            <p className="mb-1"><strong>Email:</strong> {Util.contact.email}</p>
            <p className="mb-1"><strong>Phone:</strong> {Util.contact.mobile}</p>
            <p><strong>Location:</strong> {Util.contact.location}</p>
          </div>
        </div>
      </div>
      <FloatingMessage msg={msg} setMsg={setMsg} />
    </div>
  );
}

export default Contact;
