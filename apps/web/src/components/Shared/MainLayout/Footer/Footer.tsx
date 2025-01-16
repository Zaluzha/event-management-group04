import React from "react";
import Link from "next/link";
import { useTranslation } from "next-i18next";
import {
  IconPlacementType,
  VariantType,
} from "@/type/FormInputs/CommonFormInputs";
import SocialMediaSection from "../../SocialMediaSection/SocialMediaSection";
import CustomButton from "../../FormInput/CustomButton/CustonButton";

const footerContentList = {
  reachus: [
    {
      icon: "/common/phone.svg",
      text: "1500060",
    },
    {
      icon: "/common/mail.svg",
      text: "care@transvision.co.id",
    },
    {
      icon: "/common/maps.svg",
      text: "Menara Mega Syariah Jalan HR Rasuna Said Kav 19A. Jakarta Selatan 12940",
    },
  ],
  sitemap: ["Klien", "Produk Kami", "Mengapa Kami", "Kontak Kami"],
  products: [
    "Accomodations",
    "Internet Service Provider",
    "Hospital",
    "Office Building",
  ],
};

const Footer = () => {
  const { t } = useTranslation();
  return (
    <div className="w-full mt-[5rem] bg-[#1d1b20]">
      <div className="lg:px-[110px] px-6 py-[75px] ">
        <div className="flex lg:flex-row flex-col justify-between items-center gap-y-[32px] ">
          <Link href="/">
            <img
              src="/logo/logs.png"
              alt="app-logs.png"
              className="w-[15rem] h-[8rem] "
            />
          </Link>
          <div>
            <CustomButton
              label={t("headerContactUsButton")}
              variant={VariantType.CONTAINED}
              iconPlacement={IconPlacementType.RIGHT}
              icon="/common/arrow-right-icon.svg"
            />
          </div>
        </div>
        <hr className="border-t my-[51px] opacity-20 bg-[rgba(255,255,255,0.05)]" />
        <div className="w-full flex lg:flex-row flex-col gap-x-[96px] text-white font-hanken">
          <div className="flex flex-col lg:w-[331px]">
            <span className="text-[22px] ">Reach us</span>
            {footerContentList.reachus.map((each) => (
              <div className="flex pt-[24px] gap-x-[24px]">
                <img src={each.icon} className="h-[28px] w-[28px]" />
                <span className="text-[16px] ">{each.text}</span>
              </div>
            ))}
          </div>
          <div className="flex lg:flex-row lg:mt-0 mt-8 lg:gap-x-[96px] gap-x-[32px] ">
            <div className="flex flex-col justify-center">
              <span className="text-[22px] ">Sitemap</span>
              {footerContentList.sitemap.map((each) => (
                <div className="flex flex-row pt-[24px]">
                  <span className="text-[16px] ">{each}</span>
                </div>
              ))}
            </div>
            <div className="flex flex-col">
              <span className="text-[22px] ">Products</span>
              {footerContentList.products.map((each) => (
                <div className="flex flex-row pt-[24px]">
                  <span className="text-[16px] ">{each}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
        <hr className="border-t my-[51px] opacity-20 bg-[rgba(255,255,255,0.05)]" />
        <div className="flex lg:flex-row flex-col lg:justify-between justify-center items-center gap-y-[24px] p-4">
          <span className="text-[12px] text-[#9097ab] font-hanken">
            © 2025 EventNih All Rights Reserved
          </span>
          <SocialMediaSection />
        </div>
      </div>
    </div>
  );
};

export default Footer;
