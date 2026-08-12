import { ImageResponse } from "next/og";

export const alt = "Karthikeya's Games Galaxy — gaming lounge in Tirupati";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          backgroundColor: "#F3F7FB",
          padding: "64px 72px",
        }}
      >
        <div
          style={{
            display: "flex",
            color: "#5C6B7A",
            fontSize: 26,
            letterSpacing: "0.14em",
            textTransform: "uppercase",
          }}
        >
          Tirupati · Gaming Lounge
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              fontSize: 68,
              fontWeight: 800,
              lineHeight: 1,
              letterSpacing: "-0.04em",
              color: "#0B1424",
              maxWidth: 920,
            }}
          >
            Karthikeya&apos;s Games&nbsp;
            <span style={{ color: "#FF2E00" }}>Galaxy</span>
          </div>
          <div
            style={{
              display: "flex",
              marginTop: 24,
              fontSize: 30,
              color: "#5C6B7A",
              maxWidth: 700,
            }}
          >
            Don&apos;t be bored, get on-board. Reserve a seat tonight.
          </div>
        </div>

        <div
          style={{
            display: "flex",
            width: "100%",
            justifyContent: "space-between",
            alignItems: "center",
            fontSize: 22,
            fontWeight: 600,
            color: "#0B1424",
          }}
        >
          <div style={{ display: "flex" }}>PS5 · Xbox · Switch · Racing · VR</div>
          <div style={{ display: "flex", color: "#FF2E00" }}>Reserve →</div>
        </div>
      </div>
    ),
    { ...size },
  );
}
