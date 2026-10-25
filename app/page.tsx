import type { Metadata } from "next";
import { JsonLd } from "@/components/JsonLd";
import { About } from "@/components/home/About";
import { Categories } from "@/components/home/Categories";
import { Closing, LatestPosts } from "@/components/home/Closing";
import { Hero } from "@/components/home/Hero";
import { Labels } from "@/components/home/Labels";
import { Heritage, Process } from "@/components/home/Method";
import { Areas, Contact, Faq } from "@/components/home/Reach";
import { Calendar, Standard } from "@/components/home/Seasons";
import { Testimonials, Trade } from "@/components/home/Trade";
import { homeSchema } from "@/lib/schema";

export const metadata: Metadata = {
  alternates: { canonical: "/" },
  openGraph: { url: "/" },
};

export default function Home() {
  return (
    <>
      <JsonLd data={homeSchema()} />
      <Hero />
      <About />
      <Categories />
      <Labels />
      <Calendar />
      <Standard />
      <Process />
      <Heritage />
      <Trade />
      <Testimonials />
      <Areas />
      <Faq />
      <Contact />
      <LatestPosts />
      <Closing />
    </>
  );
}
