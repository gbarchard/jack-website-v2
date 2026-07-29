import { Link, type To } from "react-router-dom";

interface ImageLinkCardProps {
  alt: string;
  description: string;
  src: string;
  title: string;
  to: To;
}

export default function ImageLinkCard(props: ImageLinkCardProps) {
  const { alt, description, src, title, to } = props;
  return (
    <Link to={to} className="group relative h-85 overflow-hidden rounded-lg">
      <img
        src={src}
        alt={alt}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 object-cover opacity-60 transition-transform duration-500 ease-out group-hover:scale-105"
      />
      <div className="absolute bottom-8 left-8">
        <h3 className="font-georgia text-3xl font-bold text-white">{title}</h3>
        <p className="font-helvetica text-gray-300">{description}</p>
      </div>
    </Link>
  );
}
