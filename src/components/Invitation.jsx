export default function Invitation() {
  return (
    // Removed border from Hero, so keep this section clean
    <section className="h-[80vh] md:h-[90vh] lg:h-[100vh] w-full overflow-hidden">
      <div className="relative h-full">
        {/* Background Image and Overlay */}
        <div className="w-full h-full">
          <img
            src="/image/bg.png"
            alt=""
            className="relative object-cover object-[50%_30%] w-full h-full"
          />
          <div className="absolute inset-0 bg-white/80 w-full h-full"></div>
        </div>

        {/* FIX APPLIED HERE: Using inset-0 and p-4 for safe padding */}
        <div className="absolute inset-0 p-4 md:p-8 z-20">
          <div className="max-w-screen-lg mx-auto h-full">
            {" "}
            {/* Use a max-width wrapper for safety */}
            {/* General Text */}
            <p className="font-poppins text-gray-900 text-center text-[10px] md:text-base lg:text-base xl:text-xl md:mx-8 xl:mx-32 mx-auto md:pt-8 md:mb-4">
              <span className="font-semibold">Assalamu'alaikum Wr.Wb.</span>
              <br /> Dengan penuh rasa syukur ke hadirat Allat SWT, kami
              mengundang Bapak/Ibu/Saudara/i untuk berkenan hadir pada acara
              pernikahan putra-putri kami.
            </p>
            {/* Photos & Names Container */}
            <div className="md:flex items-center justify-center md:space-x-24 lg:space-x-24 xl:space-x-40 mx-auto mt-4">
              {/* Foto Wanita */}
              <div className="py-2 px-2 md:p-4 lg:py-16">
                <img
                  src="/image/fotomodelwanita.jpeg"
                  alt=""
                  className="w-30 md:w-50 lg:w-60 h-auto object-cover rounded-full mx-auto"
                />
                <h1 className="font-playfair font-extrabold text-center text-xl md:text-3xl">
                  Avila Khairunissa
                </h1>
                <p className="font-playfair text-center text-xs md:text-xl">
                  Putri Pertama dari orang tuanya
                </p>
              </div>

              {/* Foto Pria */}
              <div className="py-2 px-2 md:p-4 lg:py-16">
                <img
                  src="/image/fotomodelpria.jpeg"
                  alt=""
                  className="w-30 h-40 md:w-50 md:h-60 lg:w-60 lg:h-70 rounded-full object-cover mx-auto"
                />
                <h1 className="font-playfair font-extrabold text-center text-xl md:text-3xl">
                  Sandy Finaldy
                </h1>
                <p className="font-playfair text-center text-xs md:text-xl">
                  Putra Ke-4 dari orang tuanya
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
