import { ImageResponse } from "next/og";
import { site } from "@/lib/site";

export const alt = `${site.name} · ${site.tagline}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const steps = ["Capture", "Organize", "Draft", "Your approval", "Follow-up"];

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "72px 80px",
          backgroundColor: "#06070a",
          backgroundImage: "radial-gradient(circle at 50% -20%, rgba(63,108,224,0.35), rgba(6,7,10,0) 60%)",
          color: "#e8ecf3",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
          <div
            style={{
              width: 44,
              height: 44,
              borderRadius: 12,
              background: "linear-gradient(180deg, #18305f, #0b1630)",
              border: "1px solid rgba(255,255,255,0.12)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <svg width="26" height="26" viewBox="0 0 20 20" fill="none">
              <path
                d="M5.5 10H8a2 2 0 0 0 2-2V6.5a2 2 0 0 1 2-2h1M8 10a2 2 0 0 1 2 2v1.5a2 2 0 0 0 2 2h1"
                stroke="#b3c8ff"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
              <circle cx="3.75" cy="10" r="1.9" fill="#b3c8ff" />
              <circle cx="15.5" cy="4.5" r="1.9" stroke="#b3c8ff" strokeWidth="1.4" />
              <circle cx="15.5" cy="15.5" r="1.9" fill="#52c99c" />
            </svg>
          </div>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <div style={{ fontSize: 26, fontWeight: 600, color: "#ffffff" }}>{site.name}</div>
            <div style={{ fontSize: 18, color: "#7a8293" }}>{site.tagline}</div>
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ fontSize: 64, fontWeight: 700, lineHeight: 1.07, letterSpacing: "-0.04em", color: "#ffffff" }}>
            Stop losing customers between the first message and the follow-up.
          </div>
          <div style={{ marginTop: 24, fontSize: 26, lineHeight: 1.4, color: "#9aa3b3", maxWidth: 940 }}>
            Simple systems for service businesses: capture every lead, organize the details, and draft a reply
            you approve.
          </div>
        </div>

        <div style={{ display: "flex", alignItems: "center", gap: 12, fontSize: 20 }}>
          {steps.map((step, index) => (
            <div key={step} style={{ display: "flex", alignItems: "center", gap: 12 }}>
              <div
                style={{
                  display: "flex",
                  padding: "8px 16px",
                  borderRadius: 999,
                  border: step === "Human approval" ? "1px solid rgba(82,201,156,0.5)" : "1px solid rgba(255,255,255,0.14)",
                  color: step === "Human approval" ? "#8fe3c2" : "#b3c8ff",
                }}
              >
                {step}
              </div>
              {index < steps.length - 1 && <div style={{ display: "flex", color: "#7a8293" }}>→</div>}
            </div>
          ))}
        </div>
      </div>
    ),
    size,
  );
}
