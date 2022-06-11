import React from "react";
import {
  Facebook,
  Instagram,
  Twitter,
  Pinterest,
  Room,
  Phone,
  MailOutline,
  Contactless,
  Payment,
  Atm,
} from "@material-ui/icons";

import styled from "styled-components";

const Container = styled.div`
  display: flex;
`;
const Left = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 20px;
`;

const Logo = styled.h1``;
const Desc = styled.p`
  margin: 20px 0px;
`;
const SocialContainer = styled.div`
  display: flex;
`;
const SocialIcon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  color: white;
  background-color: #${(props) => props.color};
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 20px;
`;

const Center = styled.div`
  flex: 1;
  padding: 20px;
`;

const Title = styled.h3`
  margin-bottom: 30px;
`;
const List = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-wrap: wrap;
`;
const ListItem = styled.li`
  width: 50%;
  margin-bottom: 10px;
`;
const Right = styled.div`
  flex: 1;
  padding: 20px;
`;
const ContactItem = styled.div`
  margin-bottom: 20px;
  display: flex;
  align-items: center;
  column-gap: 10px;
`;
// const Payment = styled.img``;

const Footer = () => {
  return (
    <Container>
      <Left>
        <Logo>ShopUs</Logo>
        <Desc>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Enim quia
          porro possimus, obcaecati repudiandae aut voluptatum a officiis
          voluptatem vero adipisci quo iste accusamus quae voluptate doloremque
          iure eum veritatis.
        </Desc>
        <SocialContainer>
          <SocialIcon color="3B5999">
            <Facebook />
          </SocialIcon>
          <SocialIcon color="E4405F">
            <Instagram />
          </SocialIcon>
          <SocialIcon color="55ACEE">
            <Twitter />
          </SocialIcon>
          <SocialIcon color="E60023">
            <Pinterest />
          </SocialIcon>
        </SocialContainer>
      </Left>
      <Center>
        <Title>Useful Links</Title>
        <List>
          <ListItem>Home</ListItem>
          <ListItem>Cart</ListItem>
          <ListItem>Man Fashion</ListItem>
          <ListItem>Woman Fashion</ListItem>
          <ListItem>Accessories</ListItem>
          <ListItem>My Account</ListItem>
          <ListItem>Order Tracking</ListItem>
          <ListItem>Wishlist</ListItem>
          <ListItem>Wishlist</ListItem>
          <ListItem>Terms</ListItem>
        </List>
      </Center>
      <Right>
        <Title>Contact</Title>
        <ContactItem>
          <Room />
          NorthRhine Westphalia, Germany 23433
        </ContactItem>
        <ContactItem>
          <Phone />
          +491781352566
        </ContactItem>
        <ContactItem>
          <MailOutline />
          contact@shopus.dev
        </ContactItem>
        {/* <Payment src="" /> */}
        <SocialContainer>
          <SocialIcon color="3B5999">
            <Payment />
          </SocialIcon>
          <SocialIcon color="E60023">
            <Contactless />
          </SocialIcon>
          <SocialIcon color="55ACEE">
            <Atm />
          </SocialIcon>
        </SocialContainer>
      </Right>
    </Container>
  );
};

export default Footer;
