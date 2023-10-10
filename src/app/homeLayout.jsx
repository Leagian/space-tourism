import React from "react";
import NavBar from "@/components/NavBar";

function HomeLayout({ children }) {
  return (
    <div>
      <div className="bg-home-image">
        <NavBar />
        {children}
      </div>
    </div>
  );
}

export default HomeLayout;
