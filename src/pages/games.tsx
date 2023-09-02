import { linksData } from "~/data/linksData";
import Layout from "~/components/Layout";
import LinksGrid from "~/components/LinksGrid";

const GamesPage = () => {
  // Filtering out just games links
  const gamesLinks = linksData.games;

  return (
    <Layout>
      <LinksGrid links={gamesLinks} />
    </Layout>
  );
};

export default GamesPage;
