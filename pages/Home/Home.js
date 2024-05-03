import "./Home.css";
import { cleanPage } from "../../utils/cleanPage";

export const Home = () => {
  const main = document.querySelector("main");
  cleanPage(main);
  main.innerHTML = `
   <section class="home">
        <p>Hey, I'm</p>
      <h1>Juanjo Dalmedo</h1>
        <p>I'm a software engineer based in Madrid, Spain and also a communication and journalism student. I enjoy creating things that
          help people and I'm currently looking for a job as a developer web.</p>
   </section>`;
};