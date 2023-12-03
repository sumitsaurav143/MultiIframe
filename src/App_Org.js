import logo from './logo.svg';
import './App.css';
import { useState, useEffect } from 'react';
import Axios from 'axios';

function App() {


  const [Env,setEnv]=useState();
  const [Fid,setFid]=useState();
  const [Bid,setBid]=useState();
  const [dbData,setDbdata]=useState([]);
  const [trigger,setTrigger]=useState(false);

  // useEffect(()=>{
  //   Axios.get('http://localhost:9090/api/get',{f_id:Fid,b_id:Bid}).then((response)=>{
  //     console.log(response.data);
  //     //setDbdata(...dbData,{response.data});
  //   })
  // },[trigger])


  const checkdata=()=>{
    //alert(`Checking data for ${Fid} [ ${Bid} ] in ${Env} Environment`);
    console.log("Checking data for "+Fid+" and "+Bid+" in "+Env);

    Axios.post('http://localhost:9090/api/get',{f_id:Fid,b_id:Bid}).then((response)=>{
      console.log(response.data);
      setDbdata(response.data);
      setTrigger(!trigger);
    })
  }


  return (
    <div className="App">
      <div className="App-header">
        <div>
          <h1>DB DATA CHECKER</h1>
        </div>
        <div>
          <table>
            <tr>
              <td>
              Environment: 
              </td>
              <td>
              <select onChange={(e)=>setEnv(e.target.value)} style={{height:"35px",marginLeft:"50px", fontSize:"18px"}}>
              <option>----Select Environment----</option>
              <option value="QA1">QA1</option>
              <option value="QA2">QA2</option>
              <option value="QA6">QA6</option>
              <option value="QA7">QA7</option>
              <option value="QA7">QA8</option>
              <option value="E7" >E7</option>
            </select>
              </td>
            </tr>
            <tr>
              <td>
              Frontend Id:
              </td>
              <td>
              <input onChange={(e)=>setFid(e.target.value)} type="text" id="fname" name="fid" style={{height:"25px",marginLeft:"50px", fontSize:"18px"}}/>
              </td>
            </tr>
            <tr>
              <td>
              Brand Id:
              </td>
              <td>
              <input onChange={(e)=>setBid(e.target.value)} type="text" id="fname" name="bid" style={{height:"25px",marginLeft:"50px", fontSize:"18px"}}/>
              </td>
            </tr>
            <tr style={{height:"100px"}}>
              <td></td>
              <td><button onClick={checkdata} style={{height:"40px",marginLeft:"50px", fontSize:"18px" }}>CHECK</button></td>
            </tr>
          </table>
          <table>
        {dbData.map((row)=>{
            return <tr>
              {JSON.stringify(row)}
              {/* {row.map((col)=>{ 
                return <td>{col}</td>})} */}
           </tr>})}
          </table>
        </div>
      </div>
    </div>
  );
}

export default App;
