import React from "react";
import styled from "styled-components";

// const checkShadow = props => {
//   if (props) {
//     return "0 10px 20px 0 #373535";
//   }
//   return "none";
// };
//
// const Item = styled.li`
//   border: 1px solid red;
//   background-color: ${props => (props.selected ? "red" : "green")};
//   &:hover {
//     box-shadow: ${props => checkShadow(props)};
//   }
// `;

const GalleryItem = props => {
  const listItems = props.list.map(listItem => (
    <li
      selected={listItem === props.currentItem}
      key={listItem}
      className={`list-group-item ${
        listItem === props.currentItem ? "active" : ""
      }`}
      onClick={() => props.select(listItem)}
    >
      {listItem}
    </li>
  ));

  return listItems;
};

export { GalleryItem };
