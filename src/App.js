import { useState } from 'react';
import './App.css';
import Counter from './components/Counter/Counter';
import Stats from './components/Stats/Stats';
const initializeState =[
  {
    id:1,
    count:0
  },
  {
    id:2,
    count:0
  }
]
function App() {
  const [state,setState] = useState(initializeState);
  const totalCount = ()=>{
    return state.reduce((total,counter)=>total+counter.count,0);
  }
  const increment = (id) =>{
    const updateCounter = state.map((c)=>{
      if(c.id === id){
        return {
          ...c,
          count:c.count+1
        }
      }
      else return {...c};
    });
    setState(updateCounter);
  }
  const decrement = (id) =>{
    const updateCounter = state.map((c)=>{
      if(c.id === id){
        return {
          ...c,
          count:c.count-1
        }
      }
      else return {...c};
    });
    setState(updateCounter);
  }
  return (
    <div>
      <h1 className='text-center'>This is Counter Application</h1>
    {state.map((count)=>(
      <Counter
        key = {count.id}
        id = {count.id}
        count = {count.count}
        increment = {increment}
        decrement = {decrement}
      />
    ))}
     <Stats count={totalCount()}/>
    </div>
  );
}

export default App;
