import Button from "./Button";
import styles from "./App.module.css";
import { useEffect, useState } from "react";


function App() {
  const [counter, setValue] = useState(0); 
  const [text, setText] = useState(""); 
  const onClick = () => setValue((prev) => prev +1);
  const onText = (event) => setText(event.target.value);
   
  console.log("run all the time");
 
  //why use useEffect? 
  // 랜더링이 계속 되면 문제가 생길 수 있어서 성능저하를 해결하기 위함
  // 한번만 실행(useEffect, [])
  const iRunOnlyOnce = () => {
    console.log("i run only once");
  }
  useEffect(iRunOnlyOnce, []);  
  useEffect(()=>{
    console.log("CALL THE API");
  }, [] );
  // 한번만 실행(useEffect, [])

  //[] 안에 변수를 넣으면 해당 변수가 변화할 때만 실행됨 
  //[text], [text,counter]
  useEffect(()=>{
    if(text !== "" && text.length >5){
      console.log("SEARCH FOR ", text)
    }
  }, [text]);

 
  const [showing, setShowing] = useState(false);
  const onButtonClick = () => {
    setShowing((prev) => !prev);

  };
  
  return (
    <div>
      {showing? <Hello /> : null}
      <button onClick={onButtonClick}>{showing ? "HIDE" : "SHOW"}</button>
      <input 
        value={text}
        onChange={onText} 
        type="text"
        placeholder="Search here">
      </input>
      <h1 className={styles.title}>{counter}</h1>
      <button onClick={onClick}>onClick</button>
      <Button text={"Continue"} />
    </div>
  );
}

function Hello(){
  //1.  
  useEffect(()=>{
    console.log("HERE!");
    return () => console.log("BYE!"); //컴포넌트 없어질 때 사용  
  },[]);

  //2.
  function destroyedLog(){
    console.log("BYE");
  }
  function effectLog () {
    console.log("HERE!");
    return destroyedLog; //clean up function
  } 

  useEffect(effectLog, []);

  return <h1>Hello</h1>;
}

export default App;
 