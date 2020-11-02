
import {Layout} from 'antd'
import { useRouter } from 'next/router'
import {names,toolType} from '../index'
import Head from 'next/head'
import { Drawer } from 'antd';
import { stringSpaceToHyphen } from '..';
import SideNav from '../SideNav';
import DrawerNav from '../DrawerNav';
import Functions from '../components/Functions'
import Navbar from '../Navbar'

export default function Mechanical({params,toolType,names}){
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
          <title>{router.query.name} Mechanical Tools</title>
          <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet"/>
        </Head>
        <Navbar showDrawer={showDrawer}/>

    
        <div className="tools-container">
            {/* sliding drawer */}
            <Drawer width={350} title="gudofConvert" placement="left" closable={true} onClose={onClose} visible={visible}>
              <DrawerNav names={names} toolType={toolType} onClose={()=>setVisible(false)}/>
            </Drawer>

            {/* fixed side menu */}
            <div className="tools-left">
              <SideNav names={names} toolType={toolType} key2={"4"}/>
            </div>

            {/* toolpart */}
            <Layout className="toolbox-layout">
            

                    <Functions id={id}/>
                   
               </Layout>
           </div>
        </div>
    )
}

export async function getStaticPaths() {
    const tools = [
      
              {display:"Belt Length"},
              {display:"Gear Pump Displacement"},
              {display:"Stroke's Law"},
              {display:"Flow Velocity"},
              {display:"Hooke's Law (Force)"},
              {display:"Hooke's Law (Spring constant)"},
              {display:"Strain"},
              {display:"K Value & Pipe Length"},
              {display:"Young's modulus"},
              {display:"Weber Number"},
              {display:"Chezy Coefficient"},
              {display:"Cauchy Number"},
              {display:"Bulk Modulus Elasticity"},  
    ]


  const paths =  tools.map((post) => ({
    params: {name :stringSpaceToHyphen(post.display) }
  }))
  
    return {
        paths: paths, fallback: false // See the "fallback" section below
    };
  }
  export async function getStaticProps({ params }) {
                 
    // Pass post data to the page via props
    return { props: { names:names,toolType:toolType ,params:params} }
  }
  