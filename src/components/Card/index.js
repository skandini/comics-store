// import styles from './card.module.scss';
import sss from '../Card/card.module.scss'
function Card(props) {
    const clickPlus = function (){
      alert(props.price)
    };

    return (
<div className={sss.card}>
          <img src="/img/liked.svg" alt="liked"></img>
          {/* <img src="/img/unlike.svg" alt="unliked"></img> */}
          <img className="img-cover" src={props.image}></img>
          <h4>{props.title}</h4>
          <p>{props.descr}</p>
          <div className="card-describe">
              <div>
                <p>Цена:</p>
                <span className="price">{props.price} руб.</span>
              </div>
              <button onClick={clickPlus}>
              <img height={20} width={20} src="/img/cart.svg"></img>
              {/* <img src="/img/cart-check-fill.svg"></img> */}

              </button>
          </div>
</div>
  );
}

export default Card;