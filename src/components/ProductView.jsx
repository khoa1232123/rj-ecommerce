import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { numberWithCommas } from "../utils";
import { Button } from ".";
import { withRouter } from "react-router-dom";

const ProductView = ({ product, ...props }) => {
  const { title, img, price, description } = product;

  const [color, setColor] = useState(undefined);
  const [size, setSize] = useState(undefined);

  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    setSize(undefined);
    setColor(undefined);
    setQuantity(1);
  }, [product]);

  const check = () => {
    if (product.color && color === undefined) {
      alert("Vui lòng chọn màu sắc");
      return false;
    }
    if (size === undefined) {
      alert("Vui lòng chọn kích thước");
      return false;
    }

    return true;
  };

  const addToCart = () => {
    if (check()) {
      console.log("abc");
    }
  };

  const goToCart = () => {
    if (check()) {
      props.history.push("/cart");
    }
  };

  return (
    <div className="product">
      <div className="product__top">
        <div className="product__image">
          <img src={img} alt="" />
        </div>
        <div className="product__content">
          <h1 className="product__content__title">{title}</h1>
          <span className="product__content__price">
            {numberWithCommas(price)}k
          </span>
          <div className="product__content__attribute">
            {product.color && (
              <>
                <h2 className="product__content__attribute__title">Màu sắc</h2>
                <div className="product__content__attribute__color">
                  {product.color.map((item, index) => (
                    <div
                      key={index}
                      className={`product__content__attribute__color__item ${
                        color === item ? "active" : ""
                      }`}
                      onClick={() => setColor(item)}
                    >
                      <div className={`circle bg-${item}`}>{item}</div>
                    </div>
                  ))}
                </div>
              </>
            )}
            <h2 className="product__content__attribute__title">Kích thước</h2>
            <div className="product__content__attribute__size">
              {product.size.map((item, index) => (
                <div
                  key={index}
                  className={`product__content__attribute__size__item ${
                    size === item ? "active" : ""
                  }`}
                  onClick={() => setSize(item)}
                >
                  {item}
                </div>
              ))}
            </div>
          </div>
          <div className="product__content__quantity">
            <div className="product__content__quantity__btn">
              <Button
                onClick={() => setQuantity(quantity - 1 ? quantity - 1 : 1)}
              >
                <i className="bx bx-minus"></i>
              </Button>
            </div>
            <div className="product__content__quantity__input">
              <input type="number" defaultValue={quantity} />
            </div>
            <div className="product__content__quantity__btn">
              <Button onClick={() => setQuantity(quantity + 1)}>
                <i className="bx bx-plus"></i>
              </Button>
            </div>
          </div>
          <div className="product__content__submit">
            <Button onClick={() => addToCart()}>Thêm vào giỏ hàng</Button>
            <Button onClick={() => goToCart()}>Mua ngay</Button>
          </div>
        </div>
      </div>
      <div className="product__bottom">
        <div className="product__description__title">Chi tiết sản phẩm</div>
        <div
          className="product__description"
          dangerouslySetInnerHTML={{ __html: description }}
        ></div>
      </div>
    </div>
  );
};

ProductView.propTypes = {
  product: PropTypes.object.isRequired,
};

export default withRouter(ProductView);
