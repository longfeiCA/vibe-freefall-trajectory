"use client";

import { useState, useEffect, useCallback, useMemo, useRef } from 'react';
import { SimulationControls, type SimulationParams } from '@/components/simulation-controls';
import { SimulationCanvas } from '@/components/simulation-canvas';
import { Sidebar, SidebarContent, SidebarHeader, SidebarProvider } from '@/components/ui/sidebar';

const GRAVITY = 9.8;

export interface Ball {
  id: number;
  dropTime: number;
  initialX: number;
  initialV: number;
  initialY: number; // Added initialY
}

export interface PlaneState {
  x: number;
  y: number;
  v: number;
}

export function FreefallSimulation() {
  const [params, setParams] = useState<SimulationParams>({
    initialSpeed: 50,
    acceleration: 2,
    dropInterval: 0.5,
  });

  const [isPlaying, setIsPlaying] = useState(false);
  const [time, setTime] = useState(0);
  const [balls, setBalls] = useState<Ball[]>([]);
  const [lastDropTime, setLastDropTime] = useState(0);
  const ballIdCounter = useRef(0);

  const handleReset = useCallback(() => {
    setIsPlaying(false);
    setTime(0);
    setBalls([]);
    setLastDropTime(0);
    ballIdCounter.current = 0;
  }, []);

  const planeState = useMemo<PlaneState>(() => {
    const x = params.initialSpeed * time + 0.5 * params.acceleration * Math.pow(time, 2);
    const v = params.initialSpeed + params.acceleration * time;
    return { x, y: 0, v };
  }, [time, params.initialSpeed, params.acceleration]);

  useEffect(() => {
    if (!isPlaying) return;

    let animationFrameId: number;
    let lastTimestamp = performance.now();

    const loop = (timestamp: number) => {
      const deltaTime = (timestamp - lastTimestamp) / 1000;
      lastTimestamp = timestamp;
      
      setTime(prevTime => {
        const newTime = prevTime + (deltaTime * 4); // Simulation speed multiplier

        if (newTime >= lastDropTime + params.dropInterval) {
          const planeV = params.initialSpeed + params.acceleration * lastDropTime;
          const planeX = params.initialSpeed * lastDropTime + 0.5 * params.acceleration * Math.pow(lastDropTime, 2);
          
          setBalls(prevBalls => {
            // Added initialY to newBall
            const newBall = { id: ballIdCounter.current++, dropTime: lastDropTime, initialX: planeX - 24, initialV: planeV, initialY: planeState.y + 20 }; 
            const updatedBalls = [...prevBalls, newBall];
            return updatedBalls.length > 200 ? updatedBalls.slice(1) : updatedBalls;
          });

          setLastDropTime(prev => prev + params.dropInterval);
        }
        return newTime;
      });

      animationFrameId = requestAnimationFrame(loop);
    };

    animationFrameId = requestAnimationFrame(loop);

    return () => cancelAnimationFrame(animationFrameId);
  }, [isPlaying, params, lastDropTime, planeState.y]); // Added planeState.y to dependencies

  return (
    <SidebarProvider>
      <div className="flex h-full w-full bg-muted/20">
        <Sidebar collapsible>
          <SidebarHeader className="p-4">
            <h3 className="font-semibold text-lg text-sidebar-foreground">Controls</h3>
          </SidebarHeader>
          <SidebarContent>
            <div className="p-4">
              <SimulationControls
                params={params}
                setParams={setParams}
                isPlaying={isPlaying}
                setIsPlaying={setIsPlaying}
                onReset={handleReset}
              />
            </div>
          </SidebarContent>
        </Sidebar>
        
        <main className="flex flex-1 flex-col items-center justify-center p-4 lg:p-8 relative">
          <div className="text-center mb-8">
            <h1 className="text-2xl font-bold tracking-tighter sm:text-3xl md:text-4xl font-headline">
              Interactive Freefall Simulation
            </h1>
            <p className="text-muted-foreground md:text-xl">
              An interactive physics simulation of an object in freefall from an accelerating plane.
            </p>
          </div>
          <div className="w-full max-w-6xl h-full">
            <SimulationCanvas
              plane={planeState}
              balls={balls}
              time={time}
              gravity={GRAVITY}
            />
          </div>
        </main>
      </div>
    </SidebarProvider>
  );
}
