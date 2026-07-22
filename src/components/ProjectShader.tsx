"use client";

import { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";

const vertexShader = `
varying vec2 vUv;
void main() {
  vUv = uv;
  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}
`;

const fragmentShader = `
uniform float uTime;
uniform vec2 uHover;
varying vec2 vUv;

// Simple 2D noise
float random(vec2 st) {
    return fract(sin(dot(st.xy, vec2(12.9898,78.233))) * 43758.5453123);
}

void main() {
  vec2 uv = vUv;
  
  // Distance to mouse hover
  float dist = distance(uv, uHover);
  
  // Liquid wave effect
  float wave = sin(uv.x * 10.0 + uTime) * cos(uv.y * 10.0 + uTime) * 0.1;
  
  // Distortion based on hover proximity
  float distortion = smoothstep(0.5, 0.0, dist) * wave;
  
  uv += distortion;
  
  // Dark metallic abstract color
  vec3 color1 = vec3(0.05, 0.05, 0.05);
  vec3 color2 = vec3(0.15, 0.2, 0.25);
  vec3 finalColor = mix(color1, color2, uv.x + uv.y + distortion);
  
  gl_FragColor = vec4(finalColor, 1.0);
}
`;

function ShaderPlane({ isHovered }: { isHovered: boolean }) {
  const materialRef = useRef<THREE.ShaderMaterial>(null);
  const targetHover = useRef(new THREE.Vector2(0.5, 0.5));
  const currentHover = useRef(new THREE.Vector2(0.5, 0.5));

  const uniforms = useMemo(
    () => ({
      uTime: { value: 0 },
      uHover: { value: new THREE.Vector2(0.5, 0.5) },
    }),
    []
  );

  useFrame((state, delta) => {
    if (materialRef.current) {
      materialRef.current.uniforms.uTime.value += delta;
      
      // Interpolate hover position towards center or mouse
      targetHover.current.setScalar(isHovered ? 0.5 : 2.0); // 2.0 means far away (no effect)
      currentHover.current.lerp(targetHover.current, 0.05);
      materialRef.current.uniforms.uHover.value.copy(currentHover.current);
    }
  });

  return (
    <mesh>
      <planeGeometry args={[2, 2]} />
      <shaderMaterial
        ref={materialRef}
        vertexShader={vertexShader}
        fragmentShader={fragmentShader}
        uniforms={uniforms}
      />
    </mesh>
  );
}

export default function ProjectShader({ isHovered }: { isHovered: boolean }) {
  return (
    <div className="absolute inset-0 w-full h-full pointer-events-none">
      <Canvas camera={{ position: [0, 0, 1] }}>
        <ShaderPlane isHovered={isHovered} />
      </Canvas>
    </div>
  );
}
