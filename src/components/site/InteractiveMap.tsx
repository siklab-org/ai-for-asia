"use client";

import { useEffect, useRef } from "react";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import type { Fellow } from "./Fellows";
import { fellows as carouselFellows, flagPinSvg, rawNewFellows } from "./Fellows";

const countryCapitalCoords: Record<string, { lat: number; lng: number }> = {
  Indonesia: { lat: -6.2, lng: 106.8 }, // Jakarta
  Philippines: { lat: 14.55, lng: 121.04 }, // Manila
  Vietnam: { lat: 21.03, lng: 105.85 }, // Hanoi
  Myanmar: { lat: 16.85, lng: 96.15 }, // Yangon
  Taiwan: { lat: 24.5, lng: 121 }, // Taipei
  Singapore: { lat: 1.35, lng: 103.8 }, // Singapore
  Thailand: { lat: 14.5, lng: 100.5 }, // Bangkok
  Malaysia: { lat: 3.1, lng: 101.7 }, // Kuala Lumpur
  "Brunei Darussalam": { lat: 4.9, lng: 114.9 }, // Bandar Seri Begawan
  "Timor Leste": { lat: -8.56, lng: 125.57 }, // Dili
  Cambodia: { lat: 11.55, lng: 104.9 }, // Phnom Penh
};

const carouselNames = new Set(carouselFellows.map((f) => f.name.toLowerCase()));
const deduped: Fellow[] = [];
const seen = new Set<string>();
for (const f of rawNewFellows) {
  const key = f.name.toLowerCase();
  if (!carouselNames.has(key) && !seen.has(key)) {
    deduped.push(f);
    seen.add(key);
  }
}
const mapFellows: Fellow[] = [...carouselFellows, ...deduped];

// Group fellows by country
const fellowsByCountry = new Map<string, Fellow[]>();
for (const f of mapFellows) {
  const country = f.country;
  if (!fellowsByCountry.has(country)) {
    fellowsByCountry.set(country, []);
  }
  fellowsByCountry.get(country)!.push(f);
}

function createMarkerIcon() {
  return L.divIcon({
    className: "",
    html: `<div class="fellow-pin"><div class="fellow-pin-inner"></div></div>`,
    iconSize: [24, 24],
    iconAnchor: [12, 12],
    popupAnchor: [0, -14],
  });
}

export function InteractiveMap() {
  const ref = useRef<HTMLDivElement>(null);
  const mapRef = useRef<L.Map | null>(null);

  useEffect(() => {
    if (mapRef.current || !ref.current) return;

    const map = L.map(ref.current, {
      center: [10, 112],
      zoom: 4,
      scrollWheelZoom: false,
      boxZoom: false,
      doubleClickZoom: false,
      keyboard: false,
      zoomControl: false,
      attributionControl: false,

    });

    L.tileLayer("https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png", {
      subdomains: "abcd",
    }).addTo(map);

    L.control
      .zoom({
        position: "bottomright",
      })
      .addTo(map);

    document.querySelectorAll(".fellow-pin-base").forEach((el) => el.remove());
    const style = document.createElement("style");
    style.className = "fellow-pin-base";
    style.textContent = `
      .fellow-pin {
        width: 24px;
        height: 24px;
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
      }
      .fellow-pin-inner {
        width: 14px;
        height: 14px;
        border-radius: 50%;
        background: linear-gradient(115deg, #0060ba, #8561c5, #c671af);
        box-shadow: 0 0 0 3px rgba(198,113,175,0.35), 0 0 12px rgba(133,97,197,0.4);
        transition: transform 0.2s, box-shadow 0.2s;
      }
      .fellow-pin:hover .fellow-pin-inner {
        transform: scale(1.3);
        box-shadow: 0 0 0 4px rgba(198,113,175,0.5), 0 0 20px rgba(133,97,197,0.6);
      }
      .leaflet-popup-content-wrapper {
        border-radius: 14px !important;
        padding: 0 !important;
        background: rgba(15,15,25,0.92) !important;
        backdrop-filter: blur(16px);
        border: 1px solid rgba(255,255,255,0.08);
        box-shadow: 0 8px 40px rgba(0,0,0,0.5) !important;
        color: #f0f0f0;
      }
      .leaflet-popup-tip {
        background: rgba(15,15,25,0.92) !important;
        border: 1px solid rgba(255,255,255,0.08);
        box-shadow: none !important;
      }
      .leaflet-popup-content {
        margin: 0 !important;
        width: 300px !important;
        font-family: "Space Grotesk", system-ui, sans-serif;
      }
      .leaflet-popup-close-button {
        color: rgba(255,255,255,0.5) !important;
        top: 6px !important;
        right: 6px !important;
        font-size: 18px !important;
        z-index: 2;
      }
      .fellow-popup-grid::-webkit-scrollbar {
        width: 4px;
      }
      .fellow-popup-grid::-webkit-scrollbar-track {
        background: transparent;
      }
      .fellow-popup-grid::-webkit-scrollbar-thumb {
        background: rgba(255,255,255,0.2);
        border-radius: 4px;
      }
      .fellow-popup-grid::-webkit-scrollbar-thumb:hover {
        background: rgba(255,255,255,0.4);
      }
      .leaflet-control-zoom a {
        background: rgba(15,15,25,0.85) !important;
        backdrop-filter: blur(8px);
        color: #f0f0f0 !important;
        border: 1px solid rgba(255,255,255,0.1) !important;
        border-radius: 8px !important;
        margin: 4px 0 !important;
        width: 34px !important;
        height: 34px !important;
        line-height: 34px !important;
        font-size: 16px !important;
        transition: background 0.2s;
      }
      .leaflet-control-zoom a:hover {
        background: rgba(133,97,197,0.5) !important;
      }
      .leaflet-control-zoom {
        border: none !important;
        box-shadow: none !important;
      }
    `;
    document.head.appendChild(style);

    fellowsByCountry.forEach((fellows, country) => {
      const coord = countryCapitalCoords[country];
      if (!coord) return;
      const marker = L.marker([coord.lat, coord.lng], {
        icon: createMarkerIcon(),
        alt: country,
      }).addTo(map);

      const fellowItems = fellows.map(f => `
        <div style="margin-bottom:4px">
          <div style="font-weight:500;font-size:12px;color:#f0f0f0">${f.name}</div>
          <div style="font-size:11px;color:rgba(255,255,255,0.55)">${f.city}</div>
        </div>
      `).join('');

      const html = `
        <div style="padding:10px 14px 12px;line-height:1.3">
          <div style="display:flex;align-items:center;gap:6px;margin-bottom:8px">
            ${flagPinSvg(country)}
            <span style="font-weight:600;font-size:14px;color:#f0f0f0">${country}</span>
            <span style="font-size:11px;color:rgba(255,255,255,0.45)">(${fellows.length})</span>
          </div>
          <div class="fellow-popup-grid" style="display:grid;grid-template-columns:1fr 1fr;gap:4px 8px;max-height:300px;overflow-y:auto;padding-right:4px">
            ${fellowItems}
          </div>
        </div>
      `;

      marker.bindPopup(html, { maxWidth: 300, className: "", closeButton: true, autoPan: false });
    });

    mapRef.current = map;

    return () => {
      map.remove();
      mapRef.current = null;
    };
  }, []);

  return (
    <div
      ref={ref}
      className="w-full h-[520px] rounded-2xl overflow-hidden ring-1 ring-white/10 shadow-2xl"
    />
  );
}
