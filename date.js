const date = new Date().toLocaleTimeString("en-us", {
  timeStyle: "short",
});

console.log(date);
const formattedTime = date.split(":").join(":");

let text;
text = formattedTime;
