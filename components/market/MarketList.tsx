import React from "react";
import MarketCard from "./MarketCard";

export const MarketListComponent: React.FC = () => {
  return (
    <div>
      <MarketCard
        title="핫식스 1캔"
        by="김도영"
        description="개발자에게 꼭 필요한 카페인!"
        date={new Date("2019-08-22 11:44")}
      />
    </div>
  );
};

const MarketList = () => {};

export default MarketList;
