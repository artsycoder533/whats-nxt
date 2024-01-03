import { Metadata } from "next";
import SuccessBlock from "../components/SuccessBlock";

export const metadata: Metadata = {
  title: "Order Confirmation",
};

const Success = () => {
  return <SuccessBlock />;
};

export default Success;
