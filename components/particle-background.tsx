"use client";

import React, { useMemo, useCallback } from "react";

import Particles from "react-tsparticles";
import type { Container, ISourceOptions, Engine } from "tsparticles-engine";
import { loadSlim } from "tsparticles-slim";

export default function ParticleBackground() {
  const particlesInit = useCallback(async (engine: Engine) => {
    await loadSlim(engine);
  }, []);

  const particlesLoaded = useCallback(
    async (container: Container | undefined) => {},
    []
  );

  const options: ISourceOptions = useMemo(
    () => ({
      particles: {
        groups: {
          z5000: { number: { value: 70 }, zIndex: { value: 50 } },
          z7500: { number: { value: 30 }, zIndex: { value: 75 } },
          z2500: { number: { value: 50 }, zIndex: { value: 25 } },
          z1000: { number: { value: 40 }, zIndex: { value: 10 } },
        },
        number: { value: 200 },
        color: { value: "#fff" },
        shape: { type: "circle" },
        opacity: { value: 1 },
        size: { value: 1 },
        move: {
          angle: { value: 10, offset: 0 },
          enable: true,
          speed: 0.3,
          direction: "none",
        },
        zIndex: { value: 5, opacityRate: 0.5 },
      },
      interactivity: {
        events: {
          onClick: { enable: true, mode: "push" },
        },
        modes: {
          push: {
            quantity: 4,
            groups: ["z5000", "z7500", "z2500", "z1000"],
          },
        },
      },
      resize: true,

      fpsLimit: 120,
      fullScreen: {
        enable: false,
        zIndex: -1,
      },
    }),
    []
  );

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      loaded={particlesLoaded}
      options={options}
      className="h-full w-full"
    />
  );
}
