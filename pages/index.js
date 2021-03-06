import Head from 'next/head'
import { Card, Row,Input,Layout } from 'antd';
import React from 'react';
import { Tabs } from 'antd';

const { TabPane } = Tabs;
import Link from 'next/link'
import NavbarMain from './NavbarMain';

export default function Home() {
  
  
  const [array,setArray] = React.useState(names)
  const  [tooltype,setTooltype] = React.useState(toolType)    
  const handleChangeTrue = () => {
    let newTooltype = tooltype
    newTooltype.map(item=>item.show =true)
    setTooltype(newTooltype)
  }
  
  const [tools,setTools] = React.useState(names)

  const handleSearch = (key) => {
    console.log("key",key)
    handleChangeTrue()
    setArray(tools.filter((item) => ((key!== "") && item.display.toLowerCase().indexOf(key.toLowerCase())!== -1) ))
    if(key ==="")
       setArray(tools)
       console.log(array)
  }

  const handleShow = (id) => {
    let newTooltype = tooltype
    newTooltype.map(item=>item.id===id &&( item.show=!item.show))
    setTooltype(newTooltype)
    console.log(tooltype)
    setBool(!bool)
  }

 const descp = "This tool will be very useful for instrumentation and electrical engineers, by using this tool we can do many calculations and conversions related to electrical and instrumentation and this tool will also be useful to students and to the people who works in the electrical and the instrumentation field. By using the instrumentation conversion and calculation tool we can calculate the flow rate, hydrostatic level, linear to square root percentage and lot more.By using the electrical tool we can calculate the resistance of the resistor by its color code, power, frequency, voltage, power-factor can also be calculated and we can do a lot more calculations by this. This app can also be used to do certain unit conversions such as time, mass, length, etc. We can also do certain mechanical calculations by this such as gear pump displacement, belt length etc."
  const [bool,setBool] = React.useState(true)
    return (
    <div>
     
      <Head>
      
        <title>converter.gudof.com</title>
        <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet"/>
        <meta key="description" name="description"content={descp}/>
      </Head>

      <body style={{fontFamily:'Nexalight'}}>
        <Layout>
        <NavbarMain/>
        
        <Tabs className="desktopview" style={{marginTop:"60px"}} defaultActiveKey="1">
      
        {tooltype!==undefined &&
          tooltype.map(
            (type) =>  <TabPane tab={type.name} key={type.id}>
                <div style={{marginLeft:"20px",marginRight:"20px"}}>
                      <Input style={{marginLeft:"10px",marginRight:"30px"}} placeholder="Search" prefix={<i style={{marginTop:"-5px"}} className="material-icons">search</i>} onInput={(e)=>handleSearch(e.target.value)} />
                    <Row >
                      
                    {array.map(item=> item.type === type.type &&
                     <>
                      {item.type === 'instrumentation' &&
                          <Link href={`Instrumentation/${stringSpaceToHyphen(item.display)}`} passHref>
                            <Card className="carditems" style={{flex:1}}>
                             <a>{item.display}</a>
                             </Card> 
                      </Link>  }
                      {item.type === 'electrical' &&
                        <Link href={`Electrical/${stringSpaceToHyphen(item.display)}`} passHref>
                          <Card className="carditems" style={{flex:1}}>
                             <a>{item.display}</a>
                             </Card>
                      </Link> }
                      {item.type === 'conversions' &&
                        <Link href={`Conversion/${item.name}`}>
                          <Card className="carditems" style={{flex:1}} passHref>
                             <a>{item.display}</a>
                             </Card>
                      </Link> }
                      {item.type === 'mechanical' &&
                        <Link href={`Mechanical/${stringSpaceToHyphen(item.display)}`} passHref>
                          <Card className="carditems" style={{flex:1}}>
                             <a>{item.display}</a>
                             </Card>
                      </Link> }

                     </>)}
                     </Row></div>
                                       </TabPane>
          )
        }
        </Tabs>

        {/* MOBILE VIEW */}

        <Layout className="mobileview">
      <Input placeholder="Search" style={{marginTop:"10px",marginBottom:"10px"}} prefix={<i style={{marginTop:"-5px"}} className="material-icons">search</i>} onInput={(e)=>handleSearch(e.target.value)} />

        {tooltype!==undefined &&
          tooltype.map(
            (type) => 
            <div>
              <div onClick={()=>{
        
                handleShow(type.id)}} style={{display:"flex",height:"45px"}}>
                <div style={{flex:1}}></div>
                <div style={{flex:10}}>{type.name}</div>
                <i style={{flex:1}} className="material-icons">arrow_drop_down</i>
                </div>
               {type.show   && <div style={{marginLeft:"20px",marginRight:"20px"}}>
                    <Row >
                      
                    {array.map(item=> item.type === type.type &&
                     <div style={{   width:"100%",
                      border:"0px",
                      marginBottom: "5px",
                      padding:"0px",
                      paddingLeft: "15px",
                      height:"40px"}} >
                       <div style={{margin:"auto"}}>
                      {item.type === 'instrumentation' &&
                          <Link href={`Instrumentation/${stringSpaceToHyphen(item.display)}`}>
                             <a>{item.display}</a>
                      </Link>  }
                      {item.type === 'electrical' &&
                        <Link href={`Electrical/${stringSpaceToHyphen(item.display)}`}>
                          <a>{item.display}</a>
                      </Link> }
                      {item.type === 'conversions' &&
                        <Link href={`Conversion/${item.name}`}>
                          <a>{item.display}</a>
                      </Link> }
                      {item.type === 'mechanical' &&
                        <Link href={`Mechanical/${stringSpaceToHyphen(item.display)}`}>
                          <a>{item.display}</a>
                      </Link> }
                      </div>
                     </div>)}
                    </Row></div> }
                                       </div>
          )
        }
        </Layout>

        </Layout>
        </body>
        
      </div>
   


  )
}

export const stringSpaceToHyphen= (string)=>{
  // return ((string.split(" ").join("-")).split("(").join("-")).split(")").join("-");
  return (string.split(" ").join("-")).split("%").join("percentage");

}

export const windowSize = () => {

}
export const names =[ 
  {name:"frequency",display:"Frequency",id:33,type:"electrical",category:"electrical",desc:"Frqueunce is "},
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
  // name:"laser",display:"Laser Real-Time Converter",id:22,type:"electrical",category:"electrical"},{
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
  // {name:"frequency",display:"Frequency",id:33,type:"electrical",category:"electrical"},
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
  {name:"",display:"Belt Length",id:80,type:"mechanical",category:"electrical"},

]
  
export const toolType = [{id:1,type:"instrumentation",name:"INSTRUMENTATION",show:false},
                {id:2,type:"electrical",name:"ELECTRICAL",show:false},
                {id:3,type:"conversions",name:"UNIT CONVERSION",show:false}
              ,{id:4,type:"mechanical",name:"MECHANICAL",show:false}]
          
