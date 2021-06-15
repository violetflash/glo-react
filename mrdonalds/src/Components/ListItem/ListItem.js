import React from 'react';
import styled from 'styled-components';


const List = styled.ul`
  margin-top: 20px;
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
`;

const Item = styled.li`
  width: 200px;
  height: 200px;
  background-image: ${({ img }) => `url(${img})`};
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
`;

const ListItem = ( {itemList} ) => {
    return (
        <List>
            {itemList.map(item => (
                <Item key={item.id} img={item.img}>{item.name}</Item>
            ))}
        </List>
    )

};

export default ListItem;