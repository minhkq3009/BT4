import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ArticleCard from "../components/ArticleCard";
import articles from "../data/articles";

export default function ArticleDetail() {
  return (
    <>
      <Header />

      {/* Title + Subtitle */}
      <div className="text-center max-w-4xl mx-auto mt-[52px] mb-[32px] px-[16px]">
        <h1 className="text-[36px] md:text-[54px] font-bold font-serif leading-snug mb-[24px] md:mb-[32px]">
          A few words about this blog platform, Ghost, and how this site was made
        </h1>
        <p className="text-[16px] md:text-[20px] text-gray-500 font-sfmono">
          Why Ghost (& Figma) instead of Medium, WordPress or other options?
        </p>
      </div>

      {/* Featured Image */}
      <div className="w-full">
        <img
          src="/featured.png"
          alt="Feature"
          className="w-full h-auto object-cover"
        />
      </div>

      {/* Article Block 1 */}
      <article className="max-w-3xl mx-[20px] md:mx-auto text-gray-800 text-[16px] md:text-[20px] font-newyorkMedium">
        <div className="mt-[24px] md:mt-[32px]">
          <div className="h-[1px] bg-black mb-[24px]"></div>
          {/* Author + Share Icons (combined) */}
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-[32px] md:mb-[53px]">
            {/* Avatar + Info */}
            <div className="flex items-center gap-4 text-sm text-gray-900 mb-6 md:mb-0">
              <img
                src="/assets/avatar.png"
                alt="Author"
                className="w-14 h-14 rounded-full object-cover"
              />
              <div>
                <p className="font-semibold text-[16px]">MIKA MATIKAINEN</p>
                <p className="text-[16px]">Apr 15, 2020 · 4 min read</p>
              </div>
            </div>

            {/* Share icons with shadow */}
            <div className="w-full md:w-auto rounded-[4px] shadow-[0px_1px_4px_rgba(0,0,0,0.08)]">
              {/* Desktop: 2 icons */}
              <div className="hidden md:flex">
                <img
                  src="/assets/facebook.svg"
                  alt="Facebook"
                  className="py-[12px] px-[25px] border border-gray-200 cursor-pointer"
                />
                <img
                  src="/assets/twitter.svg"
                  alt="Twitter"
                  className="py-[12px] px-[25px] border border-l-0 border-gray-200 cursor-pointer"
                />
              </div>

              {/* Mobile: 3 icons full width */}
              <div className="flex md:hidden h-[54px] border border-gray-300 divide-x divide-gray-300 rounded-[4px]">
                <img
                  src="/assets/facebook.svg"
                  alt="Facebook"
                  className="flex-1 py-[17px] px-[46px]"
                />
                <img
                  src="/assets/twitter.svg"
                  alt="Twitter"
                  className="flex-1 py-[17px] px-[46px]"
                />
                <img
                  src="/assets/whatsapp.svg"
                  alt="WhatsApp"
                  className="flex-1 py-[17px] px-[46px]"
                />
              </div>
            </div>
          </div>


          <p className="mb-[34px]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis eu velit tempus erat egestas efficitur. In hac habitasse platea dictumst. Fusce a nunc eget ligula suscipit finibus.
          </p>

          <p>
            Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Aliquam quis posuere ligula. In eu dui molestie, molestie lectus eu, semper lectus.
          </p>

          <h2 className="font-sf text-[26px] md:text-[32px] font-bold mt-10 mb-4">Next on the pipeline</h2>

          <p className="mb-8">
            Duis eu velit tempus erat egestas efficitur. In hac habitasse platea dictumst. Fusce a nunc eget ligula suscipit finibus. Class aptent taciti sociosqu ad litora torquent per conubia nostra.
          </p>

          <p className="mb-[52px]">
            Morbi efficitur auctor metus, id mollis lorem pellentesque id. Nullam posuere maximus dui et fringilla.
          </p>
        </div>
      </article>

      {/* Article Image and Caption in Between */}
      <div className="my-8 px-0">
        <div className="w-full mx-auto sm:w-[80%] md:w-[70vw] xl:w-[50vw] max-w-none md:max-w-[100vw]">
          <img
            src="/assets/article.png"
            alt="Article Visual"
            className="w-full h-auto"
          />
          <p className="text-center text-[12px] md:text-[16px] text-gray-900 mt-2 px-[16px] font-sfpro">
            Image caption centered this way and I’ll make this a bit longer to indicate the amount of line-height.
          </p>
        </div>
      </div>
      {/* Article Block 2 */}
      <article className="max-w-3xl mx-[20px] md:mx-auto text-gray-800 text-[16px] md:text-[20px] pb-[91px] md:pb-[132px] font-newyorkMedium">
        <p className="mb-[32px] md:mb-[52px]">
          Aenean pharetra quis lacus at viverra. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Aliquam quis posuere ligula.
        </p>
        <p className="mb-[32px] md:mb-[52px]">
          Duis eu velit tempus erat egestas efficitur. In hac habitasse platea dictumst. Fusce a nunc eget ligula suscipit finibus. Class aptent taciti sociosqu ad litora torquent per conubia nostra.
        </p>

        <ul className="list-disc pl-6 mb-[52px] hidden md:block">
          <li>First item in the list</li>
          <li>Second item in the list lorem ipsum dolor sit amet nunc felis dolor lorem ipsum sit amet</li>
          <li>Third item in the list</li>
        </ul>

        <p className="mb-[52px] hidden md:block">
          Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Aliquam quis posuere ligula.
        </p>

        <p className="mb-[72px] hidden md:block">Thanks for reading, Mika</p>

        {/* Social Share Section */}
        <div className="w-full mb-6">
          {/* Desktop: 2 buttons with icon + text */}
          <div className="hidden md:flex w-full border border-gray-300 rounded-[4px] overflow-hidden h-[54px] md:h-[64px]">
            <button className="w-1/2 flex items-center justify-center gap-2 py-[12px] px-[25px] border-r border-gray-300">
              <img src="/assets/facebook.svg" alt="Facebook" className="w-5 h-5" />
              <span className="text-[14px] text-black font-medium">Share on Facebook</span>
            </button>
            <button className="w-1/2 flex items-center justify-center gap-2 py-[12px] px-[25px]">
              <img src="/assets/twitter.svg" alt="Twitter" className="w-5 h-5" />
              <span className="text-[14px] text-black font-medium">Share on Twitter</span>
            </button>
          </div>

          {/* Mobile: 3 icon only, no text */}
          <div className="flex md:hidden w-full border border-gray-300 rounded-[4px] overflow-hidden h-[54px]">
            <img
              src="/assets/facebook.svg"
              alt="Facebook"
              className="flex-1 py-[17px] px-[46px] border-r border-gray-300"
            />
            <img
              src="/assets/twitter.svg"
              alt="Twitter"
              className="flex-1 py-[17px] px-[46px] border-r border-gray-300"
            />
            <img
              src="/assets/whatsapp.svg"
              alt="WhatsApp"
              className="flex-1 py-[17px] px-[46px]"
            />
          </div>
        </div>
        <div className="text-[16px] text-black-900 mb-[34px]">Tags: product design, culture</div>

        <div className="border-t border-dashed border-gray-300 mb-[34px]"></div>

        {/* Author Info */}
        <div className="flex items-center gap-4 mt-6">
          <img
            src="/assets/avatar.png"
            alt="Author Detail Avatar"
            className="w-[70px] h-[70px] rounded-full object-cover"
          />
          <p className="text-[16px] text-gray-700 font-sfpro">
            <strong className="uppercase">MIKA MATIKAINEN</strong> is a Design Founder & Advisor. Berlin School of Creative Leadership Executive MBA participant. Zippie advisor. Wolt co-founder, and Nordic Rose stakeholder.
          </p>
        </div>
      </article>

      {/* Separator line */}
      <div className="w-screen h-[1px] bg-gray-900 mb-0 mt-0"></div>

        {/* Bọc chung 2 phần vào 1 div lớn */}
        <article className="max-w-3xl mx-[20px] md:mx-auto pt-[62px] md:pt-[73px] pb-[52px] md:pb-[111px]">

          {/* WHAT TO READ NEXT */}
          <section className="text-center mb-[82px] md:mb-[114px]">
            <h3 className="font-newyork font-bold mb-[27px] text-[32px] md:text-[44px]">What to read next</h3>
            <div className="flex justify-center">
              {/* Mobile: 3 cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 md:hidden gap-x-[28px] gap-y-[32px]">
                {articles.slice(0, 3).map((item, index) => (
                  <ArticleCard key={index} {...item} />
                ))}
              </div>

              {/* Desktop: 6 cards */}
              <div className="hidden md:grid md:grid-cols-3 gap-x-[28px] gap-y-[32px]">
                {articles.slice(0, 6).map((item, index) => (
                  <ArticleCard key={index} {...item} />
                ))}
              </div>
            </div>
          </section>

          {/* SIGN-UP SECTION */}
          <section className="border-solid border-[1px] border-black px-6 py-10 max-w-2xl mx-auto text-center relative">
            <div className="absolute top-0 left-0 right-0 h-2 bg-black"></div>

            <h3 className="font-newyork text-[28px] md:text-[36px] font-bold mb-4">Sign up for the newsletter</h3>
            <p className="text-[16px] md:text-[20px] text-gray-700 mb-6">
              If you want relevant updates occasionally, sign up for the private newsletter. Your email is never shared.
            </p>

            <form className="w-full max-w-xl mx-auto mt-6">
              <div className="flex flex-row flex-nowrap w-full">
                <input
                  type="email"
                  placeholder="Enter your email..."
                  className="border border-black px-4 py-2 flex-grow min-w-0 rounded-none"
                />
                <button
                  type="submit"
                  className="bg-black text-white px-6 py-2 font-semibold tracking-wider shrink-0"
                >
                  SIGN UP
                </button>
              </div>
            </form>
          </section>
        </article>
      <Footer />
    </>
  );
}
