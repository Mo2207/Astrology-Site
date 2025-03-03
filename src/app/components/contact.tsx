
import { Button } from "./ui/button/button";
import { useTranslation } from "react-i18next";

export default function Contact() {
  const { t } = useTranslation();

  return (
    <section id="contact" className="pt-[6rem] bg-white text-gray-900">
      <div className="max-w-4xl mx-auto text-center px-6">
        <h2 className="text-4xl font-bold mb-6">{t("contact.header.h2")}</h2>
        <p className="text-lg font-semibold mb-12">{t("contact.header.p")}</p>

        {/* Contact Form */}
        <form className="bg-gray-100 p-10 rounded-lg shadow-lg">
          <div className="mb-8">
            <label className="block text-left font-semibold pb-2">{t("contact.form.name_label")}</label>
            <input type="text" className="w-full p-3 rounded-lg bg-white border border-white focus:border-gray-400 focus:outline-none" placeholder={t("contact.form.name_placeholder")} required />
          </div>

          <div className="mb-8">
            <label className="block text-left font-semibold pb-2">{t("contact.form.email_label")}</label>
            <input type="email" className="w-full p-3 rounded-lg bg-white border border-white focus:border-gray-400 focus:outline-none" placeholder={t("contact.form.email_placeholder")} required />
          </div>

          <div className="mb-8">
            <label className="block text-left font-semibold pb-2">{t("contact.form.message_label")}</label>
            <textarea className="w-full p-3 rounded-lg bg-white border border-white focus:border-gray-400 focus:outline-none" placeholder={t("contact.form.message_placeholder")} required></textarea>
          </div>

          <Button type="submit">{t("contact.submit")}</Button>
        </form>

        {/* Social Media Links */}
        <div className="mt-8 pb-4 flex justify-center gap-6">
          <a href="#" className="text-gray-700 hover:mouse-cursor transition">{t("contact.links.facebook")}</a>
          <a href="#" className="text-gray-700 hover:mouse-cursor transition">{t("contact.links.x")}</a>
          <a href="#" className="text-gray-700 hover:mouse-cursor transition">{t("contact.links.instagram")}</a>
        </div>
      </div>
    </section>
  );
}