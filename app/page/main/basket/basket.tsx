import React from "react";
import style from "./style.module.css";
import Image from "next/image";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import { Checkbox } from "@mui/material";
import { useAppSelector } from "@/app/store/hooks";
import BasketItem from "./basketItem";

const modal = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 637,
  boxShadow: 24,
  borderRadius: "24px",
};

const Basket: React.FC = () => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [checked, setChecked] = React.useState(true);

  const handleHidden = () => {
    setChecked(!checked);
  };

  const { totalPrice, items } = useAppSelector((state) => state.basket);
  const totalCount = items.reduce((sum, item) => sum + item.count, 0);
  console.log(items)

  return (
    <>
      <div className={style.basket}>
        <div className={style.top}>
          <h2>Корзина</h2>
          <span>{totalCount}</span>
        </div>

        {!items.length ? (
          <p className={style.pusto}>Корзина пустая 🍔</p>
        ) : (
          <>
            {items.map((data) => (
              <div key={data.id}>
                <p>{data.title}</p>
              </div>
            ))}
          </>
        )}
        <div className={style.total}>
          <p>Итого</p>
          <p>{totalPrice}₽</p>
        </div>
        <button onClick={handleOpen} type="button" className={style.order}>
          Оформить заказ
        </button>
      </div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box className={style.modal} sx={modal}>
          <div className={style.image}>
            <Image src="/pic.png" width={302} height={302} alt="pic" />
          </div>
          <div className={style.right}>
            <form className={style.form}>
              <h4>Доставка</h4>
              <input
                className={style.data}
                type="text"
                placeholder="Ваше имя"
              />
              <input className={style.data} type="tel" placeholder="Телефон" />
              <span>
                <Checkbox hidden={checked} onChange={handleHidden} />
                <p>Самовывоз</p>
              </span>

              {checked && (
                <div className={style.hidden}>
                  <input
                    className={style.data}
                    type="tel"
                    placeholder="Улица, дом, квартира"
                  />
                  <div className={style.bottom}>
                    <input
                      className={style.data}
                      type="tel"
                      placeholder="Этаж"
                    />{" "}
                    <input
                      className={style.data}
                      type="tel"
                      placeholder="Домофон"
                    />
                  </div>
                </div>
              )}
              <button type="submit">Оформить</button>
            </form>
          </div>
        </Box>
      </Modal>
    </>
  );
};

export default Basket;
