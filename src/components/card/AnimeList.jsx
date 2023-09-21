/* eslint-disable react/prop-types */
import classes from "./AnimeList.module.css";
import Card from "./Card";

const AnimeList = (props) => {
  return (
    <div className={classes["anime-grid"]}>
      {props.animeList.map((anime) => (
        <Card
          key={anime.mal_id}
          title={anime.title}
          rank={anime.rank}
          score={anime.score}
          img={anime.images.jpg.image_url}
          onClick={() => props.onClick(anime)}
        />
      ))}
    </div>
  );
};

export default AnimeList;
