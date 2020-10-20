import React from 'react'
import Head from 'next/head'
import { Tabs,Drawer } from 'antd';
import SideNav from '../../SideNav';
import DrawerNav from '../../DrawerNav';

import { Layout ,Button,Row,Col,Input} from 'antd';
import Navbar from '../../Navbar';
import { useRouter } from 'next/router'


const Zero = ({names,toolType}) => {
  const descp = " Zero to X percentage conversion is a tool which finds percentages between two numbers."
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

// const id = props.match.params.id
// conversions.map(item=> console.log(item))

return(
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
              <DrawerNav names={names} toolType={toolType}/>
            </Drawer>

            {/* fixed side menu */}
            <div className="tools-left">
              <SideNav names={names} toolType={toolType}/>
            </div>
   <Layout className="tool">

        <div className="heading">0-X % Conversion</div>
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
     
   
   <Row> 
   
</Row>
<Row  className="row">
  <Col style={{textAlign:"center"}}>
    <Button class="calculate-button" onClick={()=>click()}>Calculate</Button>
  </Col>
</Row>
  
   
     {r!==undefined &&
    <div className="result">
        
          <div className="resultheading">RESULT</div>
              
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
  
       


 <div className="descp">This tool is used to calculate 0% , 25% , 50% , 75% ,and 100% of range between two numbers.</div> 
 </Layout>
 </div>
 </div>
)
}
export default Zero;

export async function getStaticPaths() {

    return {
        paths:[
          { params: { id: '4', name:'zero'} },
      
        ], fallback: false // See the "fallback" section below
    };
  }
  export async function getStaticProps({ params }) {
  
      
    const tools =[ 
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
    {name:"eff2",display:"Eff Tension from Torque and Radius",id:69,type:"electrical",category:"electrical"},]
    
    const tooltype = [{id:1,type:"instrumentation",name:"INSTRUMENTATION",show:false},
                    {id:2,type:"electrical",name:"ELECTRICAL",show:false},
                    {id:3,type:"conversions",name:"UNIT CONVERSION",show:false}]
                      
    // Pass post data to the page via props
    return { props: {names:tools,toolType:tooltype ,params:params} }
  }
  