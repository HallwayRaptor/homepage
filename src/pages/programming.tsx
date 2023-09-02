import { linksData } from "~/data/linksData";
import Layout from "~/components/Layout";
import LinksGrid from "~/components/LinksGrid";

const ProgrammingPage = () => {

  const programmingLinks = linksData.programming;

  if (!programmingLinks) {
    return (
      <Layout>
        <div>No links found for programming.</div>
      </Layout>
    );
  }


  return (
    <Layout>
      <LinksGrid links={programmingLinks} />
    </Layout>
  );
};

export default ProgrammingPage;