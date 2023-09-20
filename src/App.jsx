import { useEffect, useState } from "react";
import Header from "./components/header/Header";
import TopAnime from "./components/card/TopAnime";
import PopUp from "./components/card/PopUp";

function App() {
  const [topAnime, setTopAnime] = useState([]);
  const [synopsisIsShown, setSynopsisIsShown] = useState(false);
  const [selectedAnime, setSelectedAnime] = useState(null);

  const showSynopsisHandler = (anime) => {
    setSynopsisIsShown(true);
    setSelectedAnime(anime);
  };

  const hideSynopsisHandler = () => {
    setSynopsisIsShown(false);
    setSelectedAnime(null);
  };

  const getTopAnime = async () => {
    const temp = await fetch("https://api.jikan.moe/v4/top/anime");
    const anime = await temp.json();
    setTopAnime(anime.data);
  };

  useEffect(() => {
    getTopAnime();
  }, []);

  console.log(topAnime);

  return (
    <>
      {synopsisIsShown && (
        <PopUp
          title={selectedAnime.title}
          synopsis={selectedAnime.synopsis}
          year={selectedAnime.year}
          onClose={hideSynopsisHandler}
        />
      )}
      <Header />
      <TopAnime topAnime={topAnime} onClick={showSynopsisHandler} />
    </>
  );
}

export default App;
