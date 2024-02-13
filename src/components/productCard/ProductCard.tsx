import React from "react";
import { FeaturedMarket } from "../../types/types";
import { useMediaQuery } from "@mui/material";
import "./ProductCard.css";

interface ProductCardProps {
  product: FeaturedMarket;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const isMobile = useMediaQuery("(max-width:767px)");

  return (
    <div className="product-card">
      <div className="product-image">
        <img
          src={isMobile ? product.images[0].mobile : product.images[0].desktop}
          alt={product.title}
        />
      </div>
      <div className="product-details">
        <div className="product-details-price">
          <p className="product-details-price__discount">
            - {product.priceDetail.pricingPercentage}%
          </p>
          <p className="product-details-price__old-price">
            From {product.priceDetail.oldPriceBeautify}
          </p>
          <p className="product-details-price__current-price">
            {product.priceDetail.fromPriceBeautify}
          </p>
          <p className="product-details-price__price-per-night">
            Per night: {product.priceDetail.pricePerNight}
          </p>
        </div>
        <div className="product-details-information">
          <h3 className="product-details-information__title">
            {product.title}
          </h3>
          <p className="product-details-information__destination">
            {product.destination}
          </p>
          <div className="product-details-information__info">
            <p className="product-details-information__info__days">
              {product.days} days
            </p>
            <p className="product-details-information__info__extra-nights">
              Extra nights: {product.extraNights}
            </p>
          </div>
          <div className="product-details-information__tags">
            {product.tags.map((tag) => (
              <span key={tag.id} className="tag">
                {tag.alias}
              </span>
            ))}
          </div>
        </div>
        <div className="product-details-price__button-container">
          <button className="product-details-price__button">See Trip</button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
