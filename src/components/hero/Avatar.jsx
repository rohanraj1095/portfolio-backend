import avatarImg from "../../assets/avatar.png";

export function Avatar({ compact }) {
  const size = compact ? 190 : 240;
  return (
    <div
      className="fade-up d-100"
      style={{
        position: "relative",
        width: size,
        height: size,
        margin: 0,
      }}
    >
      {/* glow behind avatar */}
      <div
        className="avatar-glow"
        style={{
          position: "absolute",
          inset: "-18%",
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(62,232,168,0.35), rgba(62,232,168,0.08) 55%, transparent 75%)",
          filter: "blur(22px)",
          zIndex: 0,
        }}
      />

      {/* floating + breathing wrapper */}
      <div className="avatar-float" style={{ position: "relative", zIndex: 1, width: "100%", height: "100%" }}>
        <div
          style={{
            width: "100%",
            height: "100%",
            borderRadius: "50%",
            padding: 3,
            background: "linear-gradient(135deg, #3ee8a8, #f3c969)",
          }}
        >
          <div
            style={{
              width: "100%",
              height: "100%",
              borderRadius: "50%",
              overflow: "hidden",
              background: "#0e1512",
              border: "3px solid #0a0f0c",
            }}
          >
            {/* full image, never cropped: contain + own aspect */}
            <img
              src={avatarImg}
              alt="Rohan Raj — Backend Developer"
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                objectPosition: "50% 12%",
                display: "block",
              }}
            />
          </div>
        </div>
      </div>

      {/* shadow below, pulses opposite to the float */}
      <div
        className="avatar-shadow"
        style={{
          position: "absolute",
          bottom: -16,
          left: "50%",
          width: "70%",
          height: 14,
          borderRadius: "50%",
          background: "radial-gradient(ellipse, rgba(0,0,0,0.55), transparent 70%)",
          filter: "blur(4px)",
          zIndex: 0,
        }}
      />
    </div>
  );
}
