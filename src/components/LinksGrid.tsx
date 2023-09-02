import { useState } from "react";
import LinkCard from "./LinkCard";

type Link = {
  title: string;
  url: string;
  thumbnail?: string;
};

type LinksGridProps = {
  links: Link[];
};

const LinksGrid: React.FC<LinksGridProps> = ({ links }) => {
  const [minHeight, setMinHeight] = useState(0);

  return (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {links.map((link, index) => (
        <LinkCard
          key={index}
          title={link.title}
          url={link.url}
          thumbnail={link.thumbnail}
          setMinHeight={setMinHeight}
          minHeight={minHeight}
        />
      ))}
    </div>
  );
};
export default LinksGrid;