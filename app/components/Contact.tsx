import Title from "./Title";

const Contact = () => {
  return (
    <section className="bg-[#B76E79] py-20" id="contact">
      <div className="max-w-[1400] w-[90vw] mx-auto">
        <Title text="Contact Us" alt />
        <form
          action=""
          className="flex flex-col gap-y-4 max-w-[600px] w-[90vw] mx-auto"
        >
          <div className="flex flex-col">
            <label htmlFor="name" className="text-white">
              Name
            </label>
            <input
              type="text"
              name="name"
              id="name"
              className="p-2 rounded bg-white"
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="email" className="text-white">
              Email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              className="p-2 rounded bg-white"
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="email" className="text-white">
              Message
            </label>
            <textarea
              name="message"
              id="message"
              rows={8}
              className="p-2 rounded bg-white"
            />
          </div>
          <button
            type="submit"
            className="py-3 px-4 bg-black text-white text-center self-end rounded-md hover:bg-gray-700"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
