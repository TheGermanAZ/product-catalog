/**
 * v0 by Vercel.
 * @see https://v0.dev/t/tPLejb7kXQc
 */
import { Button } from "@/components/ui/button";
import { Card } from "../ui/card";

export default function Bag() {
  return (
    <Card>
      <div
        className="relative bg-cover bg-center bg-no-repeat py-24 px-8"
        style={{
          backgroundImage: "url(/matt-aylward-iXOi9dXVdnI-unsplash.jpg)",
        }}
      >
        <div className="absolute inset-0 bg-[#000000] opacity-50" />
        <div className="relative max-w-3xl mx-auto text-center text-white">
          <h2 className="text-4xl font-bold">Level up your golf bag</h2>
          <p className="mt-4 text-lg">
            Make your bag beautiful and organized. Post a picture to social
            media and watch it get more likes than life-changing announcements.
            Reflect on the shallow nature of existence. At least you have a
            really nice golf bag.
          </p>
          <Button className="mt-8 hover:bg-zinc-800" variant="default">
            Shop Golf Bags
          </Button>
        </div>
      </div>
    </Card>
  );
}
