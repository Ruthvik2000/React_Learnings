const heading = React.createElement("h1",{id:"heading", xyz:"abc"},"Hello React world");
//check in the Inspect of google we can see in body the arguments passed in h1
const root =  ReactDOM.createRoot(document.getElementById("root"));

root.render(heading);