import favourite from "@/lib/assets/favourite.svg";
import Image from "next/image";

export default function HomeRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-x-2 border border-rose-200 w-fit p-1 rounded-lg">
      <Image src={favourite} alt="" width="24" height="24" className="w-4" />
      <p className="text-sm">{rating}</p>
    </div>
  );
}
