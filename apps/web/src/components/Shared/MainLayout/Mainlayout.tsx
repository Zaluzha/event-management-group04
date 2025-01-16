import React, { FC } from "react";
import Header from "./Header/Header";
import { MainLayoutProps } from "@/type/MainLayout/MainLayout";
import Footer from "./Footer/Footer";
import EventCategories from "./Content/Content";

const MainLayout: FC<MainLayoutProps> = (props) => {
  const { children, type } = props;
  return (
    <>
      <div className="fixed top-0 w-full z-[10]">
        <Header type={type} />
      </div>
      {children}
      <EventCategories />
      <Footer />
    </>
  );
};

export default MainLayout;
