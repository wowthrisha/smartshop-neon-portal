
import React, { useRef, useEffect, useState } from 'react';
import * as THREE from 'three';
import { useThree, Canvas, useFrame } from '@react-three/fiber';
import { Box, Torus, Sphere, OrbitControls } from '@react-three/drei';
import { useIsMobile } from '@/hooks/use-mobile';

interface FloatingObjectProps {
  position: [number, number, number];
  color: string;
  scale?: number;
  rotationSpeed?: number;
  floatSpeed?: number;
  delay?: number;
}

// The individual floating object (box, sphere, etc.)
const FloatingObject = ({ 
  position, 
  color, 
  scale = 1, 
  rotationSpeed = 0.01,
  floatSpeed = 0.005,
  delay = 0
}: FloatingObjectProps) => {
  const mesh = useRef<THREE.Mesh>(null);
  
  useFrame((state) => {
    if (!mesh.current) return;
    
    // Rotation
    mesh.current.rotation.x += rotationSpeed;
    mesh.current.rotation.y += rotationSpeed * 0.8;
    
    // Floating effect with phase shift based on delay
    const time = state.clock.getElapsedTime() + delay;
    mesh.current.position.y = position[1] + Math.sin(time * floatSpeed * 10) * 0.2;
  });

  return (
    <mesh ref={mesh} position={position} castShadow>
      <boxGeometry args={[1 * scale, 1 * scale, 1 * scale]} />
      <meshStandardMaterial 
        color={color} 
        emissive={color} 
        emissiveIntensity={0.5}
        roughness={0.3}
        metalness={0.7}
      />
    </mesh>
  );
};

// Grid of dots component
const GridDots = () => {
  const gridSize = 20;
  const spacing = 1;
  const dots = [];
  
  for (let x = -gridSize / 2; x <= gridSize / 2; x += spacing) {
    for (let z = -gridSize / 2; z <= gridSize / 2; z += spacing) {
      dots.push(
        <Sphere
          key={`${x}-${z}`}
          args={[0.02, 8, 8]}
          position={[x, -1.5, z]}
        >
          <meshBasicMaterial color="#004c54" transparent opacity={0.7} />
        </Sphere>
      );
    }
  }
  
  return <>{dots}</>;
};

interface NeonRingProps {
  position?: [number, number, number];
  rotation?: [number, number, number];
  color?: string;
  scale?: number;
}

// Neon Ring component
const NeonRing = ({ 
  position = [0, 0, 0], 
  rotation = [0, 0, 0], 
  color = "#00f3ff", 
  scale = 1 
}: NeonRingProps) => {
  return (
    <group position={position} rotation={rotation}>
      <Torus 
        args={[2 * scale, 0.05 * scale, 16, 100]}
      >
        <meshStandardMaterial
          color={color}
          emissive={color}
          emissiveIntensity={1}
          toneMapped={false}
        />
      </Torus>
    </group>
  );
};

// The main scene component with camera, lights, and objects
const Scene = () => {
  const isMobile = useIsMobile();
  const { camera } = useThree();
  
  useEffect(() => {
    camera.position.set(0, 0, 8);
  }, [camera]);

  const scale = isMobile ? 0.5 : 1;
  
  return (
    <>
      {/* Lighting */}
      <ambientLight intensity={0.2} />
      <directionalLight position={[10, 10, 5]} intensity={0.3} />
      <pointLight position={[0, 0, 0]} intensity={1} color="#00f3ff" />
      
      {/* Grid */}
      <GridDots />
      
      {/* Neon rings */}
      <NeonRing rotation={[Math.PI / 2, 0, 0]} scale={scale} />
      <NeonRing rotation={[Math.PI / 3, Math.PI / 4, 0]} color="#9800fc" position={[0, 0, 0]} scale={scale * 1.2} />
      <NeonRing rotation={[Math.PI / 4, Math.PI / 3, 0]} color="#ff00c8" position={[0, 0, 0]} scale={scale * 1.4} />
      
      {/* Floating objects */}
      <FloatingObject position={[-2, 0.5, -1]} color="#00f3ff" scale={scale * 0.5} delay={0} />
      <FloatingObject position={[2, -0.5, 1]} color="#9800fc" scale={scale * 0.4} delay={1} />
      <FloatingObject position={[0, 1, 2]} color="#ff00c8" scale={scale * 0.3} delay={2} />
      <FloatingObject position={[-1, -1, -2]} color="#00ff8f" scale={scale * 0.6} delay={3} />
      
      {/* Controls */}
      <OrbitControls 
        enableZoom={false} 
        enablePan={false}
        autoRotate 
        autoRotateSpeed={0.5}
        maxPolarAngle={Math.PI / 2}
        minPolarAngle={Math.PI / 3}
      />
    </>
  );
};

// The exported component that includes the Canvas provider
const ThreeScene: React.FC = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    
    // Handle WebGL context loss
    const handleContextLost = () => {
      console.log('WebGL context lost, attempting to restore...');
    };
    
    // Handle window resize for better performance
    const handleResize = () => {
      // Force a re-render on resize to ensure canvas fits correctly
      setMounted(false);
      setTimeout(() => setMounted(true), 100);
    };
    
    window.addEventListener('webglcontextlost', handleContextLost);
    window.addEventListener('resize', handleResize);
    
    return () => {
      window.removeEventListener('webglcontextlost', handleContextLost);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  if (!mounted) return <div className="h-full w-full bg-kartify-black" />;

  return (
    <div className="h-full w-full">
      <Canvas 
        shadows 
        gl={{ 
          antialias: true,
          alpha: true,
          powerPreference: 'high-performance',
          stencil: false,
          depth: true
        }}
        dpr={[1, 2]} // Limit pixel ratio for better performance
      >
        <Scene />
      </Canvas>
    </div>
  );
};

export default ThreeScene;
