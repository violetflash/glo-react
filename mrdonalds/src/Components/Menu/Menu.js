import React from 'react';
import styled from 'styled-components';
import ListItem from "../ListItem/ListItem";
import db from './db';

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

const Menu = props => {
    return (
        <MenuStyled>
            <section>
                <h3>Шары фольгированные</h3>
                <ListItem itemList={db.foiled}/>
            </section>

            <section>
                <h3>Другие товары</h3>
                <ListItem itemList={db.other}/>
            </section>
        </MenuStyled>
    )

};

export default Menu;