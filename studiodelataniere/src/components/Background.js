import Image from "next/image";
import Wood from "./../../public/wood1.webp";

export default function Background() {
  return (
    <Image
      alt="wood"
      src={Wood}
      placeholder="blur"
      quality={100}
      sizes="100vw"
      fill
    />
  );
}
