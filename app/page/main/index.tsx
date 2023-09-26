"use client";

import React from "react";
import style from "./style.module.css";
import Categories from "@/app/components/layot/categories";
import axios from "axios";
import { Items } from "@/app/types/type";
import { useAppDispatch, useAppSelector } from "@/app/store/hooks";
import { setCategoryId } from "@/app/store/slices/category";
import Image from "next/image";
import Basket from "./basket/basket";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import { addItems } from "@/app/store/slices/basket";
import MainItem from "./item";

const modal = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 637,
  bgcolor: "background.paper",
  boxShadow: 24,
  borderRadius: "24px",
  p: 4,
};

const Main: React.FC = () => {
  const [data, setData] = React.useState<Items[] | null>(null);

  const dispatch = useAppDispatch();

  const categoryId = useAppSelector((state) => state.category.categoryId);

  React.useEffect(() => {
    const category = categoryId > 0 ? `categoryId=${categoryId}` : "";
    const getBurgers = async () => {
      const response = await axios.get(
        `http://localhost:4000/burgers?_sort=id&_order=desc&${category}`
      );
      setData(response.data);
    };
    getBurgers();
  }, [categoryId]);

  const onChangeCategory = (idx: number) => {
    dispatch(setCategoryId(idx));
  };

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <section className={style.main}>
      <Categories value={categoryId} onChangeCategory={onChangeCategory} />
      <div className={style.wrapper}>
        <Basket />
        <div className={style.grid}>
          {data
            ? data.map((item) => <MainItem key={item.id} {...item} />)
            : null}
        </div>
      </div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        className={style.modal}
      >
        <Box sx={modal}>
          <h3>Мясная бомба</h3>
          <div className={style.inside}>
            <Image src="/item.png" width={276} height={220} alt="item" />
            <span className={style.description}>
              <p>
                Супер мясное наслаждение! Большая рубленая котлета из свежего
                говяжего мяса покорит вас своей сочностью, а хрустящие листья
                салата добавят свежести.
              </p>
            </span>
          </div>
          <div className={style.bottom}>
            <span>
              <button className={style.add} type="button">
                Добавить
              </button>
              <div className={style.quantity}>
                <button type="button">-</button>
                <p>1</p>
                <button type="button">+</button>
              </div>
            </span>
            <p className={style.price}>689₽</p>
          </div>
        </Box>
      </Modal>
    </section>
  );
};

export default Main;
