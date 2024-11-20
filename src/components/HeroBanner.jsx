import { akshay } from "../assets";
import styles from "./HeroBanner.module.css";

const HeroBanner = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        padding: "2em",
        gap: "2em",
      }}
    >
      {/* Circular iframe */}
      <div
        className={styles.heroimage}
        style={{
          position: "relative",
          borderRadius: "50%",
          overflow: "hidden",
          boxShadow: "0 2px 8px rgba(63, 69, 81, 0.16)",
          marginBottom: "1em",
        }}
      >
        <img
          src={akshay} // Path to your image
          alt="Profile"
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover", // Ensures the image covers the area without distortion
          }}
        />
      </div>
      <div
        style={{
          display: "inline-block",
          padding: "10px 20px",
          backgroundColor: "#915eff",
          borderRadius: "30px",
          fontWeight: "bold",
          transition: "background-color 0.3s",
          cursor: "pointer",
          textAlign: "center",
        }}
        className="hover:bg-[#7a4de7]"
      >
        <a
          href="https://drive.google.com/drive/folders/1HLEuyk4DjnhRRp0OlZtT55bt7O1DFJfW?usp=sharing"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            color: "#fff",
            textDecoration: "none",
            display: "block",
          }}
        >
          Resume
        </a>
      </div>
    </div>
  );
};

export default HeroBanner;
