import { Header } from "@/components/header";
import { Tabs } from "@/components/tabs";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-background">
      <div className="mx-auto max-w-xl px-4 py-8 md:py-12">
        <Header />
        <Tabs />
      </div>
    </main>
  );
}
