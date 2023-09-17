import { Comments } from "./components/Coments";


function App() {
  let comments = [
    { postId: "a2o", author: "Ѓоко", text: "Здраво дечки" },
    { postId: "a2a", author: "Владе", text: "Многу добра статија" },
    { postId: "b4r", author: "Славица", text: "Hi there!" },
  ];

  return (
    <div className="App">
      <h1> Hello from domasna3</h1>

      <Comments comments={comments} /> 
    </div>
  );
}

export default App;
