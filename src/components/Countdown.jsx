import Fungsimundur from "./Fungsimundur";

export default function Countdown() {
  return (
    // Removed items-center from section, as it's better applied to the inner flex container.
    <section className="min-h-screen w-full bg-red-900">
      <div className="flex flex-col items-center">
        {" "}
        {/* Use flex-col and items-center here for vertical alignment */}
        <div className="text-center lg:text-2xl font-poppins text-white pt-8">
          Menuju Hari Bahagia
        </div>
        {/* Placeholder for Fungsimundur: Using w-full and ensuring centering */}
        <div className="w-full h-auto mt-4">
          {/* If you uncomment <Fungsimundur />, it will be centered here */}
          <Fungsimundur />
        </div>
        <div className="pt-16 w-60 h-80 lg:w-90 h-120 mx-auto">
          <img
            src="/image/landscapeimage.jpeg"
            alt=""
            className="object-cover h-full w-full object-[80%_50%] rounded-t-full"
          />
        </div>
      </div>
    </section>
  );
}
