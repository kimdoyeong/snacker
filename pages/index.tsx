import React from "react";
import { NextPage } from "next";
import Contents from "../components/ui/Contents";
import { MarketListComponent } from "../components/market/MarketList";
import SEO from "../components/ui/SEO";

const Home: NextPage = () => (
  <div>
    <SEO title="주전부리 마켓" />
    <Contents>
      <MarketListComponent />
    </Contents>
  </div>
);

export default Home;
