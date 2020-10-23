import { Card, Row,Input,Layout, Button } from 'antd';
import React from 'react';
import { Tabs } from 'antd';

const { TabPane } = Tabs;
import Link from 'next/link'
import { stringSpaceToHyphen } from '.';

export default function SideNav({names , toolType}) {
  

  
  const [array,setArray] = React.useState(names)
  const  [ToolType,setTooltype] = React.useState(toolType)    
  const handleChangeTrue = () => {
    let newTooltype = ToolType
    newTooltype.map(item=>item.show =true)
    setTooltype(newTooltype)
}
  

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
      <Tabs  style={{marginTop:"60px"}} tabPosition="top" defaultActiveKey="1">  
        {toolType!==undefined &&
          toolType.map(
            (type) =>  <TabPane tab={type.name} key={type.id}>
                <div style={{marginLeft:"20px",marginRight:"20px"}}>
            
                      <Input style={{marginLeft:"10px",marginRight:"30px"}} placeholder="Search" prefix={<i style={{marginTop:"-5px"}} className="material-icons">search</i>} onInput={(e)=>handleSearch(e)} />
                    <Row >
                      
                    {array.map(item=> item.type === type.type &&
                     <Card className="carditems" style={{flex:1}}>
                       {item.category === 'instrumentation' &&
                      <Link href={`../../sliderTool/${stringSpaceToHyphen(item.display)}/${item.id}`}>
                        <a>{item.display}</a>
                    </Link> }
                    {item.category === 'zero' &&
                      <Link href={`../../zerotox/zero/${item.id}`}>
                        <a>{item.display}</a>
                    </Link> }
                    {item.category === 'electrical' &&
                      <Link href={`../../functions/${stringSpaceToHyphen(item.display)}/${item.id}`}>
                        <a>{item.display}</a>
                    </Link> }
                    {item.category === 'conversion' &&
                      <Link href={`../../conversion/${stringSpaceToHyphen(item.display)}/${item.name}`}>
                        <a>{item.display}</a>
                    </Link> }
                    {item.category === 'color' &&
                      <Link href={`../../colorcode/${stringSpaceToHyphen(item.display)}/${item.id}`}>
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

