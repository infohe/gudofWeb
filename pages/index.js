import Head from 'next/head'
import { Card, Row,Input,Layout } from 'antd';
import React from 'react';
import {Menu} from 'antd'
import { Tabs } from 'antd';

const { TabPane } = Tabs;
import Link from 'next/link'
import Navbar from './Navbar';
import NavbarMain from './NavbarMain';

export default function Home({names , toolType}) {
  

  
  const [array,setArray] = React.useState(names)
  const  [tooltype,setTooltype] = React.useState(toolType)    
  const handleChangeTrue = () => {
    
    
    let newTooltype = tooltype
    newTooltype.map(item=>item.show =true)
    setTooltype(newTooltype)

}
  

  const handleSearch = (key) => {
    console.log("key",key)
    handleChangeTrue()
    setArray(tools.filter((item) => ((key!== "") && item.display.toLowerCase().indexOf(key.toLowerCase())!== -1) ))
   
    if(key ==="")
       setArray(tools)
       console.log(array)
  }
  const [tools,setTools] = React.useState(names)
    return (
    <div>
      <Head>
        <title>gudofConvert</title>
        <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet"/>
        <link rel="icon" href="/favicon.ico" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css"/>

<script src="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/js/materialize.min.js"></script>
<script type="module" src="https://cdn.jsdelivr.net/npm/@ionic/core/dist/ionic/ionic.esm.js"></script>
<script nomodule src="https://cdn.jsdelivr.net/npm/@ionic/core/dist/ionic/ionic.js"></script>
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@ionic/core/css/ionic.bundle.css"/>
      </Head>

      <body className="body">
        <Layout>
        <NavbarMain/>
      <Tabs style={{marginTop:"60px"}} defaultActiveKey="1">
      
        {tooltype!==undefined &&
          tooltype.map(
            (type) =>  <TabPane tab={type.name} key={type.id}>
                <div style={{marginLeft:"20px",marginRight:"20px"}}>
            
                      <Input style={{marginLeft:"10px",marginRight:"30px"}} placeholder="Search" prefix={<i style={{marginTop:"-5px"}} className="material-icons">search</i>} onInput={(e)=>handleSearch(e.target.value)} />
                    <Row >
                      
                    {array.map(item=> item.type === type.type &&
                     <Card className="carditems" style={{flex:1}}>
                       {item.category === 'instrumentation' &&
                      <Link href={`../sliderTool/${item.display}/${item.id}`}>
                        <a>{item.display}</a>
                    </Link> }
                    {item.category === 'zero' &&
                      <Link href={`../zerotox/${item.display}/${item.id}`}>
                        <a>{item.display}</a>
                    </Link> }
                    {item.category === 'electrical' &&
                      <Link href={`../functions/${item.display}/${item.id}`}>
                        <a>{item.display}</a>
                    </Link> }
                    {item.category === 'conversion' &&
                      <Link href={`../conversion/${item.display}/${item.name}`}>
                        <a>{item.display}</a>
                    </Link> }
                    {item.category === 'color' &&
                      <Link href={`../colorcode/${item.display}/${item.id}`}>
                        <a>{item.display}</a>
                    </Link> }
                     </Card>)}
                     </Row></div>
                                       </TabPane>
          )
        }
        </Tabs>
        </Layout>
        </body>
        
      </div>
   


  )
}

export async function getServerSideProps(cxt) {
  const res  = await fetch('http://localhost:3000/api/tools')
  const toolTypejs = await fetch('http://localhost:3000/api/tooltype')

  const names = await res.json()
  const toolType = await toolTypejs.json()
  return {
     props:{toolType:toolType,
    names:names}// will be passed to the page component as props
  }
}
