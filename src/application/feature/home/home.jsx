import hero from "../../../assets/img/hero.png";
import {
  ButtonWrapper,
  FullButton,
  HeadingPrimary,
  Hero,
  HeroDescription,
  HeroImage,
  OutlineButton,
  SectionHero,
} from "./style.js";
const Home = () => {
  return (
    <>
      <SectionHero>
        <Hero>
          <div className="hero-text-box">
            <HeadingPrimary>
              A healthy meal delivered to your door, every single day
            </HeadingPrimary>
            <HeroDescription>
              The smart 365-days-per-year food subscription that will make you
              eat healthy again. Tailored to your personal tastes and
              nutritional needs. We have delivered 250,000+ meals last year!
            </HeroDescription>
            <FullButton href="#">Start eating well</FullButton>
            <OutlineButton href="#">Learn more &rarr;</OutlineButton>
          </div>
          <div className="hero-img-box">
            <HeroImage
              src={hero}
              alt="Woman enjoying food, meals in storage container, and food bowls and food bowls on a talble"
            ></HeroImage>
          </div>
        </Hero>
      </SectionHero>
    </>
  );
};

export default Home;
