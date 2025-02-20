
import { Button } from "./ui/button/button";

export default function Contact() {
  return (
    <section id="contact" className="pt-[6rem] bg-[#DDDDDD]">
      <div className="max-w-4xl mx-auto text-center px-6">
        <h2 className="text-4xl font-bold mb-6 text-gray-900">Contact</h2>
        <p className="text-lg text-gray-900 mb-8">
          Have questions about the course? Get in touch!
        </p>

        {/* Contact Form */}
        <form className="bg-gray-200 p-6 rounded-lg shadow-lg">
          <div className="mb-4">
            <label className="block text-left text-gray-900">Name</label>
            <input type="text" className="w-full p-3 rounded-lg bg-gray-200 text-gray-900 border border-gray-600 focus:border-yellow-400 focus:outline-none" placeholder="Enter your name" required />
          </div>

          <div className="mb-4">
            <label className="block text-left text-gray-900">Email</label>
            <input type="email" className="w-full p-3 rounded-lg bg-gray-200 text-gray-900 border border-gray-600 focus:border-yellow-400 focus:outline-none" placeholder="Enter your email" required />
          </div>

          <div className="mb-4">
            <label className="block text-left text-gray-900">Message</label>
            <textarea className="w-full p-3 rounded-lg bg-gray-200 text-gray-900 border border-gray-600 focus:border-yellow-400 focus:outline-none" placeholder="Write your message" required></textarea>
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