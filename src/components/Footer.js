import React from 'react'

function Footer({color}) {
    return (
        <div className="footer">
            <small>made with love <span style={{color:"red",backgroundColor:"black"}}>&hearts;</span> </small>
            <br/>
            <i>by</i>
            <pre>Bada Sulaimon</pre>
            <a style={{color:color}} href="mailto:badasulaimon@gmail.com">badasulaimon@gmail.com</a>
        </div>
    )
}

export default Footer
