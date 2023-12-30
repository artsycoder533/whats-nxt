type Products = {
  _id: string;
  images: {
    altText: string;
    url: string;
  };
  name: string;
  price: number;
  color: string;
  description: string;
  stockQuantity: number;
  category: string;
  slug: string;
  quantity: number;
  videos: {
    url: string;
    altText: string;
  };
};

type Product = {
  _id: string;
  images: {
    altText: string;
    url: string;
  }[];
  name: string;
  price: number;
  color: string;
  description: string;
  stockQuantity: number;
  category: string;
  slug: string;
  quantity: number;
  videos: {
    url: string;
    altText: string;
  }[];
};

type StripeProduct = {
    id: string;
    name: string;
    price: number;
    quantity: number;
}

type FormattedLineItem = {
  id: string;
  quantity: string;
}
