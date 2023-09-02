import { linksData } from "~/data/linksData";
import Layout from "~/components/Layout";
import LinksGrid from "~/components/LinksGrid";

const ProgrammingPage = () => {

  const programmingLinks = linksData.programming;

  return (
    <Layout activePage="programming">
      <LinksGrid links={programmingLinks} />
    </Layout>
  );
};

export default ProgrammingPage;