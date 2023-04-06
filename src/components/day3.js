import React from "react";

function Category(props){
    return(
        <div>
            <p>{props.name} - Rs.{props.price}</p>
        </div>
    )
}

const tea=10;
const milk=60;
const coffee=20;
const custard=150;
const cake=70;
const pie=200;


function Coffee(){
    const [count,setCount]=React.useState(0);
    const [price,setPrice]=React.useState(0);
   const Coffee=()=>{
     setCount(count+1);
     setPrice(price+coffee);
   }
   const milkshake=()=>{
    setCount(count+1)
    setPrice(price+milk)
  }
  const Tea=()=>{
    setCount(count+1)
    setPrice(price+tea)
  }
  const Apple=()=>{
    setCount(count+1)
    setPrice(price+pie)
  }
  const cakes=()=>{
    setCount(count+1)
    setPrice(price+cake)
  }
  const caramel=()=>{
    setCount(count+1)
    setPrice(price+custard)
  }
 

    return(
       
            <div>
            <center>
            <h1 id='head'>Coffee Day</h1>
    <img id='logo' alt='' src='https://tse3.mm.bing.net/th?id=OIP.i6ycQkqVK2IVEeaiSloN_gHaHa&pid=Api&P=0'></img>
    <h3 id='info'>Café Coffee Day (CCD) is an Indian multinational chain of coffeehouses headquartered in Bengaluru, Karnataka. It is a subsidiary of Coffee Day Enterprises Limited. Internationally, CCDs are present in Austria, Czech Republic, Malaysia, Nepal and Egypt.</h3>
    <ul><a class='pro' href='https://en.wikipedia.org/wiki/Caf%C3%A9_Coffee_Day'>About</a></ul>
            <hr/>
            <div>
           
            <header>
            <a href="#">Home&nbsp; &nbsp;</a>
            <a href="#">Menu&nbsp; &nbsp;</a>
            <a href="#">About&nbsp; &nbsp;</a>
            <a href="#">My Orders&nbsp; &nbsp;</a>
            </header>
            </div>
            <hr/>
            <div className="section">
                <div>
                <h2><em>Beverages</em></h2>
                <Category name = "Coffee" price = {coffee} />
                <button onClick={Coffee}>Add to cart</button>
                <Category name = "Tea" price = {tea} />
                <button onClick={Tea}>Add to cart</button>
                <Category name = "Milkshake" price = {milk} />
                <button onClick={milkshake}>Add to cart</button>
                </div>
                <div>
                <h2><em>Pastries</em></h2>
                <Category name = "Choco Lava" price = {pie} />
                <button onClick={Apple}>Add to cart</button>
                <Category name = "Cup Cake" price = {cake}/>
                <button onClick={cakes}>Add to cart</button>
                <Category name = "Cheese cake" price = {custard}/>
                <button onClick={caramel}>Add to cart</button>
                </div>
            </div>
            <div className="cart">
                <h4>Total = {count}</h4>
                <h4>Price={price}</h4>
            </div>
            </center>
            </div>
        )
    
}
export default Coffee;

