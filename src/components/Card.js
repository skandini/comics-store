function Card() {
    return (
<div className="card">
          <img src="/img/liked.svg" alt="liked"></img>
          {/* <img src="/img/unlike.svg" alt="unliked"></img> */}
          <img className="img-cover" src="/img/covers/1.jpg"></img>
          <h4>Tokidoki Bosotto Roshiago de Dereru Tonari no Alya-san</h4>
          <p>Выпуск №1</p>
          <div className="card-describe">
              <div>
                <p>Цена:</p>
                <span className="price">1589 руб.</span>
              </div>
              <img height={20} width={20} src="/img/cart.svg"></img>
              {/* <img src="/img/cart-check-fill.svg"></img> */}
          </div>
</div>
  );
}

export default Card;