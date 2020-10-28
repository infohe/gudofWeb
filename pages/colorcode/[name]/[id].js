import React from 'react';
import { Select,Row,Col ,Button } from 'antd';
import Navbar from '../../Navbar';
import { useRouter } from 'next/router'

import Head from 'next/head'
import { Tabs,Drawer } from 'antd';
import SideNav from '../../SideNav';
import DrawerNav from '../../DrawerNav';
import { stringSpaceToHyphen } from '../..';


const Colorcode  = ({names,toolType}) => {
    const [visible, setVisible] = React.useState(false);
  const showDrawer = () => {
    if(window.innerWidth<=700)
    setVisible(true);
  };
  const router = useRouter()

  const onClose = () => {
    setVisible(false);
  };
  React.useEffect(()=>{
    if(window.innerWidth>700)
      setVisible(false)
  })
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
    <div>
    <Head>
      <title>{router!==undefined && router.query.name}</title>
      <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet"/>
      
     
       <meta key="description" name="description"content={descp}/>
    </Head>
    <Navbar showDrawer={showDrawer}/>

    <div className="tools-container">
            {/* sliding drawer */}
            <Drawer width={350} title="gudofConvert" placement="left" closable={true} onClose={onClose} visible={visible}>
              <DrawerNav names={names} toolType={toolType} onClose={()=>setVisible(false)}/>
            </Drawer>

            {/* fixed side menu */}
            <div className="tools-left">
              <SideNav names={names} toolType={toolType}/>
            </div>
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
            </div>}
            <hr className="hr"/>
           <div className="toolbox-calc">
             <div className="heading">DESCription</div>
              Components and wires are coded with colors to identify their value and function. 
<br/>
Resistor Color Coding uses colored bands to quickly identify a resistors resistive value and its percentage of tolerance with the physical size of the resistor indicating its wattage rating. 
             
              </div> 
              </div>
    </div></div>
    </div>
    </div>
  );
};

export default (Colorcode);

export async function getStaticPaths() {
      return {
          paths:[
            { params: { id: '30', name:stringSpaceToHyphen('Color code Resistance')} },
        
          ], fallback: false // See the "fallback" section below
      };
    }
    export async function getStaticProps({ params }) {
    
        
      const tools =[ 
        {name:"frequency",display:"Frequency",id:33,type:"electrical",category:"electrical"},
        {name:"timeperiod",display:"Time Period",id:22,type:"electrical",category:"electrical"},
   
        {name:"3-15 PSI",display:"3-15 PSI",id:0,type:"instrumentation",category:"instrumentation"},
      {name:"0-20mA",display:"0-20 mA",id:1,type:"instrumentation",category:"instrumentation"},
      {name:"4-20mA",display:"4-20 mA",id:2,type:"instrumentation",category:"instrumentation"},
      {name:"0-25mA",display:"0-25 mA",id:3,type:"instrumentation",category:"instrumentation"},
       {name:"zero",display:"0-X to % (Conversion)",id:4,type:"instrumentation",category:"zero"},
      {children:"brightness_1",name:"area",display:"Area",id:5,type:"conversions",category:"conversion"},
      {children:"chat",name:"force",display:"Force",id:6,type:"conversions",category:"conversion"},
      {name:"energy",display:"Energy",id:7,type:"conversions",category:"conversion"},
      {name:"fuel_consumption",display:"Fuel Consumption",id:8,type:"conversions",category:"conversion"},
        {name:"time",display:"Time",id:9,type:"conversions",category:"conversion"},
        {name:"mass",display:"Mass",id:10,type:"conversions",category:"conversion"},
        {name:"length",display:"Length",id:11,type:"conversions",category:"conversion"},
        {name:"digital_storage",display:"Data Storage",id:12,type:"conversions",category:"conversion"},
        {name:"resistancetemp",display:"Resistance (from temperature)",id:13,type:"instrumentation",category:"electrical"},
        {name:"linearma",display:"Linear mA to Square Root mA",id:14,type:"instrumentation",category:"electrical"},
        {name:"temperature",display:"Temperature (from resistance)",id:15,type:"instrumentation",category:"electrical"},
        {name:"temperature",display:"Temperature",id:16,type:"conversions",category:"conversion"},
      {name:"linear",display:"Linear to Square Root percentage",id:17,type:"instrumentation",category:"electrical"},
      {name:"electric_current",display:"Current",id:18,type:"conversions",category:"conversion"},
      {name:"ohms", display:"Ohms law (R)",id:19, stringId:"19",type:"electrical",category:"electrical"},
      {name:"ohmsi",display:"Ohms law (I)",id:20,type:"electrical",category:"electrical"},{
        name:"aircore",display:"Air Core Inductance",id:21,type:"electrical",category:"electrical"},{
        name:"laser",display:"Laser Real-Time Converter",id:22,type:"electrical",category:"electrical"},{
        name:"ohmsv",display:"Ohms Law (V)",id:23,type:"electrical",category:"electrical"},{
        name:"parallel",display:"Parallel Resistance",id:24,type:"electrical",category:"electrical"},{
        name:"velocitysound",display:"Velocity of Sound",id:25,type:"electrical",category:"electrical"},
        {name:"lcresonance",display:"LC Resonance",id:26,type:"electrical",category:"electrical"},
        {name:"voltagediv",display:"Voltage Divider",id:27, type:"electrical",category:"electrical"},
        {name:"speedtime",display:"Time (Speed)",id:28,type:"extra",category:"electrical"}, {
        name:"wheat",display:"Wheatstone bridge",id:29,type:"electrical",category:"electrical"}, {
        name:"color",display:"Color code Resistance",id:30,type:"electrical",category:"color"},
        {name:"powerrv",display:"Power (with R,V)",id:31, stringId:"31",type:"electrical",category:"electrical"},
        {name:"powervi",display:"Power (with V,I)",id:32,type:"electrical" ,category:"electrical"},
        {name:"frequency",display:"Frequency",id:33,type:"electrical",category:"electrical"},
        {name:"speedspeed",display:"Speed",id:34,type:"extra",category:"electrical"},
        {name:"distance",display:"Distance (Speed)",id:35,type:"extra",category:"electrical"},
        {name:"volume",display:"Volume",id:36,type:"conversions",category:"conversion"},
        {name:"pressure",display:"Pressure",id:37,type:"conversions",category:"conversion"},
        {name:"speed",display:"Speed",id:38,type:"conversions",category:"conversion"},
        {name:"power",display:"Power",id:39,type:"conversions",category:"conversion"},
        {name:"powerir", display:"Power (with R,I)",id:40,type:"electrical",category:"electrical"},{
        name:"wavelength",display:"Wavelength",id:41,type:"extra",category:"electrical"},{
        name:"powerline",display:"Power Factor 3Phase (Line)",id:42,type:"electrical",category:"electrical"},{
        name:"powerneutral",display:"Power Factor 3Phase (neutral)",id:43,type:"electrical",category:"electrical"},
       {name:"power",display:"Power Factor Single Phase",id:44, stringId:"44",type:"electrical",category:"electrical"},{
        name:"charge",display:"Charge",id:45,type:"conversions",category:"conversion"},
        {name:"speedhorse",display:"Speed (Horsepower)",id:46, stringId:"46",type:"electrical",category:"electrical"},
        {name:"torque",display:"Torque (HorsePower)",id:47,type:"electrical",category:"electrical"},
        {name:"horsepower",display:"HorsePower",id:48,type:"electrical",category:"electrical"},  
      {name:"twoseals",display:"Level measurement Two Seals",id:49,type:"instrumentation",category:"electrical"},
      {name:"onesealabove",display:"Level measurement one seal above",id:50,type:"instrumentation",category:"electrical"},
      {name:"onesealbelow",display:"Level measurement one seal below",id:51,type:"instrumentation",category:"electrical"},
      {name:"bubblelevel",display:"Bubble Level",id:52,type:"instrumentation",category:"electrical"},
      {name:"bubbleinterface",display:"Bubble Interface",id:53,type:"instrumentation",category:"electrical"},
      {name:"twosealint",display:"Two Seal Interface",id:54,type:"instrumentation",category:"electrical"},
      {name:"opentank",display:"Open Tank",id:55,type:"instrumentation",category:"electrical"},
      {name:"intwet",display:"Interface Wet Leg",id:56,type:"instrumentation",category:"electrical"},
      {name:"liquidpurge",display:"Liquid Purge",id:57,type:"instrumentation",category:"electrical"},
      {name:"LT3",display:"Level Transmission Closed Vessel",id:58,type:"instrumentation",category:"electrical"},
      {name:"short",display:"Short Circuit Calculation",id:59,type:"electrical",category:"electrical"},
      {name:"transformer",display:"Transformer Fault Current",id:60,type:"electrical",category:"electrical"},
      {name:"DOL",display:"DOL Star & Delta",id:61,type:"electrical",category:"electrical"},
      {name:"flowrate",display:"Flow Rate Calculation",id:62,type:"instrumentation",category:"electrical"},
      {name:"hydrost",display:"Hydrostatic Level",id:63,type:"instrumentation",category:"electrical"},
      {name:"orifice",display:"Orifice Plate error",id:64,type:"instrumentation",category:"electrical"},
      {name:"lb",display:"LbIn to Nm",id:65,type:"electrical",category:"electrical"},
      {name:"nm",display:"Nm to LbIn",id:66,type:"electrical",category:"electrical"},
      {name:"dcmotor",display:"DC Motor horsepower",id:67,type:"electrical",category:"electrical"},
      {name:"eff1",display:"Eff Tension from HP & FPM",id:68,type:"electrical",category:"electrical"},
      {name:"eff2",display:"Eff Tension from Torque and Radius",id:69,type:"electrical",category:"electrical"},
      {name:"",display:"Gear Pump Displacement",id:81,type:"mechanical",category:"electrical"},
      {name:"",display:"Stroke's Law",id:82,type:"mechanical",category:"electrical"},
      {name:"",display:"Flow Velocity",id:83,type:"mechanical",category:"electrical"},
      {name:"",display:"Hooke's Law (Force)",id:84,type:"mechanical",category:"electrical"},
      {name:"",display:"Hooke's Law (Spring constant)",id:85,type:"mechanical",category:"electrical"},
      {name:"",display:"Strain",id:86,type:"mechanical",category:"electrical"},
      {name:"",display:"K Value & Pipe Length",id:87,type:"mechanical",category:"electrical"},
      {name:"",display:"Young's modulus",id:88,type:"mechanical",category:"electrical"},
      {name:"",display:"Weber Number",id:89,type:"mechanical",category:"electrical"},
      {name:"",display:"Chezy Coefficient",id:90,type:"mechanical",category:"electrical"},
      {name:"",display:"Cauchy Number",id:91,type:"mechanical",category:"electrical"},
      {name:"",display:"Bulk Modulus Elasticity",id:92,type:"mechanical",category:"electrical"},

]
      
      const tooltype = [{id:1,type:"instrumentation",name:"INSTRUMENTATION",show:false},
                      {id:2,type:"electrical",name:"ELECTRICAL",show:false},
                      {id:3,type:"conversions",name:"UNIT CONVERSION",show:false}
                      ,{id:4,type:"mechanical",name:"MECHANICAL",show:false}]

                        
      // Pass post data to the page via props
      return { props: {names:tools,toolType:tooltype ,params:params} }
    }
    