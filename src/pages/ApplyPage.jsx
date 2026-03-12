import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import '../styles/ApplyPage.css';

export default function ApplyPage() {
  const [formData, setFormData] = useState({
    fullName: '',
    age: '',
    talent: '',
    location: '',
    experience: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleWhatsAppSend = (e) => {
    e.preventDefault();

    const phoneNumber = "250734961956"; // Imena Moves Official Number
    
    // Gutegura ubutumwa buzira kuri WhatsApp (Fixed Encoding)
    const message = `Hello Imena Moves Team! 👋%0A%0A` +
      `*NEW TALENT APPLICATION*%0A` +
      `--------------------------%0A` +
      `*Name:* ${formData.fullName}%0A` +
      `*Age:* ${formData.age}%0A` +
      `*Special Talent:* ${formData.talent}%0A` +
      `*Location:* ${formData.location}%0A` +
      `*Experience:* ${formData.experience}%0A%0A` +
      `I submitted this from your website. Ready for the next stage!`;

     window.location.href = `https://wa.me/${phoneNumber}?text=${message}`;
    
    // Guhita afungura WhatsApp (Ibi ntibishobora kwanga)
    window.open(whatsappURL, '_blank');
  };

  return (
    <div className="apply-page-root">
      <Navbar />
      
      <section className="apply-hero">
        <div className="container-h">
          <h1>Join Imena <span className="text-orange">Moves</span></h1>
          <p>Showcase your talent and become part of our elite performance crew.</p>
        </div>
      </section>

      <div className="container-h form-wrapper">
        <form className="modern-apply-form shadow" onSubmit={handleWhatsAppSend}>
          <div className="form-grid">
            <div className="input-group">
              <label>Full Name</label>
              <input type="text" name="fullName" placeholder="Enter your name" onChange={handleInputChange} required />
            </div>
            <div className="input-group">
              <label>Age</label>
              <input type="number" name="age" placeholder="Enter your age" onChange={handleInputChange} required />
            </div>
            <div className="input-group">
              <label>Your Main Talent</label>
              <input type="text" name="talent" placeholder="e.g. Modern Dance, Acrobatics" onChange={handleInputChange} required />
            </div>
            <div className="input-group">
              <label>Current Location</label>
              <input type="text" name="location" placeholder="e.g. Kabuga, Kigali" onChange={handleInputChange} required />
            </div>
          </div>
          <div className="input-group">
            <label>Years of Experience / Short Bio</label>
            <textarea name="experience" rows="4" placeholder="Tell us more about your artistic journey..." onChange={handleInputChange}></textarea>
          </div>
          
          <button type="submit" className="btn-send-wa">
            Submit via WhatsApp
          </button>
        </form>
      </div>

      <Footer />
    </div>
  );
}
