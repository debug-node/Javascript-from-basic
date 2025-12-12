console.log("Introduction to Browser Events");

let a = document.getElementsByClassName("container")[0]
a.onclick = () => {
  let b = document.getElementsByClassName("container")[0]
  b.innerHTML = "Hello World!"
}