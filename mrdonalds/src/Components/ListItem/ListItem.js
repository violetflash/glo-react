import React from 'react';
import styled from 'styled-components';


const List = styled.ul`
  margin-top: 20px;
  display: flex;
  margin-left: -30px;
  flex-wrap: wrap;
`;

const Card = styled.li`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin: 0 0 20px 30px;
  border-radius: 5px;
  width: calc((100% - 120px) / 3);
  border: 2px solid #0000001a;
  //height: 200px;
`;

const CardInfo = styled.aside`
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  flex-direction: column;
  width: 100%;
  padding-left: 20px;
  background-color: #DAEFEA;
`;


const Name = styled.p`
  font-size: 16px;
  font-weight: 700;
  padding: 10px 0;
  color: #000;
`;

const Price = styled.p`
  z-index: 1;
  padding: 0 0 5px;
  font-size: 14px;
  color: #000;
`;

const Item = styled.figure`
  position:relative;
  //flex: 0 0 200px;
  width: 100%;
  height: 200px;
  margin: 0;
  //padding: 10px;
  background-color:#fff;
  background-image: ${ ({ img }) => `url(${img})` };
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  z-index: 1;
  color: #fff;
  text-align:left;
  
  &::before {
    position:absolute;
    content: '';
    //border-radius: 5px;
    width: 100%;
    height: 100%;
    left: 0;
    top: 0;
    background-color: Cornsilk;
    opacity: 10%;
    z-index: -1;
  }
`;

const ListItem = ( {itemList} ) => {
    return (
        <List>
            {itemList.map(item => (
                <Card>
                    <CardInfo>
                        <Name>{item.name}</Name>
                        <Price>{item.price.toLocaleString('ru-RU', {style: 'currency', currency: 'RUB'})}</Price>
                    </CardInfo>
                    <Item key={item.id} img={item.img}/>
                </Card>
            ))}
        </List>
    )

};

export default ListItem;