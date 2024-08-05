import styled from "styled-components";
import { marginRightSm } from "../../../style/general.js";

export const SectionHeroWrapper = styled.div`
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
  font-size: 4.4rem;
  font-weight: 700;
  line-height: 1.05;
  color: #333;
  letter-spacing: -0.5px;
  margin-bottom: 3.2rem;
`;

export const HeroDescription = styled.p`
  font-size: 1.8rem;
  line-height: 1.6;
  margin-bottom: 4.8rem;
`;

export const ButtonWrapper = styled.a`
  cursor: pointer;
  font-size: 1.6rem;
  padding: 1.6rem 3.2rem;
  display: inline-block;
  border-radius: 1.5rem;
  text-decoration: none;
  transition: background-color 0.3s;
  &:hover,
  &:active {
    text-decoration: none;
    background-color: #cf711f;
    color: #fff;
  }
  ${({ marginRightSm }) => marginRightSm && marginRightSm}
`;

export const FullButton = styled(ButtonWrapper)`
  background-color: #e67e22;
  color: #fff;
  font-weight: 600;
`;

export const OutlineButton = styled(ButtonWrapper)`
  background-color: #fff;
  color: #555;
  font-weight: 600;
  &:hover,
  &:active {
    text-decoration: none;
    background-color: #fdf2e9;
    color: #3b3b3b;
    box-shadow: inset 0 0 0 3px #fff;
  }
`;

export const MarginRightSm = styled.div.attrs`
margin-right: 1.6rem;
`;

export const DeliveredImages = styled.div`
  display: flex;
  && img {
    height: 4.8rem;
    width: 4.8rem;
    border-radius: 50%;
    margin-right: -1.2rem;
    border: 3px solid #fdf2e9;
  }
  && img:last-child {
    margin: 0;
  }
`;

export const DeliveredText = styled.p`
  font-size: 1.2rem;
  font-weight: 600;
  && span {
    color: #cf711f;
  }
`;

export const DeliveredMeals = styled.div`
  margin-top: 4.8rem;
  display: flex;
  gap: 1.2rem;
  align-items: center;
`;
