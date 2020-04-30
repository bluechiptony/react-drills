import React from "react";
import { useRouteMatch, useHistory } from "react-router-dom";

export const Dishes = () => {
  const dishes = [
    { id: 1, title: "Egusi Soup", displayPic: "https://picsum.photos/170?random=1", desciption: "Food for the price", lowest: 23232, highest: 37233 },
    { id: 2, title: "Banga Soup", displayPic: "https://picsum.photos/170?random=50", desciption: "Banga soup for the soul", lowest: 3232, highest: 37233 },
    { id: 3, title: "Beef Burger", displayPic: "https://picsum.photos/170?random=4", desciption: "Honey glazed beef burger", lowest: 1932, highest: 2333 },
    { id: 4, title: "Vegie Stir fry", displayPic: "https://picsum.photos/170?random=7", desciption: "Honey glazed beef burger", lowest: 1932, highest: 2333 },
    { id: 5, title: "Sundae", displayPic: "https://picsum.photos/170?random=5", desciption: "Honey glazed beef burger", lowest: 1932, highest: 2333 },
    { id: 6, title: "Checker Waffle", displayPic: "https://picsum.photos/170?random=12", desciption: "Honey glazed beef burger with mutton chops", lowest: 1932, highest: 2333 },
  ];
  return (
    <div>
      <div>
        <h3>Dishes component</h3>
      </div>
      <div className="dish-grid">
        {dishes.map((dish, index) => {
          return <Dish index={index} key={index} dish={dish} />;
        })}
      </div>
    </div>
  );
};

export const Dish = ({ dish }) => {
  const { path } = useRouteMatch();
  const history = useHistory();

  const divert = () => {
    let link = `${path}/dish/${dish.id}`;
    history.push(link);
  };
  return (
    <div className="dish-item-box" onClick={divert}>
      <div>
        <img src={dish.displayPic} alt="" height={170} width={170} />
      </div>
      <div className="ovr y-padding">
        <span className="bold  text-foodie">{dish.title}</span> <br />
        <span className="text-desc">{dish.desciption}</span>
      </div>
    </div>
  );
};
export const DishDetail = () => {
  return (
    <div>
      <div>
        <h3>Dish detail component</h3>
      </div>
    </div>
  );
};
