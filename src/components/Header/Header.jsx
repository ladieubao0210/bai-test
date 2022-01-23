import "./Header.scss";

const Header = () => {
  return (
    <div className="header">
      <div className="header__container">
        <div className="header__logo">
          <img src="./Img/Logo.png" />
        </div>
        <div className="header__menu">
          <ul className="header__menu-list">
            <li className="header__menu-list-item">
              <a href="">Introduction</a>
            </li>
            <li className="header__menu-list-item">
              <a href="">solution</a>
            </li>
            <li className="header__menu-list-item">
              <a href="">Rate plan</a>
            </li>
            <li className="header__menu-list-item">
              <div className="line"></div>
            </li>
            <li className="header__menu-list-item">
              <a href="">login</a>
            </li>
            <li className="header__menu-list-item">
              <a href="">Apply for free use</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
