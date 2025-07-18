import Header from '../components/Header';
import FeaturedArticle from '../components/FeaturedArticle';
import ArticleCard from '../components/ArticleCard';
import Footer from '../components/Footer';
import articles from '../data/articles';

export default function Home() {
  return (
    <div className="font-sans">
      <Header />
      <FeaturedArticle narticle={articles[0]} />
      <section className="px-4 md:px-0 pt-[64px] pb-[82px] md:pb-[113px]">
        <h3 className="text-[32px] md:text-[44px] font-bold text-center font-newyork mb-[30px] md:mb-[40px]">All articles</h3>
        <div className="flex justify-center">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-y-[64px] gap-x-[28px]">
            {articles.map((a, index) => (
            <ArticleCard
              key={index+1}
              image={a.image}
              title={a.title}
              slug={a.slug}
            />
          ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}