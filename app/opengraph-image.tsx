import { ImageResponse } from "next/og";

export const alt = "Elisa Moratelli — Consulente del Lavoro a Rovereto";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

// Immagine di anteprima 1200x630 per Google, WhatsApp, LinkedIn, Facebook.
export default function OpenGraphImage() {
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
          background: "linear-gradient(135deg, #1C2B3A 0%, #2a1f2e 70%, #4a2a3f 100%)",
          color: "#fff",
          fontFamily: "Georgia, serif",
        }}
      >
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              fontSize: 22,
              letterSpacing: 6,
              textTransform: "uppercase",
              color: "#fdd9ec",
              fontFamily: "Arial, sans-serif",
              marginBottom: 28,
            }}
          >
            Consulente del Lavoro · Rovereto
          </div>
          <div style={{ fontSize: 88, fontWeight: 700, lineHeight: 1.05 }}>Elisa Moratelli</div>
          <div
            style={{
              fontSize: 34,
              color: "rgba(255,255,255,0.75)",
              marginTop: 28,
              fontFamily: "Arial, sans-serif",
              lineHeight: 1.35,
              maxWidth: 900,
            }}
          >
            Buste paga, assunzioni, contratti e adempimenti per aziende e PMI del Trentino.
          </div>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            fontFamily: "Arial, sans-serif",
            fontSize: 24,
            color: "rgba(255,255,255,0.6)",
          }}
        >
          <div>elisamoratelli.it</div>
          <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
            <div style={{ width: 14, height: 14, borderRadius: 999, background: "#d4689a" }} />
            Iscritta all&apos;Albo dei Consulenti del Lavoro
          </div>
        </div>
      </div>
    ),
    size
  );
}
