import Image from "next/image";
import logoImage from "../../public/images/logo.png";

export default function Logo({ width, height }) {
  return <Image  src={logoImage} alt="Arian-Cejas" width={width} height={height} />;
}
