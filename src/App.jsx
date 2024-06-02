import React ,{useState,useEffect} from 'react';
import './App.css';

function App(){
const [state, setState] = useState(10);
 const [data, setData] = useState([]);

 async function getData(){
    const res=await fetch(`https://freetestapi.com/api/v1/cars?limit=${state}`)
  const finalRes= await res.json();
  console.log(finalRes);
  setData(finalRes);
  
  }
useEffect(()=>{
 
  getData();
  },[state])


  return (
   <>
   <button onClick={()=>setState(state+5)}>Click Me{state}</button>
   {
    data.map((e,i)=>{
     
        return(
        <div className='btn' key={i}>
          <h3>{e.make}</h3>
          <h3>{e.color}</h3>
          <h3>{e.model}</h3>
        </div>
        )
      
    })
   }
   </>
  );

}
export default App


