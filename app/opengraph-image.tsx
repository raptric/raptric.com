import { ImageResponse } from "next/og";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
          backgroundColor: "#0a0a0c",
          backgroundImage:
            "radial-gradient(circle at 75% 30%, rgba(108,92,231,0.35), transparent 55%)",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 16,
            marginBottom: 48,
          }}
        >
          <div
            style={{
              width: 20,
              height: 20,
              borderRadius: 999,
              backgroundColor: "#8f7df2",
            }}
          />
          <div style={{ fontSize: 32, color: "#fafafb", fontWeight: 600 }}>
            Raptric
          </div>
        </div>
        <div
          style={{
            fontSize: 60,
            fontWeight: 700,
            color: "#fafafb",
            lineHeight: 1.15,
            maxWidth: 900,
          }}
        >
          We build operating systems for business workflows.
        </div>
        <div
          style={{
            fontSize: 28,
            color: "rgba(250,250,251,0.6)",
            marginTop: 28,
          }}
        >
          AI Automation · Support Operations · Engineering Team
        </div>
      </div>
    ),
    { ...size }
  );
}
