import Link from "next/link";

export default function ErrorPage() {
  return (
    <div className="flex flex-col ">
      <h1>There was an error somewhere</h1>
      <Link href="/">
        <button>Jump back to the HomePage</button>
      </Link>
    </div>
  );
}
