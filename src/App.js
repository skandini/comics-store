import Card from "./components/Card";
import Header from "./components/Header";
import Corzina from "./components/Corzina";

const Comisces = [
  {title: "Tokidoki Bosotto Roshiago de Dereru Tonari no Alya-san",
  price: 13456,
  descr: "Выпуск №1",
  image: "/img/covers/1.jpg"},
  {title: "Прелести садизма: Другая история A",
  price: 10456,
  descr: "Выпуск №1-№99",
  image: "/img/covers/2.jpg"}

];
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
  { Comisces.map((obj) => (
  <Card 
    title = {obj.title}
    price = {obj.price}
    descr = {obj.descr}
    image = {obj.image}
  />))} 
 </div>


      </div>
    </div>
  );
}

export default App;






