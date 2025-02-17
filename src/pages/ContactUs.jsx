import { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Mail, Phone, MapPin } from "lucide-react";

export default function ContactUs() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Your message has been sent!");
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <>
      <div className="overflow-hidden">
        <div className="relative mx-auto max-w-7xl">
          <div
            className="absolute -right-60 -top-44 h-60 w-[36rem] transform-gpu md:right-0 
            bg-[linear-gradient(115deg,var(--tw-gradient-stops))] 
            from-[#fff1be] from-[28%]   
            via-[#4fd1c5] via-[55%]    
            via-[#4a90e2] via-[70%]    
            to-[#5e60ff] to-[100%]
            rotate-[-10deg] 
            rounded-full blur-3xl"
          ></div>
        </div>
        <Navbar />
      </div>

      <div className="min-h-screen bg-gray-100 flex items-center justify-center p-6">
        <div className="max-w-4xl w-full bg-white rounded-2xl shadow-lg p-8">
          <h2 className="text-3xl font-bold text-center text-gray-900">Contact Us</h2>
          <p className="text-center text-gray-600 mt-2">
            Have questions? Get in touch with us.
          </p>

          {/* Contact Details */}
          <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            <div className="flex flex-col items-center">
              <Mail className="w-6 h-6 text-blue-500" />
              <p className="mt-2 text-gray-800 font-medium">info@meltenterprise.com</p>
            </div>
            <div className="flex flex-col items-center">
              <Phone className="w-6 h-6 text-blue-500" />
              <p className="mt-2 text-gray-800 font-medium">+91 98765 43210</p>
            </div>
            <div className="flex flex-col items-center">
              <MapPin className="w-6 h-6 text-blue-500" />
              <p className="mt-2 text-gray-800 font-medium">Mumbai, India</p>
            </div>
          </div>

          {/* Contact Form */}
          <form onSubmit={handleSubmit} className="mt-8 space-y-4">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={form.name}
              onChange={handleChange}
              required
              className="w-full p-3 border border-gray-300 rounded-lg"
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={form.email}
              onChange={handleChange}
              required
              className="w-full p-3 border border-gray-300 rounded-lg"
            />
            <textarea
              name="message"
              placeholder="Your Message"
              value={form.message}
              onChange={handleChange}
              required
              className="w-full p-3 border border-gray-300 rounded-lg"
            />
            <button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white p-3 rounded-lg">
              Send Message
            </button>
          </form>

          {/* Optional: Google Map Embed */}
          <div className="mt-8 w-full h-64 rounded-lg overflow-hidden">
            <iframe
              title="Melt Enterprise Location"
              width="100%"
              height="100%"
              frameBorder="0"
              scrolling="no"
              marginHeight="0"
              marginWidth="0"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.083607028372!2d144.9556518153172!3d-37.8172097420211!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad65d5df1f5242d%3A0x5045675218ce7e33!2sMumbai!5e0!3m2!1sen!2sin!4v1619339044872!5m2!1sen!2sin"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </div>
    </>
  );
}