
const headding= React.createElement("h1",{id:"headding",xyz:"abc"},"Helllow world");
//console.log(headding);  // return object 
const root  = ReactDOM.createRoot(document.getElementById("root"));  



// now nested 
const Parent1 = React.createElement("div",{id:"parent"},
React.createElement("div",{id:"child"},
React.createElement("h1",{id:"hedding"},"I am h1 tag")));


// now we create a sibling of children id: -
// like 
//   <div id= "parent" >
//         <div id= "child ">
//            <h1></h1>
//            <h2></h2>
//         </div>
//     </div>
  
// passing content in Array form 

const Parent2 = React.createElement("div", { id: "parent" }, [
    React.createElement("div", { id: "child1" }, [
      React.createElement("h1", { id: "heading" }, "I am h1 tag"),
      React.createElement("h2", { id: "heading2" }, "I am h2 tag")
    ]),
    React.createElement("div", { id: "child2" }, [
      React.createElement("h1", { id: "heading" }, "I am h1 tag"),
      React.createElement("h2", { id: "heading2" }, "I am h2 tag")
    ])
  ]);
  


root.render(Parent2);


///now creat like this 👎
//       <div id= "parent" >
// //         <div id= "child1 ">
// //            <h1></h1>
// //            <h2></h2>
// //         </div>
//           <div id= "child2 ">
// //            <h1></h1>
// //            <h2></h2>
// //         </div>

// //     </div>