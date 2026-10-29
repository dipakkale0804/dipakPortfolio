import { ImageResponse } from "next/og";

export const size = {
  width: 32,
  height: 32,
};
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#0A0A0B",
          borderRadius: 8,
          border: "1px solid rgba(255, 99, 99, 0.4)",
          boxShadow: "0 0 12px rgba(255, 99, 99, 0.5)",
          color: "#FFFFFF",
          fontWeight: 800,
          fontSize: 18,
          fontFamily: "system-ui, sans-serif",
        }}
      >
        <span
          style={{
            background: "linear-gradient(135deg, #FFFFFF 0%, #FF6363 100%)",
            backgroundClip: "text",
            color: "transparent",
          }}
        >
          D
        </span>
      </div>
    ),
    {
      ...size,
    }
  );
}
