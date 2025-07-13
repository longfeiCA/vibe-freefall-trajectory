import { FreefallSimulation } from "@/components/freefall-simulation";

export default function Home() {
  return (
    <div className="h-screen w-screen bg-background">
      <header className="absolute top-0 left-0 right-0 flex items-center justify-center p-4 bg-background/50 backdrop-blur-sm z-10">
        <div className="text-center">
          <h1 className="text-2xl font-bold tracking-tighter sm:text-3xl md:text-4xl font-headline">
            Interactive Freefall Simulation
          </h1>
          <p className="text-muted-foreground md:text-xl">
            An interactive physics simulation of an object in freefall from an accelerating plane.
          </p>
        </div>
      </header>
      <main className="h-full pt-24">
        <FreefallSimulation />
      </main>
    </div>
  );
}
