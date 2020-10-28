import React from 'react';
import {Layout, Drawer,Row,Col,Button,Image,Input} from 'antd'
import { useRouter } from 'next/router'
import Head from 'next/head'
import Navbar from '../../Navbar';
import SideNav from '../../SideNav';
import DrawerNav from '../../DrawerNav';
import { stringSpaceToHyphen } from '../..';


const Electrical  = ({names,toolType}) => {
  const router = useRouter()

  const function_id = parseInt(router.query.id);
    const electricalList =[
      { display:"Linear mA to Square root mA",id:14,descp:"This tool is used to convert transmitter Linear ma to Square root ma conversion. It calculates the equivalemnt square root ma for any given linear ma.",q1:"Linear mA",qc1:"mA",a1:"Square root",ac1:"mA"},
      { display:"Linear % to Square root %",id:17,descp:"This formula used to convert transmitter Linear Percentage to Square root Percentage conversion. ",q1:"Linear %",qc1:"%",a1:"Square root",ac1:"%"},
      { display:"Lb In to Nm",id:65,q1:"Lb In",descp:"This calculator is used to convert between Newton meter and Inch pound",qc1:"",a1:"Nm",ac1:""},
      { display:"Nm to LbIn",id:66,q1:"Nm",descp:"This calculator is used to convert between Newton meter and Inch pound",qc1:"",a1:"Lb In",ac1:""},

      { display:"Time (Speed)",id:28,descp:"This calculator is used to calculate Time from Speed and Distance.",q1:"Distance",qc1:"m",q2:"Speed",qc2:"m/s",a1:" Time",ac1:"s"},
      { display:"Speed",id:34,descp:"This calculator is used to calculate Speed from Time and Distance.",q1:"Distance",qc1:"m",q2:"Time",qc2:"s",a1:" Speed",ac1:"m/s"},
      { display:"Distance",descp:"This calculator is used to calculate Distance from Time and Speed.",id:35,q1:"Time",qc1:"s",q2:"Speed",qc2:"m/s",a1:" Distance",ac1:"m"},
      { display:"Voltage Divider",id:27,descp:"",q1:"V (total)",qc1: "V",q2:"R1",qc2:"Ohm",q3:"R2",qc3:"Ohm",q4:"R3",qc4:"Ohm",a1:"V1",ac1:"Ohm",a2:"V2",ac2:"Ohm",a3:"V3",ac3:"Ohm"},


      { display:"Aircore Inductance",id:21,q1:"Coil diameter",qc1:"in",q2:"Coil Length",qc2:"in",q3:"No: of turns",qc3:"",a1:"Inductance",ac1:""},
      { display:"Velocity of Sound",id:25,q1:"Temperature",qc1:"K",q2:"Gamma",qc2:"",q3:"Gas constant",qc3:"J/Kg*K",a1:"Velocity",ac1:""},
      { display:"Wheatstone",id:29,q1:"R1 (adjacent)",qc1:"Ohm",q2:"R2 (opposite)",qc2:"Ohm",q3:"R3 (adjacent)",qc3:"Ohm",a1:"R",ac1:"Ohm"},
      { display:"Power Factor 3 Phase",id:42,q1:"Voltage (L-L)",qc1:"V",q2:"Current",qc2:"A",q3:"Aparent Power",qc3:"Watt",a1:"Powerfactor",ac1:""},
      { display:"Power Factor Neutral",id:43,q1:"Voltage (L-N)",qc1:"V",q2:"Current",qc2:"A",q3:"Aparent Power",qc3:"Watt",a1:"Powerfactor",ac1:""},
      { display:"Power Factor Single Phase",id:44,q1:"Voltage",qc1:"V",q2:"Current",qc2:"A",q3:"Aparent Power",qc3:"Watt",a1:"Powerfactor",ac1:""},
      { display:"DC Motor Horsepower",id:67,q1:"Volts",qc1:"V",q2:"Amps",qc2:"",q3:"Effs",qc3:"",a1:"Horsepower",ac1:""},
      { display:"Ohms law (R)",id:19,q1:"Voltage",qc1:"V",q2:"Current",qc2:"A",a1:" Resistance, R",ac1:"Ohm"},
      { display:"Ohms law (V)",id:23,q1:"Current",qc1:"A",q2:"Resistance",qc2:"Ohm",a1:" Voltage ",ac1:"V"},
      { display:"Ohms law (I)",id:20,q1:"Voltage",qc1:"V",q2:"Resistance",qc2:"Ohm",a1:" Current",ac1:"A"},
      { display:"Parallel Resistance",id:24,q1:"R1",qc1:"Ohm",q2:"R2",qc2:"Ohm",a1:" R",ac1:"Ohm"},
      { display:"LC Resonance",id:26,q1:"C",qc1:"",q2:"L",qc2:"",a1:" Frequency",ac1:""},
      { display:"Power(I,V)",id:32,q1:"Voltage",qc1:"V",q2:"Current",qc2:"A",a1:" P",ac1:"Watts"},
      { display:"Power(I,R)",id:40,q1:"Current",qc1:"A",q2:"Resistance",qc2:"Ohm",a1:" P",ac1:"Watts"},
      { display:"Power (R,V)",id:31,q1:"Voltage",qc1:"V",q2:"Resistance",qc2:"Ohm",a1:" P",ac1:"Watts"},
      { display:"Speed (Horsepower)",id:46,q1:"Power",qc1:"Horsepower",q2:"Torque",qc2:"PoundFoot",a1:"Rotating speed",ac1:"rpm"},
      { display:"Torque (horsepower)",id:47,q1:"Power",qc1:"Horsepower",q2:"Speed",qc2:"rpm",a1:"Torque",ac1:"PoundFoot"},
      { display:"Horse Power",id:48,q1:"Torque",qc1:"PoundFoot",q2:"Speed",qc2:"rpm",a1:"Horsepower",ac1:"horsePower"},
      { display:"Effective Tension from HP & FPM",id:68,q1:"HP",qc1:"",q2:"FPM",qc2:"",a1:"Effective Tension",ac1:"lbs"},
      { display:"Effective Tension from Torque & Radius",id:69,q1:"Torque",qc1:"",q2:"Radius",qc2:"",a1:"Effective Tension",ac1:"lbs"},
  
        { display:"Resistance from temperature",id:13,q1:"T(t)",qc1:"",q2:"R(0)",qc2:"",q3:"T(0)",qc3:"",q4:"C",qc4:"",a1:"Resistance",ac1:"Ohm"},
        { display:"Temperature from resistance",id:15,descp:"As temperature rises, the number of phonons increases and with it the likelihood that the electrons and phonons will collide. Thus when temperature goes up, resistance goes up. For some materials, resistivity is a linear function of temperature. The resistivity of a conductor increases with temperature.",q1:"R(t)",qc1:"",q2:"R(0)",qc2:"",q3:"Temp",qc3:"",q4:"C",qc4:"",a1:"Temperature",ac1:"K"},
        { display:"Level Measurement Two Seals",img:"twoSeal.png",id:49,q1:"h1",qc1:"mm",q2:"h0",qc2:"mm",q3:"d3",qc3:"",q4:"d2",qc4:"",q5:"d1",qc5:"",q6:"C",qc6:"mm",a1:"HP Side/LRV/4mA",ac1:"mmH20",a2:"LP Side/URV/20mA",ac2:"mmH20",a3:"Span",ac3:"mmH20"},
        { display:"Level Measurement One Seal Above",img:"onseSealAbove.png",id:50,q1:"h2",qc1:"mm",q2:"h1",qc2:"mm",q3:"h0",qc3:"mm",q4:"d2",qc4:"",q5:"d1",qc5:"",a1:"HP Side/LRV/4mA",ac1:"mmH20",a2:"LP Side/URV/20mA",ac2:"mmH20",a3:"Span",ac3:"mmH20"},
        { display:"Level Measurement One Seal Below",img:"oneSealBelow.png",id:51,q1:"h2",qc1:"mm",q2:"h1",qc2:"mm",q3:"h0",qc3:"mm",q4:"d2",qc4:"",q5:"d1",qc5:"",a1:"HP Side/LRV/4mA",ac1:"mmH20",a2:"LP Side/URV/20mA",ac2:"mmH20",a3:"Span",ac3:"mmH20"},
        { display:"Bubble Level",img:"bubblelevel.png",id:52,q1:"h1",qc1:"mm",q2:"h0",qc2:"mm",q3:"d1",qc3:"",a1:"HP Side/LRV/4mA",ac1:"mmH20",a2:"LP Side/URV/20mA",ac2:"mmH20",a3:"Span",ac3:"mmH20"},
        { display:"Bubble Interface",img:"bubbleInterface.png",id:53,q1:"h1",qc1:"mm",q2:"du",qc2:"",q3:"dl",qc3:"",a1:"HP Side/LRV/4mA",ac1:"mmH20",a2:"LP Side/URV/20mA",ac2:"mmH20",a3:"Span",ac3:"mmH20"},
        { display:"Two Seal Interface",img:"twoSealInterface.png",id:54,q1:"h4",qc1:"mm",q2:"h1",qc2:"mm",q3:"h0",qc3:"mm",q4:"d3",qc4:"",q5:"d2",qc5:"",q6:"du",qc6:"",q7:"du",qc7:"",q8:"C",qc8:"mm",a1:"HP Side/LRV/4mA",ac1:"mmH20",a2:"LP Side/URV/20mA",ac2:"mmH20",a3:"Span",ac3:"mmH20"},
        { display:"Open Tank",img:"openTank.png",id:55,q1:"h2",qc1:"mm",q2:"h1",qc2:"mm",q3:"h0",qc3:"mm",q4:"d1",qc4:"",q5:"d0",qc5:"",a1:"HP Side/LRV/4mA",ac1:"mmH20",a2:"LP Side/URV/20mA",ac2:"mmH20",a3:"Span",ac3:"mmH20"},
        { display:"Interface Wet Leg",img:"twoSealInterface.png",id:56,q1:"h4",qc1:"mm",q2:"h3",qc2:"mm",q3:"h2",qc3:"mm",q4:"h1",qc4:"mm",q5:"h0",qc5:"mm",q6:"d2",qc6:"",q7:"d0",qc7:"",q8:"du",qc8:"",q9:"dl",qc9:"",a1:"HP Side/LRV/4mA",ac1:"mmH20",a2:"LP Side/URV/20mA",ac2:"mmH20",a3:"Span",ac3:"mmH20"},
        { display:"Liquid Purge",id:57,img:"liquidPurge.png",q1:"h3",qc1:"mm",q2:"h2",qc2:"mm",q3:"h1",qc3:"mm",q4:"h0",qc4:"mm",q5:"d3",qc5:"",q6:"d2",qc6:"",q7:"d1",qc7:"",a1:"HP Side/LRV/4mA",ac1:"mmH20",a2:"LP Side/URV/20mA",ac2:"mmH20",a3:"Span",ac3:"mmH20"},
        { display:"Level Transmission Closed Vessel",img:"11LT.png",id:58,descp:"Hydrostatic head instruments for measuring liquid level in vessels operating above atmospheric pressure uses the full capability of the differential pressure instruments with both sides of the measuring element connected to the vessel.",q1:"h3",qc1:"mm",q2:"h2",qc2:"mm",q3:"h1",qc3:"mm",q4:"h0",qc4:"mm",q5:"d3",qc5:"",q6:"d2",qc6:"",q7:"d1",qc7:"",q8:"d0",qc8:"",a1:"HP Side/LRV/4mA",ac1:"mmH20",a2:"LP Side/URV/20mA",ac2:"mmH20",a3:"Span",ac3:"mmH20"},
        { display:"Flow Rate Calculation",id:62,q1:"Pipe Diameter",qc1:"mm",q2:"Constricted Diameter",qc2:"mm",q3:"Measured Pressure Difference",qc3:"kPa",q4:"Fluid Density",qc4:"kg/m3",q5:"Meter Coefficient D",qc5:"",a1:"Constricted Area",ac1:"",a2:"Diameter Section",ac2:"",a3:"Pipe Flow Rate",ac3:"m3/s"},
        { display:"Hydrostatic Level",id:63,descp:"Hydrostatic level measurement is a simple and reliable method of measuring level. A submersible pressure sensor, regular pressure sensor or pressure gauge is lowered to or mounted at a specific depth (zero level). The sensor then measures the pressure caused by the weight of the liquid directly on top of it. Due to the hydrostatic paradox, the pressure sensor does not measure the complete volume in the tank above it, but only the liquid column vertically above it.",q1:"Max URV",qc1:"ft",q2:"Min LRV",qc2:"ft",q3:"Process Liquid Density",qc3:"",q4:"Transmitter Height Offset",qc4:"",q5:"Impulse Line Fluid Density",qc5:"lb/ft3",q6:"Actual Liquid Level",qc6:"ft",a1:"Hydrostatic Pressure @ transmitter ",ac1:"WC",a2:"Transmitter LRV",ac2:"",a3:"Transmitter URV",ac3:""},
        { display:"Orifice Plate Error",id:64,q1:"Max Flow through orifice plate",qc1:"GPM",q2:"Differential pressure at that flow rate",qc2:"WC",q3:"Differential Pressure measurement errors",qc3:"WC",q4:"Current Flow",qc4:"GPM",a1:"Hydrostatic Pressure @ transmitter ",ac1:"WC",a2:"Transmitter LRV",ac2:"",a3:"Transmitter URV",ac3:""},
        { display:"Short Circuit Calculation",id:59,descp:"This tool is used to find Source Impedence andTotal impedence at time of short circuit.",q1:"I",qc1:"",q2:"kVA",qc2:"mm",q3:"Zt",qc3:"",a1:"Source Impedence Zu",ac1:"",a2:"Total impedence Z",ac2:""},
        { display:"Transformer Fault Current",id:60,descp:"This tool calculates the loop impedance at the end ofa circuit fed from the secondary winding of a transformer. When calculating Fault Loop Impedance Select the Correct Transformer Type Above. Three Phase Transformers Divide the Values for Vs secondary Voltage by √3 and the VA by 3.",q1:"V",qc1:"",q2:"Z% ",qc2:"%",q3:"I",qc3:"",a1:"Maximum Fault Current",ac1:"A",a2:"Impedence Voltage",ac2:""},
        { display:"DOL & Star Delta Starter",id:61,descp:"DOL means the motor is connected Directly ON Line using one contactor with no starting circuit to lower the high starting current. Typically the Delta part of Star-Delta. Star-Delta uses two contactors, one to start at a lower voltage in Star and one to run at a higher voltage in Delta configuration.",q1:"System Voltage",qc1:"V",q2:"Phase",qc2:"",q3:"Motor Size",qc3:"HP",q4:"Motor rpm",qc4:"",q5:"Power Factor",qc5:"",a1:"Motor Rated Torque (Full Load)",ac1:"lb-ft",a2:"Motor Starting Torque",ac2:"mmH20",a3:"Lock Rotor Current IL(Min)",ac3:"",a4:"Lock Rotor Current IL(Max)",ac4:"",a5:"Motor Full load current (Live)",ac5:""},
        {display:"Time Period",id:22,descp:"",q1:"Frequency",qc1:"Hz",a1:"Time Period",ac1:"ms"},
        {display:"Frequency",id:33,descp:"",q1:"Time Period",qc1:"ms",a1:"Frequency",ac1:"Hz"}
        ,
        //MECHANICAL
       
        {display:"Belt",id:80,descp:"",q1:"",qc1:"",q2:"",qc2:"",q3:"",qc3:"",a1:"",ac1:""},
        {display:"Belt",id:80,descp:"",q1:"",qc1:"",a1:"",ac1:""},


        {display:"Belt length",id:80,descp:"",q1:"Diameter of Large Pulley",qc1:"m",q2:"Diameter of Small pulley",q3:"Pulley Centre distance",qc3:"m",a1:"Belt Length",ac1:"m"},
       

        {display:"Gear Pump Displacement",id:81,descp:"",q1:"Gear width",qc1:"cm",q2:"Gear tip diameter",qc2:"cm",q3:"Gear centres (when meshed)",qc3:"cm",a1:"Displacement",ac1:"cm^3/rev"},
        {display:"Stroke's Law",id:82,descp:"",q1:"Acceleration of gravity",qc1:"m/s^2",q2:"Diameter of a particle",qc2:"m",q3:"Density of particle",qc3:"gm/m^3",q4:"Density of Medium",qc4:"gm/m^3",q5:"Viscoscity of Medium",qc5:"gm/ms",a1:"Terminal Velocity",ac1:"m/s"},
        {display:"Flow Velocity",id:83,descp:"",q1:"Cauchy Number",qc1:"N/m^2",q2:"Bulk Modulus Elasticity",qc2:"N/m^2",q3:"Density",qc3:"kg/m^3",a1:"Flow Velocity",ac1:"m/s"},
        {display:"Hooke's Law (Force)",id:84,descp:"",q1:"Spring Constant",qc1:"N/m",q2:"Distance from Equillibrium",qc2:"m",q3:"Spring Equillibrium Position",qc3:"m",a1:"Force",ac1:"N"},
        {display:"Hooke's Law (Spring constant)",id:85,descp:"",q1:"Force",qc1:"N",q2:"Distance",qc2:"m",q3:"Spring Equillibrium Position",qc3:"m",a1:"Spring Constant",ac1:"N/m"},
        {display:"Strain",id:86,descp:"",q1:"Change in Length",qc1:"m",q2:"Original Length",qc2:"m",a1:"Strain",ac1:""},
        {display:"K Value & Pipe Length",id:87,descp:"",q1:"Turbulent Friction Factor",qc1:"",q2:"Length",qc2:"m",q3:"Pipe Diameter",qc3:"mm",a1:"K Value",ac1:""},
        {display:"Young's modulus",id:88,descp:"",q1:"Stress",qc1:"N/m^2",q2:"Strain",qc2:"",a1:"Young's Modulus",ac1:"N/m^2"},
        {display:"Weber Number",id:89,descp:"",q1:"Density",qc1:"kg/m^3",q2:"Velocity",qc2:"m/s",q3:"Length",qc3:"m",q4:"Surface Tension",qc4:"N/m",a1:"Weber Number",ac1:""},
        {display:"Chezy Coefficient",id:90,descp:"",q1:"Mean Velocity",qc1:"m/s",q2:"Hydraulic radius",qc2:"m",q3:"Slope",qc3:"",a1:"Chezy Coefficient",ac1:""},
        {display:"Cauchy Number",id:91,descp:"",q1:"Flow Velocity",qc1:"m/s",q2:"Density",qc2:"kg/m^3",q3:"Bulk Modulus Elasticity",qc3:"N/m^2",a1:"Cauchy Number",ac1:""},
        {display:"Bulk Modulus Elasticity",id:92,descp:"",q1:"Flow Velocity",qc1:"m/s",q2:"Density",qc2:"kg/m^3",q3:"Cauchy Number",qc3:"",a1:"Bulk Modulus Elasticity",ac1:"N/m^2"},

    ]

     const details = [
     
       {id:13,a1:"T(t)",ad1:"Temperature Value",a2:"R(0)",ad2:"Initial Resistance Value",a3:"C",ad3:"Temperature Co-efficient Value",a4:"T(0)",ad4:"Initial Temperature Value"},
       {id:15,a1:"R(t)",ad1:"Current Resistance Value",a2:"R(O)",ad2:"Initial Resistance Value",a3:"C",ad3:"Temperature Co-efficient Value",a4:"Temp",ad4:"Initial Temperature Value"},
       {id:49,a1:"d3",ad1:"Sp. Gr. vapour",a2:"d2",ad2:"Sp.Gr. sealing oil",a3:"d1",ad3:"Sp. Gr.Tank Liquid",a4:"C",ad4:"Flange C to C"},
       {id:50,a1:"d2",ad1:"Sp. Gr. Sealing Oil",a2:"d1",ad2:"Sp. Gr. Tank Oil"},
       {id:51,a1:"d2",ad1:"Sp. Gr. Sealing Oil",a2:"d1",ad2:"Sp. Gr. Tank Oil"},
    
       {id:52,a1:"d1",ad1:"Sp. Gr. Tank Liquid"},
       {id:53,a1:"du",ad1:"Sp.Gravity Upper Tank",a2:"dl",ad2:"Sp.Gravity Lower Tank"},
       {id:55,a1:"d1",ad1:"Sp.Gr. Tank Liquid",a2:"d0",ad2:"Sp. Gr. Tank Leg h2"},
       {id:54,a1:"d2",ad1:"Specific Gravity of wet leg",a2:"du",ad2:"Specific Gravity of Upper Tank",a3:"dl",ad3:"Specific Gravity of Lower Tank",a4:"d0",ad4:"Specific Gravity of tank leg h2"},
       {id:56,a1:"d2",ad1:"Specific Gravity of wet leg",a2:"du",ad2:"Specific Gravity of Upper Tank",a3:"dl",ad3:"Specific Gravity of Lower Tank",a4:"d0",ad4:"Specific Gravity of tank leg h2"},
       {id:57,a1:"d3",ad1:"Specific Gravity of Vapour",a2:"d2",ad2:"Specific Gravity of Purge",a3:"d1",ad3:"Specific Gravity of Tank liquid"},
       {id:58,a1:"d3",ad1:"Specific Gravity Vapour",a2:"d2",ad2:"Specific Gravity wet leg",a3:"d1",ad3:"Specific Gravity Tank Liquid",a4:"d0",ad4:"Specific Gravity Tank leg h2"},


  
     ]
     const [answer1,setAnswer1] = React.useState()
     const [answer2,setAnswer2] = React.useState()
     const [answer3,setAnswer3] = React.useState()
     const [answer4,setAnswer4] = React.useState()
     const [answer5,setAnswer5] = React.useState()
     const [q1,setQ1] = React.useState()
     const [q2,setQ2] = React.useState()
     const [q3,setQ3] = React.useState()
     const [q4,setQ4] = React.useState()
     const [q5,setQ5] = React.useState()
     const [q6,setQ6] = React.useState()
     const [q7,setQ7] = React.useState()
     const [q8,setQ8] = React.useState()
     const [q9,setQ9] = React.useState()
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
     const calculate = (q1,q2,q3,q4,q5,q6,q7,q8,q9) => {

    
      if((function_id === 19)||(function_id === 69)||(function_id===20)||(function_id === 28)||(function_id === 34))
        setAnswer1(q1/q2)
        else if(function_id === 27)
         {setAnswer1(q1*q2/(q4+q2+q3))
           setAnswer2(q1*q3/(q4+q2+q3))
           setAnswer3(q1*q4/(q4+q2+q3))
          
         }
        else if((function_id=== 23)||(function_id=== 31)||(function_id === 35))
        setAnswer1(q1*q2)
        else if(function_id===24)
        setAnswer1(1/(1/q1+1/q2))
        else if(function_id===26)
        setAnswer1(1/(6.28*Math.sqrt(q1*q2)))
        else if(function_id===32)
        setAnswer1(q1*q1*q2)
        else if(function_id===33)
        setAnswer1(q1*q1/q2)
        else if((function_id===46)||(function_id===48))
        setAnswer1(q1*q2/5252)
        else if(function_id===47)
        setAnswer1(q1*5252/q2)
        else if(function_id===41)
        setAnswer1(q1*33000/q2)
        else if(function_id===22)
        setAnswer1(q1/q2)
      if((function_id === 21))
      setAnswer1(q1*q1*q3*q3/(18*q1 + 40*q2))
     else if((function_id === 25))
      setAnswer1(Math.sqrt(q1*q2*q3))
      else if((function_id === 29))
      setAnswer1(q3*q1/q2)
      else if((function_id === 42))
      setAnswer1(q3/(1.732*q1*q2))
      else if((function_id === 43))
      setAnswer1(q3/(3*q1*q2))
      else if((function_id === 44))
      setAnswer1(q3/(q1*q2))
      else if((function_id === 67))
      setAnswer1(q1*q2*q3/746)
      
      if((function_id === 17))
      setAnswer1(Math.sqrt(q1)*10)
      else if(function_id=== 16 || function_id=== 14)
      setAnswer1(Math.sqrt((q1-4)/16)*16 +4)
      else if(function_id=== 65)
      setAnswer1(q1*8.8507)
      else if(function_id=== 66)
      setAnswer1(q1/8.8507)

      if((function_id === 13))
         setAnswer1(q2*(1+q4/q1 -q3))
        else if(function_id===15)
        setAnswer1((q1/q2 -1)/q4 +q3)
         else if(function_id ===49)
           {setAnswer1(q2*(q5-q3)-q6*(q4-q3))
            setAnswer2( (q2+q1)*(q5-q3) - q6*(q4-q3));
            setAnswer3((q2+q1)*(q5-q3) - q6*(q4-q3) - (q2*(q5-q3)-q6*(q4-q3)))}
         else if(function_id===50)
         { 
           setAnswer1(q3*q5 -q1*q4)
           setAnswer2( (q2+q3)*q5-q1*q4)
           setAnswer3(((q2+q3)*q5-q1*q4)-(q3*q5 -q1*q4))
         }
         else if(function_id === 51)
         {setAnswer1(q3*q5 +q1*q4)
           setAnswer2( (q2+q3)*q5+q1*q4)
           setAnswer3(((q2+q3)*q5+q1*q4)-(q3*q5 +q1*q4))
         }
         else if(function_id === 52)
         {setAnswer1(q2*q3)
           setAnswer2( (q1+q2)*q3)
           setAnswer3((q1+q2)*q3-q2*q3)
         }
         else if(function_id === 53)
         {setAnswer1(q1*q2)
          setAnswer2(q1*q3)
          setAnswer3(q1*q3- q1*q2)
          console.log("Q1 Q2 Q3",q1,q2,q3)
         }
         else if(function_id === 54)
         {setAnswer1(q3*q7 + (q1+q2)*q6 - q8*q5)
           setAnswer2( (q2+q3)*q7 +q1*q6-q8*q5)
           setAnswer3( (q2+q3)*q7 +q1*q6-q8*q5 -(q3*q7 + (q1+q2)*q6 - q8*q5))
         }
         else if(function_id === 55)
         {setAnswer1(q1*q5 + q3*q4)
           setAnswer2( q2*q5 + q1*q5 + q3*q4)
           setAnswer3(  q2*q5 + q1*q5 + q3*q4-(q1*q5 + q3*q4))
         }
         else if(function_id === 56)
         {setAnswer1(q3*q7 +q5*q9 + (q1+q4)*q8 - q2*q6)
           setAnswer2(  q3*q7 +q9*(q5+q4)+q1*q8 - q2*q6)
           setAnswer3(  q3*q7 +q9*(q5+q4)+q1*q8 - q2*q6 -(q3*q7 +q5*q9 + (q1+q4)*q8 - q2*q6))
         }
         else if(function_id === 57)
         {setAnswer1(-(q1-q2)*(q6-q5) +q4*(q7-q5))
           setAnswer2( -(q1-q2)*(q6-q5) +q4*(q7-q5) +q3*(q7-q5))
           setAnswer3(  -(q1-q2)*(q6-q5) +q4*(q7-q5) +q3*(q7-q5) -(-(q1-q2)*(q6-q5) +q4*(q7-q5)))
         }
         else if(function_id === 58)
         {setAnswer1(q2*(q8-q5) + q4*(q7-q5) - q1*(q6-q5))
           setAnswer2(  q2*(q8-q5)+(q3+q4)*(q7-q5)-q5*(q6-q5))
           setAnswer3(  q2*(q8-q5)+(q3+q4)*(q7-q5)-q5*(q6-q5)-( q2*(q8-q5) + q4*(q7-q5) - q1*(q6-q5)))
         }
         else if(function_id === 62)
         {setAnswer1(3.14*q2*q2*0.000001/4)
           setAnswer2( q2/q1)
           setAnswer3( (q5*3.14*q2*q2*0.000001/4)*Math.sqrt(2*q3*1000/q4*(1-Math.pow(q2/q1,4))))
         }
         else if(function_id === 63)
         {setAnswer1((q6*q3 + q4*q5)*27.68/144)
           setAnswer2(  (-q4*q5+q2*q6)*27.68/144)
           setAnswer3(  (-q4*q5+q2*q6)*27.68/144 -( (q6*q3 + q4*q5)*27.68/144))
         }
         else if(function_id===64)
         {
           setAnswer1(q1/Math.sqrt(q2))
           setAnswer2( Math.pow(q4/(q1/Math.sqrt(q2)),2))
           setAnswer3( Math.pow(q4/(q1/Math.sqrt(q2)),2) + q3)
           setAnswer4(Math.pow(q4/(q1/Math.sqrt(q2)),2) + q3 -q4)
           setAnswer5((Math.pow(q4/(q1/Math.sqrt(q2)),2) + q3 -q4)/q4)
 
         }
         else if(function_id===33 || function_id===22)
         setAnswer1(1000/q1)
         else if(function_id=== 59){
           setAnswer1(q2/q1)
           setAnswer2(q2/q1 + q3)
         }
         else if(function_id=== 60)
         {
           setAnswer1(q1*q2/100)
           setAnswer2( q3*10000/(q1*q2))
         }
         else if(function_id === 61)
         {
 
           setAnswer1(5252*(q3)/(q4))
         
           if((0.746*(q3))<30)
           {
             setAnswer2(3*5252*(q3)/(q4))}
             else
                 {setAnswer2(2*5252*(q3)/(q4))}
           
           if((q2)===1)   
             {setAnswer3(1000*(q3)/(q1))}
             else 
             {setAnswer3(1000*(q3)/(1.732*(q1)))}
             if((q2)===1)   
             {setAnswer4(1000*(q3)*3.14/(q1)) }  
             else 
            { setAnswer4(1000*(q3)*3.14/(1.732*(q1)))  }
             if((q2)===1)   
             {setAnswer5(1000*(q3)*0.746/((q5)*(q1))) }  
             else 
             {setAnswer5((1000*(q3)*0.746/((q5)*1.732*(q1)) )) } 
           }
           else if(function_id===80)
           setAnswer1(
             (q1+q2)*1.57 + (q1-q2)*Math.asin((q1-q2)/(2*q3)) + 2*Math.sqrt(q3*q3- 0.25*(q1-q2)*(q1-q2))
           )
           else if(function_id===81)
           setAnswer1(3.14*q1*(q2*q2-q3*q3)/2)
           else if(function_id===82)
           setAnswer1(q1*q2*q2*(q3-q4)/(18*q5))
           else if(function_id===83)
           setAnswer1(-q1*(q2-q3))
           else if(function_id===84 || function_id===85)
           setAnswer1(-q1*(q2-q3))
           else if(function_id===86 || function_id===88)
           setAnswer1(q1/q2)
           else if(function_id===87)
           setAnswer1(q1*1000*q2/q3)
           else if(function_id===89)
           setAnswer1(q1*q2*q2*q3/q4)
           else if(function_id===90)
           setAnswer1(q1/Math.sqrt(q2*q3))
           else if(function_id===91 || function_id===92)
           setAnswer1(q2*q1*q1/q3)
           else if(function_id===83)
           setAnswer1(Math.sqrt(q1*q2/q3))
           
             //add history
             console.log("answers",answer1,answer2,answer3)
             if(function_id === 53)
             {setAnswer1(q1*q2)
              setAnswer2(q1*q3)
              setAnswer3(q1*q3- q1*q2)
              console.log("Q1 Q2 Q3",q1,q2,q3)
             }
           console.log("calculate",q1*q3,typeof(q1*q3))  //add history
         }
       
         const value = [
           {a:'q1',b:'qc1',c:function(item)  {setQ1(item.target.value)}},
           {a:'q2',b:'qc2',c:function(item)  {setQ2(item.target.value)}},
           {a:'q3',b:'qc3',c:function(item)  {setQ3(item.target.value)}},
           {a:'q4',b:'qc4',c:function(item)  {setQ4(item.target.value)}},
           {a:'q5',b:'qc5',c:function(item)  {setQ5(item.target.value)}},
           {a:'q6',b:'qc6',c:function(item)  {setQ6(item.target.value)}},
           {a:'q7',b:'qc7',c:function(item)  {setQ7(item.target.value)}},
           {a:'q8',b:'qc8',c:function(item)  {setQ8(item.target.value)}},
           {a:'q9',b:'qc9',c:function(item)  {setQ9(item.target.value)}},

         ]
         const answer = [
           {a:'a1',b:'ac1',c:answer1},
           {a:'a2',b:'ac2',c:answer2},
           {a:'a3',b:'ac3',c:answer3},
           {a:'a4',b:'ac4',c:answer4},
           {a:'a5',b:'ac5',c:answer5},
         ]
         const detail = [
          {a:'a1',b:'ad1'},
          {a:'a2',b:'ad2'},
          {a:'a3',b:'ad3'},
          {a:'a4',b:'ad4'},
          {a:'a5',b:'ad5'},
           {a:'a6',b:'ad6'},
          
        ]
  return (
    <div>
    <Head>
      <title>{router!==undefined && router.query.name}</title>
      <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet"/>
      
      {electricalList.map(item => item.id === router.query.id
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
              <SideNav names={names} toolType={toolType}/>
            </div>
    <Layout className="toolbox-layout">
      {router.query.id!==undefined &&
          <div className="toolbox">
              <div className="toolbox-heading"> 
              {electricalList[electricalList.findIndex((list)=>list.id.toString() === router.query.id)].display}
              </div>
              <hr className="hr"/>
              <div className="toolbox-calc">
                  <div className="heading">Calculation</div>
                  {value.map((item)=>
            
                      electricalList[electricalList.findIndex((list)=>list.id.toString() === router.query.id)][item.b] !== undefined &&
          
                       <div className="toolbox-calc">
                        <div style={{display:"flex"}}>
                              <div style={{flex:2}}>
                                  {electricalList[electricalList.findIndex((item)=>item.id.toString() === router.query.id)][item.a]}
                              </div>
                              <div style={{flex:1}}>
                                  <Input placeholder="input" className="input box" type="number" onChange={(e)=>{item.c(e)
                                  console.log("input",e.target.value)}}></Input>
                              </div>
                              <div style={{flex:1}}>
                                  {electricalList[electricalList.findIndex((item)=>item.id.toString() === router.query.id)][item.b] || ""}
                              </div>
                         </div>
              
                      </div>
                     )} 
                     </div> 

                    {electricalList[electricalList.findIndex((item)=>item.id.toString() === router.query.id)].img !== undefined &&
            //<Image src="/assets/11LT.png"/>
            <div>
               <hr className="hr"/>
                          <div className="toolbox-calc">
                            <div className="heading">FIGURE</div>
                          <Image style={{marginTop:"60px",width:"90%"}} src={`/assets/${electricalList[electricalList.findIndex((item)=>item.id.toString() === router.query.id)].img}`}/>
                          </div>
                          </div>
                    }
                    
                  
                      {details.findIndex((list)=>list.id.toString() === router.query.id) !== -1 &&
                      <div>
                         <hr className="hr"/>
          <div className="toolbox-calc">
            
                                 <div className="heading">DETAILS</div>

                      {detail.map((item)=>
          
                          details[details.findIndex((list)=>list.id.toString() === router.query.id)][item.a] !== undefined &&
                 
                          <div style={{display:"flex",marginTop:"5px"}} key={item.id}>
                            <div style={{flex:1}}>
                                {details[details.findIndex((item)=>item.id.toString() === router.query.id)][item.a]}
                            </div>
                            <div style={{flex:1}}>
                                {details[details.findIndex((item)=>item.id.toString() === router.query.id)][item.b]}</div>
                          </div>
              
            )
          }
          </div>
          </div>}
          <div class="toolbox-desc">

          <Button className="calculate-button" onClick={()=>calculate(q1,q2,q3,q4,q5,q6,q7,q8,q9)}>CALCULATE</Button>
          </div>
              {(answer1!== undefined) &&
         <div>
            <hr className="hr"/>
        <div class="toolbox-calc">
            <div className="heading">RESULT</div>
          {answer.map((item)=>
                        electricalList[electricalList.findIndex((list)=>list.id.toString() === router.query.id)][item.a] !== undefined &&
                 
          <div style={{display:"flex"}} key={item.id}>
                  <div style={{flex:2}}> {electricalList[electricalList.findIndex((item)=>item.id.toString() === router.query.id)][item.a]}</div>
                  <div style={{flex:1}}> {item.c}</div>
                  <div style={{flex:1}}>{electricalList[electricalList.findIndex((item)=>item.id.toString() === router.query.id)][item.b]}</div>

              </div>
              
            )}
          </div>
          </div>}
      {/* {      electricalList[electricalList.findIndex((item)=>item.id.toString() === router.query.id)].descp!== undefined &&

      <div className="description">
      {electricalList[electricalList.findIndex((item)=>item.id.toString() === router.query.id)].descp}
      </div>} */}
      </div>}
    </Layout>
    </div>
    </div>
  );
};

export default Electrical;
export async function getStaticPaths() {
  const tools = [
    {name:"resistancetemp",display:"Resistance (from temperature)",id:13,type:"instrumentation",category:"electrical"},
    {name:"linearma",display:"Linear mA to Square Root mA",id:14,type:"instrumentation",category:"electrical"},
    {name:"temperature",display:"Temperature (from resistance)",id:15,type:"instrumentation",category:"electrical"},
  {name:"linear",display:"Linear to Square Root percentage",id:17,type:"instrumentation",category:"electrical"},
  {name:"ohms", display:"Ohms law (R)",id:19, stringId:"19",type:"electrical",category:"electrical"},
  {name:"ohmsi",display:"Ohms law (I)",id:20,type:"electrical",category:"electrical"},{
    name:"aircore",display:"Air Core Inductance",id:21,type:"electrical",category:"electrical"},{
    // name:"laser",display:"Laser Real-Time Converter",id:22,type:"electrical",category:"electrical"},{
    name:"ohmsv",display:"Ohms Law (V)",id:23,type:"electrical",category:"electrical"},{
    name:"parallel",display:"Parallel Resistance",id:24,type:"electrical",category:"electrical"},{
    name:"velocitysound",display:"Velocity of Sound",id:25,type:"electrical",category:"electrical"},
    {name:"lcresonance",display:"LC Resonance",id:26,type:"electrical",category:"electrical"},
    {name:"voltagediv",display:"Voltage Divider",id:27, type:"electrical",category:"electrical"},
    {name:"speedtime",display:"Time (Speed)",id:28,type:"extra",category:"electrical"}, {
    name:"wheat",display:"Wheatstone bridge",id:29,type:"electrical",category:"electrical"}, 
    {name:"powerrv",display:"Power (with R,V)",id:31, stringId:"31",type:"electrical",category:"electrical"},
    {name:"powervi",display:"Power (with V,I)",id:32,type:"electrical" ,category:"electrical"},
     {name:"frequency",display:"Frequency",id:33,type:"electrical",category:"electrical"},
     {name:"timeperiod",display:"Time Period",id:22,type:"electrical",category:"electrical"},

    {name:"speedspeed",display:"Speed",id:34,type:"extra",category:"electrical"},
    {name:"distance",display:"Distance /(Speed)",id:35,type:"extra",category:"electrical"},
    
    {name:"powerir", display:"Power (with R,I)",id:40,type:"electrical",category:"electrical"},{
    // name:"wavelength",display:"Wavelength",id:41,type:"extra",category:"electrical"},{
    name:"powerline",display:"Power Factor 3Phase (Line)",id:42,type:"electrical",category:"electrical"},{
    name:"powerneutral",display:"Power Factor 3Phase (neutral)",id:43,type:"electrical",category:"electrical"},
   {name:"power",display:"Power Factor Single Phase",id:44, stringId:"44",type:"electrical",category:"electrical"},
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

  

  const paths = tools.map((post) => ({
    params: {name :stringSpaceToHyphen(post.display), id: post.id.toString() }
  }))
  
    return {
        paths: paths, fallback: false // See the "fallback" section below
    };
  }
export async function getStaticProps({ params }) {
  // params contains the post `id`.
  // If the route is like /posts/1, then params.id is 1

    
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
  {name:"eff2",display:"Eff Tension from Torque and Radius",id:69,type:"electrical",category:"electrical"},]
  
  const tooltype = [{id:1,type:"instrumentation",name:"INSTRUMENTATION",show:false},
                  {id:2,type:"electrical",name:"ELECTRICAL",show:false},
                  {id:3,type:"conversions",name:"UNIT CONVERSION",show:false}
                  ,{id:4,type:"mechanical",name:"MECHANICAL",show:false}]

                    
  // Pass post data to the page via props
  return { props: { names:tools,toolType:tooltype ,params:params} }
}
