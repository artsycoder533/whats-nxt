import Link from "next/link";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaEnvelope,
  FaHeart,
} from "react-icons/fa";
import Image from "next/image";
import logo from "../../public/images/logo-white.png";

type Props = {};

const Footer = (props: Props) => {
  const getDate = () => {
    const date = new Date();
    return date.getFullYear();
  };

  return (
    <footer className="flex flex-col sticky mt-auto pt-6 px-4 bg-zinc-800">
      <div className="max-w-[1400px] w-[90vw] mx-auto">
        <div className="flex flex-col lg:flex-row py-4 gap-8 lg:gap-0">
          <div className="w-full flex flex-col items-center lg:items-start">
            <div className="flex gap-2 items-center">
              <Image
                src={logo}
                alt="Omni Addiction & Mental Health Services"
                width={75}
                height={75}
                style={{
                  objectFit: "contain",
                  height: "auto"
                }}
              />
              <p className="text-3xl text-[#B76E79] font-extralight uppercase">
                Whats Nxt
              </p>
            </div>

            <address className="text-white text-light text-sm my-2">
              <p>15411 W. Waddell Rd. </p>
              <p>Suite 102-1073</p>
              <p>Suprize, AZ 85379</p>
            </address>
            <Link
              href="mailto:whattsnxt@gmail.com"
              className="text-white hover:text-[#B76E79] flex flex-row gap-3 items-center font-light text-sm mb-2"
            >
              <FaEnvelope />
              whatsnxtt@gmail.com
            </Link>
            <div className="flex space-x-4 mt-8  text-[#B76E79]">
              {/* <Link
                href="https://www.instagram.com/renewedpsychological/"
                rel="noopener noreferrer"
                aria-label="Instagram"
              >
                <FaInstagram
                  className="text-3xl hover:text-white"
                  alt="Instagram"
                />
              </Link> */}
              {/* <Link
                href="https://www.facebook.com/renewedpsychological"
                rel="noopener noreferrer"
                aria-label="Facebook"
              >
                <FaFacebookF
                  className="text-3xl hover:text-white"
                  alt="Facebook"
                />
              </Link> */}
              {/* <Link
                href="https://www.facebook.com/renewedpsychological"
                rel="noopener noreferrer"
                aria-label="Twitter"
              >
                <FaTwitter
                  className="text-3xl hover:text-white"
                  alt="Twitter"
                />
              </Link> */}
            </div>
          </div>
          <div className="grid grid-cols-1 gap-y-8 sm:grid-cols-2 w-full">
            <div className="w-full">
              <h3 className="text-lg mb-2 text-[#B76E79]">Links</h3>
              <ul className="flex flex-col justify-between text-white font-light">
                <li className="py-2">
                  <Link href="/" className="hover:text-[#B76E79]">
                    Home
                  </Link>
                </li>
                <li className="py-2">
                  <Link href="/#mission" className="hover:text-[#B76E79]">
                    Mission
                  </Link>
                </li>
                <li className="py-2">
                  <Link href="/#contact" className="hover:text-[#B76E79]">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
            <div className="w-full">
              <h3 className="text-lg mb-2 text-[#B76E79]">Shop</h3>
              <ul className="text-white font-light">
                <li className="py-2">
                  <Link href="/products" className="hover:text-[#B76E79]">
                    Products
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="flex flex-col py-4 border-t border-[#B76E79] w-full">
          <p className=" items-center justify-center text-center text-xs text-[#B76E79]">
            Copyright &copy; {getDate()} WHATS NXT. All Rights Reserved.
          </p>
          <p className=" flex flex-row  items-center justify-center gap-1 text-center text-xs text-white">
            Made with <FaHeart className="text-red-500" /> by:{" "}
            <Link
              href="https://www.natashajohnson.dev"
              target="_blank"
              rel="noopener noreferrer"
              className="underline py-2 hover:text-[#B76E79]"
            >
              Natasha Johnson
            </Link>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
