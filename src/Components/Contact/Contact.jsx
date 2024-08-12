import React from 'react'
import './Contact.css'
import msg_icon from '../../assets/msg-icon.png'
import mail_icon from '../../assets/mail-icon.png'
import phone_icon from '../../assets/phone-icon.png'
import location_icon from '../../assets/location-icon.png'
import white_arrow from '../../assets/white-arrow.png'

const Contact = () => {
    const [result, setResult] = React.useState("");

    const onSubmit = async (event) => {
        event.preventDefault();
        setResult("Sending....");
        const formData = new FormData(event.target);

        formData.append("access_key", "cda4c14e-1c3f-4bcd-a686-964bb0761ffb");

        const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            body: formData
        });

        const data = await response.json();

        if (data.success) {
            setResult("Form Submitted Successfully");
            event.target.reset();
        } else {
            console.log("Error", data);
            setResult(data.message);
        }
    };

    return (
        <div className='contact'>
            <div className="contact_col">
                <h3>Send Us a Message <img src={msg_icon} alt="" /></h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis blanditiis excepturi porro, ut nesciunt placeat incidunt tempora possimus repudiandae molestias dolor ad fugit ipsam in! Animi minus sit corporis? Corrupti.</p>
                <ul>
                    <li><img src={mail_icon} alt="" /> test@gmail.com </li>
                    <li><img src={phone_icon} alt="" /> +91 9874563210 </li>
                    <li><img src={location_icon} alt="" /> Robert Robertson, 1234 NW Bobcat Lane, St. Robert, MO 65584-5678 </li>
                </ul>
            </div>
            <div className="contact_col">
                <form onSubmit={onSubmit}>
                    <label> Your Name</label>
                    <input type="text" name='name' placeholder='Enter Your Name' required />

                    <label> Phone Number</label>
                    <input type="tel" name='phone' placeholder='Enter Your Phone Number' required />

                    <label> Message</label>
                    <textarea name="message" rows="6" placeholder='Enter Your Message' required></textarea>
                    <button className='btn dark_btn' type='submit'>Submit Now <img src={white_arrow} alt="" /></button>
                </form>
                <span>{result}</span>
            </div>
        </div>
    )
}

export default Contact
