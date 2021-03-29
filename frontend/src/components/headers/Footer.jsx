import React from "react";
import {
    FooterFlexWrapper,
    FooterLeftWrapper,
    HeaderSpan,
    FooterWrapper,
    SocialMediaWrapper, CopyRightSpan
} from "../../styledcomponents/headers/layout";
import {SocialMediaIcon} from "../../styledcomponents/forAll/buttons";

const Footer = () => {
  return (
      <FooterWrapper>
          <FooterFlexWrapper>
                <FooterLeftWrapper>
                    <HeaderSpan>About Us</HeaderSpan>
                    <HeaderSpan>Press</HeaderSpan>
                    <HeaderSpan>Blog</HeaderSpan>
                    <HeaderSpan>iOS</HeaderSpan>
                    <HeaderSpan>Android</HeaderSpan>
                </FooterLeftWrapper>
                <SocialMediaWrapper>
                    <SocialMediaIcon>
                        <i className="fab fa-facebook-f"></i>
                    </SocialMediaIcon>
                    <SocialMediaIcon>
                        <i className="fab fa-twitter"></i>
                    </SocialMediaIcon>
                    <SocialMediaIcon>
                        <i className="fab fa-google-plus-g"></i>
                    </SocialMediaIcon>
                    <SocialMediaIcon>
                        <i className="fab fa-instagram"></i>
                    </SocialMediaIcon>
                </SocialMediaWrapper>
          </FooterFlexWrapper>
          <FooterFlexWrapper>
              <CopyRightSpan>© Copyright Luna 2018</CopyRightSpan>
          </FooterFlexWrapper>
      </FooterWrapper>
  );
};

export default Footer;
