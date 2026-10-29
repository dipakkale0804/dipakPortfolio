import { ImageResponse } from "next/og";

export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default function OgImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: 80,
          background: "#0A0A0B",
          position: "relative",
          fontFamily: "system-ui, sans-serif",
          color: "#EDEDED",
        }}
      >
        {/* Top brand header */}
        <div style={{ display: "flex", alignItems: "center" }}>
          <div
            style={{
              width: 52,
              height: 52,
              borderRadius: 14,
              background: "#141418",
              border: "1px solid rgba(255, 99, 99, 0.45)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: 28,
              fontWeight: 800,
              boxShadow: "0 0 24px rgba(255, 99, 99, 0.35)",
              color: "#FFFFFF",
              marginRight: 16,
            }}
          >
            D
          </div>
          <div style={{ display: "flex", fontSize: 28, fontWeight: 700, letterSpacing: "-0.03em" }}>
            Dipak
          </div>
          <div
            style={{
              display: "flex",
              marginLeft: 20,
              padding: "6px 14px",
              borderRadius: 20,
              background: "rgba(255, 99, 99, 0.12)",
              border: "1px solid rgba(255, 99, 99, 0.25)",
              color: "#FF8E8E",
              fontSize: 14,
              fontWeight: 600,
            }}
          >
            Available Worldwide
          </div>
        </div>

        {/* Center Headline */}
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              display: "flex",
              fontSize: 62,
              fontWeight: 800,
              letterSpacing: "-0.04em",
              color: "#FFFFFF",
              marginBottom: 4,
            }}
          >
            Automate the boring.
          </div>
          <div
            style={{
              display: "flex",
              fontSize: 62,
              fontWeight: 800,
              letterSpacing: "-0.04em",
              color: "#FF6363",
              marginBottom: 20,
            }}
          >
            Build what matters.
          </div>
          <div
            style={{
              display: "flex",
              fontSize: 24,
              color: "#A1A1AA",
              maxWidth: 900,
              lineHeight: 1.4,
            }}
          >
            AI Automations, Smart Chatbots, Web Development &amp; Cloud Deployment for growing startups.
          </div>
        </div>

        {/* Bottom Trust Pills */}
        <div style={{ display: "flex" }}>
          {["AI Automation", "AI Chatbots", "Next.js & React", "Spring Boot & APIs", "AWS & Docker"].map(
            (tag, idx) => (
              <div
                key={idx}
                style={{
                  display: "flex",
                  padding: "10px 20px",
                  borderRadius: 10,
                  background: "rgba(255, 255, 255, 0.05)",
                  border: "1px solid rgba(255, 255, 255, 0.08)",
                  fontSize: 15,
                  fontWeight: 600,
                  color: "#D4D4D8",
                  marginRight: idx < 4 ? 14 : 0,
                }}
              >
                {tag}
              </div>
            )
          )}
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
