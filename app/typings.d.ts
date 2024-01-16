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
  category: string;
  slug: string;
  quantity: number;
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
  category: string;
  slug: string;
  quantity: number;
};

type StripeProduct = {
    id: string;
    name: string;
    price: number;
    quantity: number;
}

type FormattedLineItem = {
  id: string;
  quantity: number;
}
