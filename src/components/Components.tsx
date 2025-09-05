import { AboutUs } from "./AboutUs";
import { Benefit } from "./Benefit";
import { Footer } from "./Footer";
import { Header } from "./Header";
import { OurProduct } from "./OurProduct";
import { Subscribe } from "./Subscribe";
import { Testimonials } from "./Testimonials";
import { TrustedBy } from "./TrustedBy";

export const Components = () => {
  return (
    <>
      <Header />
      <TrustedBy />
      <Benefit />
      <OurProduct />
      <AboutUs />
      <Testimonials />
      <Subscribe />
      <Footer />
    </>
  );
};
