import React, { JSX } from "react";

import { mainContainer } from "@/styles/common/grid.css";

interface IBasicLayout {
  children: JSX.Element | JSX.Element[];
  className?: object;
}

export const siteTitle = "Ardi Next";

const BasicLayout = ({ children }: IBasicLayout): JSX.Element => (
  <main className={mainContainer}>{children}</main>
);

export default BasicLayout;
