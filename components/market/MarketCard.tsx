import React from "react";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";

import styles from "./MarketCard.module.scss";
import AddIcon from "@material-ui/icons/Add";

interface MarketCardProps {
  title: string;
  description: string;
  by: string;
  photoUrl?: string;
  date: Date;
}
function formatDate(date: Date) {
  const current = new Date();
  const millsec = current.getTime() - date.getTime();
  const { floor } = Math;
  const times = {
    [1000 * 60]: "방금 전",
    [1000 * 60 * 60]: `${floor(millsec / (1000 * 60))}분 전`,
    [1000 * 60 * 60 * 24]: `${floor(millsec / (1000 * 60 * 60))}시간 전`,
    [1000 * 60 * 60 * 24 * 7]: `${floor(millsec / (1000 * 60 * 60 * 24))}일 전`,
    [1000 * 60 * 60 * 24 * 7 * 8]: `${floor(
      millsec / (1000 * 60 * 60 * 24 * 7)
    )}주 전`,
    default: `${date.getFullYear()}-${date.getMonth() +
      1}-${date.getDate()} ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`
  };

  for (const t of Object.keys(times)) {
    if (t === "default") return times["default"];

    const tn = parseInt(t, 10);
    if (millsec >= tn) continue;
    return times[tn];
  }
  return times["default"];
}
const MarketCard: React.FC<MarketCardProps> = ({
  title,
  by,
  date,
  photoUrl,
  description
}) => {
  return (
    <Card className={styles.card}>
      <CardHeader
        avatar={<AddIcon />}
        title={`${by}님이 새 간식을 올렸습니다.`}
        subheader={formatDate(date)}
      />
      <CardMedia
        className={styles.media}
        image={photoUrl || "/static/images/no-photo.png"}
        title={title}
      />
      <CardContent>
        <Typography variant="body1" component="h1">
          {title}
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p">
          {description}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default MarketCard;
