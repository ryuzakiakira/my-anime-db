import { useEffect, useState } from "react";
import Header from "./components/header/Header";
import AnimeList from "./components/card/AnimeList";
import PopUp from "./components/card/PopUp";

function App() {
  const [topAnime, setTopAnime] = useState([]);
  const [synopsisIsShown, setSynopsisIsShown] = useState(false);
  const [selectedAnime, setSelectedAnime] = useState(null);
  const [search, setSearch] = useState("");
  const [animeList, setAnimeList] = useState([]);

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

  const searchBarHandler = (e) => {
    e.preventDefault();
    setSearch(e.target.value);
  };

  const getAnime = async (query) => {
    const temp = await fetch(
      `https://api.jikan.moe/v4/anime?q=${query}&order_by=title&sort=asc&limit=16`
    );
    const anime = await temp.json();
    setAnimeList(anime.data);
  };

  const searchHandler = (anime) => {
    getAnime(anime);
  };

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
      <Header
        onSearch={searchBarHandler}
        onSubmit={searchHandler}
        search={search}
      />
      {animeList.length === 0 && (
        <AnimeList animeList={topAnime} onClick={showSynopsisHandler} />
      )}
      {animeList.length > 0 && (
        <AnimeList animeList={animeList} onClick={showSynopsisHandler} />
      )}
    </>
  );
}

export default App;
