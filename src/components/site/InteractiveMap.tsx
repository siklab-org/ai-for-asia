"use client";

import { useEffect, useRef } from "react";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import { fellows, flagPinSvg } from "./Fellows";

const countryCoords: Record<string, { lat: number; lng: number }[]> = {
  Indonesia: [{ lat: -5, lng: 118 }],
  Philippines: [
    { lat: 7.07, lng: 125.61 },
    { lat: 16.41, lng: 120.6 },
    { lat: 14.55, lng: 121.04 },
  ],
  Vietnam: [{ lat: 15, lng: 108 }],
  Myanmar: [{ lat: 21, lng: 96 }],
  Taiwan: [{ lat: 24.5, lng: 121 }],
  Singapore: [
    { lat: 1.35, lng: 103.8 },
    { lat: 1.2, lng: 103.7 },
  ],
  Thailand: [{ lat: 14.5, lng: 100.5 }],
};

let idx: Record<string, number> = {};

const getCoord = (country: string) => {
  idx[country] ??= -1;
  idx[country]++;
  const arr = countryCoords[country];
  if (!arr) return { lat: 10, lng: 110 };
  return arr[idx[country] % arr.length];
};

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

    idx = {};

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
        overflow: hidden;
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
        width: 200px !important;
        font-family: "Space Grotesk", system-ui, sans-serif;
      }
      .leaflet-popup-close-button {
        color: rgba(255,255,255,0.5) !important;
        top: 6px !important;
        right: 6px !important;
        font-size: 18px !important;
        z-index: 2;
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

    fellows.forEach((f) => {
      const { lat, lng } = getCoord(f.country);
      const marker = L.marker([lat, lng], {
        icon: createMarkerIcon(),
        alt: f.name,
      }).addTo(map);

      const html = `
        <div style="padding:0;line-height:0">
          <img src="${f.img}" alt="${f.name}" style="width:100%;height:auto;display:block" />
          <div style="padding:10px 14px 12px;text-align:center;line-height:1.3">
            <div style="font-weight:600;font-size:13px;color:#f0f0f0">${f.name}</div>
            <div style="display:flex;align-items:center;justify-content:center;gap:6px;margin-top:6px">
              ${flagPinSvg(f.country)}
              <span style="font-size:11px;color:rgba(255,255,255,0.55);font-weight:400">${f.city}, ${f.country}</span>
            </div>
          </div>
        </div>
      `;

      marker.bindPopup(html, { maxWidth: 200, className: "", closeButton: true, autoPan: false });
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
