/** @format */

"use client";
import { Card } from "@/components/Card";
import { Deals } from "@/components/Deals";
import Footer from "@/components/Footer";
import Middle from "@/components/Main";
import Header from "@/components/Navbar";

export default function Home() {
  return (
    <div className="light bg-slate-200">
      <Header />
      <div className="border-b">
        <Card />
      </div>
      <div>
        <Middle />
        <Middle />
        <Middle />
      </div>
      <div className="sm:mt-40">
        <h1 className="text-black text-3xl sm:ml-16 sm:my-12">
          Related deals you might like for
        </h1>
        <div className="flex flex-wrap sm:mx-16 justify-between">
          <Deals />
          <Deals />
          <Deals />
          <Deals />
        </div>
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}
