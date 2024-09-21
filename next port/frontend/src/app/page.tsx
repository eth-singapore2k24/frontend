"use client";

import Hero from "@/components/landing-page/hero";
import { BackgroundMakeup } from "@/components/ui/background-makeup";
import {Button} from "@/components/ui/button";

const Home = () => {
  return (
    <main className="container items-center">
      <BackgroundMakeup />
      <Hero />
      <Button>Hello</Button>
    </main>
  );
};

export default Home;
