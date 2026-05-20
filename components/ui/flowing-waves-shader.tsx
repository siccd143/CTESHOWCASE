"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";

type FlowingWavesShaderProps = {
  className?: string;
  intensity?: number;
};

export default function FlowingWavesShader({
  className = "",
  intensity = 0.7,
}: FlowingWavesShaderProps) {
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    let renderer: THREE.WebGLRenderer;

    try {
      renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
      container.appendChild(renderer.domElement);
    } catch {
      container.classList.add("shader-fallback");
      return;
    }

    const scene = new THREE.Scene();
    const camera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0, 1);
    const clock = new THREE.Clock();

    const vertexShader = `
      varying vec2 vTextureCoord;
      void main() {
        vTextureCoord = uv;
        gl_Position = vec4(position, 1.0);
      }
    `;

    const fragmentShader = `
      precision mediump float;
      uniform vec2 iResolution;
      uniform float iTime;
      uniform float intensity;
      varying vec2 vTextureCoord;

      void mainImage(out vec4 fragColor, in vec2 fragCoord) {
        vec2 uv = (2.0 * fragCoord - iResolution.xy) / min(iResolution.x, iResolution.y);

        for(float i = 1.0; i < 8.0; i++){
          uv.x += 0.32 / i * cos(i * 2.2 * uv.y + iTime * 0.55);
          uv.y += 0.28 / i * cos(i * 1.4 * uv.x + iTime * 0.48);
        }

        float wave = abs(sin(iTime * 0.45 - uv.y - uv.x));
        vec3 charcoal = vec3(0.05, 0.05, 0.055);
        vec3 silver = vec3(0.55, 0.55, 0.56);
        vec3 ember = vec3(1.0, 0.23, 0.05);
        vec3 color = mix(charcoal, silver, 0.32 / max(wave, 0.2));
        color = mix(color, ember, smoothstep(0.94, 1.0, sin(uv.x * 2.5 + iTime)));

        fragColor = vec4(color * intensity, 0.72);
      }

      void main() {
        vec4 color;
        mainImage(color, vTextureCoord * iResolution);
        gl_FragColor = color;
      }
    `;

    const uniforms = {
      iTime: { value: 0 },
      iResolution: { value: new THREE.Vector2() },
      intensity: { value: intensity },
    };

    const material = new THREE.ShaderMaterial({
      vertexShader,
      fragmentShader,
      uniforms,
      transparent: true,
    });
    const geometry = new THREE.PlaneGeometry(2, 2);
    const mesh = new THREE.Mesh(geometry, material);
    scene.add(mesh);

    const onResize = () => {
      const width = container.clientWidth;
      const height = container.clientHeight;
      renderer.setSize(width, height, false);
      uniforms.iResolution.value.set(width, height);
    };

    window.addEventListener("resize", onResize);
    onResize();

    renderer.setAnimationLoop(() => {
      uniforms.iTime.value = clock.getElapsedTime();
      renderer.render(scene, camera);
    });

    return () => {
      window.removeEventListener("resize", onResize);
      renderer.setAnimationLoop(null);
      renderer.domElement.remove();
      material.dispose();
      geometry.dispose();
      renderer.dispose();
    };
  }, [intensity]);

  return <div ref={containerRef} className={`flowing-waves ${className}`} aria-hidden="true" />;
}
