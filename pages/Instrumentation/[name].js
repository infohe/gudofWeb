
import {Layout} from 'antd'
import { useRouter } from 'next/router'
import {names,toolType} from '../index'

import Navbar from '../Navbar';

import Head from 'next/head'
import { Drawer } from 'antd';
import SideNav from '../SideNav';
import DrawerNav from '../DrawerNav';
import { stringSpaceToHyphen } from '..';
import Slidertools from '../components/Slidertools';
import Zero from '../components/Zero';
import Functions from '../components/Functions'

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
  
      const [a,seta] = React.useState()
      const [b,setb] = React.useState()

     
     
      
      React.useEffect(()=> {
        if(router && router.query) {
          setQueryId(router.query.name)
          console.log("router",router.query.id)
         
        }
      }, [router,router.query])
      const [display,setDisplay] = React.useState()
      const [name,setName]= React.useState();
      const [category,setCategory] = React.useState()
      const [id,setId] = React.useState()
React.useEffect(()=>{
        if(queryid!==undefined){
          let item = names.find(item=> stringSpaceToHyphen(item.display) === router.query.name)
          setCategory(item.category)

          if(functions.find(item=> stringSpaceToHyphen(item.display) === router.query.name )!== undefined)
            {
              let vari = functions.find(item=> stringSpaceToHyphen(item.display) === router.query.name )
            
            seta(vari.a)
            setQuestion(vari.a)
            setName(vari.name)
            setb(vari.b)
            setDisplay(vari.display)}
            
           setId(item.id)
            
            console.log("id",id)
          }
      },[queryid])


     
    
    return(
      <div>
        <Head>
          <title>{router.query.name} Instrumentation Tool</title>
          <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet"/>
          
          {functions!==undefined && functions.map(item => stringSpaceToHyphen(item.display) === router.query.name
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
              <SideNav names={names} toolType={toolType} key2={"1"}/>
            </div>

            {/* toolpart */}
            <Layout className="toolbox-layout">
                {question!==undefined && category==="instrumentation" &&
                    <Slidertools desc="" display={display} a={a} b={b} res={result} qn={question} name={name}/>
                }
                {category==="electrical" &&
                                      <Functions id={id}/>}
                {category==="zero" &&
                  <Zero/>
}
                
               </Layout>
           </div>
        </div>
    )
}

export async function getStaticPaths() {
  const tools= [{display:"3-15 PSI"},
  {display:"0-20 mA"},
  {display:"4-20 mA"},
  {display:"0-25 mA"},
  {display:"0-X to % (Conversion)"},
  {display:"Resistance (from temperature)"},
  {display:"Linear mA to Square Root mA"},
  {display:"Temperature (from resistance)"},
  {display:"Temperature"},
{display:"Linear to Square Root percentage"},
{display:"Level measurement Two Seals"},
{display:"Level measurement one seal above"},
{display:"Level measurement one seal below"},
{display:"Bubble Level"},
{display:"Bubble Interface"},
{display:"Two Seal Interface"},
{display:"Open Tank"},
{display:"Interface Wet Leg"},
{display:"Liquid Purge"},
{display:"Level Transmission Closed Vessel"},
{display:"Flow Rate Calculation"},
{display:"Hydrostatic Level"},
{display:"Orifice Plate error"},
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
    const res = [
      {stringId:"1",a:0,b:20,name:"mA",display:"0-20 mA",desc:"This measurement to current converter tool will convert any linear input measurement reading into the ideal current output signal over a linear range of 0 to 20 milliamps, and display a 0-20mA conversion scale for the chosen measurement range."},
      {stringId:"2",a:4,b:20,name:"mA",display:"4-20 mA",desc:"This measurement to current converter tool will convert any linear input measurement reading into the ideal current output signal over a linear range of 4 to 20 milliamps, and display a 4-20mA conversion scale for the chosen measurement range."},
      {stringId:"3",a:0,b:25,name:"mA",display:"0-25 mA",desc:"This measurement to current converter tool will convert any linear input measurement reading into the ideal current output signal over a linear range of 0 to 25 milliamps, and display a 0-25mA conversion scale for the chosen measurement range."},
      {stringId:"0",a:3,b:15,name:"PSI",display:"3-15 PSI",desc:"This measurement to current converter tool will convert any linear input measurement reading into the ideal current output signal over a linear range of 0 to 20 milliamps, and display a 0-20mA conversion scale for the chosen measurement range."},
    ]
      
    
                      
    // Pass post data to the page via props
    return { props: { functions:res ,names:names,toolType:toolType ,params:params} }
  }
  