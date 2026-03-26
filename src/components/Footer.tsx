export default function Footer() {
  return (
    <footer className="border-t border-border py-10 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
        <p>&copy; {new Date().getFullYear()} Summit Services LLC. All rights reserved.</p>
        <div className="flex gap-6">
          <a href="/legal" className="hover:text-foreground transition">Legal Information</a>
          <a href="/#contact" className="hover:text-foreground transition">Contact</a>
          <a href="/#about" className="hover:text-foreground transition">About</a>
        </div>
      </div>
    </footer>
  );
}
