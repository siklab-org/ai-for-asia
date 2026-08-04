"use client";

const logos = [
  "/speaker-logos/80000-hours.png",
  "/speaker-logos/aap.svg",
  "/speaker-logos/adb.png",
  "/speaker-logos/ai-safety-connect.png",
  "/speaker-logos/ai-singapore.png",
  "/speaker-logos/aiforasia.png",
  "/speaker-logos/aiproductivity.png",
  "/speaker-logos/aisafety.png",
  "/speaker-logos/asean.png",
  "/speaker-logos/center-for-ai-research.png",
  "/speaker-logos/dth-lab.png",
  "/speaker-logos/edubild.png",
  "/speaker-logos/embedded-llm.png",
  "/speaker-logos/enactus-logo.webp",
  "/speaker-logos/grafilab.png",
  "/speaker-logos/jivam.png",
  "/speaker-logos/microsoft.png",
  "/speaker-logos/oversight-board.svg",
  "/speaker-logos/oxford.png",
  "/speaker-logos/privacy-forum.png",
  "/speaker-logos/rmit.png",
  "/speaker-logos/siklab.png",
  "/speaker-logos/tgi.png",
  "/speaker-logos/undp.png",
  "/speaker-logos/unv.png",
  "/speaker-logos/wfuna.svg",
];

export function SpeakerLogos() {
  return (
    <section className="relative py-16 md:py-24 bg-black overflow-hidden">
      <style>{`
        @keyframes marquee-ltr {
          from { transform: translateX(-50%); }
          to { transform: translateX(0); }
        }
      `}</style>

      <div className="text-center mb-10 md:mb-14">
        <span className="text-xs uppercase tracking-[0.3em] text-gradient font-medium">
          Supported by speakers from:
        </span>
      </div>

      {/* Edge fades */}
      <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-24 md:w-48 z-10 bg-gradient-to-r from-black to-transparent" />
      <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-24 md:w-48 z-10 bg-gradient-to-l from-black to-transparent" />

      <div
        className="group flex w-max gap-12 md:gap-16 items-center"
        style={{
          animation: "marquee-ltr 200s linear infinite",
        }}
        onMouseEnter={(e) =>
          (e.currentTarget.style.animationPlayState = "paused")
        }
        onMouseLeave={(e) =>
          (e.currentTarget.style.animationPlayState = "running")
        }
      >
        {[...logos, ...logos].map((src, i) => (
          <img
            key={i}
            src={src}
            alt=""
            className="h-10 md:h-14 w-auto shrink-0 opacity-80 hover:opacity-50 transition-opacity duration-300"
            loading="lazy"
            draggable={false}
          />
        ))}
      </div>
    </section>
  );
}
