export default function Hero() {
  return (
    <section className="min-h-screen md:w-full  bg-slate-900 overflow-hidden">
      <img
        src="/image/heroimage.jpeg"
        alt="Couple Hero"
        className="w-full h-[80vh] sm:h-[80vh] md:h-[75vh] object-cover object-[60%_60%] lg:object-[60%_30%] overflow-hidden"
      />
      <div className=" bg-red-900 h-[20vh] md:h-[25vh] w-full text-center py-5 md:py-6 lg:p-4 text-white overflow-hidden">
        <h2 className="text-xl sm:text-xl md:text-2xl lg:text-3xl font-cinzel font-semibold overflow-hidden">
          The Wedding Of
        </h2>
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-playfair mb-1 font-semibold overflow-hidden">
          Avila & Sandy
        </h1>
        <h3 className="text-xs md:xl lg:text-2xl font-cinzel overflow-hidden">
          12.04.2025
        </h3>{" "}
      </div>
    </section>
  );
}
