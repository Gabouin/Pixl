export function Menu() {
  return (
    <div className="flex items-center justify-between fixed z-1000 w-full">
      <a href="https://hackclub.com" target="_blank">
        <img src="/hc-logo.png" alt="logo" className="w-50" />
      </a>
      <a
        // onClick={handleRSVP}
        className="text-center px-5 mr-2 py-2 text-base sm:text-xl md:text-2xl hover:shadow-2xl shadow-[#ff8c37] bg-[#ff8c37] cursor-pointer text-white hover:-translate-y-1 hover:-translate-x-1 border-black border-r-8 border-t-2 border-l-2 hover:border-b-12 border-b-8 transition-all"
        // whileHover={{ scale: 1.03 }}
        // whileTap={{ scale: 0.97 }}
        href="https://play.pixl.rsvp"
      >
        Test the game!
      </a>
    </div>
  );
}
