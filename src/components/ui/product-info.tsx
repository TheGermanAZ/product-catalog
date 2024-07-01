import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { getListing } from "../../../server/db/queries";
import Image from "next/image";

export async function ProductInfo({
  product,
  id,
}: {
  product: string;
  id: string;
}) {
  const listing = await getListing(parseInt(id));
  return (
    <div className="grid md:grid-cols-2 gap-6 lg:gap-12 items-start max-w-6xl px-4 mx-auto py-6">
      <div className="grid gap-4 md:gap-10 items-start">
        <div className="grid gap-4">
          <Image
            src={listing[0].imageRef}
            alt="Product Image"
            width={600}
            height={600}
            className="aspect-square object-cover border w-full rounded-lg overflow-hidden"
          />
          <div className="hidden md:flex gap-4 items-start">
            <button className="border hover:border-primary rounded-lg overflow-hidden transition-colors">
              <Image
                src="/placeholder.svg"
                alt="Preview thumbnail"
                width={100}
                height={100}
                className="aspect-square object-cover"
              />
              <span className="sr-only">View Image 1</span>
            </button>
            <button className="border hover:border-primary rounded-lg overflow-hidden transition-colors">
              <img
                src="/placeholder.svg"
                alt="Preview thumbnail"
                width={100}
                height={100}
                className="aspect-square object-cover"
              />
              <span className="sr-only">View Image 2</span>
            </button>
            <button className="border hover:border-primary rounded-lg overflow-hidden transition-colors">
              <img
                src="/placeholder.svg"
                alt="Preview thumbnail"
                width={100}
                height={100}
                className="aspect-square object-cover"
              />
              <span className="sr-only">View Image 3</span>
            </button>
            <button className="border hover:border-primary rounded-lg overflow-hidden transition-colors">
              <img
                src="/placeholder.svg"
                alt="Preview thumbnail"
                width={100}
                height={100}
                className="aspect-square object-cover"
              />
              <span className="sr-only">View Image 4</span>
            </button>
            <button className="border hover:border-primary rounded-lg overflow-hidden transition-colors">
              <img
                src="/placeholder.svg"
                alt="Preview thumbnail"
                width={100}
                height={100}
                className="aspect-square object-cover"
              />
              <span className="sr-only">View Image 4</span>
            </button>
          </div>
        </div>
      </div>
      <div className="grid gap-4 md:gap-10 items-start">
        <div className="hidden md:flex items-start">
          <div className="grid gap-4">
            <h1 className="font-bold text-3xl lg:text-4xl">{product}</h1>
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-0.5">
                <StarIcon className="w-5 h-5 fill-primary" />
                <StarIcon className="w-5 h-5 fill-primary" />
                <StarIcon className="w-5 h-5 fill-primary" />
                <StarIcon className="w-5 h-5 fill-muted stroke-muted-foreground" />
                <StarIcon className="w-5 h-5 fill-muted stroke-muted-foreground" />
              </div>
            </div>
            <div>
              <p>60% combed ringspun cotton/40% polyester jersey tee.</p>
            </div>
          </div>
          <div className="text-4xl font-bold ml-auto">$99</div>
        </div>
        <form className="grid gap-4 md:gap-10">
          <div className="grid gap-2">
            <Label htmlFor="color" className="text-base">
              Color
            </Label>
            <RadioGroup
              id="color"
              defaultValue="black"
              className="flex items-center gap-2"
            >
              <Label
                htmlFor="color-black"
                className="border cursor-pointer rounded-md p-2 flex items-center gap-2 [&:has(:checked)]:bg-muted"
              >
                <RadioGroupItem id="color-black" value="black" />
                Black
              </Label>
              <Label
                htmlFor="color-white"
                className="border cursor-pointer rounded-md p-2 flex items-center gap-2 [&:has(:checked)]:bg-muted"
              >
                <RadioGroupItem id="color-white" value="white" />
                White
              </Label>
              <Label
                htmlFor="color-blue"
                className="border cursor-pointer rounded-md p-2 flex items-center gap-2 [&:has(:checked)]:bg-muted"
              >
                <RadioGroupItem id="color-blue" value="blue" />
                Blue
              </Label>
            </RadioGroup>
          </div>
          <div className="grid gap-2">
            <Label htmlFor="size" className="text-base">
              Size
            </Label>
            <RadioGroup
              id="size"
              defaultValue="m"
              className="flex items-center gap-2"
            >
              <Label
                htmlFor="size-xs"
                className="border cursor-pointer rounded-md p-2 flex items-center gap-2 [&:has(:checked)]:bg-muted"
              >
                <RadioGroupItem id="size-xs" value="xs" />
                XS
              </Label>
              <Label
                htmlFor="size-s"
                className="border cursor-pointer rounded-md p-2 flex items-center gap-2 [&:has(:checked)]:bg-muted"
              >
                <RadioGroupItem id="size-s" value="s" />S
              </Label>
              <Label
                htmlFor="size-m"
                className="border cursor-pointer rounded-md p-2 flex items-center gap-2 [&:has(:checked)]:bg-muted"
              >
                <RadioGroupItem id="size-m" value="m" />M
              </Label>
              <Label
                htmlFor="size-l"
                className="border cursor-pointer rounded-md p-2 flex items-center gap-2 [&:has(:checked)]:bg-muted"
              >
                <RadioGroupItem id="size-l" value="l" />L
              </Label>
              <Label
                htmlFor="size-xl"
                className="border cursor-pointer rounded-md p-2 flex items-center gap-2 [&:has(:checked)]:bg-muted"
              >
                <RadioGroupItem id="size-xl" value="xl" />
                XL
              </Label>
            </RadioGroup>
          </div>
          <div className="grid gap-2">
            <Label htmlFor="quantity" className="text-base">
              Quantity
            </Label>
            <Select defaultValue="1">
              <SelectTrigger className="w-24">
                <SelectValue placeholder="Select" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="1">1</SelectItem>
                <SelectItem value="2">2</SelectItem>
                <SelectItem value="3">3</SelectItem>
                <SelectItem value="4">4</SelectItem>
                <SelectItem value="5">5</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <Button size="lg">Add to cart</Button>
        </form>
        <Separator />
        <div className="grid gap-4 text-sm leading-loose">
          <p>
            Introducing the Acme Prism T-Shirt, a perfect blend of style and
            comfort for the modern individual. This tee is crafted with a
            meticulous composition of 60% combed ringspun cotton and 40%
            polyester jersey, ensuring a soft and breathable fabric that feels
            gentle against the skin.
          </p>
          <p>
            The design of the Acme Prism T-Shirt is as striking as it is
            comfortable. The shirt features a unique prism-inspired pattern that
            adds a modern and eye-catching touch to your ensemble.
          </p>
        </div>
        <div className="flex md:hidden items-start">
          <div className="grid gap-4">
            <h1 className="font-bold text-2xl sm:text-3xl">
              CottonSculpt Prism Tee: The Cozy Chromatic Blend
            </h1>
            <div>
              <p>60% combed ringspun cotton/40% polyester jersey tee.</p>
            </div>
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-0.5">
                <StarIcon className="w-5 h-5 fill-primary" />
                <StarIcon className="w-5 h-5 fill-primary" />
                <StarIcon className="w-5 h-5 fill-primary" />
                <StarIcon className="w-5 h-5 fill-muted stroke-muted-foreground" />
                <StarIcon className="w-5 h-5 fill-muted stroke-muted-foreground" />
              </div>
            </div>
          </div>
          <div className="text-4xl font-bold ml-auto">$99</div>
        </div>
      </div>
    </div>
  );
}

function StarIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
    </svg>
  );
}
