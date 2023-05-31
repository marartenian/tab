

const tabs = document.querySelectorAll(".tab_btn");
const all_content = document.querySelectorAll(".content");



tabs.forEach((tab,index) => {
    tab.addEventListener("click",()=>{
        tabs.forEach(tab => {
            tab.classList.remove("active");
    });
        tab.classList.add("active");

        all_content.forEach(content => {
            content.classList.remove("active");
        });
        all_content[index].classList.add("active");
    });
});



























// const colors = ["yellow","purple", "blue","orange"];

// circles.foreach(item =>{
//     item.addEventListener("click",()=>{
//         const color = colors[Math.floor(Math.random() * colors.length)];
//         item.style.background = "red";
//     });
// });


//petq e hishel vor  chenq karox zangvaci vra click anenq:


