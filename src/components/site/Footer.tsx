import logo from "@/assets/logo.png";

export function Footer() {
  return (
    <footer className="relative border-t border-border px-6 py-12">
      <div className="mx-auto max-w-6xl flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-3">
          <img src={logo} alt="AI for ASEAN" className="h-9 w-9" />
          <div>
            <div className="font-semibold">AI for <span className="text-gradient">ASEAN</span></div>
            <div className="text-xs text-muted-foreground">Learn · Lead · Innovate</div>
          </div>
        </div>
        <div className="text-xs text-muted-foreground">
          © {new Date().getFullYear()} AI for ASEAN. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
