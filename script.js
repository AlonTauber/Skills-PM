function changecolor() {
    const resetClass = 'reset-color';
    // let colors = document.querySelectorAll(".orange, .red, .green");
    let orange = document.getElementsByClassName("orange");
    let red = document.getElementsByClassName("red");
    let green = document.getElementsByClassName("green");
    let btntext = document.getElementById("button");

    btntext.classList.toggle("resetbutton");

    if(btntext.value === "reset color"){
        btntext.value = "return color";
    } else {
        btntext.value = "reset color"
    }
  
    // for (let i = 0; i < colors.length; i++) {
    //     const element = colors[i];
    //     element.classList.toggle(resetClass)
    // }

    for (let i = 0; i < orange.length; i++) {
        const element = orange[i];
        element.classList.toggle(resetClass)
    }

    for (let i = 0; i < red.length; i++) {

        const element = red[i];
        element.classList.toggle(resetClass)
    }
    for (let i = 0; i < green.length; i++) {

        const element = green[i];
        element.classList.toggle(resetClass)
    }

    //changed it back to seperates loops//
    
    
}