"use client";

import React, { useRef } from "react";

interface Node {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  color: string;
  alpha: number;
}

export const NeuralMesh: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  return <div className="absolute inset-0 pointer-events-none" aria-hidden="true"><canvas ref={canvasRef} /></div>;
};
