/*
how to create this in html
<div id="root">
    <div id="parent">
        <div id="child">
            <h1>I'm h1 tag</h1>
            <h2>I'm h1 tag</h2>
        </div>
    </div>
</div>

Its like generally
ReactElement(Object) => HTML(Browser Understnds)
like in the below exaple parent was the React Element where its normaly a javascript object
*/

const parent=React.createElement("div",{id:"parent"},
    React.createElement("div",{id:"child"},
        [React.createElement("h1",{},"I'm h1 tag"),React.createElement("h2",{},"I'm h2 tag")]));
// if you want only want to create one children under child tag then remove the list ,simply create React.createElement for 1 tag
console.log(parent);

const root =  ReactDOM.createRoot(document.getElementById("root"));

root.render(parent);

/* So Instead of creating every time a list to carete multiple tags under a element we use JSX. 
where JSX will make easy when we have to create the tags*/
