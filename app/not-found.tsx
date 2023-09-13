import Link from "next/link";

export default function MissingPage() {
  return (
    <div className="flex flex-col items-center justify-center pt-16 w-full gap-y-4 md:gap-y-10 md:pt-24">
      <h1 className="text-xl text-rose font-bold sm:text-2xl lg:text-3xl ">
        This Page Does Not Exist
      </h1>
      <Link href="/">
        <button className="bg-myGray px-10 py-4 text-white border rounded-lg">Jump Back to Home</button>
      </Link>
    </div>
  );
}
