"use client";
import Image from "next/image";
import { Space_Grotesk, Work_Sans } from "next/font/google";
import { LuArrowRightCircle } from "react-icons/lu";
import Link from "next/link";
import InputField from "../input/InputField";
import { useState } from "react";

const space_grotesk = Space_Grotesk({ subsets: ["latin"] });
const work_sans = Work_Sans({ subsets: ["latin"] });

const footerLinks = [
  {
    header: "Support",
    first: "Contact us",
    fristLink: "javasctipt:void(0)",
    second: "Help",
    secondLink: "javasctipt:void(0)",
  },
  {
    header: "Legal",
    first: "Privacy policy",
    fristLink: "javasctipt:void(0)",
    second: "Terms of Use",
    secondLink: "javasctipt:void(0)",
  },
  {
    header: "Social",
    first: "X",
    fristLink: "javasctipt:void(0)",
    second: "Instagram",
    secondLink: "javasctipt:void(0)",
  },
];

const Footer = () => {
  const [subscribeEmail, setSubscribeEmail] = useState("");
  return (
    <main className="bg-ptDarkBg800 text-white">
      <div className="p-20">
        <div className="flex justify-between items-center">
          <Image src="/logo2.png" alt="logo" height={100} width={200} />
          <p className={`max-w-xl text-2xl`}>
            Let&apos;s explore available opportunities or create bespoke
            solutions to serve your business needs.
          </p>
          <button className="bg-white text-ptDarkBlue py-4 px-6 rounded-full flex items-center gap-3 text-sm font-semibold">
            Contact us <LuArrowRightCircle size={20} />
          </button>
        </div>
        <p className="mt-20 mb-10 font-semibold text-lg">
          Ready to connect with us?
        </p>

        <div className="flex items-center justify-between">
          <div className="flex gap-10">
            {footerLinks.map((item) => (
              <div className="flex flex-col gap-3 text-sm" key={item.header}>
                <p
                  className={`${work_sans.className} font-semibold ${
                    item.header === "Social" && "text-end"
                  }`}
                >
                  {item.header}
                </p>
                <Link
                  href={item.fristLink}
                  className={`font-light ${
                    item.header === "Social" && "text-end underline"
                  }`}
                >
                  {item.first}
                </Link>
                <Link
                  href={item.secondLink}
                  className={`font-light ${
                    item.header === "Social" && "text-end underline"
                  }`}
                >
                  {item.second}
                </Link>
              </div>
            ))}
          </div>
          <div>
            <p className="text-sm font-medium">Subscribe to our Newsletter</p>
            <div className="my-3 w-[20rem]">
              <InputField
                value={subscribeEmail}
                placeholder={"your@email.com"}
                bgColor={"bg-ptDarkBg700"}
                borderColor={"border-transparent"}
                onChange={(e) => setSubscribeEmail(e.target.value)}
              />
            </div>
            <button className="p-2 w-full text-sm font-medium text-ptDarkBlue rounded-md bg-white">Subscribe</button>
          </div>
        </div>
      </div>

      <div
        className={`p-5 border-t border-t-ptDarkBg700 text-ptGray text-lg text-center flex justify-center items-center gap-1`}
      >
        &copy;{" "}
        <span className={`${space_grotesk.className} text-xs`}>
          2024. Philip Technologies
        </span>
      </div>
    </main>
  );
};

export default Footer;