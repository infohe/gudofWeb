import React from 'react';
import {Menu, Layout} from 'antd'
import Link from 'next/link'
import {Col,Input,Slider} from 'antd'
import Head from 'next/head';

export default function Slidertools({a,b,name,qn,res,display,desc,functions, showDrawer}) {

    const [question,setQuestion] = React.useState(qn)
    const [result,setResult] = React.useState(res)
    const [ resultn,setResultn] = React.useState()
    const setFn = (value) => {
        // setQuestion(newValue)
        setResultn(1);
         setResult((value-a)*100/(b-a))
        setQuestion(value)
        console.log(value)
        document.getElementById('InputID').value = ''

      }
    
      const setIn = (e) => {
        setResultn(1);

        console.log(e.target.value)
          if((e.target.value)!== NaN)
         { setQuestion(Number(e.target.value))
          setResult((Number(e.target.value)-a)*100/(b-a))}
          
      }
      const setRn = (e) => {
        setResultn(1);

        if((e.target.value)!== NaN)
        {
        setResult(e.target.value)
        setQuestion(Number(e.target.value)*(b-a)/100 + a)}
        
      }
      const resultfn = (value) => {
        setResultn(1);

        setResult(value)
        setQuestion(value*(b-a)/100 + a)
        
      }
    return (
       <div>
         <Head>
         <meta key="description" name="description" content={desc}/>

         </Head>
            {a!==undefined && <div className="toolbox">
                  
                    <div>
                      <div className="toolbox-heading">{display} </div>
                      <hr className="hr"/>

                      <div className="toolbox-calc">
                          <div className="heading">
                            Calculation
                          </div>
          
                          <br/>
                          <div style={{marginBottom:"10px",display:"flex",alignItems:"center"}}>
                            <Input style={{flex:4,marginRight:"10px"}} type="number" className="input" id="InputID" placeholder={question.toString()+" "+ name} onChange={(e)=>setIn(e)}/>
                            <div style={{flex:2}}>
                              <div style={{float:"right"}}>
                              {a} {name}
                              </div>
                            </div>
                            <Slider style={{flex:10}} min={a} max={b} value={question}  onChange={(e)=>setFn(e)} />
                            <div style={{flex:2}}>{b} {name}</div>
                          </div>
                          <div style={{display:"flex",alignItems:"center"}}>
                            <Input style={{flex:4,marginRight:"10px"}} type="number" className="input" id="InputID2" placeholder={result.toString()+" %"} onChange={(e)=>setRn(e)}/>
                            <div style={{flex:2,float:"right"}}>
                              <div style={{float:"right"}}>
                                 0%
                              </div>
                            </div>
                            <Slider style={{flex:10}} value={result} onChange={(e)=>resultfn(e)}  />
                            <div style={{flex:2}}>100%</div>
                          </div>
                         <br/>

                        </div>
{resultn!==undefined &&
<div>
<hr className="hr"/>
                      <div className="toolbox-desc">
                        <div className="heading">
                          Result
                        </div>
                        {question} {name} = {result} %
                       
                      </div></div>}

                        <hr className="hr"/>
                          <div className="toolbox-desc toolbox-calc">
                            <div className="heading">
                              Description
                            </div>
                            {desc}
                          </div>
                      </div>
                      
       
                   </div>}
       </div>
  )
}

