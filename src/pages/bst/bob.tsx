import React from "react";
import { ReactNode } from "react";
import BottomBar from "@/components/shared/BottomBar";
import CategoryBar from "@/components/shared/CategoryBar";

export default function BstPage() {
  return (
    <div>밥술팅 메인 페이지입니당</div>
  )
}


BstPage.getLayout = (page: ReactNode) => {
  return (
      <>
        <CategoryBar />
        {page}
        <BottomBar />
      </>
    );
};