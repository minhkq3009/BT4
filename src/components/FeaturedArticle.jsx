import { Link } from 'react-router-dom';

export default function FeaturedArticle() {
  return (
    <section className="text-center px-4 md:px-0 py-12 pb-0">
      <div className="mx-auto w-full max-w-3xl">
        <Link to="/article/ghost-platform">
          <img
            src="/featured.png"
            alt="Featured"
            className="w-full h-auto cursor-pointer"
          />
          <h2 className="font-newyork font-bold mt-[32px] md:mt-[44px] text-[36px] md:text-[54px] hover:underline cursor-pointer mb-[24px] md:mb-[32px]">
            A few words about this blog platform, Ghost, and how this site was made
          </h2>
        </Link>
        <p className="text-[16px] md:text-[20px] text-gray-600 font-sfmono md:max-w-[30vw] mx-auto text-center mb-[32px] md:mb-[44px]">
          Why Ghost (& Figma) instead of Medium, WordPress or other options?
        </p>
        <hr className="mt-[34px] mb-0 border-t border-gray-900 w-full" />
      </div>
    </section>
  );
}
