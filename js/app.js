function bestSell() {
  let pathArray = ["../img/8.jpg", "../img/89.jpg", "../img/worms.jpg"];
  console.log(pathArray);
  let div = document.getElementById("js");
  console.log(div);
  let rnd = Math.floor(Math.random() * 10); // returns a random integer from 0 to 9
  console.log(rnd);
  div.src = pathArray[pathArray.random()];
}
bestSell();
