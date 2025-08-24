"use client";

import { useMemo, useCallback } from "react";

import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";
import type { ISourceOptions, Engine } from "tsparticles-engine";

export function ParticlesBackground() {
  const particlesInit = useCallback(async (engine: Engine) => {
    await loadSlim(engine);
  }, []);

  const particlesLoaded = useCallback(async () => {}, []);

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
    <div className="absolute inset-0" aria-hidden="true">
      <Particles
        id="tsparticles"
        init={particlesInit}
        loaded={particlesLoaded}
        options={options}
        className="h-full w-full"
      />
    </div>
  );
}
