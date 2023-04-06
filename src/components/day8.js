import React,{useState,useEffect} from 'react'   
const Useeffecthook = () => {
    const [message, setMessage] = useState('Hello dear one,learning react...?');
    useEffect(() => {
      console.log('use effect hook called');
      setTimeout(() => {
        setMessage("Great...This is time to learn about HOOKS");
      }, 2000)
    })
    return(
    <div>
    <h2>This is use effect hook</h2>
    <h2>{message}</h2>
    </div>
    )
  }
export default Useeffecthook;
