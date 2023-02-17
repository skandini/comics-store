import Card from "./components/Card";
import Header from "./components/Header";
import Corzina from "./components/Corzina";
function App() {
  return (
    <div className="wrapper">
      <Corzina />

    <Header />
<hr className="lines"></hr>
      <div className="content">
        <div className="allComics-block">
        <h1> Все комиксы</h1>
        <div className="search-input">
          <img height={15} src="/img/search.svg" alt="search"></img>
          <input className="input"placeholder="search..."></input>
        </div>
        </div>
        

<div className="elements">
<Card />
<Card />
      
       

</div>
      </div>
    </div>
  );
}

export default App;






