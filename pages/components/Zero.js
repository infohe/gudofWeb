import React from 'react'

import { Button,Row,Col,Input} from 'antd';

const Zero = () => {


 
  const [s,sets] =React.useState(0)
  const [e,sete] =React.useState(100)
  const [r,setr]=React.useState()


const setS= (e) => {
    sets(Number(e.target.value))
    calculate()

}
const setE= (e) => {
    sete(Number(e.target.value))
    calculate()

}
const calculate = () => { 
    
    setr(e -s)
}
const click = () => {
    calculate();

  }

return(
 <div className="toolbox">
        <div className="toolbox-heading">0-X % Conversion</div>
        <hr className="hr"/>
        <div className="toolbox-calc">
        <div className="heading">Calculation</div>

      <Row className="row">
           <Col span={12}>Start Value</Col>
                <Col span={12}><Input className="input box" style={{border:"1px solid gray"}} type="text" value={s}  onChange={e=>setS(e)}></Input>
            </Col >
            
      </Row>
      <Row  className="row">
           <Col span={12}>End value</Col>
                <Col span={12}><Input className="input box" style={{border:"1px solid gray"}} type="text" value={e}  onChange={e=>setE(e)}></Input>
            </Col>
      </Row>
     
   

<Row  className="toolbox-descp">
  <Col style={{textAlign:"center"}}>
    <Button className="calculate-button" onClick={()=>click()}>Calculate</Button>
  </Col>
</Row>
</div>
   
                          

     {r!==undefined &&
      <div className="toolbox-calc">  
      <hr className="hr"/>      
          <div className="heading">RESULT</div>
              
           <Row>
                <Col span={12} className="result-head"> 0%</Col>
                <Col> {s} </Col>
            </Row>  
            <Row>
                <Col span={12} className="result-head"> 25%</Col>
                <Col> {(r/4 +Number(s))} </Col>
            </Row> 
            <Row>
                <Col span={12} className="result-head"> 50%</Col>
                <Col> {(r/2 +Number(s))} </Col>
            </Row> 
            <Row>
                <Col span={12} className="result-head"> 75%</Col>
                <Col> {(r)*3/4 + Number(s)}  </Col>
            </Row> 
            <Row>
                <Col span={12} className="result-head"> 100%</Col>
                <Col> {e} </Col>
            </Row> 
            
            
         
        
     </div> }
  
     <hr className="hr"/>

<div className="toolbox-descp toolbox-calc">
  <div className="heading">description</div>
 <div className="">This tool is used to calculate 0% , 25% , 50% , 75% ,and 100% of range between two numbers.</div> 
 </div>
 </div>
)
}
export default Zero;

