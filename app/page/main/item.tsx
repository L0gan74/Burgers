"use client";

import React from "react";
import style from "./style.module.css";
import Image from "next/image";
import { addItems } from "@/app/store/slices/basket";
import { useAppDispatch } from "@/app/store/hooks";

type ItemProps = {
  id: number;
  photo: string;
  price: string;
  title: string;
  weight: string;
  categoryId: string;
};

const MainItem: React.FC<ItemProps> = ({ id, photo, price, title, weight }) => {
  const dispatch = useAppDispatch();

  const addToCart = () => {
    const item = [id, title, photo, weight, price];
    dispatch(addItems(item));
  };
  return (
    <div className={style.item}>
      {/* <button type="button" onClick={handleOpen}>
    </button> */}
      <Image src={photo} alt={title} width={246} height={200} />
      <h4>{price}₽</h4>
      <h5>{title}</h5>
      <h6>{weight}г</h6>
      <button onClick={addToCart} type="button">
        Добавить
      </button>
    </div>
  );
};

export default MainItem;
