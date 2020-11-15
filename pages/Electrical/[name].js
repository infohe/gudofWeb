
import {Layout,Col,Input,Slider} from 'antd'
import { useRouter } from 'next/router'
import {names,toolType} from '../index'

import Navbar from '../Navbar';

import Head from 'next/head'
import { Tabs,Drawer } from 'antd';
import SideNav from '../SideNav';
import DrawerNav from '../DrawerNav';
import { stringSpaceToHyphen } from '..';
import Slidertools from '../components/Slidertools';
import Functions from '../components/Functions';
import Colorcode from '../components/Colorcode';

const { TabPane } = Tabs;

export default function Instrumentation({params,functions,toolType,names}){
    const router = useRouter()
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
  const [id,setId] =React.useState() 
  const [category,setCategory] = React.useState()
      React.useEffect(()=> {
        if(router && router.query) {
          
         names.map(
             item=>{if( stringSpaceToHyphen(item.display)===router.query.name) {
                                 setId(item.id) 
                    setCategory(item.category)
                     console.log(item.category)
             }}
         )
        }
      }, [router,router.query])


      
    
    
    return(
      <div>
        <Head>
          <title>{router.query.name} Electrical Tools</title>
          <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet"/>
          
          {names!==undefined && names.map(item => stringSpaceToHyphen(item.display) === router.query.name
          && <meta key="description" name="description"content={item.desc}/>) }
        </Head>
        <Navbar showDrawer={showDrawer}/>

    
        <div className="tools-container">
            {/* sliding drawer */}
            <Drawer width={350} title="gudofConvert" placement="left" closable={true} onClose={onClose} visible={visible}>
              <DrawerNav names={names} toolType={toolType} onClose={()=>setVisible(false)}/>
            </Drawer>

            {/* fixed side menu */}
            <div className="tools-left">
              <SideNav names={names} toolType={toolType} key2={"2"} />
            </div>

            {/* toolpart */}
            <Layout className="toolbox-layout">
                {category==="electrical" &&

                    <Functions id={id}/>}
                    {category==="color" &&

                        <Colorcode/>}
               </Layout>
           </div>
        </div>
    )
}

export async function getStaticPaths() {
    const tools = [
        {name:"resistancetemp",display:"Resistance (from temperature)",id:13,type:"instrumentation",category:"electrical"},
        {name:"linearma",display:"Linear mA to Square Root mA",id:14,type:"instrumentation",category:"electrical"},
        {name:"temperature",display:"Temperature (from resistance)",id:15,type:"instrumentation",category:"electrical"},
      {name:"linear",display:"Linear to Square Root percentage",id:17,type:"instrumentation",category:"electrical"},
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
        name:"wheat",display:"Wheatstone bridge",id:29,type:"electrical",category:"electrical"}, 
        {name:"powerrv",display:"Power (with R,V)",id:31, stringId:"31",type:"electrical",category:"electrical"},
        {name:"powervi",display:"Power (with V,I)",id:32,type:"electrical" ,category:"electrical"},
         {name:"frequency",display:"Frequency",id:33,type:"electrical",category:"electrical"},
         {name:"timeperiod",display:"Time Period",id:22,type:"electrical",category:"electrical"},
    
        {name:"speedspeed",display:"Speed",id:34,type:"extra",category:"electrical"},
        {name:"distance",display:"Distance /(Speed)",id:35,type:"extra",category:"electrical"},
        
        {name:"powerir", display:"Power (with R,I)",id:40,type:"electrical",category:"electrical"},{
        // name:"wavelength",display:"Wavelength",id:41,type:"extra",category:"electrical"},{
        name:"powerline",display:"Power Factor 3Phase (Line)",id:42,type:"electrical",category:"electrical"},{
        name:"powerneutral",display:"Power Factor 3Phase (neutral)",id:43,type:"electrical",category:"electrical"},
       {name:"power",display:"Power Factor Single Phase",id:44, stringId:"44",type:"electrical",category:"electrical"},
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

      {display:"Color code Resistance",id:30,descp:""},

    
    
    
    ]


  const paths = tools!==undefined && tools.map((post) => ({
    params: {name :stringSpaceToHyphen(post.display) }
  }))
  
    return {
        paths: paths, fallback: false // See the "fallback" section below
    };
  }
  export async function getStaticProps({ params }) {
    // params contains the post `id`.
    // If the route is like /posts/1, then params.id is 1
    
                      
    // Pass post data to the page via props
    return { props: { names:names,toolType:toolType ,params:params} }
  }
  