import Hero from "@/components/Hero";
import Lanyard from "@/components/lanyard";

export default function Home() {
  return (
    <main className="min-h-screen bg-neutral-900 flex items-center justify-center">
      <div className="max-w-7xl w-full flex items-center justify-between px-8">
        <div className="fixed inset-0 hidden max-h-screen md:block">
          <Lanyard />
        </div>
        <Hero />
      </div>
    </main>
  );
}
