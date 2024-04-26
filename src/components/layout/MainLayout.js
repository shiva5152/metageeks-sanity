"use client";
import { usePathname } from "next/navigation"; // Import usePathname from next/navigation
import Home1Contact from "../contact/Home1Contact";
import Footer from "../footer/Footer";
import Breadcrumb from "./Breadcrumb";

const MainLayout = ({ children }) => {
  const pathname = usePathname(); // Get the current pathname

  const hideBreadcrumbRoutes = [
    "/shop",
    "/cechkout",
    "/cart",
    "/product-details",
  ]; // Add the routes where you want to hide the breadcrumb

  const shouldRenderBreadcrumb = !hideBreadcrumbRoutes.some(
    (route) => route === pathname
  );
  const words = ["service", "blog", "case-study"];
  const regex = new RegExp(`^/(${words.join("|")})/.*$`);

  return (
    <>
      <Header2 />
      {/* {!words.some((word) => pathname.startsWith(`/${word}`)) && <Breadcrumb />} */}
      {!regex.test(pathname) && <Breadcrumb />}
      {children}
      {shouldRenderBreadcrumb && <Home1Contact />}
      <Footer />
    </>
  );
};

export default MainLayout;
