import React from 'react';
import styled from 'styled-components';
import ListItem from "../ListItem/ListItem";
import db from './db';

const MenuStyled = styled.main`
  background-color: #fff;
  margin-top: 100px;
  padding-top: 20px;
  text-align:center;
  //height: 500px;
`;

const Menu = props => {
    return (
        <MenuStyled>
            <section>
                <h3>Шары</h3>
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