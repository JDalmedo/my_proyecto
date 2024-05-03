import "./Home.css";
import { cleanPage } from "../../utils/cleanPage";

export const Home = () => {
  const main = document.querySelector("main");
  cleanPage(main);
  main.innerHTML = `
   <section class="home">
        <p>Hola, mi nombre es Juan José Martínez Dalmedo, pero me gustan que me llamen Juanjo.</p>
      <h1>Juanjo Dalmedo</h1>
        <p>Soy un mecánico naval, apasionado por la tecnología y el mundo de la informática que está buscando su primera oportunidad laboral en el mundo del desarrollo web. Tengo una discapacidad debido a un accidente, pero muchas ganas de trabajar.
        Aquí os dejo algunos de los proyectos que he creado.</p>
   </section>`;
};