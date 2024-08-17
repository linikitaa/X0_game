import Image from "next/image";
import square from "./square.svg";

export function Square() {
  return <Image src={square} alt={square} />;
}
