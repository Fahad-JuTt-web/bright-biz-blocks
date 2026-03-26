import { Wifi } from "lucide-react";

export default function Hero() {
  return (
    <section
      id="home"
      className="pt-28 pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto text-center"
    >
      <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm mb-6">
        <Wifi size={16} />
        Authorized Viasat Dealer
      </div>
      <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight mb-6">
        High-Speed Satellite Internet{" "}
        <span className="text-primary">Wherever You Are</span>
      </h1>
      <p className="max-w-2xl mx-auto text-lg text-muted-foreground mb-8">
        Fast, reliable internet for rural and underserved areas. Connect your
        home or business with plans starting at just $49.99/month.
      </p>
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <a
          href="/#contact"
          className="px-8 py-3 rounded-lg bg-primary text-primary-foreground font-semibold hover:opacity-90 transition text-lg"
        >
          Check Availability
        </a>
        <a
          href="/#services"
          className="px-8 py-3 rounded-lg border border-border text-foreground font-semibold hover:bg-secondary transition text-lg"
        >
          View Plans
        </a>
      </div>
    </section>
  );
}
