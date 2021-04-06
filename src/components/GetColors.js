import React from 'react'



function copy() {
    const copyText = document.querySelector(".value");
    copyText.select()
    document.execCommand("copy");
}

const handleCopy = async ()=>{
    await copy()
    setTimeout(()=> alert("copied"),300)
    
}

function GetColors({color}) {

    return (
       <div className={!color ? " " : "colorText"}>
           {!color && <h1 className="arr">&uarr;</h1>}
        <div>
        {
           !color ? <h6>select a color from the color box and get the code here</h6>
           :<input className="value" id="copyMe"  value={color} onClick={handleCopy}/>
        }
        </div>
        
       </div> 
    )
}

export default GetColors
