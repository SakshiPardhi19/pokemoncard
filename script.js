// var main = document.getElementById("main");
// var s = "";
// for(let i = 1; i <= 10; i++){
    // // s+=`<div class="cards"><img src="https://i.pinimg.com/474x/2c/32/be/2c32bec663b5b9b484b55090b87c8779.jpg"></div>`;
// }
// main.innerHTML = s;
 let main = document.getElementById("main");
let arr = ["https://i.pinimg.com/736x/b8/44/10/b8441072cfc9f48f653ba083edeb5cb4.jpg",
    "https://i.pinimg.com/474x/c8/d3/ab/c8d3ab5dceef1f26f362a3a453f80fc3.jpg",
    "https://i.pinimg.com/474x/d5/0e/d8/d50ed857a9bee866b48338b14afd4b55.jpg",
    "https://i.pinimg.com/736x/91/20/8c/91208c763d5efd845fad13880b8072b8.jpg",
    "https://i.pinimg.com/736x/a1/ce/00/a1ce00dc6f8bdb38eb7854fca2f9187a.jpg",
    "https://i.pinimg.com/736x/51/46/7b/51467b636dca36bb7212617c47334193.jpg",
    "https://i.pinimg.com/474x/14/7d/b0/147db085b6655ea13793016b442dc4eb.jpg"]
 let s = "";
 for(let i = 1;i <=60;i++){
    let r = Math.floor(Math.random()*7)
    s+=`<div class="cards"><img src = ${arr[r]}></div>`;
 }
 main.innerHTML = s;