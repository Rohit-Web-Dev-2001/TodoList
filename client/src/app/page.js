"use client";
import dynamic from "next/dynamic";
import "bootstrap/dist/css/bootstrap.min.css";
const NoSSR = dynamic(() => import("./Components/Main"), { ssr: false });
const Page = () => {
  
  return (
    <>
      <NoSSR />
    </>
  );
};

export default Page;
