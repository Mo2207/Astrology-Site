
import { Button } from "./ui/button/button";

export default function Contact() {
  return (
    <section id="contact" className="pt-[2rem]">
      <div className="max-w-4xl mx-auto text-center px-6">
        <h2 className="text-4xl font-bold mb-6">Contact Us</h2>
        <p className="text-lg text-gray-300 mb-8">
          Have questions about your horoscope or astrology readings? Get in touch with us!
        </p>

        {/* Contact Form */}
        <form className="bg-gray-800 p-6 rounded-lg shadow-lg">
          <div className="mb-4">
            <label className="block text-left text-gray-400">Name</label>
            <input type="text" className="w-full p-3 rounded-lg bg-gray-900 text-white border border-gray-600 focus:border-yellow-400 focus:outline-none" placeholder="Enter your name" required />
          </div>

          <div className="mb-4">
            <label className="block text-left text-gray-400">Email</label>
            <input type="email" className="w-full p-3 rounded-lg bg-gray-900 text-white border border-gray-600 focus:border-yellow-400 focus:outline-none" placeholder="Enter your email" required />
          </div>

          <div className="mb-4">
            <label className="block text-left text-gray-400">Date of Birth</label>
            <input type="date" className="w-full p-3 rounded-lg bg-gray-900 text-white border border-gray-600 focus:border-yellow-400 focus:outline-none" required />
          </div>

          <div className="mb-4">
            <label className="block text-left text-gray-400">Message</label>
            <textarea className="w-full p-3 rounded-lg bg-gray-900 text-white border border-gray-600 focus:border-yellow-400 focus:outline-none" placeholder="Write your message" required></textarea>
          </div>

          <Button type="submit">Send Message</Button>
        </form>

        {/* Social Media Links */}
        <div className="mt-8 flex justify-center gap-6">
          <a href="#" className="text-gray-400 hover:text-yellow-400 transition">Facebook</a>
          <a href="#" className="text-gray-400 hover:text-yellow-400 transition">X</a>
          <a href="#" className="text-gray-400 hover:text-yellow-400 transition">Instagram</a>
        </div>
      </div>
    </section>
  );
}