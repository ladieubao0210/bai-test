import "./BestProduct.scss";
import BestProductItem from "./BestProductItem";
import { best_product } from "../../data";

const BestProduct = () => {
  return (
    <div className="best__product">
      <div className="best__product-container">
        <div className="best__product-header">
          <h3>BEST PRODUCT</h3>
          <p>
            How to create mobile-optimized videos in minutes. Not a designer,
            every team makes a lot of videos Can be trimmed. Take the first{" "}
          </p>
        </div>
        <div className="best__product-item">
          {best_product.map((item, index) => (
            <BestProductItem product={item} key={index}/>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BestProduct;
