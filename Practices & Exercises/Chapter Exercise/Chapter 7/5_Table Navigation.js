console.log("Table Navigation in JS");

let t = document.body.firstElementChild.firstElementChild; // the first element child of the body is container div, and its own first child is the table

console.log(t)
console.log(t.rows)
console.log(t.caption)
console.log(t.tHead.firstElementChild)
console.log(t.tFoot)
console.log(t.tBodies)
console.log(t.rows[1].rowIndex)

for (let i = 0; i < t.rows.length; i++) {
    let row = t.rows[i];
    console.log(row)
}
