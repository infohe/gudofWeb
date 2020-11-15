
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
  const [desc,setDesc] = React.useState()
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
            setDisplay(vari.display)
            setDesc(vari.desc)

          }
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
                    <Slidertools desc={desc} display={display} a={a} b={b} res={result} qn={question} name={name}/>
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
      {stringId:"1",a:0,b:20,name:"mA",display:"0-20 mA",desc:"The 0-20mA is current output signal, in this the 0 ma is 0% and 20ma is 100%, so if we give a value like 5 in this then it is the 25%. This will do the conversion of 0-20ma into 0-100%"},
      {stringId:"2",a:4,b:20,name:"mA",display:"4-20 mA",desc:"This is an analog signal and can be seen in many industrial process for electronic signaling and the 4-20mA shows the measurement of the control in the range from 0-100% and 4 is the lowest and 20 is the maximum value. The 4-20ma will be converted into 0-100% so if we give a value 12 then this tool shows how much percentage in 4-20ma."},
      {stringId:"3",a:0,b:25,name:"mA",display:"0-25 mA",desc:"By using this tool we can convert the 0-25mA into 0-100%, in this the 0 will be zero percent and 25 will be hundred percent. "},
      {stringId:"0",a:3,b:15,name:"PSI",display:"3-15 PSI",desc:"A three to fifteen PSI is an instrumentation signal it shows the pressure value and the lowest value is three and the highest value is fifteen. The 3-15 Psi input will be converted to the 0-100 range. If we give a value 9 then it is the 50% in 3-15 PSI. So if we consider the 4-20ma, 4 is the zero percent which is three and 20 is 100% that is 15. In reverse action 4ma will be 15psi and 20ma will be 3psi. "},
    ]
      
    
                      
    // Pass post data to the page via props
    return { props: { functions:res ,names:names,toolType:toolType ,params:params} }
  }
  