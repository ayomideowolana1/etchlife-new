const load = () => {
  let buttons = Array.from(document.querySelectorAll(".services-btn"));
  let link1 = document.querySelector(".link1");
  let link2 = document.querySelector(".link2");
  let link3 = document.querySelector(".link3");
  console.log(link1);
  buttons.forEach(button => {
    button.addEventListener("click", e => {
      let id = e.target.id;
      if (id == 1) {
        link1.classList.add("show");
        link1.classList.remove("hide");
        link2.classList.add("hide");
        link2.classList.remove("show");
        link3.classList.add("hide");
        link3.classList.remove("show");
      } else if (id == 2) {
        link1.classList.add("hide");
        link1.classList.remove("show");
        link2.classList.add("show");
        link2.classList.remove("hide");
        link3.classList.add("hide");
        link3.classList.remove("show");
      } else {
         link1.classList.add("hide");
         link1.classList.remove("show");
         link2.classList.add("hide");
         link2.classList.remove("show");
         link3.classList.add("show");
         link3.classList.remove("hide");
      }
    });
  });
  link1.addEventListener("mouseOver",()=>{
    link1.classList.add("showbg")
  })
};
