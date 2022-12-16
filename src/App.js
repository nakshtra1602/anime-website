import { useState, useEffect } from "react";
import MainContent from "./components/MainContent";

function App() {
  const [animeList, SetAnimeList] = useState([]);
  const [search, SetSearch] = useState("");
  let [iteration, setiteration] = useState(1);
  const [load, setLoad] = useState(false);

  const HandleSearch = (x) => {
    if (x === 1) {
      setiteration(2);
      FetchAnime(search);
    } else {
      FetchAnime(search);
    }
  };

  const FetchAnime = async (query) => {
    setLoad(true);
    const temp = await fetch(
      `https://api.jikan.moe/v4/anime?q=${query}&sfw`
    ).then((res) => res.json());

    setLoad(false);
    let i = 0;
    let naks = [];
    temp.data.map((element) => {
      if (i < iteration * 6) {
        naks.push(element);
        console.log(element);
      }
      i = i + 1;
    });

    SetAnimeList(naks);
  };

  return (
    <div className="App" id="load-button">
      {/* <Header /> */}
      <div className="content-wrap">
        <MainContent
          HandleSearch={HandleSearch}
          search={search}
          SetSearch={SetSearch}
          animeList={animeList}
        />
      </div>
      {!load?(iteration !== 1 && (
        <button
          className="button"
          id="new-button"
          onClick={() => {
            setiteration(++iteration);
            HandleSearch(0);
          }}
        >
          Load More
        </button>
      )):null}
    </div>
  );
}

export default App;
