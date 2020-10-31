import React from 'react';
import { Layout,Button,Row,Input,Col,Select ,Drawer} from 'antd';
import SideNav from '../SideNav';
import DrawerNav from '../DrawerNav';
import Navbar from '../Navbar';
import Head from 'next/head'
import { Tabs } from 'antd';

import { useRouter } from 'next/router'
import { stringSpaceToHyphen } from '..';

const Conversion= ({names,toolType}) => {
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
    const router = useRouter()
    const {Option} = Select;
   const isNumber = function (n) {
        return !isNaN(parseFloat(n)) && isFinite(n);
      };
      const [input1,setInput1] = React.useState()
      const [input2,setInput2] = React.useState()
      const [inn,setIn] = React.useState()
      const [out,setOut] = React.useState()
      const roundIt =  (num, X) =>{
        X = (!X ? 6 : X);
        return Math.round(num * Math.pow(10, X)) / Math.pow(10, X);
      };
    const [answer,setAnswer] = React.useState()

      // Indicate that name should be a public property on the component
      const compute = function(current_conversion, conversion_calc, in_out) {
        let value 
        //varvalue=current_conversion
        if(in_out === 'in'){
          console.log(input1)
         value=input1;
        }
        else{
          value=input2;
        }
        
        console.log(in_out);
        console.log("value",value,"inout",in_out);
        var first =inn
        var second =out
        var array = conversion_calc[current_conversion]
        console.log("current converdion",first);
        var oneUnitFrom = array[first];
        var oneUnitTo = array[second]
    
        //Convert "From" units to base unit of category ie. celcius to Kelvin
        if (isNumber(oneUnitFrom.scale)) {
          value=value * oneUnitFrom.scale;
        } else {
          value= oneUnitFrom.scale(value);
        }
        console.log("oneUnitFrom.scale-val1:"+value);
        //Next Convert into "To" units from the base unit of category ie. kelvin to fahrenheit
        if (isNumber(oneUnitTo.scale)) {
         value=value / oneUnitTo.scale
        } else {
         value=oneUnitTo.scaleFrom(value)
        }
        console.log("oneUnitFrom.scale-val2:"+value);
        if(oneUnitTo.decimal !== undefined){
         value=roundIt(value, oneUnitTo.decimal);
        }
        return value;
        
      }
    const descriptions = [
      {name:"area",descp:""},
      {name:"force",descp:""},
      {name:"energy",descp:""},
      {name:"fuel_consumption",descp:""},
      {name:"time",descp:""},
      {name:"mass",descp:""},
      {name:"length",descp:""},
      {name:"digital_storage",descp:""},
      {name:"temperature",descp:""},
      {name:"current",descp:""},
      {name:"pressure",descp:""},
      {name:"speed",descp:""},
      {name:"power",descp:""},
      {name:"charge",descp:""},

    ]
  return (
    <div>
    <Head>
    <title>{capitalize(router.query.name)}</title>
    <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet"/>
    
    {descriptions.map(item => item.name === router.query.name
    && <meta key="description" name="description"content={item.descp}/>) }
  </Head>
  <Navbar showDrawer={showDrawer}/>


  <div className="tools-container">
      {/* sliding drawer */}
      <Drawer width={350} title="gudofConvert" placement="left" closable={true} onClose={onClose} visible={visible}>
        <DrawerNav names={names} toolType={toolType} onClose={()=>setVisible(false)}/>
      </Drawer>

      {/* fixed side menu */}
      <div className="tools-left">
        <SideNav names={names} toolType={toolType} key2={"3"} />
      </div>
      
    <Layout className="toolbox-layout">
     {router.query.name !== undefined &&
     <div>   
  <Row className="row">
    <div className="toolbox-heading">
    {conversion_fn[ conversion_fn.findIndex(item => item.id===router.query.name)].name}
    </div>
  </Row>
  <hr className="hr"/>
  <div className="toolbox-calc">
      <div className="heading">CAlculation</div>
    <Row className="row">

        <Col style={{flex:1}}><Input className="input box" type="number" value={input1} onChange={(e)=>{
          console.log("input",e.target.value)
          setInput1(e.target.value)}}/></Col>
        <Col style={{flex:1}}>
               <Select  style={{border:"1px solid gray"}} className="input box" class="box"  value={inn} onSelect={(e)=>{
                   setIn(e)
                   console.log(e)
               }} placeholder="Input">
                   {conversion_fn[ conversion_fn.findIndex(item => item.id===router.query.name)].units.map(item=>
                    <Option key={item.id} value={item.id}>{item.name}</Option>
                    )}
                     </Select>
        </Col>
    </Row>
    <Row className="row">
        <Col style={{flex:1}}><Input  className="input box" type="number"  value={answer} disabled/></Col>
        <Col style={{flex:1}}>

<Select className="input box"  style={{border:"1px solid gray"}} class="box" value={out} onSelect={(e)=>{
setOut(e)
}} placeholder="Output">
{conversion_fn[ conversion_fn.findIndex(item => item.id===router.query.name)].units.map(item=>
<Option value={item.id}>{item.name}</Option>
)}
</Select>

</Col>
    </Row>
    
    <Button className="calculate-button" onClick={()=>{
           setAnswer(compute(conversion_fn[conversion_fn.findIndex(item => item.id===router.query.name)].id,conversion_calc,'in'))

}}>Convert</Button>
    {/* <div className="description">Use this conversion utility to convert instantly between different units.</div> */}

</div>

<hr className="hr"/>
{/* RESULT */}
{
  answer!==undefined
  &&
  <div>
    
    <div className="toolbox-calc">
      <div className="heading">RESULT</div>
      {input1} {inn} ={ answer} {out}
      </div>
    </div>
 }



</div>}

</Layout>
</div>
</div>
  );
};

export default Conversion;

export const conversion_calc = {"temperature": {
    "celsius": {
      "scale": function(value) {
        value = parseInt(value);
        return (value + 273.15);
      },
      "scaleFrom": function(value) {
        value = parseInt(value);
        return (value - 273.15);
      },
      "symbol": "",
      "name": "Celsius"
    },
    "fahrenheit": {
      "scale": function(value) {
        value = parseInt(value);
        return (5 / 9 * (value + 459.67));
      },
      "scaleFrom": function(value) {
        value = parseInt(value);
        return (9 / 5 * value - 459.67);
      },
      "symbol": "",
      "name": "Fahrenheit"
    },
    "kelvin": {
      "scale": 1,
      "symbol": "",
      "name": "Kelvin"
    }
  },
  "pressure": {
    "atm": {
      "scale": 1/0.986923,
      "symbol": "",
      "name": "Atmosphere"
    },
    "b": {
      "scale": 1,
      "symbol": "",
      "name": "bar"
    },
    "dcm": {
      "scale": 1/1000000,
      "symbol": "",
      "name": "dynes/cm2"
    },
    "ihg": {
      "scale": 1/29.9213,
      "symbol": "",
      "name": "in. Hg"
    },
    "iw": {
      "scale": 1/401.46307866999996,
      "symbol": "",
      "name": "in. water"
    },
    "k": {
      "scale": 1/1.019716213,
      "symbol": "",
      "name": "kg/cm2"
    },
    "m": {
      "scale": 1/1000,
      "symbol": "",
      "name": "mbar"
    },
    "mtm": {
      "scale": 1/750061.673821,
      "symbol": "",
      "name": "mtorr or micron"
    },
    "pnm": {
      "scale": 1/100000,
      "symbol": "",
      "name": "Pa or N/m2"
    },
    "kpa": {
      "scale": 1/100,
      "symbol": "",
      "name": "KPa"
    },
    "psi": {
      "scale": 1/14.50377,
      "symbol": "",
      "name": "PSI or lb/in2"
    }
  },
  "charge": {
    "c": {
      "scale": 1,
      "symbol": "",
      "name": "Coulomb"
    },
    "milli": {
      "scale": 1000,
      "symbol": "",
      "name": "milliCoulomb"
    },
    "micro": {
      "scale": 1000000,
      "symbol": "",
      "name": "microCoulomb"
    },
    "nano": {
      "scale": 1000000000,
      "symbol": "",
      "name": "nanoCoulomb"
    },
    "pico": {
      "scale": 10**12,
      "symbol": "",
      "name": "picoCoulomb"
    },
    "e": {
      "scale":6.24150975e+18,
      "symbol": "",
      "name": "e Charge"
    },
    "amp": {
      "scale": 0.0002777777777778,
      "symbol": "",
      "name": "Ampere Hours"
    }
  },
  "length": {
    "kilometer": {
      "scale": 1000,
      "symbol": "",
      "name": "Kilometer"
    },
    "meters": {
      "scale": 1,
      "symbol": "",
      "name": "Meters"
    },
    "centimeters": {
      "scale": 0.01,
      "symbol": "",
      "name": "Centimeters"
    },
    "millimeters": {
      "scale": 0.001,
      "symbol": "",
      "name": "Millimeters"
    },
    "miles": {
      "scale": 1609.344,
      "symbol": "",
      "name": "Miles"
    },
    "yards": {
      "scale": 0.9144,
      "symbol": "",
      "name": "Yards"
    },
    "feet": {
      "scale": 0.3048006096012192,
      "symbol": "",
      "name": "Feet"
    },
    "inches": {
      "scale": 0.0254,
      "symbol": "",
      "name": "Inches"
    },
    "nauticalMiles": {
      "scale": 1852,
      "symbol": "",
      "name": "Nautical Miles"
    }
  },
  "mass": {
    "metricTon": {
      "scale": 1000,
      "symbol": "",
      "name": "Metric Ton"
    },
    "kilogram": {
      "scale": 1,
      "symbol": "",
      "name": "Kilogram"
    },
    "gram": {
      "scale": 0.001,
      "symbol": "",
      "name": "Gram"
    },
    "milligram": {
      "scale": 0.000001,
      "symbol": "",
      "name": "Milligram"
    },
    "mcg": {
      "scale": 1e-9,
      "symbol": "",
      "name": "Mcg"
    },
    "longTon": {
      "scale": 1016.0469088,
      "symbol": "",
      "name": "Long Ton"
    },
    "shortTon": {
      "scale": 907.18474,
      "symbol": "",
      "name": "Short Ton"
    },
    "stones": {
      "scale": 6.35029318,
      "symbol": "",
      "name": "Stones"
    },
    "pound": {
      "scale": 0.45359237,
      "symbol": "",
      "name": "Pound"
    },
    "ounce": {
      "scale": 0.028349523125,
      "symbol": "",
      "name": "Ounce"
    }
  },
  "speed": {
    "milesHour": {
      "scale": 0.44704,
      "symbol": "",
      "name": "Miles/Hour"
    },
    "feetSec": {
      "scale": 0.3048,
      "symbol": "",
      "name": "Feet/Sec"
    },
    "metersSec": {
      "scale": 1,
      "symbol": "",
      "name": "Meters/Sec"
    },
    "kmHour": {
      "scale": 0.2777777777777778,
      "symbol": "",
      "name": "Km/Hour"
    },
    "knots": {
      "scale": 0.5144444444444445,
      "symbol": "",
      "name": "Knots"
    }
  },
  "volume": {
    "usGal": {
      "scale": 3.785411784,
      "symbol": "",
      "name": "US Gal"
    },
    "usQuart": {
      "scale": 0.946352946,
      "symbol": "",
      "name": "US Quart"
    },
    "usPint": {
      "scale": 0.473176473,
      "symbol": "",
      "name": "US Pint"
    },
    "usCup": {
      "scale": 0.2365882365,
      "symbol": "",
      "name": "US Cup"
    },
    "usOz": {
      "scale": 0.0295735295625,
      "symbol": "",
      "name": "US Oz"
    },
    "usTbsp": {
      "scale": 0.01478676478125,
      "symbol": "",
      "name": "US Tbsp."
    },
    "usTsp": {
      "scale": 0.00492892159375,
      "symbol": "",
      "name": "US Tsp."
    },
    "cubicMeter": {
      "scale": 1000,
      "symbol": "",
      "name": "Cubic Meter"
    },
    "liters": {
      "scale": 1,
      "symbol": "",
      "name": "Liters"
    },
    "milliliter": {
      "scale": 0.001,
      "symbol": "",
      "name": "Milliliter"
    },
    "imperialGal": {
      "scale": 4.54609,
      "symbol": "",
      "name": "Imperial Gal"
    },
    "imperialQuart": {
      "scale": 1.1365225,
      "symbol": "",
      "name": "Imperial Quart"
    },
    "imperialPint": {
      "scale": 0.56826125,
      "symbol": "",
      "name": "Imperial Pint"
    },
    "imperialOz": {
      "scale": 0.0284130625,
      "symbol": "",
      "name": "Imperial Oz"
    },
    "imperialTbsp": {
      "scale": 0.0177582,
      "symbol": "",
      "name": "Imperial Tbsp."
    },
    "imperialTsp": {
      "scale": 0.00591939,
      "symbol": "",
      "name": "Imperial Tsp."
    },
    "cubicFoot": {
      "scale": 28.316846592,
      "symbol": "",
      "name": "Cubic Foot"
    },
    "cubicInch": {
      "scale": 0.016387064,
      "symbol": "",
      "name": "Cubic Inch"
    }
  },
  "area": {
    "squareKm": {
      "scale": 1000000,
      "symbol": "",
      "name": "Square Km"
    },
    "hectare": {
      "scale": 10000,
      "symbol": "",
      "name": "Hectare"
    },
    "squareMeter": {
      "scale": 1,
      "symbol": "",
      "name": "Square Meter"
    },
    "squareMile": {
      "scale": 2589988.110336,
      "symbol": "",
      "name": "Square Mile"
    },
    "acre": {
      "scale": 4046.8564224,
      "symbol": "",
      "name": "Acre"
    },
    "squareYard": {
      "scale": 0.83612736,
      "symbol": "",
      "name": "Square Yard"
    },
    "squareFoot": {
      "scale": 0.09290304,
      "symbol": "",
      "name": "Square Foot"
    },
    "squareInch": {
      "scale": 0.00064516,
      "symbol": "",
      "name": "Square Inch"
    }
  },
  "fuel_consumption": {
    "mpgUs": {
      "scale": function(value) {
        return 2.3521458333333333333333333333333e-3 / value;
      },
      "scaleFrom" : function(value) {
        return 2.3521458333333333333333333333333e-3 / value;
      },
      "symbol": "",
      "name": "MPG (US)"
    },
    "mpgImp": {
      "scale": function(value) {
        return 2.8248093633182215859381213711925e-3 / value;
      },
      "scaleFrom": function(value) {
        return 2.8248093633182215859381213711925e-3 / value;
      },
      "symbol": "",
      "name": "MPG (imp.)"
    },
    "kmLiter": {
      "scale": function(value) {
        return 0.001 / value;
      },
      "scaleFrom": function(value) {
        return 0.001 / value;
      },
      "symbol": "",
      "name": "Km/Liter"
    },
    "liter100km": {
      "scale": 0.00001,
      "symbol": "",
      "name": "Liter/100km"
    }
  },
  "time": {
    "nanoseconds": {
      "scale": 1e-9,
      "symbol": "",
      "name": "Nanoseconds"
    },
    "microseconds": {
      "scale": 0.000001,
      "symbol": "",
      "name": "Microseconds"
    },
    "milliseconds": {
      "scale": 0.001,
      "symbol": "",
      "name": "Milliseconds"
    },
    "seconds": {
      "scale": 1,
      "symbol": "",
      "name": "Seconds"
    },
    "minutes": {
      "scale": 60,
      "symbol": "",
      "name": "Minutes"
    },
    "hours": {
      "scale": 3600,
      "symbol": "",
      "name": "Hours"
    },
    "days": {
      "scale": 86400,
      "symbol": "",
      "name": "Days"
    },
    "weeks": {
      "scale": 604800,
      "symbol": "",
      "name": "Weeks"
    },
    "months": {
      "scale": 2628000,
      "symbol": "",
      "name": "Months"
    },
    "years": {
      "scale": 31536000,
      "symbol": "",
      "name": "Years"
    },
    "decades": {
      "scale": 315360000,
      "symbol": "",
      "name": "Decades"
    },
    "century": {
      "scale": 3.1689e-10,
      "symbol": "",
      "name": "Century"
    }
  },
  "digital_storage": {
    "bits": {
      "scale": 0.125,
      "symbol": "",
      "name": "Bits"
    },
    "bytes": {
      "scale": 1,
      "symbol": "",
      "name": "Bytes"
    },
    "kilobits": {
      "scale": 128,
      "symbol": "",
      "name": "Kilobits"
    },
    "kilobytes": {
      "scale": 1024,
      "symbol": "",
      "name": "Kilobytes"
    },
    "megabits": {
      "scale": 131072,
      "symbol": "",
      "name": "Megabits"
    },
    "megabytes": {
      "scale": 1048576,
      "symbol": "",
      "name": "Megabytes"
    },
    "gigabits": {
      "scale": 134217728,
      "symbol": "",
      "name": "Gigabits"
    },
    "gigabytes": {
      "scale": 1073741824,
      "symbol": "",
      "name": "Gigabytes"
    },
    "terabits": {
      "scale": 137438953472,
      "symbol": "",
      "name": "Terabits"
    },
    "terabytes": {
      "scale": 1099511627776,
      "symbol": "",
      "name": "Terabytes"
    },
    "petabits": {
      "scale": 140737488355328,
      "symbol": "",
      "name": "Petabits"
    },
    "petabytes": {
      "scale": 1125899906842624,
      "symbol": "",
      "name": "Petabytes"
    },
    "exabits": {
      "scale": 144115188075855870,
      "symbol": "",
      "name": "Exabits"
    },
    "exabytes": {
      "scale": 1152921504606847000,
      "symbol": "",
      "name": "Exabytes"
    }
  },
  "energy": {
    "btuTh": {
      "scale": 1054.35,
      "symbol": "",
      "name": "Btu (th)"
    },
    "btuMean": {
      "scale": 1055.87,
      "symbol": "",
      "name": "Btu (mean)"
    },
    "caloriesIt": {
      "scale": 4.1868,
      "symbol": "",
      "name": "Calories (IT)"
    },
    "caloriesTh": {
      "scale": 4.184,
      "symbol": "",
      "name": "Calories (th)"
    },
    "caloriesMean": {
      "scale": 4.19002,
      "symbol": "",
      "name": "Calories (mean)"
    },
    "calories15c": {
      "scale": 4.1858,
      "symbol": "",
      "name": "Calories (15C)"
    },
    "calories20c": {
      "scale": 4.1819,
      "symbol": "",
      "name": "Calories (20C)"
    },
    "caloriesFood": {
      "scale": 4186,
      "symbol": "",
      "name": "Calories (food)"
    },
    "centigradeHeatUnits": {
      "scale": 1900.4,
      "symbol": "",
      "name": "Centigrade Heat Units"
    },
    "electronVolts": {
      "scale": 1.60219e-19,
      "symbol": "",
      "name": "Electron Volts"
    },
    "ergs": {
      "scale": 1e-7,
      "symbol": "",
      "name": "Ergs"
    },
    "footPoundForce": {
      "scale": 1.3558179483314003,
      "symbol": "",
      "name": "Foot-Pound Force"
    },
    "footPoundals": {
      "scale": 0.04214,
      "symbol": "",
      "name": "Foot Poundals"
    },
    "gigajoules": {
      "scale": 1000000000,
      "symbol": "",
      "name": "Gigajoules"
    },
    "horsepowerHours": {
      "scale": 2684520,
      "symbol": "",
      "name": "Horsepower Hours"
    },
    "inchPoundForce": {
      "scale": 0.11298482902761668,
      "symbol": "",
      "name": "Inch-Pound Force"
    },
    "joules": {
      "scale": 1,
      "symbol": "",
      "name": "Joules"
    },
    "kilocaloriesIt": {
      "scale": 4186.8,
      "symbol": "",
      "name": "Kilocalories (IT)"
    },
    "kilocaloriesTh": {
      "scale": 4184,
      "symbol": "",
      "name": "Kilocalories (th)"
    },
    "kilogramForceMeters": {
      "scale": 9.80665,
      "symbol": "",
      "name": "Kilogram-Force Meters"
    },
    "kilojoules": {
      "scale": 1000,
      "symbol": "",
      "name": "Kilojoules"
    },
    "kilowattHours": {
      "scale": 3600000,
      "symbol": "",
      "name": "Kilowatt Hours"
    },
    "megajoules": {
      "scale": 1000000,
      "symbol": "",
      "name": "Megajoules"
    },
    "newtonMeters": {
      "scale": 1,
      "symbol": "",
      "name": "Newton Meters"
    },
    "therms": {
      "scale": 105505585.257348,
      "symbol": "",
      "name": "Therms"
    },
    "wattSeconds": {
      "scale": 1,
      "symbol": "",
      "name": "Watt Seconds"
    },
    "wattHours": {
      "scale": 3600,
      "symbol": "",
      "name": "Watt Hours"
    }
  },
  "power": {
    "watts": {
      "scale": 1,
      "symbol": "",
      "name": "Watts"
    },
    "kilowatts": {
      "scale": 1000,
      "symbol": "",
      "name": "Kilowatts"
    },
    "megawatts": {
      "scale": 1000000,
      "symbol": "",
      "name": "Megawatts"
    },
    "gigawatts": {
      "scale": 1000000000,
      "symbol": "",
      "name": "Gigawatts"
    },
    "btuHour": {
      "scale": 0.293071,
      "symbol": "",
      "name": "Btu/Hour"
    },
    "btuMinute": {
      "scale": 17.584267,
      "symbol": "",
      "name": "Btu/Minute"
    },
    "btuSecond": {
      "scale": 1055.056,
      "symbol": "",
      "name": "Btu/Second"
    },
    "caloriesthHour": {
      "scale": 0.001162222222222222,
      "symbol": "",
      "name": "Calories(th)/Hour"
    },
    "caloriesthMinute": {
      "scale": 0.06973333333333333,
      "symbol": "",
      "name": "Calories(th)/Minute"
    },
    "caloriesthSecond": {
      "scale": 4.184,
      "symbol": "",
      "name": "Calories(th)/Second"
    },
    "kilocaloriesthHour": {
      "scale": 1.1622222222222223,
      "symbol": "",
      "name": "Kilocalories(th)/Hour"
    },
    "kilocaloriesthMinute": {
      "scale": 69.73333333333333,
      "symbol": "",
      "name": "Kilocalories(th)/Minute"
    },
    "footPoundsForceMinute": {
      "scale": 0.022597,
      "symbol": "",
      "name": "Foot Pounds-Force/Minute"
    },
    "footPoundsForceSecond": {
      "scale": 1.35582,
      "symbol": "",
      "name": "Foot Pounds-Force/Second"
    },
    "horsepowersElectric": {
      "scale": 746,
      "symbol": "",
      "name": "Horsepowers (electric)"
    },
    "horsepowersInternational": {
      "scale": 745.6998715822702,
      "symbol": "",
      "name": "Horsepowers (international)"
    },
    "horsepowersWater": {
      "scale": 746.043,
      "symbol": "",
      "name": "Horsepowers (water)"
    },
    "horsepowersMetric": {
      "scale": 735.4988,
      "symbol": "",
      "name": "Horsepowers (metric)"
    },
    "joulesHour": {
      "scale": 0.0002777777777777778,
      "symbol": "",
      "name": "Joules/Hour"
    },
    "joulesMinute": {
      "scale": 0.016666666666666666,
      "symbol": "",
      "name": "Joules/Minute"
    },
    "joulesSecond": {
      "scale": 1,
      "symbol": "",
      "name": "Joules/Second"
    },
    "kilogramForceMetersHour": {
      "scale": 0.002724,
      "symbol": "",
      "name": "Kilogram-Force Meters/Hour"
    },
    "kilogramForceMetersMinute": {
      "scale": 0.163444,
      "symbol": "",
      "name": "Kilogram-Force Meters/Minute"
    }
  },
  "force": {
    "newtons": {
      "scale": 1,
      "symbol": "",
      "name": "Newtons"
    },
    "kilonewtons": {
      "scale": 1000,
      "symbol": "",
      "name": "Kilonewtons"
    },
    "meganewtons": {
      "scale": 1000000,
      "symbol": "",
      "name": "Meganewtons"
    },
    "dynes": {
      "scale": 0.00001,
      "symbol": "",
      "name": "Dynes"
    },
    "kilogramsForce": {
      "scale": 9.80665,
      "symbol": "",
      "name": "Kilograms Force"
    },
    "kips": {
      "scale": 4448.222,
      "symbol": "",
      "name": "Kips"
    },
    "poundsForce": {
      "scale": 4.4482216152605,
      "symbol": "",
      "name": "Pounds Force"
    },
    "poundals": {
      "scale": 0.138255,
      "symbol": "",
      "name": "Poundals"
    },
    "sthenes=kn": {
      "scale": 1000,
      "symbol": "",
      "name": "Sthenes (=kN)"
    },
    "tonnesForce": {
      "scale": 9806.65,
      "symbol": "",
      "name": "Tonnes Force"
    },
    "tonsForceUk": {
      "scale": 9964.01641818352,
      "symbol": "",
      "name": "Tons Force (UK)"
    },
    "tonsForceUs": {
      "scale": 8896.443230521,
      "symbol": "",
      "name": "Tons Force (US)"
    }
  },
  "electric_current": {
    "abampere": {
      "scale": 10,
      "symbol": "",
      "name": "Abampere"
    },
    "ampere": {
      "scale": 1,
      "symbol": "",
      "name": "Ampere"
    },
    "biot": {
      "scale": 10,
      "symbol": "",
      "name": "Biot"
    },
    "centiampere": {
      "scale": 0.01,
      "symbol": "",
      "name": "Centiampere"
    },
    "coulombSecond": {
      "scale": 1,
      "symbol": "",
      "name": "Coulomb/Second"
    },
    "emuOfCurrent": {
      "scale": 10,
      "symbol": "",
      "name": "EMU Of Current"
    },
    "esuOfCurrent": {
      "scale": 3.335641e-10,
      "symbol": "",
      "name": "ESU Of Current"
    },
    "franklinSecond": {
      "scale": 3.335641e-10,
      "symbol": "",
      "name": "Franklin/Second"
    },
    "gaussianElectricCurrent": {
      "scale": 3.335641e-10,
      "symbol": "",
      "name": "Gaussian Electric Current"
    },
    "gigaampere": {
      "scale": 1000000000,
      "symbol": "",
      "name": "Gigaampere"
    },
    "gilbert": {
      "scale": 0.79577472,
      "symbol": "",
      "name": "Gilbert"
    },
    "kiloampere": {
      "scale": 1000,
      "symbol": "",
      "name": "Kiloampere"
    },
    "megaampere": {
      "scale": 1000000,
      "symbol": "",
      "name": "Megaampere"
    },
    "microampere": {
      "scale": 0.000001,
      "symbol": "",
      "name": "Microampere"
    },
    "milliampere": {
      "scale": 0.001,
      "symbol": "",
      "name": "Milliampere"
    },
    "milliamp": {
      "scale": 0.001,
      "symbol": "",
      "name": "Milliamp"
    },
    "manoampere": {
      "scale": 1e-9,
      "symbol": "",
      "name": "Manoampere"
    },
    "picoampere": {
      "scale": 1e-12,
      "symbol": "",
      "name": "Picoampere"
    },
    "siemensVolt": {
      "scale": 1,
      "symbol": "",
      "name": "Siemens Volt"
    },
    "statampere": {
      "scale": 3.335641e-10,
      "symbol": "",
      "name": "Statampere"
    },
    "teraampere": {
      "scale": 1000000000000,
      "symbol": "",
      "name": "Teraampere"
    },
    "voltOhm": {
      "scale": 1,
      "symbol": "",
      "name": "Volt/Ohm"
    },
    "wattVolt": {
      "scale": 1,
      "symbol": "",
      "name": "Watt/Volt"
    },
    "weberHenry": {
      "scale": 1,
      "symbol": "",
      "name": "Weber/Henry"
    }
  }
};
//conversion array list for input
export const conversion_fn= [

    {
        id: "pressure",
        type: "general",
        name: "Pressure",
        // in: 1,
        from: {
          name: "Atmosphere",
          id: "atm"
        },
        to: {
          name: "bar",
          id: "b"
        },
        units: [
          {
              name: "Atmosphere",
              id: "atm"
            },
            {
              name: "bar",
              id: "b"
            },
            {
              name: "dynes/cm2",
              id: "dcm"
            },
            {
              name: "in. Hg",
              id: "ihg"
            },
            {
              name: "in. water",
              id: "iw"
            },
            {
              name: "kg/cm2",
              id: "k"
            },
            {
              name: "mbar",
              id: "m"
            },
            {
              name: "mtorr or micron",
              id: "mtm"
            },
            {
              name: "Pa or N/m2",
              id: "pnm"
            },
            {
              name: "KPa",
              id: "kpa"
            },
            {
              name: "PSI or lb/in2",
              id: "psi"
            }
        ],
        input_type: {
          from: {
            type: 'tel'
          },
          to: {
            type: 'tel'
          }
        }
      },
      {
        id: "charge",
        type: "general",
        name: "Charge",
        // in: 1,
        from: {
          name: "Coulomb",
          id: "c"
        },
        to: {
          name: "Milli Coulomb",
          id: "milli"
        },
        units: [
          {
              name: "Coulomb",
              id: "c"
            },
            {
              name: "Milli Coulomb",
              id: "milli"
            },
            {
              name: "Micro Coulomb",
              id: "micro"
            },
            {
              name: "Nano Coulomb",
              id: "nano"
            },
            {
              name: "pico Coulomb",
              id: "pico"
            },
            {
              name: "e Charge",
              id: "e"
            },
            {
              name: "Ampere Hours",
              id: "amp"
            }
        ],
        input_type: {
          from: {
            type: 'tel'
          },
          to: {
            type: 'tel'
          }
        }
      },
      {
        id: "temperature",
        type: "general",
        name: "Temperature",
        from: {
          name: "Celsius",
          id: "celsius"
        },
        to: {
          name: "Fahrenheit",
          id: "fahrenheit"
        },
        units: [
          {
            name: "Celsius",
            id: "celsius"
          },
          {
            name: "Fahrenheit",
            id: "fahrenheit"
          },
          {
            name: "Kelvin",
            id: "kelvin"
          }
        ]
      },
      {
        id: "length",
        type: "general",
        name: "Length",
        from: {
          name: "Kilometer",
          id: "kilometer"
        },
        to: {
          name: "Meters",
          id: "meters"
        },
        units: [
          {
            name: "Kilometer (km)",
            id: "kilometer"
          },
          {
            name: "Meters (m)",
            id: "meters"
          },
          {
            name: "Centimeters (cm)",
            id: "centimeters"
          },
          {
            name: "Millimeters (mm)",
            id: "millimeters"
          },
          {
            name: "Miles",
            id: "miles"
          },
          {
            name: "Yards",
            id: "yards"
          },
          {
            name: "Feet",
            id: "feet"
          },
          {
            name: "Inches",
            id: "inches"
          },
          {
            name: "Nautical Miles",
            id: "nauticalMiles"
          }
        ],
        input_type: {
          from: {
            type: 'tel'
          },
          to: {
            type: 'tel'
          }
        }
      },
      {
        id: "mass",
        type: "general",
        name: "Mass",
        from: {
          name: "Metric Ton",
          id: "metricTon"
        },
        to: {
          name: "Kilogram",
          id: "kilogram"
        },
        units: [
          {
            name: "Metric Ton",
            id: "metricTon"
          },
          {
            name: "Kilogram",
            id: "kilogram"
          },
          {
            name: "Gram",
            id: "gram"
          },
          {
            name: "Milligram",
            id: "milligram"
          },
          {
            name: "Mcg",
            id: "mcg"
          },
          {
            name: "Long Ton",
            id: "longTon"
          },
          {
            name: "Short Ton",
            id: "shortTon"
          },
          {
            name: "Stones",
            id: "stones"
          },
          {
            name: "Pound",
            id: "pound"
          },
          {
            name: "Ounce",
            id: "ounce"
          }
        ],
        input_type: {
          from: {
            type: 'tel'
          },
          to: {
            type: 'tel'
          }
        }
      },
      { 
        id: "speed",
        type: "general",
        name: "Speed",
        from: {
          name: "Miles/Hour",
          id: "milesHour"
        },
        to: {
          name: "Feet/Sec",
          id: "feetSec"
        },
        units: [
          {
            name: "Miles/Hour",
            id: "milesHour"
          },
          {
            name: "Feet/Sec",
            id: "feetSec"
          },
          {
            name: "Meters/Sec",
            id: "metersSec"
          },
          {
            name: "Km/Hour",
            id: "kmHour"
          },
          {
            name: "Knots",
            id: "knots"
          }
        ],
        input_type: {
          from: {
            type: 'tel'
          },
          to: {
            type: 'tel'
          }
        }
      },
      { 
        id: "volume",
        type: "general",
        name: "Volume",
        from: {
          name: "US Gal",
          id: "usGal"
        },
        to: {
          name: "US Quart",
          id: "usQuart"
        },
        units: [
            {
              "name": "US Gal",
              "id": "usGal"
            },
            {
              "name": "US Quart",
              "id": "usQuart"
            },
            {
              "name": "US Pint",
              "id": "usPint"
            },
            {
              "name": "US Cup",
              "id": "usCup"
            },
            {
              "name": "US Oz",
              "id": "usOz"
            },
            {
              "name": "US Tbsp.",
              "id": "usTbsp"
            },
            {
              "name": "US Tsp.",
              "id": "usTsp"
            },
            {
              "name": "Cubic Meter",
              "id": "cubicMeter"
            },
            {
              "name": "Liters",
              "id": "liters"
            },
            {
              "name": "Milliliter",
              "id": "milliliter"
            },
            {
              "name": "Imperial Gal",
              "id": "imperialGal"
            },
            {
              "name": "Imperial Quart",
              "id": "imperialQuart"
            },
            {
              "name": "Imperial Pint",
              "id": "imperialPint"
            },
            {
              "name": "Imperial Oz",
              "id": "imperialOz"
            },
            {
              "name": "Imperial Tbsp.",
              "id": "imperialTbsp"
            },
            {
              "name": "Imperial Tsp.",
              "id": "imperialTsp"
            },
            {
              "name": "Cubic Foot",
              "id": "cubicFoot"
            },
            {
              "name": "Cubic Inch",
              "id": "cubicInch"
            }
        ],
        input_type: {
          from: {
            type: 'tel'
          },
          to: {
            type: 'tel'
          }
        }
      },
      { 
        id: "area",
        type: "general",
        name: "Area",
        from: {
          name: "Square Km",
          id: "squareKm"
        },
        to: {
          name: "Hectare",
          id: "hectare"
        },
        units: [
            {
              "name": "Square Km",
              "id": "squareKm"
            },
            {
              "name": "Hectare",
              "id": "hectare"
            },
            {
              "name": "Square Meter",
              "id": "squareMeter"
            },
            {
              "name": "Square Mile",
              "id": "squareMile"
            },
            {
              "name": "Acre",
              "id": "acre"
            },
            {
              "name": "Square Yard",
              "id": "squareYard"
            },
            {
              "name": "Square Foot",
              "id": "squareFoot"
            },
            {
              "name": "Square Inch",
              "id": "squareInch"
            }
        ],
        input_type: {
          from: {
            type: 'tel'
          },
          to: {
            type: 'tel'
          }
        }
      },
      { 
        id: "fuel_consumption",
        type: "general",
        name: "Fuel Consumption",
        from: {
          name: "MPG (US)",
          id: "mpgUs"
        },
        to: {
          name: "MPG (imp.)",
          id: "mpgImp"
        },
        units: [
            {
              "name": "MPG (US)",
              "id": "mpgUs"
            },
            {
              "name": "MPG (imp.)",
              "id": "mpgImp"
            },
            {
              "name": "Km\/Liter",
              "id": "kmLiter"
            },
            {
              "name": "Liter\/100km",
              "id": "liter100km"
            }
        ],
        input_type: {
          from: {
            type: 'tel'
          },
          to: {
            type: 'tel'
          }
        }
      },
      { 
        id: "time",
        type: "general",
        name: "Time",
        from: {
          name: "Nanoseconds",
          id: "nanoseconds"
        },
        to: {
          name: "Microseconds",
          id: "microseconds"
        },
        units: [
            {
              "name": "Nanoseconds",
              "id": "nanoseconds"
            },
            {
              "name": "Microseconds",
              "id": "microseconds"
            },
            {
              "name": "Milliseconds",
              "id": "milliseconds"
            },
            {
              "name": "Seconds",
              "id": "seconds"
            },
            {
              "name": "Minutes",
              "id": "minutes"
            },
            {
              "name": "Hours",
              "id": "hours"
            },
            {
              "name": "Days",
              "id": "days"
            },
            {
              "name": "Weeks",
              "id": "weeks"
            },
            {
              "name": "Months",
              "id": "months"
            },
            {
              "name": "Years",
              "id": "years"
            },
            {
              "name": "Decades",
              "id": "decades"
            },
            {
              "name": "Century",
              "id": "century"
            }
        ],
        input_type: {
          from: {
            type: 'tel'
          },
          to: {
            type: 'tel'
          }
        }
      },
      { 
        id: "digital_storage",
        type: "general",
        name: "Digital Storage",
        from: {
          name: "Bits",
          id: "bits"
        },
        to: {
          name: "Bytes",
          id: "bytes"
        },
        units: [
            {
              "name": "Bits",
              "id": "bits"
            },
            {
              "name": "Bytes",
              "id": "bytes"
            },
            {
              "name": "Kilobits",
              "id": "kilobits"
            },
            {
              "name": "Kilobytes",
              "id": "kilobytes"
            },
            {
              "name": "Megabits",
              "id": "megabits"
            },
            {
              "name": "Megabytes",
              "id": "megabytes"
            },
            {
              "name": "Gigabits",
              "id": "gigabits"
            },
            {
              "name": "Gigabytes",
              "id": "gigabytes"
            },
            {
              "name": "Terabits",
              "id": "terabits"
            },
            {
              "name": "Terabytes",
              "id": "terabytes"
            },
            {
              "name": "Petabits",
              "id": "petabits"
            },
            {
              "name": "Petabytes",
              "id": "petabytes"
            },
            {
              "name": "Exabits",
              "id": "exabits"
            },
            {
              "name": "Exabytes",
              "id": "exabytes"
            }
        ],
        input_type: {
          from: {
            type: 'tel'
          },
          to: {
            type: 'tel'
          }
        }
      },
      { 
        id: "energy",
        type: "general",
        name: "Energy",
        from: {
          name: "Btu (th)",
          id: "btuTh"
        },
        to: {
          name: "Btu (mean)",
          id: "btuMean"
        },
        units: [
            {
              "name": "Btu (th)",
              "id": "btuTh"
            },
            {
              "name": "Btu (mean)",
              "id": "btuMean"
            },
            {
              "name": "Calories (IT)",
              "id": "caloriesIt"
            },
            {
              "name": "Calories (th)",
              "id": "caloriesTh"
            },
            {
              "name": "Calories (mean)",
              "id": "caloriesMean"
            },
            {
              "name": "Calories (15C)",
              "id": "calories15c"
            },
            {
              "name": "Calories (20C)",
              "id": "calories20c"
            },
            {
              "name": "Calories (food)",
              "id": "caloriesFood"
            },
            {
              "name": "Centigrade Heat Units",
              "id": "centigradeHeatUnits"
            },
            {
              "name": "Electron Volts",
              "id": "electronVolts"
            },
            {
              "name": "Ergs",
              "id": "ergs"
            },
            {
              "name": "Foot-Pound Force",
              "id": "footPoundForce"
            },
            {
              "name": "Foot Poundals",
              "id": "footPoundals"
            },
            {
              "name": "Gigajoules",
              "id": "gigajoules"
            },
            {
              "name": "Horsepower Hours",
              "id": "horsepowerHours"
            },
            {
              "name": "Inch-Pound Force",
              "id": "inchPoundForce"
            },
            {
              "name": "Joules",
              "id": "joules"
            },
            {
              "name": "Kilocalories (IT)",
              "id": "kilocaloriesIt"
            },
            {
              "name": "Kilocalories (th)",
              "id": "kilocaloriesTh"
            },
            {
              "name": "Kilogram-Force Meters",
              "id": "kilogramForceMeters"
            },
            {
              "name": "Kilojoules",
              "id": "kilojoules"
            },
            {
              "name": "Kilowatt Hours",
              "id": "kilowattHours"
            },
            {
              "name": "Megajoules",
              "id": "megajoules"
            },
            {
              "name": "Newton Meters",
              "id": "newtonMeters"
            },
            {
              "name": "Therms",
              "id": "therms"
            },
            {
              "name": "Watt Seconds",
              "id": "wattSeconds"
            },
            {
              "name": "Watt Hours",
              "id": "wattHours"
            }
        ],
        input_type: {
          from: {
            type: 'tel'
          },
          to: {
            type: 'tel'
          }
        }
      },
      { 
        id: "power",
        type: "general",
        name: "Power",
        from: {
          name: "Watts",
          id: "watts"
        },
        to: {
          name: "Kilowatts",
          id: "kilowatts"
        },
        units: [
            {
              "name": "Watts",
              "id": "watts"
            },
            {
              "name": "Kilowatts",
              "id": "kilowatts"
            },
            {
              "name": "Megawatts",
              "id": "megawatts"
            },
            {
              "name": "Gigawatts",
              "id": "gigawatts"
            },
            {
              "name": "Btu\/Hour",
              "id": "btuHour"
            },
            {
              "name": "Btu\/Minute",
              "id": "btuMinute"
            },
            {
              "name": "Btu\/Second",
              "id": "btuSecond"
            },
            {
              "name": "Calories(th)\/Hour",
              "id": "caloriesthHour"
            },
            {
              "name": "Calories(th)\/Minute",
              "id": "caloriesthMinute"
            },
            {
              "name": "Calories(th)\/Second",
              "id": "caloriesthSecond"
            },
            {
              "name": "Kilocalories(th)\/Hour",
              "id": "kilocaloriesthHour"
            },
            {
              "name": "Kilocalories(th)\/Minute",
              "id": "kilocaloriesthMinute"
            },
            {
              "name": "Foot Pounds-Force\/Minute",
              "id": "footPoundsForceMinute"
            },
            {
              "name": "Foot Pounds-Force\/Second",
              "id": "footPoundsForceSecond"
            },
            {
              "name": "Horsepowers (electric)",
              "id": "horsepowersElectric"
            },
            {
              "name": "Horsepowers (international)",
              "id": "horsepowersInternational"
            },
            {
              "name": "Horsepowers (water)",
              "id": "horsepowersWater"
            },
            {
              "name": "Horsepowers (metric)",
              "id": "horsepowersMetric"
            },
            {
              "name": "Joules\/Hour",
              "id": "joulesHour"
            },
            {
              "name": "Joules\/Minute",
              "id": "joulesMinute"
            },
            {
              "name": "Joules\/Second",
              "id": "joulesSecond"
            },
            {
              "name": "Kilogram-Force Meters\/Hour",
              "id": "kilogramForceMetersHour"
            },
            {
              "name": "Kilogram-Force Meters\/Minute",
              "id": "kilogramForceMetersMinute"
            }
        ],
        input_type: {
          from: {
            type: 'tel'
          },
          to: {
            type: 'tel'
          }
        }
      },
      { 
        id: "force",
        type: "general",
        name: "Force",
        from: {
          name: "Newtons",
          id: "newtons"
        },
        to: {
          name: "Kilonewtons",
          id: "kilonewtons"
        },
        units: [
            {
              "name": "Newtons",
              "id": "newtons"
            },
            {
              "name": "Kilonewtons",
              "id": "kilonewtons"
            },
            {
              "name": "Meganewtons",
              "id": "meganewtons"
            },
            {
              "name": "Dynes",
              "id": "dynes"
            },
            {
              "name": "Kilograms Force",
              "id": "kilogramsForce"
            },
            {
              "name": "Kips",
              "id": "kips"
            },
            {
              "name": "Pounds Force",
              "id": "poundsForce"
            },
            {
              "name": "Poundals",
              "id": "poundals"
            },
            {
              "name": "Sthenes (=kN)",
              "id": "sthenes=kn"
            },
            {
              "name": "Tonnes Force",
              "id": "tonnesForce"
            },
            {
              "name": "Tons Force (UK)",
              "id": "tonsForceUk"
            },
            {
              "name": "Tons Force (US)",
              "id": "tonsForceUs"
            }
        ],
        input_type: {
          from: {
            type: 'tel'
          },
          to: {
            type: 'tel'
          }
        }
      },
      { 
        id: "electric_current",
        type: "general",
        name: "Electric Current",
        from: {
          name: "Abampere",
          id: "abampere"
        },
        to: {
          name: "Ampere",
          id: "ampere"
        },
        units: [
            {
              "name": "Abampere",
              "id": "abampere"
            },
            {
              "name": "Ampere",
              "id": "ampere"
            },
            {
              "name": "Biot",
              "id": "biot"
            },
            {
              "name": "Centiampere",
              "id": "centiampere"
            },
            {
              "name": "Coulomb\/Second",
              "id": "coulombSecond"
            },
            {
              "name": "EMU Of Current",
              "id": "emuOfCurrent"
            },
            {
              "name": "ESU Of Current",
              "id": "esuOfCurrent"
            },
            {
              "name": "Franklin\/Second",
              "id": "franklinSecond"
            },
            {
              "name": "Gaussian Electric Current",
              "id": "gaussianElectricCurrent"
            },
            {
              "name": "Gigaampere",
              "id": "gigaampere"
            },
            {
              "name": "Gilbert",
              "id": "gilbert"
            },
            {
              "name": "Kiloampere",
              "id": "kiloampere"
            },
            {
              "name": "Megaampere",
              "id": "megaampere"
            },
            {
              "name": "Microampere",
              "id": "microampere"
            },
            {
              "name": "Milliampere",
              "id": "milliampere"
            },
            {
              "name": "Milliamp",
              "id": "milliamp"
            },
            {
              "name": "Manoampere",
              "id": "manoampere"
            },
            {
              "name": "Picoampere",
              "id": "picoampere"
            },
            {
              "name": "Siemens Volt",
              "id": "siemensVolt"
            },
            {
              "name": "Statampere",
              "id": "statampere"
            },
            {
              "name": "Teraampere",
              "id": "teraampere"
            },
            {
              "name": "Volt\/Ohm",
              "id": "voltOhm"
            },
            {
              "name": "Watt\/Volt",
              "id": "wattVolt"
            },
            {
              "name": "Weber\/Henry",
              "id": "weberHenry"
            }
        ],
        input_type: {
          from: {
            type: 'tel'
          },
          to: {
            type: 'tel'
          }
        }
      }
    ];

    export async function getStaticPaths() {
      const tools =[ 
        {name:"area",display:"Area",id:5,type:"conversions",category:"conversion"},
      {name:"force",display:"Force",id:6,type:"conversions",category:"conversion"},
      {name:"energy",display:"Energy",id:7,type:"conversions",category:"conversion"},
      {name:"fuel_consumption",display:"Fuel Consumption",id:8,type:"conversions",category:"conversion"},
        {name:"time",display:"Time",id:9,type:"conversions",category:"conversion"},
        {name:"mass",display:"Mass",id:10,type:"conversions",category:"conversion"},
        {name:"length",display:"Length",id:11,type:"conversions",category:"conversion"},
        {name:"digital_storage",display:"Data Storage",id:12,type:"conversions",category:"conversion"},

        {name:"temperature",display:"Temperature",id:16,type:"conversions",category:"conversion"},
      {name:"electric_current",display:"Current",id:18,type:"conversions",category:"conversion"},
        {name:"volume",display:"Volume",id:36,type:"conversions",category:"conversion"},
        {name:"pressure",display:"Pressure",id:37,type:"conversions",category:"conversion"},
        {name:"speed",display:"Speed",id:38,type:"conversions",category:"conversion"},
        {name:"power",display:"Power",id:39,type:"conversions",category:"conversion"},
          {name:"charge",display:"Charge",id:45,type:"conversions",category:"conversion"},
      ]
      
      const paths = tools.map((post) =>  ({
        params: {name :stringSpaceToHyphen( post.name) }
      }))
      
        return {
            paths: paths, fallback: false // See the "fallback" section below
        };
      }
      export async function getStaticProps({ params }) {
      
          
        const tools =[ 
          {name:"3-15 PSI",display:"3-15 PSI",id:0,type:"instrumentation",category:"instrumentation"},
        {name:"0-20mA",display:"0-20 mA",id:1,type:"instrumentation",category:"instrumentation"},
        {name:"4-20mA",display:"4-20 mA",id:2,type:"instrumentation",category:"instrumentation"},
        {name:"0-25mA",display:"0-25 mA",id:3,type:"instrumentation",category:"instrumentation"},
         {name:"zero",display:"0-X to % (Conversion)",id:4,type:"instrumentation",category:"zero"},
        {children:"brightness_1",name:"area",display:"Area",id:5,type:"conversions",category:"conversion"},
        {children:"chat",name:"force",display:"Force",id:6,type:"conversions",category:"conversion"},
        {name:"energy",display:"Energy",id:7,type:"conversions",category:"conversion"},
        {name:"fuel_consumption",display:"Fuel Consumption",id:8,type:"conversions",category:"conversion"},
          {name:"time",display:"Time",id:9,type:"conversions",category:"conversion"},
          {name:"mass",display:"Mass",id:10,type:"conversions",category:"conversion"},
          {name:"length",display:"Length",id:11,type:"conversions",category:"conversion"},
          {name:"digital_storage",display:"Data Storage",id:12,type:"conversions",category:"conversion"},
          {name:"resistancetemp",display:"Resistance (from temperature)",id:13,type:"instrumentation",category:"electrical"},
          {name:"linearma",display:"Linear mA to Square Root mA",id:14,type:"instrumentation",category:"electrical"},
          {name:"temperature",display:"Temperature (from resistance)",id:15,type:"instrumentation",category:"electrical"},
          {name:"temperature",display:"Temperature",id:16,type:"conversions",category:"conversion"},
        {name:"linear",display:"Linear to Square Root percentage",id:17,type:"instrumentation",category:"electrical"},
        {name:"electric_current",display:"Current",id:18,type:"conversions",category:"conversion"},
        {name:"ohms", display:"Ohms law (R)",id:19, stringId:"19",type:"electrical",category:"electrical"},
        {name:"ohmsi",display:"Ohms law (I)",id:20,type:"electrical",category:"electrical"},{
          name:"aircore",display:"Air Core Inductance",id:21,type:"electrical",category:"electrical"},{
          name:"laser",display:"Laser Real-Time Converter",id:22,type:"electrical",category:"electrical"},{
          name:"ohmsv",display:"Ohms Law (V)",id:23,type:"electrical",category:"electrical"},{
          name:"parallel",display:"Parallel Resistance",id:24,type:"electrical",category:"electrical"},{
          name:"velocitysound",display:"Velocity of Sound",id:25,type:"electrical",category:"electrical"},
          {name:"lcresonance",display:"LC Resonance",id:26,type:"electrical",category:"electrical"},
          {name:"voltagediv",display:"Voltage Divider",id:27, type:"electrical",category:"electrical"},
          {name:"speedtime",display:"Time (Speed)",id:28,type:"extra",category:"electrical"}, {
          name:"wheat",display:"Wheatstone bridge",id:29,type:"electrical",category:"electrical"}, {
          name:"color",display:"Color code Resistance",id:30,type:"electrical",category:"color"},
          {name:"powerrv",display:"Power (with R,V)",id:31, stringId:"31",type:"electrical",category:"electrical"},
          {name:"powervi",display:"Power (with V,I)",id:32,type:"electrical" ,category:"electrical"},
          {name:"frequency",display:"Frequency",id:33,type:"electrical",category:"electrical"},
          {name:"speedspeed",display:"Speed",id:34,type:"extra",category:"electrical"},
          {name:"distance",display:"Distance (Speed)",id:35,type:"extra",category:"electrical"},
          {name:"volume",display:"Volume",id:36,type:"conversions",category:"conversion"},
          {name:"pressure",display:"Pressure",id:37,type:"conversions",category:"conversion"},
          {name:"speed",display:"Speed",id:38,type:"conversions",category:"conversion"},
          {name:"power",display:"Power",id:39,type:"conversions",category:"conversion"},
          {name:"powerir", display:"Power (with R,I)",id:40,type:"electrical",category:"electrical"},{
          name:"wavelength",display:"Wavelength",id:41,type:"extra",category:"electrical"},{
          name:"powerline",display:"Power Factor 3Phase (Line)",id:42,type:"electrical",category:"electrical"},{
          name:"powerneutral",display:"Power Factor 3Phase (neutral)",id:43,type:"electrical",category:"electrical"},
         {name:"power",display:"Power Factor Single Phase",id:44, stringId:"44",type:"electrical",category:"electrical"},{
          name:"charge",display:"Charge",id:45,type:"conversions",category:"conversion"},
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
        {name:"frequency",display:"Frequency",id:33,type:"electrical",category:"electrical"},
        {name:"timeperiod",display:"Time Period",id:22,type:"electrical",category:"electrical"},

        {name:"Belt Length",display:"Belt Length",id:80,type:"mechanical",category:"electrical"},
        {name:"",display:"Gear Pump Displacement",id:81,type:"mechanical",category:"electrical"},
        {name:"",display:"Stroke's Law",id:82,type:"mechanical",category:"electrical"},
        {name:"",display:"Flow Velocity",id:83,type:"mechanical",category:"electrical"},
        {name:"",display:"Hooke's Law (Force)",id:84,type:"mechanical",category:"electrical"},
        {name:"",display:"Hooke's Law (Spring constant)",id:85,type:"mechanical",category:"electrical"},
        {name:"",display:"Strain",id:86,type:"mechanical",category:"electrical"},
        {name:"",display:"K Value & Pipe Length",id:87,type:"mechanical",category:"electrical"},
        {name:"",display:"Young's modulus",id:88,type:"mechanical",category:"electrical"},
        {name:"",display:"Weber Number",id:89,type:"mechanical",category:"electrical"},
        {name:"",display:"Chezy Coefficient",id:90,type:"mechanical",category:"electrical"},
        {name:"",display:"Cauchy Number",id:91,type:"mechanical",category:"electrical"},
        {name:"",display:"Bulk Modulus Elasticity",id:92,type:"mechanical",category:"electrical"},


   ]
        
        const tooltype = [{id:1,type:"instrumentation",name:"INSTRUMENTATION",show:false},
                        {id:2,type:"electrical",name:"ELECTRICAL",show:false},
                        {id:3,type:"conversions",name:"UNIT CONVERSION",show:false},             
                        {id:4,type:"mechanical",name:"MECHANICAL",show:false}]

                          
        // Pass post data to the page via props
        return { props: { names:tools,toolType:tooltype ,params:params} }
      }
      

      export const capitalize=(name)=> {
          return name.charAt(0).toUpperCase() + name.slice(1)
      }