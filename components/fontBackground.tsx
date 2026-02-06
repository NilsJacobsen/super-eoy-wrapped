import Image from "next/image";

const FontBackground = () => {
  return (
    <div className="fixed inset-0 pointer-events-none -z-20">
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rotate-30 scale-200">
        <Image src="/Super_Wordmark_Light.svg" alt="Logo" width={1655} height={442} className="-translate-x-1/8"/>
        <Image src="/Super_Wordmark_Light.svg" alt="Logo" width={1655} height={442} className="translate-x-1/8"/>
      </div>
    </div>
  );
};

export default FontBackground;