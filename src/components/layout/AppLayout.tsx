import React from "react";
import Sidebar from "./Sidebar/Sidebar";

const Layout = React.memo(() => {
  // const pathname = usePageName()

  return (
    <div>
      <Sidebar />
    </div>
  );
});

export default Layout;
