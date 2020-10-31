import React from 'react';
import { Select,Row,Col ,Button } from 'antd';


const Colorcode  = ({names,toolType}) => {
 
    const {Option} = Select;
   const [f,setf] = React.useState()
   const [s,sets] = React.useState()
   const [t,sett] = React.useState()
   const [w,setw] = React.useState()

   const [answer1,setAnswer1] = React.useState()
   const [answer2,setAnswer2] = React.useState()

     const calculate = () => {
        const ra =Number(f)*10 + Number(s)
        const x = Number(t)                          
          const y=10**x
          setAnswer1( ra*y)
          setAnswer2( Number(w))
   
     }
     const descp = "";
  return (
    
   <div className="toolbox-layout">
       <div className="toolbox">
        <div className="toolbox-heading">Color Code Resistance</div>
          <div>
              <hr className="hr"/>
              <div className="toolbox-calc">
                  <div className="heading">Calculation</div>
            <Row style={{marginBottom:"10px"}}>
          <Col style={{flex:1}}>First strip</Col>
           <Col style={{flex:1}}>
               <Select style={{ width: 120 }} value={f} onSelect={(e)=>setf(e)}>
                   <Option value="0">Black</Option>
                   <Option value="1">Brown</Option>
                   <Option value="2">Red</Option>
                   <Option value="3">Orange</Option>
                   <Option value="4">Yellow</Option>
                   <Option value="5">Green</Option>
                   <Option value="6">Blue</Option>
                   <Option value="7">Violet</Option>
                   <Option value="8">Gray</Option>
                   <Option value="9">White</Option>
               </Select>
           </Col>
           </Row>
           <Row style={{marginBottom:"10px"}}>
          <Col style={{flex:1}}>Second strip</Col>
           <Col style={{flex:1}}>
               <Select style={{ width: 120 }} value={s} onSelect={(e)=>sets(e)}>
                   <Option value="0">Black</Option>
                   <Option value="1">Brown</Option>
                   <Option value="2">Red</Option>
                   <Option value="3">Orange</Option>
                   <Option value="4">Yellow</Option>
                   <Option value="5">Green</Option>
                   <Option value="6">Blue</Option>
                   <Option value="7">Violet</Option>
                   <Option value="8">Gray</Option>
                   <Option value="9">White</Option>
               </Select>
           </Col>
           </Row>
           <Row style={{marginBottom:"10px"}}>
          <Col style={{flex:1}}>Third strip</Col>
           <Col style={{flex:1}}>
               <Select style={{ width: 120 }} value={t} onSelect={(e)=>sett(e)}>
                   <Option value="0">Black</Option>
                   <Option value="1">Brown</Option>
                   <Option value="2">Red</Option>
                   <Option value="3">Orange</Option>
                   <Option value="4">Yellow</Option>
                   <Option value="5">Green</Option>
                   <Option value="6">Blue</Option>
                   <Option value="7">Violet</Option>
                   <Option value="8">Gray</Option>
                   <Option value="9">White</Option>
               </Select>
           </Col>
           </Row>
           <Row style={{marginBottom:"10px"}}>
          <Col style={{flex:1}}>Fourth strip</Col>
           <Col style={{flex:1}}>
               <Select style={{ width: 120 }} value={w} onSelect={(e)=>setw(e)}>
                   <Option value="5">Gold</Option>
                   <Option value="10">Silver</Option>
                   <Option value="20">None</Option>
               </Select>
           </Col>
           </Row>
           <Button className="calculate-button" onClick={()=>calculate()}>CALCULATE</Button>

           </div>
           <hr className="hr"/>
           {answer1!== undefined &&
               <div className="toolbox-calc">
            <div className="heading">RESULT</div>
                {answer1} Ohm  {answer2}%
                <hr className="hr"/>
            </div>}
           
           <div className="toolbox-calc">
             <div className="heading">DESCription</div>
              Components and wires are coded with colors to identify their value and function. 
<br/>
Resistor Color Coding uses colored bands to quickly identify a resistors resistive value and its percentage of tolerance with the physical size of the resistor indicating its wattage rating. 
             
              </div> 
              </div>
    </div></div>
   
  );
};

export default Colorcode;