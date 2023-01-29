import React from "react";
import { Link } from "react-router-dom";
// import SpinningText from "../SpinningText/SpinningText";
// import Botonflotante from "../BotonFlotante";
// import empanadas from "../img/empanadas.jpg";
// import confianza from "../img/confianza4.png";
import s from "./Home.module.css";

export default function Home() {
  return (
    <>
      <div>{/* <Botonflotante></Botonflotante> */}</div>
      <div className={s.fondoHome}>
        <div className={s.elementoHome}>
          <div className={s.divSpinning}>
            {/* <SpinningText text="Las . Empanadas . De . Susanita  ">
              <img src={empanadas} alt="empanadas" />
            </SpinningText> */}
          </div>
          <div className={s.textoIncio}>
            <h1 class="animate__animated animate__fadeIn">
              La Forma mas Rica de Comer
              <hr></hr>
            </h1>
            <p>
              Empanadas fabricadas con la receta casera original de la abuela la
              que le da un toque de sabor y cariño que las hacen unicas, y
              finalmente cocidas fritas para que queden crujientes por fuera y
              sabrosas por dentro.
            </p>
          </div>
        </div>
        <div className={s.divTextoDelicias}>
          <h1>¡Deleitate con nuestras delicias!</h1>
        </div>
        <div className={s.divBtn}>
          <Link to="allProducts">
            <button>Ven a ver</button>
          </Link>
        </div>
        <div className={s.divParaQue}>
          <h1>¿Para qué nació este negocio?</h1>
          <p>
            Las Empanadas De Susanita surge a partir de cubrir una necesidad
            alimenticia que se presentó luego de la pandemia y pudo progresar
            gracias al trabajo conjunto de todos sus miembros y clientes. Porque
            sí, en este negocio{" "}
            <div className={s.oscurito}>
              cuidamos los clientes como la familia.
            </div>
          </p>
          {/* <img src={confianza} alt="confianza" /> */}
        </div>
      </div>
    </>
  );
}
