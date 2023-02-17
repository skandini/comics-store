function Header () {
    return (
<header>
<div className="headerLeft">
    <img width ={80} height={80} src="/img/logo.svg" />
    <div className="headerTitle ">
      <h3>Cosmic comisc</h3>
      <p>Магазин избранных комиксов!</p>
    </div>
</div>
<ul className="headerRight">
  <li>
    <img height={20} width={20} src="/img/credit-card.svg"/>
    <span className="price">1600 руб.</span>
  </li>
  <li>
  <img height={20} width={20} src="/img/person.svg"/>
  </li>
</ul>
</header>
    )
}

export default Header;