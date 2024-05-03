import "./Contact.css";
import { cleanPage } from "../../utils/cleanPage";

export const Contact = () => {
  const main = document.querySelector("main");
  cleanPage(main);
  main.innerHTML = `
   <section class='contact'>
   
       <h3>Contact me</h3>
       <form action="/my-handling-form-page" method="post">
           <ul>
               <li>
                   <label for="name">Name:</label>
                   <input type="text" id="name" name="user_name" />
               </li>
               <li>
                   <label for="mail">Email:</label>
                   <input type="email" id="mail" name="user_mail" />
               </li>
               <li>
                   <label for="msg">Text:</label>
                   <textarea id="msg" name="user_message"></textarea>
               </li>
               <li>
                   <button class="btn" type='submit'>Submit</button>
               </li>
           </ul>
       </form>
   

    </section>`;
};