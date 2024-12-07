import React, { JSX } from "react";

import Footer from "@/appComponents/Footer";
import MainNavigation from "@/appComponents/MainNavigation";

interface IBasicLayout {
  children: JSX.Element | JSX.Element[];
  className?: object;
}

export const siteTitle = "Ardi Next";

const BasicLayout = ({ children }: IBasicLayout): JSX.Element => (
  <>
    <MainNavigation />
    <main>{children}</main>
    <Footer />
  </>
);

export default BasicLayout;
