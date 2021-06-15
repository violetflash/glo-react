import React from 'react';
import styled from 'styled-components';
import ListItem from "../ListItem/ListItem";
import db from './db';
import Button from "../Button/Button";

const MenuStyled = styled.main`
  //background-color: #fff;
  background-color: #FFFBEC;
  margin-top: 100px;
  padding: 20px 15px;
  text-align:center;
  //height: 500px;
  
  h3 {
    padding-bottom: 5px;
    //border-bottom: 10px solid palevioletred;
  }
`;

const Section = styled.section`
  padding: 20px 0 40px 0;
`;

const Menu = props => {
    return (
        <MenuStyled>
            <Section>
                <h3>Шары фольгированные</h3>
                <ListItem itemList={db.foiled}/>
            </Section>

            <Section>
                <h3>Другие товары</h3>
                <ListItem itemList={db.other}/>
            </Section>
            <Button text="Add to cart" />
        </MenuStyled>
    )

};

export default Menu;