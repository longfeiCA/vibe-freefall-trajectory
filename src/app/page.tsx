import { FreefallSimulation } from "@/components/freefall-simulation";

export default function Home() {
  return (
    <div className="h-screen w-screen bg-background">
      <main className="h-full">
        <FreefallSimulation />
      </main>
    </div>
  );
}
