import Bangladesh from "./homepage_sections/bangladesh";
import Entertainment from "./homepage_sections/entertainment";
import International from "./homepage_sections/international";
import LatestNews from "./homepage_sections/latest_news";
import Politics from "./homepage_sections/politics";
import Economics from "./homepage_sections/economics";
import Sports from "./homepage_sections/sports";
import National from "./homepage_sections/national";
import InformationTechnology from "./homepage_sections/information_technology";
import { Metadata } from "next";


export const metadata = {
  title: "News page",
  description: "description of news",
  openGraph: {
    title: "News page",
    description: "description of news",
    url: "",
    siteName: "",
    images: [
      {
        url: "",
        width: 1260,
        height: 800
      }
    ]
  }
}



const HomeTopBlock = () => {
  return (
    <>

        <LatestNews />
        <National />
        <International />
        <Politics />
        <Economics />
        <Bangladesh />
        <Sports />
        <Entertainment />
        <InformationTechnology />
    </>
  );
};

export default HomeTopBlock;
