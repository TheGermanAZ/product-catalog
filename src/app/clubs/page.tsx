import React from "react";
import { getAllListings } from "../../../server/db/queries";
import Image from "next/image";
import { Card, CardContent, CardTitle } from "@/components/ui/card";

const page = async () => {
  const allListings = await getAllListings();
  return (
    <main>
      <div className="bg-white p-6">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold">Clubs</h2>
        </div>
        <div className="grid grid-cols-4 gap-4">
          {allListings.map((item) => (
            <Card
              key={item.id}
              className="w-[220px] bg-gray-100 p-4 flex flex-col items-center"
            >
              <CardContent className=" w-48">
                <Image
                  alt={item.title}
                  className="h-48 w-48"
                  height="160"
                  src={item.imageRef}
                  style={{
                    aspectRatio: "160/160",
                    objectFit: "contain",
                  }}
                  width="160"
                />
              </CardContent>
              <CardTitle className="text-lg font-semibold">
                {item.title}
              </CardTitle>
            </Card>
          ))}
        </div>
      </div>
    </main>
  );
};

export default page;
