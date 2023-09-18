import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  const nameList = ['Rajib','Ohin','Suvo','Sabbir','Joy'];
  const profaction = ['Student','Faforbaz'];

  const [random, setRandom] = useState([])
  useEffect(()=>{
    fetch("https://jsonplaceholder.typicode.com/users")
    .then(res=>res.json())
    .then(data=>setRandom(data))
  },[]);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit install done <code>src/App.js</code> and save to reload.
        </p>
        <ul>
         
          {nameList.map((nlst, index)=>{
            return <><NameList dtl={[nlst]} ntl={profaction[index]}></NameList>
                    </>
          })}
          {/* {profaction.map(prf=><NameList ntl={prf}></NameList>)} */}
         
        </ul>
        <SopCounter></SopCounter>
        {
          random.map(Rd=> <RandomUseres user={Rd.name} age= {Rd.id}></RandomUseres>)
        } 
          
      </header>
    </div>
  );
}
function NameList (props){
  return(
    <div style={{border:'10px solid red',
         margin:'3px'}}>
      <h3><li>{props.dtl}</li></h3>
      <p>{props.ntl}</p>
     
    </div>
  );
}
function SopCounter (){
  const [count, setCount] = useState(0);
 const handelClick = ()=>setCount(count+2)
  return(
    <div>
      <h3>Product:{count}</h3>
      <button onClick={handelClick}>Add me</button>
      <Dicres cnt={count+5}></Dicres>
      <Dicres cnt={count+25}></Dicres>
      <Dicres cnt={count+5}></Dicres>
      <Dicres cnt={count+54}></Dicres>
    </div>
  );
}
function Dicres(props){
  return(
    <div>
      <h4>Dicees product: {props.cnt}</h4>
     </div>
  );
}
function RandomUseres(props){
 
   return (
    <div style={{
      border:'10px solid blue',
      width:'70%'
    }}>
      <h3>Random Users:{props.age}</h3>
      <h5>Name:{props.user}</h5>
    </div>
   );
}

export default App;
