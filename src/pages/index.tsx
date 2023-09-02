import { linksData } from "~/data/linksData";
import Layout from "~/components/Layout";
import LinksGrid from "~/components/LinksGrid";

const Home = () => {
  return (
    <Layout>
      {Object.keys(linksData).map((category, index) => (
        <div key={index}>
          <h1
            className={`text-center text-2xl font-bold capitalize text-zinc-500 ${
              index === 0 ? "mt-0" : "mt-10"
            }`}
          >
            {category}
          </h1>
          <LinksGrid links={linksData[category]!} />
        </div>
      ))}
    </Layout>
  );
};

export default Home;