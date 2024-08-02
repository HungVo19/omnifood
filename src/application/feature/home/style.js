import styled from "styled-components";

export const SectionHero = styled.div`
  background-color: #fdf2e9;
  padding: 9.6rem;
`;

export const Hero = styled.div`
  max-width: 130rem;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  gap: 9.6rem;
`;

export const HeroImage = styled.img`
  width: 100%;
`;

export const HeadingPrimary = styled.h1`
  font-size: 5.2rem;
  font-weight: 700;
  line-height: 1.05;
  color: #333;
  letter-spacing: -0.5px;
  margin-bottom: 3.2rem;
`;

export const HeroDescription = styled.p`
  font-size: 2rem;
  line-height: 1.6;
  margin-bottom: 4.8rem;
`;

export const ButtonWrapper = styled.a`
  cursor: pointer;
  font-size: 2rem;
  padding: 1.6rem 3.2rem;
  display: inline-block;
  margin-right: 1rem;
  border-radius: 1.5rem;
  text-decoration: none;
`;

export const FullButton = styled(ButtonWrapper)`
  background-color: #e67e22;
  color: #fff;
  &:hover,
  &:active {
    text-decoration: none;
    background-color: #cf711f;
    color: #fff;
  }
`;

export const OutlineButton = styled(ButtonWrapper)`
  background-color: #fff;
  color: #555;
`;
