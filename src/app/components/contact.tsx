
import { Button } from "./ui/button/button";

export default function Contact() {
  return (
    <section id="contact" className="pt-[6rem] bg-white text-gray-900">
      <div className="max-w-4xl mx-auto text-center px-6">
        <h2 className="text-4xl font-bold mb-6">Contact</h2>
        <p className="text-lg font-semibold mb-12">
          Have questions about the course? Get in touch!
        </p>

        {/* Contact Form */}
        <form className="bg-gray-100 p-10 rounded-lg shadow-lg">
          <div className="mb-8">
            <label className="block text-left font-semibold pb-2">Name</label>
            <input type="text" className="w-full p-3 rounded-lg bg-white border border-white focus:border-gray-400 focus:outline-none" placeholder="Enter your name" required />
          </div>

          <div className="mb-8">
            <label className="block text-left font-semibold pb-2">Email</label>
            <input type="email" className="w-full p-3 rounded-lg bg-white border border-white focus:border-gray-400 focus:outline-none" placeholder="Enter your email" required />
          </div>

          <div className="mb-8">
            <label className="block text-left font-semibold pb-2">Message</label>
            <textarea className="w-full p-3 rounded-lg bg-white border border-white focus:border-gray-400 focus:outline-none" placeholder="Write your message" required></textarea>
          </div>

          <Button type="submit">Send Message</Button>
        </form>

        {/* Social Media Links */}
        <div className="mt-8 pb-4 flex justify-center gap-6">
          <a href="#" className="text-gray-700 hover:mouse-cursor transition">Facebook</a>
          <a href="#" className="text-gray-700 hover:mouse-cursor transition">X</a>
          <a href="#" className="text-gray-700 hover:mouse-cursor transition">Instagram</a>
        </div>
      </div>
    </section>
  );
}