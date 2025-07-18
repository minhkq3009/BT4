import { Link } from 'react-router-dom';

export default function ArticleCard({ image, title, slug }) {
  const CardContent = (
    <div className="w-full max-w-xs text-center block hover:opacity-90 transition">
      <img src={image} alt={title} className="w-full h-auto mb-[20px]" />
      <div className="mt-4 px-2">
        <h4 className="text-lg font-semibold">{title}</h4>
      </div>
    </div>
  );

  return slug ? <Link to={`/article/${slug}`}>{CardContent}</Link> : CardContent;
}
