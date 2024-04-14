// let mesage = "global scope";
// function helloWorld() {
//   let mesage = "local scope";
//   console.log(mesage);
// }
// function helloWorld2() {
//   console.log(mesage);
// }

// helloWorld();
// helloWorld2();

// (function printSomething(mesage) {
//   console.log(mesage);
// })("team 5");

// function factorial(n) {
//   if (n === 0 || n === 1) {
//     return 1;
//   } else {
//     return n * factorial(n - 1);
//   }
// }
// console.log(factorial(2));

const CoreFunction = ((taskListId, inputId, url) => {
  const targetUl = taskListId; //closure
  const targetInput = inputId; //closure
  const api = url;
  function addTask() {
    let text = document.getElementById(targetInput).value; //closure
    addLi(text);
    //console.log(text); //test
  }
  function addLi(text) {
    let li = document.createElement("li"); //membuat element
    li.innerHTML = <p>${text}</p>;
    document.getElementById(targetUl).appendChild(li); //memasukan elemen ke dalam target
  }
  async function fetchRandomTask() {
    try {
      const response = await fetch(api);
      const data = await response.json();
      for (let index = 0; index < data.length; index++) {
        const text = data[index];
        addLi(text); //konsep reusibility
      }
      console.log(data);
    } catch (error) {
      console.log(eror);
    }
  }
  return {
    addTask: addTask,
    fetchRandomTask: fetchRandomTask,
  };
})("tasKlist", "newTask", "https://module3-api-is2m.onrender.com/random-todos"); //iife
//eventlistener untuk membuat event
document.getElementById("addTaskBtn").addEventListener("click", () => {
  CoreFunction.addTask();
});

document.addEventListener("load", CoreFunction.fetchRandomTask());
