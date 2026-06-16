export function Menu() {
  return (
    <div className="flex items-center justify-between fixed z-1000 w-full">
      <a href="https://hackclub.com" target="_blank">
        <img src="/hc-logo.png" alt="logo" className="w-28 sm:w-40 lg:w-64" />
      </a>
      <a
        // onClick={handleRSVP}
        className="text-center px-4 mr-3 py-2 text-sm sm:text-xl md:text-2xl lg:text-3xl bg-[#ec3750] cursor-pointer text-white hover:-translate-y-1 hover:-translate-x-1 border-black border-r-8 border-t-2 border-l-2 hover:border-b-12 border-b-8 transition-all lg:px-7 lg:mr-6 lg:py-3"
        // whileHover={{ scale: 1.03 }}
        // whileTap={{ scale: 0.97 }}
        href="https://play.pixl.rsvp"
      >
        Test the game!
      </a>
    </div>
  );
}
