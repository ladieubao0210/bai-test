import "./ProductListItem.scss";
import Favorite from "@material-ui/icons/Favorite";

const ProductListItem = ({ product }) => {
  return (
    <div className="product__list-item-card">
      <div className="product__list-item-header">
        <img src={product.img} alt="" />
      </div>
      <div className="product__list-item-body">
        <h4>{product.title}</h4>
        <div className="product__list-item-content">
          <span className="product__price">{product.price} won</span>
          <span className="product__favorite">
            <Favorite className="product__icon"/> {product.like}
          </span>
        </div>
      </div>
    </div>
  );
};

export default ProductListItem;
