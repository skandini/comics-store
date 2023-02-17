function Corzina (){
    return (
<div style={{display: 'none'}} className="overlay">
          <div className="card-total">
                <h3>Корзина</h3>
              <div className="items">
                <div className="elementInCard">
                    <img className="img-card" src="/img/covers/1.jpg"></img>
                    <div>
                    <h4>Tokidoki Bosotto Roshiago de Dereru Tonari no Alya-san</h4>
                  </div>
                  <div>
                        <p>Цена:</p>
                        <span className="price">1589 rub.</span>
                  </div>
                  <img height={20} width={20} src="/img/cartdel.svg" alt="delete element"/>

                </div>

                </div> 
          <div className="totalInCard">
                <div className="itogo">
                <span>ИТОГО</span>
                <span>.........................................................................</span>
                <span>12000 rub.</span>
                </div>
                <div className="itogo">
                  <span>НАЛОГ 5%</span>
                  <span>...................................................................</span>
                <span>120 rub.</span>
                </div>

          </div>
<button className="oplata">ОПЛАТИТЬ -></button>
          </div>
      </div>

    )
}

export default Corzina;