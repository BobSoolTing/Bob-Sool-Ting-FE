import { ReactNode } from "react";
import React from "react";
import BottomBar from "@/components/shared/BottomBar";

export default function MyPage() {
  return <div>마이페이지입니당
  </div>;
}

MyPage.getLayout = (page: ReactNode) => {
  return <BottomBar>{page}</BottomBar>;
};