/**
 * v0 by Vercel.
 * @see https://v0.dev/t/uZ7hL4d2yvG
 */
import Link from "next/link";
import { Card } from "@/components/ui/card";
import Image from "next/image";

export default function Category() {
  return (
    <div className="bg-white p-6">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold">Shop by Category</h2>
        <Link className="text-blue-600 hover:text-blue-800" href="#">
          Browse all Categories
        </Link>
      </div>
      <div className="grid grid-cols-4 gap-4">
        <Card className="w-[220px] bg-gray-100 p-4 flex flex-col items-center">
          <Image
            alt="New Arrivals"
            className="mb-4"
            height="160"
            src="/placeholder.svg"
            style={{
              aspectRatio: "160/160",
              objectFit: "cover",
            }}
            width="160"
          />
          <span className="text-lg font-semibold">New Arrivals</span>
        </Card>
        <Card className="w-[220px] bg-gray-100 p-4 flex flex-col items-center">
          <Image
            alt="Productivity"
            className="mb-4"
            height="160"
            src="/placeholder.svg"
            style={{
              aspectRatio: "160/160",
              objectFit: "cover",
            }}
            width="160"
          />
          <span className="text-lg font-semibold">Productivity</span>
        </Card>
        <Card className="w-[220px] bg-gray-100 p-4 flex flex-col items-center">
          <Image
            alt="Workspace"
            className="mb-4"
            height="160"
            src="/placeholder.svg"
            style={{
              aspectRatio: "160/160",
              objectFit: "cover",
            }}
            width="160"
          />
          <span className="text-lg font-semibold">Workspace</span>
        </Card>
        <Card className="w-[220px] bg-gray-100 p-4 flex flex-col items-center">
          <Image
            alt="Accessories"
            className="mb-4"
            height="160"
            src="/placeholder.svg"
            style={{
              aspectRatio: "160/160",
              objectFit: "cover",
            }}
            width="160"
          />
          <span className="text-lg font-semibold">Accessories</span>
        </Card>
      </div>
    </div>
  );
}
