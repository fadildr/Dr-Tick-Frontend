// GLOBAL CSS
import "./index.css";
// MODULE CSS
import styles from "./index.module.css";
// CSS in JS
// import styled from "styled-components";
// rfc
// CSS in JS
// const Heading = styled.h1`
//   color: yellow;
// `;

function LandingPage() {
  // INLINE CSS 2
  const header = {
    color: "pink",
  };

  return (
    <div>
      {/* GLOBAL CSS / STANDARD CSS */}
      <h1 className="landing_header">GLOBAL CSS</h1>

      {/* MODULE CSS */}
      <h1 className={styles.header_event}>MODULE CSS</h1>

      {/* INLINE CSS */}
      <h1 style={{ color: "brown" }}>INLINE CSS 1</h1>
      <h1 style={header}>INLINE CSS 2</h1>

      {/* CSS in JS */}
      {/* [1] install package = npm install --save styled-components */}
      {/* [2] import package = import styled from 'styled-components'; */}
      {/* [3] create style */}
      {/* <Heading>CSS in JS</Heading> */}
    </div>
  );
}

export default LandingPage;
