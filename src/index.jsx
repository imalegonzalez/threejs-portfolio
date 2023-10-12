import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import "./styles.css";
import Lenis from '@studio-freight/lenis'
// const lenis = new Lenis()

// lenis.on('scroll', (e) => {
//   console.log(e)
// })

// function raf(time) {
//   lenis.raf(time)
//   requestAnimationFrame(raf)
// }

// requestAnimationFrame(raf)

const root = createRoot(document.getElementById("root"));
root.render(<App />);
