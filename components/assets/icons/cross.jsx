import Image from "next/image";
import cross from "./cross.svg";

export function Cross() {
  return <Image src={cross} alt={cross} />;
}
