import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const sections = [
  {
    title: "1. Business Information",
    content:
      "This website is operated by Summit Services LLC, an independent authorized dealer. We are not owned or operated by Viasat, Inc. or any other service provider. All trademarks, logos, and brand names are the property of their respective owners.",
  },
  {
    title: "2. Services Disclaimer",
    content:
      'The services advertised on this website, including internet plans, speeds, and pricing, are subject to availability and may vary based on location, equipment, and other factors. We act as an authorized dealer and do not directly provide internet service. All services are fulfilled by the respective service provider (e.g., Viasat). Speeds referenced are "up to" speeds and actual performance may vary.',
  },
  {
    title: "3. Privacy Policy",
    content:
      "We collect personal information (such as name, address, phone number, and email) solely for the purpose of processing service orders and communicating with customers. We do not sell, rent, or share your personal data with third parties except as required to fulfill your service request or comply with the law. We use industry-standard measures to protect your data.",
  },
  {
    title: "4. Terms & Conditions",
    content:
      "By using this website or submitting an order, you agree to the following:\n• You are at least 18 years old.\n• The information you provide is accurate and complete.\n• You authorize us to submit your information to the service provider for order processing.\n• Service activation is subject to provider approval, credit check (if applicable), and availability.\n• We are not liable for service outages, delays, or issues caused by the service provider.",
  },
  {
    title: "5. Refund Policy",
    content:
      "Since Summit Services LLC acts as an authorized dealer and does not directly bill customers for internet services:\n• Any billing disputes, cancellations, or refund requests must be handled directly with the service provider (e.g., Viasat).\n• If a customer was charged any fee directly by Summit Services LLC and believes it was in error, they may contact us for review.\n• We do not guarantee refunds for third-party services.",
  },
  {
    title: "6. Do Not Call (DNC) Policy",
    content:
      "Summit Services LLC fully complies with the Telephone Consumer Protection Act (TCPA) and all applicable Do Not Call regulations.\n• We do not engage in unsolicited robocalls or auto-dialed marketing calls without prior express consent.\n• Customers may request to be added to our internal Do Not Call list at any time by contacting us via email or phone.\n• Requests will be processed within 30 days.",
  },
  {
    title: "7. Consent & Communication",
    content:
      "By submitting your information through our website or over the phone, you consent to being contacted by Summit Services LLC or its partners regarding your service inquiry. This may include calls, texts, and emails. You may opt out of communications at any time.",
  },
  {
    title: "8. Limitation of Liability",
    content:
      "Summit Services LLC shall not be held liable for:\n• Any damages arising from the use of services provided by third-party carriers.\n• Delays or failures in service activation.\n• Errors in service availability checks.\n• Any indirect, incidental, or consequential damages.",
  },
  {
    title: "9. Marketing & Landing Pages Disclaimer",
    content:
      "This website and any associated landing pages are operated by Summit Services LLC for marketing and lead generation purposes. These pages are not affiliated with or endorsed by the service provider unless explicitly stated. Additional landing pages may be created in the future for marketing and customer acquisition. All pages will comply with applicable laws and partner requirements.",
  },
  {
    title: "10. Contact Information",
    content:
      "For any legal, privacy, or service-related inquiries, please contact:\n\nSummit Services LLC\nEmail: info@summitsrvz.com\nPhone: +1 (614) 616-0411",
  },
  {
    title: "11. Updates to This Policy",
    content:
      "We reserve the right to update or modify this Legal page at any time. Changes will be effective immediately upon posting.",
  },
];

export default function LegalPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <main className="pt-24 pb-20 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <h1 className="text-3xl sm:text-4xl font-bold mb-2">
          Legal Information
        </h1>
        <p className="text-muted-foreground mb-10">
          Privacy Policy, Terms & Conditions, Refund Policy, and Do Not Call
          (DNC) Policy
        </p>

        <div className="space-y-10">
          {sections.map((s) => (
            <section key={s.title}>
              <h2 className="text-xl font-semibold mb-3 text-accent">
                {s.title}
              </h2>
              <p className="text-muted-foreground leading-relaxed whitespace-pre-line">
                {s.content}
              </p>
            </section>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
}
