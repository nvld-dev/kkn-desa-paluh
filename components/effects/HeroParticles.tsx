// "use client";

// import { useEffect, useState } from "react";
// import Particles, { initParticlesEngine } from "@tsparticles/react";
// import { loadSlim } from "@tsparticles/slim";

// export default function HeroParticles() {
//   const [ready, setReady] = useState(false);

//   useEffect(() => {
//     initParticlesEngine(async (engine) => {
//       await loadSlim(engine);
//     }).then(() => setReady(true));
//   }, []);

//   if (!ready) return null;

//   return (
//     <Particles
//       id="hero-particles"
//       className="absolute inset-0 -z-10"
//       options={{
//         background: {
//           color: {
//             value: "transparent",
//           },
//         },
//         fpsLimit: 60,
//         particles: {
//           number: {
//             value: 45,
//           },
//           color: {
//             value: "#60a5fa",
//           },
//           opacity: {
//             value: 0.25,
//           },
//           size: {
//             value: {
//               min: 1,
//               max: 3,
//             },
//           },
//           move: {
//             enable: true,
//             speed: 0.5,
//           },
//           links: {
//             enable: true,
//             color: "#3b82f6",
//             opacity: 0.15,
//             distance: 150,
//           },
//         },
//         detectRetina: true,
//       }}
//     />
//   );
// }
