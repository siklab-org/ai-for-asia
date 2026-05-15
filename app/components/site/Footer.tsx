import Image from "next/image";

export function Footer() {
  return (
    <footer className="relative border-t border-border px-6 py-12">
      <div className="mx-auto max-w-6xl flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-3">
          <Image
            src="/logo.png"
            alt="AI for ASIA"
            width={36}
            height={36}
            className="h-9 w-9"
          />
          <div>
            <div className="font-semibold">
              AI for <span className="text-gradient">ASIA</span>
            </div>
            <div className="text-xs text-muted-foreground">
              Learn · Lead · Innovate
            </div>
          </div>
        </div>
        <div className="text-xs text-muted-foreground">
          © {new Date().getFullYear()} AI for ASIA. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
