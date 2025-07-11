"use client";

import { Play, Pause, RefreshCw } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { Slider } from '@/components/ui/slider';
import { cn } from '@/lib/utils';

export interface SimulationParams {
  initialSpeed: number;
  acceleration: number;
  dropInterval: number;
}

interface SimulationControlsProps {
  params: SimulationParams;
  setParams: (params: SimulationParams) => void;
  isPlaying: boolean;
  setIsPlaying: (playing: boolean) => void;
  onReset: () => void;
}

export function SimulationControls({ params, setParams, isPlaying, setIsPlaying, onReset }: SimulationControlsProps) {
  const handleParamChange = (key: keyof SimulationParams, value: number) => {
    setParams({ ...params, [key]: value });
  };

  return (
    <div className="space-y-8">
      <div className="space-y-4">
        <div className="flex justify-between items-center">
          <Label htmlFor="initial-speed" className="font-semibold">Initial Speed</Label>
          <span className="text-sm font-mono p-1 px-2 rounded-md bg-muted text-muted-foreground">{params.initialSpeed.toFixed(1)} m/s</span>
        </div>
        <Slider
          id="initial-speed"
          min={0}
          max={100}
          step={1}
          value={[params.initialSpeed]}
          onValueChange={([val]) => handleParamChange('initialSpeed', val)}
          disabled={isPlaying}
          aria-label="Initial Speed"
        />
      </div>
      <div className="space-y-4">
        <div className="flex justify-between items-center">
          <Label htmlFor="acceleration" className="font-semibold">Acceleration</Label>
          <span className="text-sm font-mono p-1 px-2 rounded-md bg-muted text-muted-foreground">{params.acceleration.toFixed(1)} m/s²</span>
        </div>
        <Slider
          id="acceleration"
          min={-5}
          max={10}
          step={0.1}
          value={[params.acceleration]}
          onValueChange={([val]) => handleParamChange('acceleration', val)}
          disabled={isPlaying}
          aria-label="Acceleration"
        />
      </div>
      <div className="space-y-4">
        <div className="flex justify-between items-center">
          <Label htmlFor="drop-interval" className="font-semibold">Drop Interval</Label>
           <span className="text-sm font-mono p-1 px-2 rounded-md bg-muted text-muted-foreground">{params.dropInterval.toFixed(2)} s</span>
        </div>
        <Slider
          id="drop-interval"
          min={0.1}
          max={2}
          step={0.05}
          value={[params.dropInterval]}
          onValueChange={([val]) => handleParamChange('dropInterval', val)}
          disabled={isPlaying}
          aria-label="Drop Interval"
        />
      </div>
      <div className="flex gap-4 pt-4 border-t border-border/50">
        <Button onClick={() => setIsPlaying(!isPlaying)} className="w-full bg-primary hover:bg-primary/80 transition-all duration-300 transform hover:scale-105">
          {isPlaying ? <Pause className="mr-2 h-4 w-4" /> : <Play className="mr-2 h-4 w-4" />}
          {isPlaying ? 'Pause' : 'Start'}
        </Button>
        <Button onClick={onReset} variant="outline" className="w-full transition-all duration-300 transform hover:scale-105">
          <RefreshCw className="mr-2 h-4 w-4" />
          Reset
        </Button>
      </div>
    </div>
  );
}
