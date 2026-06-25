"use client";

import { useEffect, useRef } from "react";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import type { Fellow } from "./Fellows";
import { fellows as carouselFellows, flagPinSvg } from "./Fellows";

const countryCoords: Record<string, { lat: number; lng: number }[]> = {
  Indonesia: [
    { lat: -5, lng: 118 },
    { lat: -6.2, lng: 106.8 },
    { lat: -7.25, lng: 112.75 },
    { lat: -6.9, lng: 107.6 },
    { lat: -3.7, lng: 128.2 },
    { lat: -8.5, lng: 116.5 },
    { lat: -2.5, lng: 118.5 },
  ],
  Philippines: [
    { lat: 7.07, lng: 125.61 },
    { lat: 16.41, lng: 120.6 },
    { lat: 14.55, lng: 121.04 },
    { lat: 14.65, lng: 121.03 },
    { lat: 10.3, lng: 123.9 },
    { lat: 8.5, lng: 124.6 },
    { lat: 12.1, lng: 122.0 },
    { lat: 6.9, lng: 124.9 },
    { lat: 11.2, lng: 123.7 },
  ],
  Vietnam: [
    { lat: 15, lng: 108 },
    { lat: 10.78, lng: 106.7 },
    { lat: 16.07, lng: 108.22 },
    { lat: 10.8, lng: 106.85 },
    { lat: 21.03, lng: 105.85 },
  ],
  Myanmar: [
    { lat: 21, lng: 96 },
    { lat: 16.85, lng: 96.15 },
    { lat: 22.0, lng: 96.5 },
    { lat: 20.0, lng: 95.0 },
    { lat: 18.0, lng: 94.5 },
  ],
  Taiwan: [{ lat: 24.5, lng: 121 }],
  Singapore: [
    { lat: 1.35, lng: 103.8 },
    { lat: 1.2, lng: 103.7 },
    { lat: 1.3, lng: 103.85 },
  ],
  Thailand: [
    { lat: 14.5, lng: 100.5 },
    { lat: 13.75, lng: 100.6 },
  ],
  Malaysia: [
    { lat: 3.1, lng: 101.7 },
    { lat: 5.4, lng: 100.3 },
    { lat: 2.9, lng: 101.9 },
    { lat: 4.6, lng: 101.1 },
    { lat: 3.5, lng: 102.5 },
    { lat: 6.1, lng: 102.3 },
  ],
  "Brunei Darussalam": [
    { lat: 4.9, lng: 114.9 },
    { lat: 4.7, lng: 115.1 },
    { lat: 5.0, lng: 115.0 },
  ],
  "Timor Leste": [
    { lat: -8.56, lng: 125.57 },
    { lat: -8.5, lng: 125.6 },
    { lat: -8.3, lng: 125.8 },
    { lat: -8.6, lng: 125.4 },
  ],
  Cambodia: [
    { lat: 11.55, lng: 104.9 },
    { lat: 11.6, lng: 104.8 },
    { lat: 13.4, lng: 103.9 },
    { lat: 11.3, lng: 105.0 },
  ],
};

let idx: Record<string, number> = {};

const getCoord = (country: string) => {
  idx[country] ??= -1;
  idx[country]++;
  const arr = countryCoords[country];
  if (!arr) return { lat: 10, lng: 110 };
  return arr[idx[country] % arr.length];
};

const rawNewFellows: Fellow[] = [
  { img: "", name: "Elena Thompson", quote: "", city: "Jakarta", country: "Indonesia", x: 0, y: 0 },
  { img: "", name: "Kamila Nurhusna", quote: "", city: "Jakarta", country: "Indonesia", x: 0, y: 0 },
  { img: "", name: "Fabiandika Nawfal Azzarel", quote: "", city: "Jakarta", country: "Indonesia", x: 0, y: 0 },
  { img: "", name: "GEBY MONICA SIMBOLON", quote: "", city: "Medan", country: "Indonesia", x: 0, y: 0 },
  { img: "", name: "Edwinsyah Umasugi", quote: "", city: "Jayapura", country: "Indonesia", x: 0, y: 0 },
  { img: "", name: "James Cahyadi Purnomo", quote: "", city: "Surabaya", country: "Indonesia", x: 0, y: 0 },
  { img: "", name: "Joko Susilo", quote: "", city: "Yogyakarta", country: "Indonesia", x: 0, y: 0 },
  { img: "", name: "Patrick Kurniawan", quote: "", city: "Bandung", country: "Indonesia", x: 0, y: 0 },
  { img: "", name: "KAH WEI TAN", quote: "", city: "Kuala Lumpur", country: "Malaysia", x: 0, y: 0 },
  { img: "", name: "Vanessa Scully", quote: "", city: "Kuala Lumpur", country: "Malaysia", x: 0, y: 0 },
  { img: "", name: "Ruthra Mary Ramachandran", quote: "", city: "Kuala Lumpur", country: "Malaysia", x: 0, y: 0 },
  { img: "", name: "Srre Vaishnavi Palanisamy", quote: "", city: "Kuala Lumpur", country: "Malaysia", x: 0, y: 0 },
  { img: "", name: "Wei Liang Ho", quote: "", city: "Penang", country: "Malaysia", x: 0, y: 0 },
  { img: "", name: "Mohamad Alfatihah Fahmi Farid", quote: "", city: "Kuala Lumpur", country: "Malaysia", x: 0, y: 0 },
  { img: "", name: "Lành Đỗ", quote: "", city: "Ho Chi Minh City", country: "Vietnam", x: 0, y: 0 },
  { img: "", name: "Quynh Nhi Pham", quote: "", city: "Ho Chi Minh City", country: "Vietnam", x: 0, y: 0 },
  { img: "", name: "Ha Phan", quote: "", city: "Ho Chi Minh City", country: "Vietnam", x: 0, y: 0 },
  { img: "", name: "Hong Thien Trang Pham", quote: "", city: "Hanoi", country: "Vietnam", x: 0, y: 0 },
  { img: "", name: "Trang Nguyen", quote: "", city: "Hanoi", country: "Vietnam", x: 0, y: 0 },
  { img: "", name: "An Pham", quote: "", city: "Ho Chi Minh City", country: "Vietnam", x: 0, y: 0 },
  { img: "", name: "Ngoc Kieu Tien Nguyen", quote: "", city: "Ho Chi Minh City", country: "Vietnam", x: 0, y: 0 },
  { img: "", name: "Van Chinh Pham", quote: "", city: "Hanoi", country: "Vietnam", x: 0, y: 0 },
  { img: "", name: "Jorjani Sinsuat", quote: "", city: "Manila", country: "Philippines", x: 0, y: 0 },
  { img: "", name: "Renz Nathaniel Luyao", quote: "", city: "Manila", country: "Philippines", x: 0, y: 0 },
  { img: "", name: "John Niño Derecho", quote: "", city: "Manila", country: "Philippines", x: 0, y: 0 },
  { img: "", name: "Keb Cuevas", quote: "", city: "Manila", country: "Philippines", x: 0, y: 0 },
  { img: "", name: "Abdel Jalal Sinapilo", quote: "", city: "Manila", country: "Philippines", x: 0, y: 0 },
  { img: "", name: "Jamil Andrew Orata", quote: "", city: "Manila", country: "Philippines", x: 0, y: 0 },
  { img: "", name: "Gabrielle Mae Arco", quote: "", city: "Manila", country: "Philippines", x: 0, y: 0 },
  { img: "", name: "Maria Lourdes Malipol", quote: "", city: "Manila", country: "Philippines", x: 0, y: 0 },
  { img: "", name: "Hnin Ei San", quote: "", city: "Yangon", country: "Myanmar", x: 0, y: 0 },
  { img: "", name: "Shin Thant Phyo", quote: "", city: "Yangon", country: "Myanmar", x: 0, y: 0 },
  { img: "", name: "Thint Myat Thiri Htun", quote: "", city: "Yangon", country: "Myanmar", x: 0, y: 0 },
  { img: "", name: "Min Kyal Sin Thant", quote: "", city: "Yangon", country: "Myanmar", x: 0, y: 0 },
  { img: "", name: "Khun Sint Phoo Wai", quote: "", city: "Yangon", country: "Myanmar", x: 0, y: 0 },
  { img: "", name: "Alex wen jie Lew", quote: "", city: "Singapore", country: "Singapore", x: 0, y: 0 },
  { img: "", name: "DK Ummi Nurazila Azzayaty PG Hassanal Ali Saifuddin", quote: "", city: "Bandar Seri Begawan", country: "Brunei Darussalam", x: 0, y: 0 },
  { img: "", name: "Arif Syahmi", quote: "", city: "Bandar Seri Begawan", country: "Brunei Darussalam", x: 0, y: 0 },
  { img: "", name: "Medialin Elrna Anak Mukan", quote: "", city: "Bandar Seri Begawan", country: "Brunei Darussalam", x: 0, y: 0 },
  { img: "", name: "NURFARAH ALIAA BINTI HAJI SUHAIMI", quote: "", city: "Bandar Seri Begawan", country: "Brunei Darussalam", x: 0, y: 0 },
  { img: "", name: "Livorio Moniz da Conceição Amaral", quote: "", city: "Dili", country: "Timor Leste", x: 0, y: 0 },
  { img: "", name: "Marcelino de Andrade", quote: "", city: "Dili", country: "Timor Leste", x: 0, y: 0 },
  { img: "", name: "Paulo Silva", quote: "", city: "Dili", country: "Timor Leste", x: 0, y: 0 },
  { img: "", name: "Ajito Nelson Lucio da Costa", quote: "", city: "Dili", country: "Timor Leste", x: 0, y: 0 },
  { img: "", name: "Graziela Neuza De Deus Martins", quote: "", city: "Dili", country: "Timor Leste", x: 0, y: 0 },
  { img: "", name: "Pichsereyvathanak Khy", quote: "", city: "Phnom Penh", country: "Cambodia", x: 0, y: 0 },
  { img: "", name: "Livhoung Hour", quote: "", city: "Phnom Penh", country: "Cambodia", x: 0, y: 0 },
  { img: "", name: "LAYHOK LENG", quote: "", city: "Phnom Penh", country: "Cambodia", x: 0, y: 0 },
  { img: "", name: "Hongchhay Chheng", quote: "", city: "Phnom Penh", country: "Cambodia", x: 0, y: 0 },
  { img: "", name: "Prued Wahachart", quote: "", city: "Bangkok", country: "Thailand", x: 0, y: 0 },
];

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

    mapFellows.forEach((f) => {
      const { lat, lng } = getCoord(f.country);
      const marker = L.marker([lat, lng], {
        icon: createMarkerIcon(),
        alt: f.name,
      }).addTo(map);

      const html = `
        <div style="padding:0;line-height:0">
          ${f.img ? `<img src="${f.img}" alt="${f.name}" style="width:100%;height:auto;display:block" />` : ""}
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
