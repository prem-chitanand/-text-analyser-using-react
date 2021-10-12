import React,{useState} from 'react'


export default function Form(props){
   const [text, settext] = useState('')
   const [btn, setbtn] = useState("enbale dark mode")
   const [myStyle, setstyle] = useState({
       color:"black",
       backgroundColor:"white"
   })
   const toggleMode=()=>{
       if(myStyle.color==="black"){
           setstyle({
               color:"white",
               backgroundColor:"grey"
           })
           setbtn("enable light mode")
        }
        else{
            setstyle({
                color:"black",
                backgroundColor:"white"
            })
            setbtn("enable dark mode")
        }
    }
    const handleOnClick=()=>{
let newtext=text.toUpperCase();
settext(newtext);
    }
    const handleLoClick=()=>{
        let lowerText=text.toLowerCase()
        settext(lowerText);
    }
    const handleUpClick=(event)=>{
        // console.log(event.target.value);
        settext(event.target.value);
       
    }
    const handleClear=()=>{
        settext("");
    }
   
    return (
        <>
        
        <div className="jumbotron container" style={myStyle}>
            <h3>Welcome to textAnalyser</h3>
            <p>{props.desc}</p>
            <textarea className="form-control" value={text} onChange={handleUpClick} placeholder="enter your text here....."></textarea><br></br>
            <button onClick={handleOnClick} className="btn btn-success">Convert to upperCase</button>
            <button onClick={handleLoClick} className="btn btn-primary">convert to lower case</button>
            <button onClick={handleClear} className="btn btn-danger">clear text</button>
            <button onClick={toggleMode}className="btn btn-warning">{btn}</button>
            
            
            </div>
            <div className="container" style={myStyle}>
                <h2>Text summary.</h2>
                <b><p>{text.split(" ").length }words, {text.length}characters</p></b>
                <h3>text preview.</h3>
                <hr/>
                <p>{text}</p>
            </div>
           
            </>
            
        
       
    );
    }
