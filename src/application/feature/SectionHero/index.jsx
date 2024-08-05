import {
  DeliveredImages,
  DeliveredMeals,
  DeliveredText,
  FullButton,
  HeadingPrimary,
  Hero,
  HeroDescription,
  HeroImage,
  OutlineButton,
  SectionHeroWrapper,
} from "./styled.js";

import customer1 from "../../../assets/img/customers/customer-1.jpg";
import customer2 from "../../../assets/img/customers/customer-2.jpg";
import customer3 from "../../../assets/img/customers/customer-3.jpg";
import customer4 from "../../../assets/img/customers/customer-4.jpg";
import customer5 from "../../../assets/img/customers/customer-5.jpg";
import customer6 from "../../../assets/img/customers/customer-6.jpg";
import hero from "../../../assets/img/hero.png";

const SectionHero = () => {
  return (
    <SectionHeroWrapper>
      <Hero>
        <div className="hero-text-box">
          <HeadingPrimary>
            A healthy meal delivered to your door, every single day
          </HeadingPrimary>
          <HeroDescription>
            The smart 365-days-per-year food subscription that will make you eat
            healthy again. Tailored to your personal tastes and nutritional
            needs.
          </HeroDescription>
          <FullButton marginRightSm href="#">
            Start eating well
          </FullButton>
          <OutlineButton href="#">Learn more &darr;</OutlineButton>
          <DeliveredMeals>
            <DeliveredImages>
              <img src={customer1} alt="customer" />
              <img src={customer2} alt="customer" />
              <img src={customer3} alt="customer" />
              <img src={customer4} alt="customer" />
              <img src={customer5} alt="customer" />
              <img src={customer6} alt="customer" />
            </DeliveredImages>
            <DeliveredText>
              <span>250,000+ </span> delivered meals last year!
            </DeliveredText>
          </DeliveredMeals>
        </div>
        <div className="hero-img-box">
          <HeroImage
            src={hero}
            alt="Woman enjoying food, meals in storage container, and food bowls and food bowls on a talble"
          ></HeroImage>
        </div>
      </Hero>
    </SectionHeroWrapper>
  );
};

export default SectionHero;
