export function Menu() {
  return (
    <div className="flex items-center justify-between fixed z-1000 w-full px-8">
      <a href="https://hackclub.com" target="_blank">
        <img src="/hc-logo.png" alt="logo" className="w-50" />
      </a>
      <a
        href="https://game.pixl.rsvp"
        target="_blank"
        rel="noopener noreferrer"
        className="px-6 py-2 bg-[#ec3750] text-white rounded-lg font-pixel hover:shadow-lg hover:-translate-y-1 transition-all"
      >
        Test the game
      </a>
    </div>
  );
}
