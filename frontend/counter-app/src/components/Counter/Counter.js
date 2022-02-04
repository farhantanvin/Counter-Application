
import React, { useState,useRef,useEffect } from "react";
import CounterService from "../../services/CounterService";
import{NavLink,useNavigate} from "react-router-dom"


function Counter(){
    let navigate = useNavigate();

    const [count1, setCount1] = useState(0);
    const [count2, setCount2] = useState(0);
    const [count3, setCount3] = useState(0);
    const interval = useRef(null)
   
    useEffect(() => { if (count1 === 60) stopCounter() }, [count1])


      const getRandomInt = (max) => {
        return Math.floor(Math.random() * max);
      }

      const getRandomFloat = (max) => {
        return (Math.random() * max);
      }

      const getRandomAlphaNumeric = (max) => {
        return (Math.random()*1e32).toString(36)
      }
      


      const saveCounter = () => {
        var data = {
          counter1: count1,
          counter2: count2,
          counter3: count3,
        };
        CounterService.createCounter(data)
          .then(response => {
            console.log(response.data);
          })
          .catch(e => {
            console.log(e);
          });
      };

    const startCounter = () => interval.current = setInterval(() => {
        
        setCount1(getRandomInt(1000000))
        setCount2(getRandomAlphaNumeric())
        setCount3(getRandomFloat(1000))
        saveCounter();
        console.log("running",interval.current);
      }, 2000)
    
      const stopCounter = () =>{
        clearInterval(interval.current)
        interval.current = null;
        console.log("close",interval.current);
      } 
  
      const clickFunction = () =>{
        if(!interval.current){
            return navigate("/report");
        }
        
      } 

    return(
        <div class="container">

<div class="row" style={{ padding: '5px', marginTop:'50px' }}>
                <div class="col">
                    <span>Numeric</span>
                </div>
                <div class="col">
                    <span>Size of the output file (KB)</span>
                </div>
            </div>

            <div class="row" style={{ padding: '5px' }}>
                <div class="col">
                    <span>Alphanumeric</span>
                </div>
                <div class="col"><input></input></div>
            </div>

            <div class="row" style={{ padding: '5px' }}>
                <div class="col">
                    <span>Float</span>
                </div>
                
            </div>

        <div class="mt-5">
            <button class="btn btn-primary" onClick={startCounter}  style={{ borderRadius: '10px',padding:'15px 25px' ,marginRight:'20px'}}>Start</button>
            <button class="btn btn-danger" onClick={stopCounter} style={{ borderRadius: '10px',padding:'15px 25px' }}>Stop</button>
        </div>
        
            <div class="row" style={{ padding: '5px', marginTop:'50px' }}>
                <div class="col">
                    <span>Counter1 (Numeric)</span>
                </div>
                <div class="col"><input value={count1}></input></div>
            </div>

            <div class="row" style={{ padding: '5px' }}>
                <div class="col">
                    <span>Counter2 (Alphanumeric)</span>
                </div>
                <div class="col"><input value={count2}></input></div>
            </div>

            <div class="row" style={{ padding: '5px' }}>
                <div class="col">
                    <span>Counter3 (Float)</span>
                </div>
                <div class="col"><input value={count3}></input></div>
            </div>


                <button class="btn btn-secondary" onClick={clickFunction} style={{ borderRadius: '15px',padding:'10px 100px',marginLeft:'250px' }}>Generate Report</button>
            
        </div>

    );
}

export default Counter;