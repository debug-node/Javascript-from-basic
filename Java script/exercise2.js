// Snake Water Gun game

let user = prompt("Enter S, W or G").toUpperCase();
let cpuI = Math.floor(Math.random() * 3);
let cpu = ["S", "W", "G"][cpuI];

const match = (cpu, user) => {
    if (cpu === user) return "Nobody. Match is tied";
    else if (cpu === "S" && user === "W") return "cpu";
    else if (cpu === "S" && user === "G") return "user";
    else if (cpu === "G" && user === "W") return "user";
    else if (cpu === "G" && user === "S") return "cpu";
    else if (cpu === "W" && user === "S") return "user";
    else if (cpu === "W" && user === "G") return "cpu";
    return "Invalid Match";
};

if (["S", "W", "G"].includes(user)) {
    let result = match(cpu, user);
    document.writeln(`CPU: ${cpu} and USER: ${user} <br> The winner is: ${result}`);
} else {
    alert("Invalid input! Please enter S, W, or G.");
}

