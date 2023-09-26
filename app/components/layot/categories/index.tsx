import React from "react";
import style from "./style.module.css";

type CategoriesProps = {
  value: number;
  onChangeCategory: (idx: number) => void;
};

const categories = [
  "Все",
  "Бургеры",
  "Закуски",
  "Хот-доги",
  "Комбо",
  "Шаурма",
  "Пицца",
  "Вок",
  "Десерты",
  "Соусы",
];

const Categories: React.FC<CategoriesProps> = ({ value, onChangeCategory }) => {
  return (
    <div className={style.category}>
      {categories.map((category, index) => (
        <button
          type="button"
          className={value === index ? "activeBtn" : ""}
          onClick={() => onChangeCategory(index)}
          key={index}
        >
          {category}
        </button>
      ))}
    </div>
  );
};

export default Categories;
