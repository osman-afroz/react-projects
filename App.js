{
  /* <div class="id parent">
<div class="id child">
    <h1>I am a h1 tag</h1>
</div>
</div> */
}

const parent = React.createElement(
  "div",
  { id: "parent" },
 [ React.createElement(
    "div",
    { id: "child" },
    // React.createElement("h1", {}, "I am a h1 tag")
    [React.createElement("h1", {},  `I am React.createElement("span",{id:"sub-span"},"tried") h1 tag`),
    React.createElement("h2", {}, "I am a h2 tag"),
    React.createElement("h3", {}, "I am a h3 tag")
]),
  React.createElement(
    "div",
    { id: "child" },
    // React.createElement("h1", {}, "I am a h1 tag")
    [React.createElement("h1", {}, "I am a h1 tag"),
    React.createElement("h2", {}, "I am a h2 tag"), 
    React.createElement("h3", {}, "I am a h3 tag")  // passing the values in array, if we have multiple child components 
  
])
]);

console.log(parent)

const root=ReactDOM.createRoot(document.getElementById('root'));
root.render(parent)

// const heading = React.createElement(
//   "h1",
//   { id: "heading" },
//   "Hello world from React"
// );

// console.log(heading);

// const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(heading);
