export interface Botswana {
  id: number;
  name: string;
  destinations: {
    featuredMultiMarket: FeaturedMarket[];
    multiMarket: MultiMarket[];
  };
}

export interface FeaturedMarket {
  id: number;
  days: number;
  destination: string;
  extraNights: number;
  hasPrivateTour: boolean;
  hasSoloTraveller: boolean;
  priceDetail: {
    fromPriceBeautify: string;
    oldPriceBeautify: string;
    pricePerNight: string;
    pricingPercentage: number;
  };
  tags: Tag[];
  title: string;
  images: Image[];
}

export interface MultiMarket extends FeaturedMarket {}

export interface Tag {
  alias: string;
  id: number;
}

export interface Image {
  desktop: string;
  mobile: string;
}
