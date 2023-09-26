import React from "react";
import style from "./style.module.css";
import Image from "next/image";

const BasketItem: React.FC = () => {
  return (
    <div className={style.item}>
      <div className={style.left}>
        <Image src="/item.png" width={64} height={52} alt="img basket" />
        <span>
          <p className={style.name}>Супер сырный</p>
          <p className={style.weight}>512г</p>
          <p className={style.price}>550₽</p>
        </span>
      </div>
      <div className={style.quantity}>
        <button type="button">-</button>
        <p>1</p>
        <button type="button">+</button>
      </div>
    </div>
  );
};

export default BasketItem;
