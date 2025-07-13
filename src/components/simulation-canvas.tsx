"use client";

import { useTheme } from 'next-themes';
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
  trajectory: {
    label: "Trajectory",
    color: "hsl(var(--chart-2))",
  }
} satisfies ChartConfig;

const BallAndTrajectory = ({ ball, time, gravity, canvasHeight }: { ball: Ball, time: number, gravity: number, canvasHeight: number }) => {
  const timeSinceDrop = time - ball.dropTime;
  if (timeSinceDrop < 0) return null;

  const currentX = ball.initialX + ball.initialV * timeSinceDrop;
  // Adjusted currentY to include initialY
  const currentY = ball.initialY + 0.5 * gravity * Math.pow(timeSinceDrop, 2);

  if (currentY > canvasHeight + 200) return null;

  // Adjusted pathData to start from initialY
  const pathData = `M ${ball.initialX} ${ball.initialY} Q ${ball.initialX + ball.initialV * timeSinceDrop * 0.5} ${ball.initialY + currentY * 0.2}, ${currentX} ${currentY}`;

  return (
    <g>
      <path d={pathData} stroke="hsl(var(--chart-2))" strokeOpacity="0.7" strokeWidth="2" fill="none" />
      <circle cx={currentX} cy={currentY} r="6" fill="hsl(var(--chart-1))" stroke="hsl(var(--background))" strokeWidth="2" />
    </g>
  );
};

export function SimulationCanvas({ plane, balls, time, gravity }: SimulationCanvasProps) {
  const { theme } = useTheme();
  const CANVAS_HEIGHT = 600;
  const CANVAS_WIDTH = 800;
  
  const viewBox = `0 -50 ${CANVAS_WIDTH} ${CANVAS_HEIGHT + 100}`;
  
  return (
    <div
      className="w-full h-full rounded-xl overflow-hidden border-2 border-primary/10 shadow-lg"
      style={{
        background: 'linear-gradient(to bottom, hsl(var(--sky-start)), hsl(var(--sky-end)))',
      }}
    >
      <ChartContainer config={chartConfig} className="w-full h-full">
        <svg width="100%" height="100%" viewBox={viewBox} preserveAspectRatio="xMidYMin meet" aria-label="Physics simulation canvas">
          <defs>
              <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
                  <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
                  <feMerge>
                      <feMergeNode in="coloredBlur"/>
                      <feMergeNode in="SourceGraphic"/>
                  </feMerge>
              </filter>
          </defs>

          {balls.map((ball) => (
            <BallAndTrajectory key={ball.id} ball={ball} time={time} gravity={gravity} canvasHeight={CANVAS_HEIGHT} />
          ))}

          <g transform={`translate(${plane.x}, ${plane.y})`}>
            <g style={{ filter: 'url(#glow)'}}>
              <Plane
                  className={theme === 'dark' ? 'text-white' : 'text-slate-800'}
                  size={48}
                  strokeWidth={1.5}
                  style={{ transform: `translate(-24px, -24px) rotate(45deg)` }}
              />
            </g>
          </g>
        </svg>
      </ChartContainer>
    </div>
  );
}