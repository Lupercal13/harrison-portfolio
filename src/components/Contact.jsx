import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import emailjs from "@emailjs/browser";

import { TextField, MenuItem } from "@mui/material";

const Contact = () => {
  const form = useRef();
  const navigate = useNavigate()

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "contact_service",
        "contact_form",
        form.current,
        "ExIPLWMokEXOXcZAt"
      )
      .then(
        (result) => {
          console.log("message sent!")
          navigate('/success')
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div id="contact" className="bg-[#d1d5db]">
      <div className=" w-[80%] flex mx-auto justify-center text-center pt-20 pb-10 border-b-2 border-black text-[#374151] ">
        <h1 className="text-5xl md:text-8xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-700 to-purple-700  text-center sm:pl-20 tracking-wide">
          Get In Touch
        </h1>
      </div>
      <form ref={form} onSubmit={sendEmail}>
        <div className="pt-10 flex flex-col gap-4 w-3/4 mx-auto">
          <TextField
            label="Name"
            variant="outlined"
            required
            name="user_name"
          />
          <TextField
            label="Email"
            type="email"
            variant="outlined"
            required
            name="user_email"
          />
          <TextField
            label="Phone Number"
            variant="outlined"
            required
            name="user_phone"
          />
          <TextField
            name="message"
            label="Message"
            multiline
            required
            rows={5}
          />

          <button
            type="submit"
            className="btn btn-primary btn-lg w-3/4 mx-auto text-3xl my-10"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default Contact;
