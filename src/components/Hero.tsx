interface HeroProps {
  onNavigate: (section: string) => void;
}

export default function Hero({ onNavigate }: HeroProps) {
  return (
    <section className="relative w-screen h-screen m-0 p-0 overflow-hidden -mt-[130px]  -mb-[150px]">
      <img
        src="/welcome.png"
        alt="Banner"
        className="w-full h-full object-contain"
      />
    </section>
  );
}
