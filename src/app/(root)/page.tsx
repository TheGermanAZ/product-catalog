import Bag from "@/components/landing/bag";
import Category from "@/components/landing/category";
import { Footer } from "@/components/landing/footer";
import { Navbar } from "@/components/landing/navbar";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <div className="relative bg-gray-900">
          {/* Decorative image and overlay */}
          <div aria-hidden="true" className="absolute inset-0 overflow-hidden">
            <Image
              src="/daniel-lincoln-T4gWghQJZNw-unsplash.jpg"
              alt=""
              className="h-full w-full object-cover object-center"
              fill
            />
          </div>
          <div
            aria-hidden="true"
            className="absolute inset-0 bg-gray-900 opacity-50"
          />

          <div className="relative mx-auto flex max-w-3xl flex-col items-center px-6 py-32 text-center sm:py-64 lg:px-0">
            <h1 className="text-4xl font-bold tracking-tight text-white lg:text-6xl">
              New arrivals are here
            </h1>
            <p className="mt-4 text-xl text-white">
              The new arrivals have, well, newly arrived. Check out the latest
              options from our recent fall release while they&apos;re still in
              stock.
            </p>
            <Button
              className="mt-8 rounded-md border border-transparent px-8 py-3 text-base font-medium text-gray-100 hover:bg-zinc-800"
              variant="default"
            >
              Shop New Arrivals
            </Button>
          </div>
        </div>
        <Category />
        <Bag />
      </main>
      <Footer />
    </>
  );
}
