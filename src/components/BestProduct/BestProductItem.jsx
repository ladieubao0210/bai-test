import './BestProductItem.scss'

const BestProductItem = ({product}) => {
  return (
      <div className="product__item-card">
        <img src={product.img} className="product__item-img" />
        <div className="product__item-icon">
          <img src="./Img/ProductIcon.png" className="product__icon" />
          <span className="product__text">{product.id}</span>
        </div>
        <div className="product__bottom">
          <p>How to create mobile-optimized</p>
          <img src="./Img/GoIcon.png" />
        </div>
      </div>
  );
};

export default BestProductItem;
