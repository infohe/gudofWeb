const tooltype = [{id:1,type:"instrumentation",name:"INSTRUMENTATION",show:false},
{id:2,type:"electrical",name:"ELECTRICAL",show:false},
{id:3,type:"conversions",name:"UNIT CONVERSION",show:false}]
export default ( req,res) => {
    res.statusCode = 200
    res.json(tooltype )
  } 