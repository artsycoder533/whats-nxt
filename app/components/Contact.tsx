import Form from "./Form";
import Title from "./Title";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact",
};

const Contact = () => {
  return (
    <section className="bg-[#B76E79] py-20" id="contact">
      <div className="max-w-[1400] w-[90vw] mx-auto">
        <Title text="Contact Us" alt />
        <Form />
      </div>
    </section>
  );
};

export default Contact;
