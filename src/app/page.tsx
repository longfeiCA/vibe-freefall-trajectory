import { FreefallSimulation } from '@/components/freefall-simulation';

export default function Home() {
  return (
    <div className="bg-background min-h-screen font-body">
      <header className="py-6 px-4 md:px-8">
        <h1
          className="text-4xl font-bold font-headline text-center text-primary-foreground bg-primary/90 p-4 rounded-lg shadow-xl"
          style={{
            textShadow: '2px 2px 4px rgba(0,0,0,0.2)',
          }}
        >
          Freefall Trajectory Simulator
        </h1>
      </header>
      <main className="p-4 md:p-8">
        <FreefallSimulation />
      </main>
      <footer className="text-center p-4 text-foreground/60 text-sm">
        <p>A physics experiment brought to life with Next.js and Tailwind CSS.</p>
      </footer>
    </div>
  );
}
