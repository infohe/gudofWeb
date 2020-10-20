
import {Card,Row,Layout,Col,Input,Slider} from 'antd'
import { useRouter } from 'next/router'

import Navbar from '../../Navbar';

import Head from 'next/head'
import { Tabs,Drawer } from 'antd';
import SideNav from '../../SideNav';
import DrawerNav from '../../DrawerNav';

const { TabPane } = Tabs;

export default function Instrumentation({params,functions,toolType,names}){
  const [visible, setVisible] = React.useState(false);
  const showDrawer = () => {
    if(window.innerWidth<=700)
    setVisible(true);
  };

  const onClose = () => {
    setVisible(false);
  };
  React.useEffect(()=>{
    if(window.innerWidth>700)
      setVisible(false)
  })
    const [question,setQuestion] = React.useState();

    const [result,setResult] = React.useState(0);
    let vari;
    const [queryid,setQueryId] = React.useState()
    const router = useRouter()
    const {id} = router.query;
    const [array,setarray] = React.useState(names)
   const [tooltype,setTooltype] = React.useState(toolType)
   // let vari=  functions.find(item => item.stringId === queryid.toString())
    
    const setFn = (value) => {
        // setQuestion(newValue)
         setResult((value-a)*100/(b-a))
        setQuestion(value)
        console.log(value)
        document.getElementById('InputID').value = ''

      }
      const [a,seta] = React.useState()
      const [b,setb] = React.useState()

      const setIn = (e) => {
        console.log(e.target.value)
          if((e.target.value)!== NaN)
         { setQuestion(Number(e.target.value))
          setResult((Number(e.target.value)-a)*100/(b-a))}
          
      }
      const setRn = (e) => {
        if((e.target.value)!== NaN)
        {
        setResult(e.target.value)
        setQuestion(Number(e.target.value)*(b-a)/100 + a)}
        
      }
      const resultfn = (value) => {
        setResult(value)
        setQuestion(value*(b-a)/100 + a)
        
      }
      
      React.useEffect(()=> {
        if(router && router.query) {
          setQueryId(id)
          console.log("router",router.query.id)
          console.log("queryid",id)
         
        }
      }, [router,router.query])
      const [marks,setMarks]= React.useState({0:"0",100:"100"});
      const [name,setName]= React.useState();
      const [title,setTitle]= React.useState();
React.useEffect(()=>{
        if(queryid!==undefined){
            
            vari = functions.find(item=> item.stringId === queryid.toString())
            seta(vari.a)
            setName(vari.name)
            setb(vari.b)
            setTitle(router.query.name)
            setQuestion(functions.find(item => item.stringId === queryid.toString()).a)
            
          }
      },[queryid])


      React.useEffect(()=>{
        if(a!==NaN && a!==undefined && b!==NaN && b!==undefined)
        {  

            let anumber = parseInt(a)
            let astring = a.toString()
           console.log("a is",a,"b is",b)
           console.log(typeof(anumber),typeof(astring))
           if(!isNaN(a))
           setMarks(
            {a:"hello",b:"h"}
           )
        }
      },[a,b])
    
    return(
      <div>
        <Head>
          <title>{router.query.name}</title>
          <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet"/>
          
          {functions!==undefined && functions.map(item => item.stringId === router.query.id.toString()
          && <meta key="description" name="description"content={item.desc}/>) }
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

            {/* toolpart */}
            <Layout className="toolbox-layout">
          
                <div className="toolbox">
                  {queryid!==undefined && a!==undefined && question!==undefined && functions.map(item => item.stringId === queryid.toString() && 
                    <div key={item.stringId}>
                      <div className="toolbox-heading">{item.display} </div>
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
                        <hr className="hr"/>

                        <div className="toolbox-desc">
                          <div className="heading">
                            Result
                          </div>
                          {question} {name} = {result} %
                        </div>

                        <hr className="hr"/>
                          <div className="toolbox-desc">
                            <div className="heading">
                              Description
                            </div>
                            {item.desc}
                          </div>
                      </div>
                      )}
       
                   </div>
               </Layout>
           </div>
        </div>
    )
}

export async function getStaticPaths() {
  const tools= [{name:"3-15 PSI",display:"3-15 PSI",id:0,type:"instrumentation",category:"instrumentation"},
  {name:"0-20mA",display:"0-20 mA",id:1,type:"instrumentation",category:"instrumentation"},
  {name:"4-20mA",display:"4-20 mA",id:2,type:"instrumentation",category:"instrumentation"},
  {name:"0-25mA",display:"0-25 mA",id:3,type:"instrumentation",category:"instrumentation"}]

  const paths = tools!==undefined && tools.map((post) => ({
    params: {name :post.display, id: post.id.toString() }
  }))
  
    return {
        paths: paths, fallback: false // See the "fallback" section below
    };
  }
  export async function getStaticProps({ params }) {
    // params contains the post `id`.
    // If the route is like /posts/1, then params.id is 1
    const res = [
      {stringId:"1",a:0,b:20,name:"mA",display:"0-20 mA",desc:"This measurement to current converter tool will convert any linear input measurement reading into the ideal current output signal over a linear range of 0 to 20 milliamps, and display a 0-20mA conversion scale for the chosen measurement range."},
      {stringId:"2",a:4,b:20,name:"mA",display:"4-20 mA",desc:"This measurement to current converter tool will convert any linear input measurement reading into the ideal current output signal over a linear range of 4 to 20 milliamps, and display a 4-20mA conversion scale for the chosen measurement range."},
      {stringId:"3",a:0,b:25,name:"mA",display:"0-25 mA",desc:"This measurement to current converter tool will convert any linear input measurement reading into the ideal current output signal over a linear range of 0 to 25 milliamps, and display a 0-25mA conversion scale for the chosen measurement range."},
      {stringId:"0",a:3,b:15,name:"PSI",display:"3-15 PSI",desc:"This measurement to current converter tool will convert any linear input measurement reading into the ideal current output signal over a linear range of 0 to 20 milliamps, and display a 0-20mA conversion scale for the chosen measurement range."},
    ]
      
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
    return { props: { functions:res ,names:tools,toolType:tooltype ,params:params} }
  }
  