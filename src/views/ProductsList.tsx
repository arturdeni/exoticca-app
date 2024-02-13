import React, { useState, useEffect } from "react";
import axios from "axios";

import { Botswana, FeaturedMarket } from "../types/types";
import ProductCard from "../components/productCard/ProductCard";
import Search from "../components/search/Search";
import "./ProductsList.css";

const logo = require("../assets/exoticca-logo.png");

const ProductsList: React.FC = () => {
  const [botswanaData, setBotswanaData] = useState<Botswana | null>(null);
  const [filteredFeaturedMultiMarket, setFilteredFeaturedMultiMarket] =
    useState<FeaturedMarket[]>([]);
  const [filteredMultiMarket, setFilteredMultiMarket] = useState<
    FeaturedMarket[]
  >([]);

  useEffect(() => {
    const fetchBotswanaData = async () => {
      try {
        const { data } = await axios.get<Botswana>(
          "https://api-us.exoticca.com/api/landing/v2/country/botswana"
        );
        setBotswanaData(data);
        setFilteredFeaturedMultiMarket(
          data.destinations.featuredMultiMarket ?? []
        );
        setFilteredMultiMarket(data.destinations.multiMarket ?? []);
      } catch (error) {
        console.error("Error fetching Botswana data:", error);
      }
    };

    fetchBotswanaData();
  }, []);

  const handleSearch = (query: string) => {
    if (!query.trim()) {
      setFilteredFeaturedMultiMarket(
        botswanaData?.destinations.featuredMultiMarket ?? []
      );
      setFilteredMultiMarket(botswanaData?.destinations.multiMarket ?? []);
    } else {
      const filteredFeatured =
        botswanaData?.destinations.featuredMultiMarket?.filter((product) =>
          product.title.toLowerCase().includes(query.toLowerCase())
        ) ?? [];
      setFilteredFeaturedMultiMarket(filteredFeatured);

      const filteredMulti =
        botswanaData?.destinations.multiMarket?.filter((product) =>
          product.title.toLowerCase().includes(query.toLowerCase())
        ) ?? [];
      setFilteredMultiMarket(filteredMulti);
    }
  };

  if (!botswanaData) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <div className="header">
        <img src={logo} alt="Logo" className="logo" />
      </div>
      <div className="content">
        <Search onSearch={handleSearch} />
        {filteredFeaturedMultiMarket.length > 0 && (
          <>
            <div className="content__title">
              Our recommendations to visit {botswanaData?.name} and neighbouring
              countries
            </div>
            <div className="content__products">
              {filteredFeaturedMultiMarket.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </>
        )}
        {filteredMultiMarket.length > 0 && (
          <>
            <div className="content__title">
              Multi country vacation packages including {botswanaData?.name}
            </div>
            <div className="content__products">
              {filteredMultiMarket.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default ProductsList;
