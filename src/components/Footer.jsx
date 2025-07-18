export default function Footer() {
  return (
    <footer className="bg-black text-white text-center pt-[18px] pb-[32px] overflow-hidden">
      {/* SVG Section */}
      <div className="flex justify-center">
        <img
          src="/assets/Group40.svg"
          alt="Decorative Icon"
          className="w-[1200px] sm:w-[1500px] md:w-[1800px] lg:w-[2000px] max-w-none mx-auto"
        />
      </div>

      {/* Title */}
      <div className="mt-[105px]">
        <h2 className="text-[30px] tracking-widest font-serif">NORDIC ROSE</h2>
      </div>

      {/* Subtext */}
      <div className="mt-[26px] max-w-xl mx-auto text-gray-400 text-[16px] leading-relaxed px-4">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis eu velit
          tempus erat egestas efficitur. In hac habitasse platea dictumst. Fusce
          a nunc eget ligula suscipit finibus.
        </p>
      </div>

      {/* Social Links */}
      <div className="mt-[32px] flex justify-center gap-6 text-sm underline text-gray-400">
        <a href="#" className="hover:text-white">Twitter</a>
        <a href="#" className="hover:text-white">LinkedIn</a>
        <a href="#" className="hover:text-white">RSS</a>
      </div>

      {/* Copyright */}
      <p className="mt-[64px] text-sm font-light text-gray-500">
        © 2012–2020 Nordic Rose Co. All rights reserved.
      </p>
    </footer>
  );
}
