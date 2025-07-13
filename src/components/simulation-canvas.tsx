"use client";

import { useMemo } from 'react';
import { Plane } from 'lucide-react';
import type { PlaneState, Ball } from './freefall-simulation';

interface SimulationCanvasProps {
  plane: PlaneState;
  balls: Ball[];
  time: number;
  gravity: number;
}

const BallAndTrajectory = ({ ball, time, gravity, canvasHeight }: { ball: Ball, time: number, gravity: number, canvasHeight: number }) => {
  const timeSinceDrop = time - ball.dropTime;
  if (timeSinceDrop < 0) return null;

  const currentX = ball.initialX + ball.initialV * timeSinceDrop;
  const currentY = 0.5 * gravity * Math.pow(timeSinceDrop, 2);

  if (currentY > canvasHeight + 100) return null;

  const pathData = `M ${ball.initialX} 0 Q ${ball.initialX + ball.initialV * timeSinceDrop * 0.5} 0, ${currentX} ${currentY}`;

  return (
    <g>
      <path d={pathData} stroke="hsl(var(--primary))" strokeOpacity="0.6" strokeWidth="2" fill="none" />
      <circle cx={currentX} cy={currentY} r="5" fill="hsl(var(--accent))" stroke="hsl(var(--accent-foreground))" strokeWidth="1"/>
    </g>
  );
};

export function SimulationCanvas({ plane, balls, time, gravity }: SimulationCanvasProps) {
  const CANVAS_HEIGHT = 500;
  const CANVAS_WIDTH = 800;
  
  // The viewBox is now static, so the canvas doesn't move.
  const viewBox = `0 -20 ${CANVAS_WIDTH} ${CANVAS_HEIGHT + 40}`;

  return (
    <div className="w-full h-full bg-card rounded-lg overflow-hidden border-2 border-primary/20 shadow-inner">
      <svg width="100%" height={CANVAS_HEIGHT} viewBox={viewBox} preserveAspectRatio="xMidYMin meet" aria-label="Physics simulation canvas">
        <defs>
            <linearGradient id="skyGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" style={{ stopColor: 'hsl(200, 100%, 95%)' }} />
                <stop offset="100%" style={{ stopColor: 'hsl(200, 100%, 85%)' }} />
            </linearGradient>
        </defs>
        
        {/* The background rect now covers the static viewBox */}
        <rect x="0" y="-20" width={CANVAS_WIDTH} height={CANVAS_HEIGHT + 40} fill="url(#skyGradient)"/>

        {/* The plane is translated based on its state, moving across the canvas */}
        <g transform={`translate(${plane.x}, ${plane.y})`}>
          <Plane
            className="text-slate-700 -rotate-45 drop-shadow-lg"
            size={40}
            style={{ transform: `translate(-20px, -20px)` }}
          />
        </g>
        
        {balls.map((ball) => (
          <BallAndTrajectory key={ball.id} ball={ball} time={time} gravity={gravity} canvasHeight={CANVAS_HEIGHT} />
        ))}
      </svg>
    </div>
  );
}
