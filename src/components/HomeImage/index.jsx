import Image from "next/image";
export default function HomeImage() {
  return (
    <div className=" h-screen w-3/4 py-5  max-md:hidden ">
      <Image
        className="w-full h-full object-contain shrink  "
        src="/images/gradient.svg"
        alt="imgem de uma mulher"
        priority
        width={600} 
        height={400} 
      />
    </div>
  );
}
