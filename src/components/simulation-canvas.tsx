"use client";

import { useMemo } from 'react';
import { Plane } from 'lucide-react';
import type { PlaneState, Ball } from './freefall-simulation';
import { ChartContainer, type ChartConfig } from '@/components/ui/chart';

interface SimulationCanvasProps {
  plane: PlaneState;
  balls: Ball[];
  time: number;
  gravity: number;
}

const chartConfig = {
  ball: {
    label: "Ball",
    color: "hsl(var(--chart-1))",
  },
} satisfies ChartConfig;

const BallAndTrajectory = ({ ball, time, gravity, canvasHeight }: { ball: Ball, time: number, gravity: number, canvasHeight: number }) => {
  const timeSinceDrop = time - ball.dropTime;
  if (timeSinceDrop < 0) return null;

  // Use absolute coordinates, no more planeXOffset
  const currentX = ball.initialX + ball.initialV * timeSinceDrop;
  const currentY = 0.5 * gravity * Math.pow(timeSinceDrop, 2);

  if (currentY > canvasHeight + 200) return null;

  // Use absolute coordinates for the path as well
  const pathData = `M ${ball.initialX} 0 Q ${ball.initialX + ball.initialV * timeSinceDrop * 0.5} ${currentY * 0.2}, ${currentX} ${currentY}`;

  return (
    <g>
      <path d={pathData} stroke="hsl(var(--chart-1))" strokeOpacity="0.7" strokeWidth="2" fill="none" />
      <circle cx={currentX} cy={currentY} r="6" fill="hsl(var(--chart-1))" stroke="hsl(var(--background))" strokeWidth="2" />
    </g>
  );
};

export function SimulationCanvas({ plane, balls, time, gravity }: SimulationCanvasProps) {
  const CANVAS_HEIGHT = 600;
  const CANVAS_WIDTH = 800;
  
  // The viewBox is static, creating a fixed camera.
  const viewBox = `0 -50 ${CANVAS_WIDTH} ${CANVAS_HEIGHT + 100}`;
  
  return (
    <ChartContainer config={chartConfig} className="w-full h-full bg-card rounded-xl overflow-hidden border-2 border-primary/10 shadow-lg aspect-[16/10]">
      <svg width="100%" height="100%" viewBox={viewBox} preserveAspectRatio="xMidYMin meet" aria-label="Physics simulation canvas">
        <defs>
            <linearGradient id="skyGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="hsl(var(--sky-start))" />
                <stop offset="100%" stopColor="hsl(var(--sky-end))" />
            </linearGradient>
             <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
                <feGaussianBlur stdDeviation="2" result="coloredBlur"/>
                <feMerge>
                    <feMergeNode in="coloredBlur"/>
                    <feMergeNode in="SourceGraphic"/>
                </feMerge>
            </filter>
        </defs>
        <rect x="-10" y="-50" width={CANVAS_WIDTH + 20} height={CANVAS_HEIGHT + 100} fill="url(#skyGradient)"/>

        {balls.map((ball) => (
          <BallAndTrajectory key={ball.id} ball={ball} time={time} gravity={gravity} canvasHeight={CANVAS_HEIGHT} />
        ))}

        {/* The plane is translated using its own absolute plane.x coordinate */}
        <g transform={`translate(${plane.x}, ${plane.y})`}>
          <g style={{ filter: 'url(#glow)'}}>
            <Plane
                className="text-slate-800 -rotate-45 drop-shadow-lg"
                size={48}
                strokeWidth={1.5}
                style={{ transform: `translate(-24px, -24px)` }}
            />
          </g>
        </g>
      </svg>
    </ChartContainer>
  );
}
