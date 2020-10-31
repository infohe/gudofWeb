import { Card, Row,Input,Layout, Button } from 'antd';
import React from 'react';
import { Tabs } from 'antd';
const { TabPane } = Tabs;
import Link from 'next/link'
import { stringSpaceToHyphen } from '.';
import { useRouter } from 'next/router'

export default function SideNav({names , toolType,key2}) {
  


  const [array,setArray] = React.useState(names)
  const  [ToolType,setTooltype] = React.useState(toolType)    
  const handleChangeTrue = () => {
    let newTooltype = ToolType
    newTooltype.map(item=>item.show =true)
    setTooltype(newTooltype)
}
  
 React.useEffect(()=>console.log("type",ToolType))
  const handleSearch = (event) => {
    handleChangeTrue()
    setArray(tools.filter((item) => ((event.target.value!== "") && item.display.toLowerCase().indexOf(event.target.value.toLowerCase())!== -1) ))
    if(event.target.value ==="")
       setArray(tools)
       console.log(array)
  }
  const [tools,setTools] = React.useState(names)
    return (
    <div>
      
        {/* hello
        <Button onClick={console.log(ToolType)}>Click</Button> */}
      <Layout>
      <Tabs  style={{marginTop:"60px"}} tabPosition="top" defaultActiveKey={key2}>  
        {ToolType!==undefined &&
          ToolType.map(
            (type) =>  <TabPane tab={type.name} key={type.id}>
                <div style={{marginLeft:"20px",marginRight:"20px"}}>
            
                      <Input style={{marginLeft:"10px",marginRight:"30px"}} placeholder="Search" prefix={<i style={{marginTop:"-5px"}} className="material-icons">search</i>} onInput={(e)=>handleSearch(e)} />
                    <Row >
                      
                    {array.map(item=> item.type === type.type &&
                     <Card className={`${item.category==="conversion" ? active(item.name) : active(item.display) }`} style={{flex:1}}>
                       {item.type === 'instrumentation' &&
                          <Link href={`../../Instrumentation/${stringSpaceToHyphen(item.display)}`}>
                             <a>{item.display}</a>
                      </Link>  }
                      {item.type === 'electrical' &&
                        <Link href={`../../Electrical/${stringSpaceToHyphen(item.display)}`}>
                          <a>{item.display}</a>
                      </Link> }
                      {item.type === 'conversions' &&
                        <Link href={`../../Conversion/${item.name}`}>
                          <a>{item.display}</a>
                      </Link> }
                      {item.type === 'mechanical' &&
                        <Link href={`../../Mechanical/${stringSpaceToHyphen(item.display)}`}>
                          <a>{item.display}</a>
                      </Link> }
                     </Card>)}
                     </Row></div>
                                       </TabPane>
          )
        }
        </Tabs>
        </Layout>
        
      </div>
   


  )
}


export const active = (name) => {
  const router = useRouter()

  if(router.query.name === stringSpaceToHyphen(name)){
   
    return "activecard"
  }
  else return "carditems1"
}