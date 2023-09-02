import { linksData } from "~/data/linksData";
import Layout from "~/components/Layout";
import LinksGrid from "~/components/LinksGrid";

const LinuxPage = () => {
  // Filtering out just programming links
  const linuxLinks = linksData.linux;


  if (!linuxLinks) {
    return (
      <Layout>
        <div>No links found for programming.</div>
      </Layout>
    );
  }


  return (
    <Layout>
      <LinksGrid links={linuxLinks} />
    </Layout>
  );
};

export default LinuxPage;
