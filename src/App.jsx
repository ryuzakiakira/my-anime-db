import { useEffect, useState } from "react";
import Header from "./components/header/Header";
import TopAnime from "./components/card/TopAnime";

function App() {
  const [topAnime, setTopAnime] = useState([]);

  const getTopAnime = async () => {
    const temp = await fetch("https://api.jikan.moe/v4/top/anime");
    const anime = await temp.json();
    setTopAnime(anime.data);
  };

  useEffect(() => {
    getTopAnime();
  }, []);

  return (
    <>
      <Header />
      <TopAnime topAnime={topAnime} />
    </>
  );
}

export default App;
