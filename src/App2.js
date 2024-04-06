import { useEffect, useState } from "react";

function App(){
    const [toDo, setToDo] = useState("");
    const [toDos, setToDos] = useState([]); 
    const changeInput = (event) => setToDo(event.target.value);
    const submitToDo = (event) => {
        event.preventDefault(); // 어떤 이벤트를 명시적으로 처리하지 않은경우, 해당 이벤트에 대한 기본 동작을 실행하지 않도록 지정
        //console.log(toDo);
        if(toDo === ""){
            return;
        } 
        setToDos((currentArray) => [toDo, ...currentArray]);
        setToDo("");
    }; 
    useEffect(()=>{console.log(toDos)}, [toDos]); 
    return (
        <div>
            <h1>My To Dos({toDos.length})</h1>
            <form onSubmit={submitToDo}>
                    <input 
                        onChange={changeInput} 
                        value ={toDo} 
                        type="text" 
                        placeholder="Write your to do">
                    </input>
                    <button>Add To Do</button> 
            </form>
            <hr />
            <ul>  
                {toDos.map(((item, index) => 
                    <li key={index}>{item}</li>
                ))}
            </ul>
        </div>
    );
}

export default App;