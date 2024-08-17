import Image from "next/image";
import circle from "./circle.svg";

export function Circle() {
  return <Image src={circle} alt={circle} />;
}
