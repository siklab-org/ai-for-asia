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
        <div className="flex items-center gap-4">
          <a
            href="https://www.facebook.com/profile.php?id=61580536983970"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-foreground transition-colors"
            aria-label="Facebook"
          >
            <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
            </svg>
          </a>
          <a
            href="https://www.linkedin.com/company/ai-for-asia/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-foreground transition-colors"
            aria-label="LinkedIn"
          >
            <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
              <rect x="2" y="9" width="4" height="12" />
              <circle cx="4" cy="4" r="2" />
            </svg>
          </a>
        </div>
        <div className="text-xs text-muted-foreground">
          © {new Date().getFullYear()} AI for ASIA. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
