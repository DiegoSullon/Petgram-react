import React from 'react';
import {Category} from '../Category'
import { Item, List } from './styles';

export const ListCategories =()=>{
  return(
    <List>
      {
        [1,2,3,4,5,6].map((category)=>
          <Item><Category emoji={category}/></Item>
        )
      }
    </List>
  )
}
