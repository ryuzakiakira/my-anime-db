/* eslint-disable react/prop-types */
import './TopAnime.css';
import Card from "./Card";

const TopAnime = (props) => {
  return (
    <div className="anime-grid">
      {props.topAnime.map((anime) => (
        <Card
          key={anime.mal_id}
          title={anime.title}
          synopsis={anime.synopsis}
          img={anime.images.jpg.image_url}
        />
      ))}
    </div>
  );
};

export default TopAnime;
