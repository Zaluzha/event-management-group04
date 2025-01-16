"use client"
import Banner from "@/components/Banner/Banner";
import MainLayout from "@/components/Shared/MainLayout/Mainlayout";
import TopEvent from "@/components/TopEvent/TopEvent";
import { ThemeType } from "./../type/Common";
import Head from "next/head";

const Home = () => {
  return (
    <>
      <Head>
        <title>Event Indonesia</title>
      </Head>
      <MainLayout type={ThemeType.LIGHT}>
        <Banner />
        <TopEvent />
      </MainLayout>
    </>
  );
};

export default Home;
