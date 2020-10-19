import { Card, Row,Input,Layout, Button } from 'antd';
import React from 'react';
import { Tabs } from 'antd';

const { TabPane } = Tabs;
import Link from 'next/link'

export default function DrawerNav({names , toolType}) {
  

  
  const [array,setArray] = React.useState(names)
  const  [ToolType,setTooltype] = React.useState(toolType)    
  const handleChangeTrue = () => {
    let newTooltype = ToolType
    newTooltype.map(item=>item.show =true)
    setTooltype(newTooltype)
}
  
const handleShow = (id) => {
  let newTooltype = ToolType
  newTooltype.map(item=>item.id===id &&( item.show=!item.show))
  setTooltype(newTooltype)
  console.log(ToolType)
  setBool(!bool)
}

  const handleSearch = (event) => {
    handleChangeTrue()
    setArray(tools.filter((item) => ((event.target.value!== "") && item.display.toLowerCase().indexOf(event.target.value.toLowerCase())!== -1) ))
    if(event.target.value ==="")
       setArray(tools)
       console.log(array)
  }
  const [bool,setBool] = React.useState(true)
  const [tools,setTools] = React.useState(names)
    return (
    <div>
      
        {/* hello
        <Button onClick={console.log(ToolType)}>Click</Button> */}
      <Layout>
      <Input placeholder="Search" prefix={<i style={{marginTop:"-5px"}} className="material-icons">search</i>} onInput={(e)=>handleSearch(e)} />

        {ToolType!==undefined &&
          ToolType.map(
            (type) => 
            <div>
              <div onClick={()=>handleShow(type.id)} style={{display:"flex",height:"45px"}}>
                <div style={{flex:10}}>{type.name}</div>
                <i style={{flex:1}} className="material-icons">arrow_drop_down</i>
                </div>
               {type.show===true  && <div style={{marginLeft:"20px",marginRight:"20px"}}>
            
                    <Row >
                      
                    {array.map(item=> item.type === type.type &&
                     <Card className="carditems cardwidth" style={{width:"300px",flex:1}}>
                       {item.category === 'instrumentation' &&
                      <Link href={`/sliderTool/${item.display}/${item.id}`}>
                        <a>{item.display}</a>
                    </Link> }
                    {item.category === 'zero' &&
                      <Link href={`/zerotox/${item.category}/${item.id}`}>
                        <a>{item.display}</a>
                    </Link> }
                    {item.category === 'electrical' &&
                      <Link href={`/functions/${item.display}/${item.id}`}>
                        <a>{item.display}</a>
                    </Link> }
                    {item.category === 'conversion' &&
                      <Link href={`/conversion/${item.display}/${item.name}`}>
                        <a>{item.display}</a>
                    </Link> }
                    {item.category === 'color' &&
                      <Link href={`/colorcode/${item.display}/${item.id}`}>
                        <a>{item.display}</a>
                    </Link> }
                     </Card>)}
                    </Row></div> }
                                       </div>
          )
        }
        </Layout>
        
      </div>
   


  )
}

