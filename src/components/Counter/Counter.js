import Button from "../Button/Button";
import Count from "../Count/Count";

const Counter = ({id,increment,decrement,count}) => {
    
    return (
        <div className="d-flex justify-content-center">

        <div class="card mt-2" style={{ width: '18rem' }}>
          <div class="card-body p-5">
           <Count count={count}></Count>
           <Button handler ={()=>increment(id)}>Increment</Button>
           <Button handler ={()=>decrement(id)}>Decrement</Button> 
          </div>
        </div>
  
      </div>
    );
};

export default Counter;