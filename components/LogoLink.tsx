import Link from "next/link";
import Image from "next/image";
import logo from "@/lib/assets/logo.png";
import logoDark from "@/lib/assets/LogoDark.png";

export default function LogoLink({
  dark,
  size,
  style,
}: {
  dark?: boolean;
  size?: number;
  style?: string
}) {
  return (
    <Link href="/" className={style}>
      <Image
        className={`size ? 'w-36 xl:w-${size}' :'w-36 xl:w-40'`}
        src={dark ? logoDark : logo}
        alt="moviebox logo"
        width="186"
        height="50"
      />
    </Link>
  );
}
