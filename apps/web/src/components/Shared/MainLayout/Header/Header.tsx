import React, { useEffect, useState } from "react";
import { useTranslation } from "next-i18next";
import Link from "next/link";
import { Dialog, DialogBackdrop, DialogPanel } from "@headlessui/react";
import { headerMenuList } from "@/constants/Resource";
import {
  IconPlacementType,
  VariantType,
} from "@/type/FormInputs/CommonFormInputs";
import { classNames } from "@/utils/CssHandler";
import { HeaderProps } from "@/type/MainLayout/MainLayout";
import { ThemeType } from "@/type/Common";
import LanguageButton from "./LanguageButton";
import SocialMediaSection from "../../SocialMediaSection/SocialMediaSection";
import CustomButton from "../../FormInput/CustomButton/CustonButton";

const Header: React.FC<HeaderProps> = (props) => {
  const { type = ThemeType.LIGHT } = props;
  const { t } = useTranslation();
  const [menuOpened, setMenuOpened] = useState(false);
  const [navbar, setNavbar] = useState(false);
  const handleMenu = () => {
    setMenuOpened((prev) => !prev);
  };

  const changeHeader = () => {
    const moving = window.scrollY;
    if (moving >= 100) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", changeHeader);
    }
    return () => {
      window.removeEventListener("scroll", changeHeader);
    };
  });

  return (
    <div
      className={classNames(
        "flex items-center px-4 lg:px-16 py-[24px] bg-white"
      )}
    >
      {/*Desktop Mode*/}
      <div className="hidden w-full lg:flex items-center gap-8 justify-between">
        <div>
          <Link href="/">
            <img
              src="/logo/logo.png"
              alt="app-logo"
              className="w-[8rem] xl:w-[8.313rem] h-auto"
            />
          </Link>
        </div>
        <div className="flex items-center lg:gap-8 xl:gap-12">
          {headerMenuList.map((menu) => (
            <Link
              href={menu.url}
              key={menu.id}
              className={"font-semibold text-[#0b1215] text-[0.875rem]"}
            >
              {menu.name}
            </Link>
          ))}
        </div>
        <div>
          <CustomButton
            label={t("headerContactUsButton")}
            variant={VariantType.CONTAINED}
            iconPlacement={IconPlacementType.LEFT}
            icon="/common/headset-icon.svg"
          />
        </div>
      </div>
      <div className="block lg:hidden w-full">
        <div className="flex justify-between">
          <div>
            <Link href="/">
              <img src="/logo/logs.png" alt="app-logo" />
            </Link>
          </div>
          <button onClick={handleMenu}>
            <img src="/common/black-accordion.svg" alt="accordion-icon" />
          </button>
        </div>
        <Dialog
          open={menuOpened}
          as="div"
          className="relative z-[100] focus:outline-none h-screen"
          onClose={handleMenu}
        >
          {() => (
            <>
              <DialogBackdrop
                transition
                className="fixed overlay w-screen h-screen"
              />
              <div className="fixed inset-0 z-10 w-screen overflow-y-auto menu-background">
                <button className="absolute right-[0.969rem] top-[1.813rem]">
                  <img src="/common/x-mark-icon.svg" alt="close-button" />
                </button>
                <div className="flex min-h-full items-center justify-center p-4">
                  <DialogPanel
                    transition
                    className="w-full h-full flex flex-col items-center justify-center gap-[3rem]"
                  >
                    <SocialMediaSection type={type} navbar={navbar} />
                    <LanguageButton type={type} navbar={navbar} />
                    <div>
                      <CustomButton
                        label={t("headerContactUsButton")}
                        variant={VariantType.OUTLINED}
                      />
                    </div>
                  </DialogPanel>
                </div>
              </div>
            </>
          )}
        </Dialog>
      </div>
    </div>
  );
};

export default Header;
