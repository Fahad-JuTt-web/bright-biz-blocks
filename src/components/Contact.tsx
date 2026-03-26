import { Mail, Phone } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12">
        Contact Us
      </h2>
      <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
        <div className="space-y-6">
          <p className="text-muted-foreground text-lg">
            Ready to get connected? Reach out and we'll help you find the
            perfect plan for your location.
          </p>
          <div className="flex items-center gap-3 text-muted-foreground">
            <Mail size={20} className="text-primary" />
            <a href="mailto:info@summitsrvz.com" className="hover:text-foreground transition">
              info@summitsrvz.com
            </a>
          </div>
          <div className="flex items-center gap-3 text-muted-foreground">
            <Phone size={20} className="text-primary" />
            <a href="tel:+16146160411" className="hover:text-foreground transition">
              +1 (614) 616-0411
            </a>
          </div>
        </div>
        <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
          <input
            type="text"
            placeholder="Your Name"
            className="w-full px-4 py-3 rounded-lg bg-secondary border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="w-full px-4 py-3 rounded-lg bg-secondary border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50"
          />
          <textarea
            rows={4}
            placeholder="Your Message"
            className="w-full px-4 py-3 rounded-lg bg-secondary border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 resize-none"
          />
          <button
            type="submit"
            className="w-full py-3 rounded-lg bg-primary text-primary-foreground font-semibold hover:opacity-90 transition"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}
