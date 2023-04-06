import React from 'react'

export default function Listfn() {
    var colours=["Red","orange","Green","Pink"]
    var display=colours.map(cname=>{return <li>{cname}</li>})
    const stuname=[{id:1,name:"Jaya"},{id:2,name:"Kavi"},{id:3,name:"Harshi"},{id:4,name:"Raji"}]
  return (
    <div>
    {display}<br></br>
    {stuname.map((sname)=>{return <li key={sname.id}>{sname.id}{sname.name}</li>})}
    <TryCatch name="Raja" />
    </div>
  )
}
function TryCatch(props) {
  try{
      if(props.name==="Raja")
      {
          throw new Error("invalid user")
      }
  }
  catch(error)
  {
      console.log(error)
     // document.write("invalid user")
  }
  
return (
  <div><p>{props.name}</p></div>
)
}