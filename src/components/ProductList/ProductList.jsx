import "./ProductList.scss";
import ProductListItem from "./ProductListItem";
import { products } from "../../data";

const ProductList = () => {
  return (
    <div className="product__list">
      <div className="product__list-container">
        {products.map((item, index) => (
          <ProductListItem product={item} key={index} />
        ))}
      </div>
      <div className="product__list-more">See More</div>
    </div>
  );
};

export default ProductList;
