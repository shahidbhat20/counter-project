let count = 0;
let allButtons = document.querySelectorAll("#btns");
let increaseBtn = document.querySelector(".btn-increase");
let decreaseBtn = document.querySelector(".btn-decrease");
let resetBtn = document.querySelector(".btn-reset");
let value = document.querySelector("#value");


allButtons.forEach((btns) =>{
    btns.addEventListener("click" ,function(e) {
        // console.log("hello ");
        const styles = e.currentTarget.classList;
        if (styles.contains("btn-decrease")) {
            console.log(styles);
          count--;
        } else if (styles.contains("btn-increase")) {
          count++;
        } else {
          count = 0;
        }

    })

})
increaseBtn.addEventListener("click",() => {
     console.log("time to increase");
    //  count +=1;
     value.innerHTML = + count;
    })
 decreaseBtn.addEventListener("click", () => {
        console.log("time to decrease");
        count - 1;
        value.innerHTML = count;
    })

    resetBtn.addEventListener("click", () => {
        console.log("time to reset");
        count = 0;
        value.innerHTML = count;
    })   