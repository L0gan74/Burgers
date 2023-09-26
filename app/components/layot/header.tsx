import React from "react";
import style from "./layout.module.css";
import Image from "next/image";

const Header = () => {
  return (
    <header className={style.header}>
      <Image
        className={style.logo}
        src="/logo.svg"
        alt="logo"
        width={150}
        height={29}
      />
      <div className={style.wrapper}>
        <Image src="/burger.png" alt="burger" width={253} height={289} />
        <div className={style.text}>
          <h1>
            Только самые
            <span>сочные бургеры!</span>
          </h1>
          <p>
            Бесплатная доставка от <span>599₽</span>
          </p>
        </div>
      </div>
    </header>
  );
};

export default Header;
