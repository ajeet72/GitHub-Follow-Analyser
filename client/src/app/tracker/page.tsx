import React from "react";
import Topbar from "./components/Topbar";
import Mainbody from "./components/body";
import Footer from "./components/footerbar";

export default function Tracker() {
  return (
    <div className="flex-col w-full">
      <div>
        <Topbar />
        <Mainbody/>
      </div>
      <Footer />
    </div>
  );
}
