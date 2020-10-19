const slider =[
    {stringId:"1",a:0,b:20,name:"mA",display:"0-20 mA",desc:"This measurement to current converter tool will convert any linear input measurement reading into the ideal current output signal over a linear range of 0 to 20 milliamps, and display a 0-20mA conversion scale for the chosen measurement range."},
    {stringId:"2",a:4,b:20,name:"mA",display:"4-20 mA",desc:"This measurement to current converter tool will convert any linear input measurement reading into the ideal current output signal over a linear range of 4 to 20 milliamps, and display a 4-20mA conversion scale for the chosen measurement range."},
    {stringId:"3",a:0,b:25,name:"mA",display:"0-25 mA",desc:"This measurement to current converter tool will convert any linear input measurement reading into the ideal current output signal over a linear range of 0 to 25 milliamps, and display a 0-25mA conversion scale for the chosen measurement range."},
    {stringId:"0",a:3,b:15,name:"PSI",display:"3-15 PSI",desc:"This measurement to current converter tool will convert any linear input measurement reading into the ideal current output signal over a linear range of 0 to 20 milliamps, and display a 0-20mA conversion scale for the chosen measurement range."},
  ]
export default ( req,res) => {
    res.statusCode = 200
    res.json(slider )
  } 