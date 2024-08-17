import Image from "next/image";
import triangle from "./triangle.svg";

export function Triangle() {
  return <Image src={triangle} alt={triangle} />;
}
