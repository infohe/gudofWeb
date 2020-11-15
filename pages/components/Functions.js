import React from 'react';
import {Layout, Drawer,Row,Col,Button,Image,Input} from 'antd'
import Head from 'next/head'
import Navbar from '../Navbar';
import SideNav from '../SideNav';
import DrawerNav from '../DrawerNav';
import { stringSpaceToHyphen } from '..';


const Functions  = ({names,toolType,id}) => {

  const function_id = parseInt(id);
    const electricalList =[
      { display:"Linear mA to Square root mA",id:14,descp:"By using this we can convert the transmitter’s linear mA to square root mA and also we can calculate the square root mA value by the linear mA.",q1:"Linear mA",qc1:"mA",a1:"Square root",ac1:"mA"},
      { display:"Linear % to Square root %",id:17,descp:"By using this we can convert the transmitter’s linear percentage to square root percentage and also we can calculate the square root percentage value by the linear percentage. ",q1:"Linear %",qc1:"%",a1:"Square root",ac1:"%"},
      { display:"Lb In to Nm",id:65,q1:"Lb In",descp:"By Using this tool, we can convert Newton meter to Lb Inch",qc1:"",a1:"Nm",ac1:""},
      { display:"Nm to LbIn",id:66,q1:"Nm",descp:"By Using this tool, we can convert Lb In to Newton meter.",qc1:"",a1:"Lb In",ac1:""},

      { display:"Time (Speed)",id:28,descp:"",q1:"Distance",qc1:"m",q2:"Speed",qc2:"m/s",a1:" Time",ac1:"s"},
      { display:"Speed",id:34,descp:"",q1:"Distance",qc1:"m",q2:"Time",qc2:"s",a1:" Speed",ac1:"m/s"},
      { display:"Distance",descp:"",id:35,q1:"Time",qc1:"s",q2:"Speed",qc2:"m/s",a1:" Distance",ac1:"m"},
      { display:"Voltage Divider",id:27,descp:"The Potential or voltage divider calculator finds out the output voltage in voltage divider circuit according to input voltage and values of resistance in the circuit.",q1:"V (total)",qc1: "V",q2:"R1",qc2:"Ohm",q3:"R2",qc3:"Ohm",q4:"R3",qc4:"Ohm",a1:"V1",ac1:"Ohm",a2:"V2",ac2:"Ohm",a3:"V3",ac3:"Ohm"},


      { display:"Aircore Inductance",descp:"The air core inductance can be calculated by using input parameters such as coil diameter, coil length, and number of turns",id:21,q1:"Coil diameter",qc1:"in",q2:"Coil Length",qc2:"in",q3:"No: of turns",qc3:"",a1:"Inductance",ac1:""},
      { display:"Velocity of Sound",descp:"The V can be calculated Velocity of Sound through a medium by using input parameters such as temperature, gamma, and Gas constant",id:25,q1:"Temperature",qc1:"K",q2:"Gamma",qc2:"",q3:"Gas constant",qc3:"J/Kg*K",a1:"Velocity",ac1:""},
      { display:"Wheatstone",descp:"The wheat stone bridge calculations can be done by using adjacent and opposite resistors.",id:29,q1:"R1 (adjacent)",qc1:"Ohm",q2:"R2 (opposite)",qc2:"Ohm",q3:"R3 (adjacent)",qc3:"Ohm",a1:"R",ac1:"Ohm"},
      { display:"Power Factor 3 Phase",descp:"By using this we can check the power factor in three phase and the required values for this calculation is line to line voltage, apparent power, and current.",id:42,q1:"Voltage (L-L)",qc1:"V",q2:"Current",qc2:"A",q3:"Aparent Power",qc3:"Watt",a1:"Powerfactor",ac1:""},
      { display:"Power Factor Neutral",descp:"By using this we can determine the power factor neutral and the required values are line to neutral voltage, current and apparent power.",id:43,q1:"Voltage (L-N)",qc1:"V",q2:"Current",qc2:"A",q3:"Aparent Power",qc3:"Watt",a1:"Powerfactor",ac1:""},
      { display:"Power Factor Single Phase",descp:"By using this tool we can check the power factor of a single phase circuit. The power factor in a single-phase circuit (or balanced three-phase circuit) can be measured with the wattmeter-ammeter-voltmeter method, where the power in watts is divided by the product of measured voltage and current. ",id:44,q1:"Voltage",qc1:"V",q2:"Current",qc2:"A",q3:"Aparent Power",qc3:"Watt",a1:"Powerfactor",ac1:""},
      { display:"DC Motor Horsepower",descp:"Using this tool we can calculate the HorsePower for a DC Motor by entering Voltage,Current and Efficiency.",id:67,q1:"Volts",qc1:"V",q2:"Amps",qc2:"",q3:"Effs",qc3:"",a1:"Horsepower",ac1:""},
      { display:"Ohms law (R)",descp:"By this we can calculate the resistance, current and voltage. The resistance, current and voltage in a circuit can be calculated by this and the equation for the calculation is R=V/I   V= IR   I = V/RSo we need the voltage and current value to determine the resistance, current and resistance to determine the voltage and voltage and resistance to determine the current.",id:19,q1:"Voltage",qc1:"V",q2:"Current",qc2:"A",a1:" Resistance, R",ac1:"Ohm"},
      { display:"Ohms law (V)",descp:"By this we can calculate the resistance, current and voltage. The resistance, current and voltage in a circuit can be calculated by this and the equation for the calculation is R=V/I   V= IR   I = V/RSo we need the voltage and current value to determine the resistance, current and resistance to determine the voltage and voltage and resistance to determine the current.",id:23,q1:"Current",qc1:"A",q2:"Resistance",qc2:"Ohm",a1:" Voltage ",ac1:"V"},
      { display:"Ohms law (I)",descp:"By this we can calculate the resistance, current and voltage. The resistance, current and voltage in a circuit can be calculated by this and the equation for the calculation is R=V/I   V= IR   I = V/RSo we need the voltage and current value to determine the resistance, current and resistance to determine the voltage and voltage and resistance to determine the current.",id:20,q1:"Voltage",qc1:"V",q2:"Resistance",qc2:"Ohm",a1:" Current",ac1:"A"},
      { display:"Parallel Resistance",descp:"By using this we can calculate the whole resistance in a circuit section which is connected in parallel, and we need the resistors value to determine the parallel resistance.",id:24,q1:"R1",qc1:"Ohm",q2:"R2",qc2:"Ohm",a1:" R",ac1:"Ohm"},
      { display:"LC Resonance",descp:"An LC circuit, also called a resonant circuit, tank circuit, or tuned circuit, is an electric circuit consisting of an inductor, represented by the letter L, and a capacitor, represented by the letter C, connected together. The Calculation is by using L and C to find out the result.",id:26,q1:"C",qc1:"",q2:"L",qc2:"",a1:" Frequency",ac1:""},
      { display:"Power(I,V)",descp:"So by using this we can calculate the power, the power value can be determined by the resistance and voltage, it can also determined by voltage and current and we can also use resistance and current to check the power.",id:32,q1:"Voltage",qc1:"V",q2:"Current",qc2:"A",a1:" P",ac1:"Watts"},
      { display:"Power(I,R)",descp:"So by using this we can calculate the power, the power value can be determined by the resistance and voltage, it can also determined by voltage and current and we can also use resistance and current to check the power.",id:40,q1:"Current",qc1:"A",q2:"Resistance",qc2:"Ohm",a1:" P",ac1:"Watts"},
      { display:"Power (R,V)",descp:"So by using this we can calculate the power, the power value can be determined by the resistance and voltage, it can also determined by voltage and current and we can also use resistance and current to check the power.",id:31,q1:"Voltage",qc1:"V",q2:"Resistance",qc2:"Ohm",a1:" P",ac1:"Watts"},
      { display:"Speed (Horsepower)",descp:"The speed or horsepower can be calculated by using power and torque ",id:46,q1:"Power",qc1:"Horsepower",q2:"Torque",qc2:"PoundFoot",a1:"Rotating speed",ac1:"rpm"},
      { display:"Torque (horsepower)",descp:"The Torque can be calculated by using power and horsepoer or speed.",id:47,q1:"Power",qc1:"Horsepower",q2:"Speed",qc2:"rpm",a1:"Torque",ac1:"PoundFoot"},
      { display:"Horse Power",descp:"",id:48,q1:"Torque",qc1:"PoundFoot",q2:"Speed",qc2:"rpm",a1:"Horsepower",ac1:"horsePower"},
      { display:"Effective Tension from HP & FPM",descp:"Using this tool we can find Effective tension by using FPM and HP.",id:68,q1:"HP",qc1:"",q2:"FPM",qc2:"",a1:"Effective Tension",ac1:"lbs"},
      { display:"Effective Tension from Torque & Radius",descp:"Using this toolwe can find the Effective Tension from Torque and Radius.",id:69,q1:"Torque",qc1:"",q2:"Radius",qc2:"",a1:"Effective Tension",ac1:"lbs"},
  
        { display:"Resistance from temperature",descp:"By using this we can calculate the Resistance by Temperature, for example the temperature of gauge wire can be calculated, if the gauge wire temperature is increased then the resistance will change so according to the resistance we can find the temperature. In order to calculate this we need some input values and they are current resistance value, initial resistance value, temperature co-efficient value and initial temperature value",id:13,q1:"T(t)",qc1:"",q2:"R(0)",qc2:"",q3:"T(0)",qc3:"",q4:"C",qc4:"",a1:"Resistance",ac1:"Ohm"},
        { display:"Temperature from resistance",descp:"By using this we can calculate the temperature by resistance, for example the temperature of gauge wire can be calculated, if the gauge wire temperature is increased then the resistance will change so according to the resistance we can find the temperature. In order to calculate this we need some input values and they are current resistance value, initial resistance value, temperature co-efficient value and initial temperature value",id:15,q1:"R(t)",qc1:"",q2:"R(0)",qc2:"",q3:"Temp",qc3:"",q4:"C",qc4:"",a1:"Temperature",ac1:"K"},
        { display:"Level Measurement Two Seals",descp:"By using the two seal systems, the interface level between two liquids in a process vessel can be measured with a DP transmitter.",img:"twoSeal.png",id:49,q1:"h1",qc1:"mm",q2:"h0",qc2:"mm",q3:"d3",qc3:"",q4:"d2",qc4:"",q5:"d1",qc5:"",q6:"C",qc6:"mm",a1:"HP Side/LRV/4mA",ac1:"mmH20",a2:"LP Side/URV/20mA",ac2:"mmH20",a3:"Span",ac3:"mmH20"},
        { display:"Level Measurement One Seal Above",descp:"By using this tool named Level Measurement One Seal Above we can calculate the level between two liquids",img:"onseSealAbove.png",id:50,q1:"h2",qc1:"mm",q2:"h1",qc2:"mm",q3:"h0",qc3:"mm",q4:"d2",qc4:"",q5:"d1",qc5:"",a1:"HP Side/LRV/4mA",ac1:"mmH20",a2:"LP Side/URV/20mA",ac2:"mmH20",a3:"Span",ac3:"mmH20"},
        { display:"Level Measurement One Seal Below",descp:"By using this tool named Level Measurement One Seal Below we can calculate the level between two liquids",img:"oneSealBelow.png",id:51,q1:"h2",qc1:"mm",q2:"h1",qc2:"mm",q3:"h0",qc3:"mm",q4:"d2",qc4:"",q5:"d1",qc5:"",a1:"HP Side/LRV/4mA",ac1:"mmH20",a2:"LP Side/URV/20mA",ac2:"mmH20",a3:"Span",ac3:"mmH20"},
        { display:"Bubble Level",descp:"By using this we can calculate liquid level and this is determined by calculating the pressure that is needed to force a gas to the liquid. In order to do this we need the specific gravity of the tank liquid.",img:"bubblelevel.png",id:52,q1:"h1",qc1:"mm",q2:"h0",qc2:"mm",q3:"d1",qc3:"",a1:"HP Side/LRV/4mA",ac1:"mmH20",a2:"LP Side/URV/20mA",ac2:"mmH20",a3:"Span",ac3:"mmH20"},
        { display:"Bubble Interface",descp:"This tool is also for the level measurement and we need certain inputs such as the specific gravity of the upper tank and lower tank and the height.",img:"bubbleInterface.png",id:53,q1:"h1",qc1:"mm",q2:"du",qc2:"",q3:"dl",qc3:"",a1:"HP Side/LRV/4mA",ac1:"mmH20",a2:"LP Side/URV/20mA",ac2:"mmH20",a3:"Span",ac3:"mmH20"},
        { display:"Two Seal Interface",descp:"This tool is to calculate the liquid level in the tank and the required inputs are specific gravity of the upper tank and the lower tank, specific gravity of the tank leg and wet leg etc.",img:"twoSealInterface.png",id:54,q1:"h4",qc1:"mm",q2:"h1",qc2:"mm",q3:"h0",qc3:"mm",q4:"d3",qc4:"",q5:"d2",qc5:"",q6:"du",qc6:"",q7:"du",qc7:"",q8:"C",qc8:"mm",a1:"HP Side/LRV/4mA",ac1:"mmH20",a2:"LP Side/URV/20mA",ac2:"mmH20",a3:"Span",ac3:"mmH20"},
        { display:"Open Tank",descp:"By using this tool named Open Tank we can calculate the level between two liquids",img:"openTank.png",id:55,q1:"h2",qc1:"mm",q2:"h1",qc2:"mm",q3:"h0",qc3:"mm",q4:"d1",qc4:"",q5:"d0",qc5:"",a1:"HP Side/LRV/4mA",ac1:"mmH20",a2:"LP Side/URV/20mA",ac2:"mmH20",a3:"Span",ac3:"mmH20"},
        { display:"Interface Wet Leg",descp:"By using this tool we can calculate the interface of the liquids that has dissimilar specific gravities. For this calculation we need certain inputs such as specific gravity of the lighter and heavier liquid and also need the specific gravity of the wet leg and tank leg etc.",img:"twoSealInterface.png",id:56,q1:"h4",qc1:"mm",q2:"h3",qc2:"mm",q3:"h2",qc3:"mm",q4:"h1",qc4:"mm",q5:"h0",qc5:"mm",q6:"d2",qc6:"",q7:"d0",qc7:"",q8:"du",qc8:"",q9:"dl",qc9:"",a1:"HP Side/LRV/4mA",ac1:"mmH20",a2:"LP Side/URV/20mA",ac2:"mmH20",a3:"Span",ac3:"mmH20"},
        { display:"Liquid Purge",descp:"By using this we can measure the level, in a tank and we require certain inputs to do this calculation and they are specific gravity of the tank liquid, specific gravity of the purge, specific gravity of the vapor etc.",id:57,img:"liquidPurge.png",q1:"h3",qc1:"mm",q2:"h2",qc2:"mm",q3:"h1",qc3:"mm",q4:"h0",qc4:"mm",q5:"d3",qc5:"",q6:"d2",qc6:"",q7:"d1",qc7:"",a1:"HP Side/LRV/4mA",ac1:"mmH20",a2:"LP Side/URV/20mA",ac2:"mmH20",a3:"Span",ac3:"mmH20"},
        { display:"Level Transmission Closed Vessel",q1:"h3",qc1:"mm",q2:"h2",qc2:"mm",q3:"h1",qc3:"mm",q4:"h0",qc4:"mm",q5:"d3",qc5:"",q6:"d2",qc6:"",q7:"d1",qc7:"",q8:"d0",qc8:"",a1:"HP Side/LRV/4mA",ac1:"mmH20",a2:"LP Side/URV/20mA",ac2:"mmH20",a3:"Span",ac3:"mmH20"},
        { display:"Flow Rate Calculation",descp:"By using this we can calculate the flow rate in a pipe and we need certain values to do this calculation and they are pipe and constricted diameter, density of the fluid, measured pressure difference, and meter coefficient.",id:62,q1:"Pipe Diameter",qc1:"mm",q2:"Constricted Diameter",qc2:"mm",q3:"Measured Pressure Difference",qc3:"kPa",q4:"Fluid Density",qc4:"kg/m3",q5:"Meter Coefficient D",qc5:"",a1:"Constricted Area",ac1:"",a2:"Diameter Section",ac2:"",a3:"Pipe Flow Rate",ac3:"m3/s"},
        { display:"Hydrostatic Level",descp:"By using this we can measure the level by using the pressure created by the liquid in a tank and it is done by the help of a pressure transmitter. To do this calculation we need values like minimum LRV, maximum URV, actual liquid level, impulse line fluid density, pressure liquid density, and transmitter height offset.",id:63,ac1:"WC",a2:"Transmitter LRV",ac2:"",a3:"Transmitter URV",ac3:""},
        { display:"Orifice Plate Error",descp:"By using this we can find out the errors in an orifice plate, we need certain values to check this and they are current flow, differential pressure measurement errors, differential pressure at that flow rate, and maximum flow through that orifice plate.",id:64,q1:"Max Flow through orifice plate",qc1:"GPM",q2:"Differential pressure at that flow rate",qc2:"WC",q3:"Differential Pressure measurement errors",qc3:"WC",q4:"Current Flow",qc4:"GPM",a1:"Hydrostatic Pressure @ transmitter ",ac1:"WC",a2:"Transmitter LRV",ac2:"",a3:"Transmitter URV",ac3:""},
        { display:"Short Circuit Calculation",descp:"We can calculate Short Circuit Current and Impedence using this tool.",id:59,q1:"I",qc1:"",q2:"kVA",qc2:"mm",q3:"Zt",qc3:"",a1:"Source Impedence Zu",ac1:"",a2:"Total impedence Z",ac2:""},
        { display:"Transformer Fault Current",descp:"By Using this tool, we can calculate Transformer Fault Current",id:60,q1:"V",qc1:"",q2:"Z% ",qc2:"%",q3:"I",qc3:"",a1:"Maximum Fault Current",ac1:"A",a2:"Impedence Voltage",ac2:""},
        { display:"DOL & Star Delta Starter",descp:"This is a tool to find calculations related to DOL & Star Delta Starter",id:61,q1:"System Voltage",qc1:"V",q2:"Phase",qc2:"",q3:"Motor Size",qc3:"HP",q4:"Motor rpm",qc4:"",q5:"Power Factor",qc5:"",a1:"Motor Rated Torque (Full Load)",ac1:"lb-ft",a2:"Motor Starting Torque",ac2:"mmH20",a3:"Lock Rotor Current IL(Min)",ac3:"",a4:"Lock Rotor Current IL(Max)",ac4:"",a5:"Motor Full load current (Live)",ac5:""},
        {display:"Time Period",id:22,descp:"The Time Period calculations can be done according to the frequency",q1:"Frequency",qc1:"Hz",a1:"Time Period",ac1:"ms"},
        {display:"Frequency",id:33,descp:"The frequency calculations can be done according to the time period",q1:"Time Period",qc1:"ms",a1:"Frequency",ac1:"Hz"}
        ,
        //MECHANICAL
       
    

        {display:"Belt length",id:80,descp:"We can calculate the distance between the centers of two pulleys for a given belt length.",q1:"Diameter of Large Pulley",qc1:"m",q2:"Diameter of Small pulley",q3:"Pulley Centre distance",qc3:"m",a1:"Belt Length",ac1:"m"},
       

        {display:"Gear Pump Displacement",id:81,descp:"This can be calculated by certain input parameters such as gear-width, gear tip diameter and gear centers and all of these values must be in centimeters. ",q1:"Gear width",qc1:"cm",q2:"Gear tip diameter",qc2:"cm",q3:"Gear centres (when meshed)",qc3:"cm",a1:"Displacement",ac1:"cm^3/rev"},
        {display:"Stroke's Law",id:82,descp:"This law is about the relation between a sphere’s frictional force in a liquid when the sphere is in motion. This can be calculated by using some input parameters such as viscosity of the medium, diameter of the particle, density of the particle and medium, and acceleration of gravity.",q1:"Acceleration of gravity",qc1:"m/s^2",q2:"Diameter of a particle",qc2:"m",q3:"Density of particle",qc3:"gm/m^3",q4:"Density of Medium",qc4:"gm/m^3",q5:"Viscoscity of Medium",qc5:"gm/ms",a1:"Terminal Velocity",ac1:"m/s"},
        {display:"Flow Velocity",id:83,descp:"By using this we can determine the flow velocity with the help of some input parameters such as density, Cauchy number, and bulk modulus elasticity.        ",q1:"Cauchy Number",qc1:"N/m^2",q2:"Bulk Modulus Elasticity",qc2:"N/m^2",q3:"Density",qc3:"kg/m^3",a1:"Flow Velocity",ac1:"m/s"},
        {display:"Hooke's Law (Force)",id:84,descp:"Most of the material can explained by this law, till the load won’t exceed the elastic limit of the material. The K denotes the spring constant in the hooks’s law and its equation is F=Kx and x denotes the spring’s displacement from its position. The spring constant can be calculated by using the inputs such as force, distance, and spring equilibrium position. The force can be calculated with the above mentioned inputs with the spring constant.",q1:"Spring Constant",qc1:"N/m",q2:"Distance from Equillibrium",qc2:"m",q3:"Spring Equillibrium Position",qc3:"m",a1:"Force",ac1:"N"},
        {display:"Hooke's Law (Spring constant)",id:85,descp:"Most of the material can explained by this law, till the load won’t exceed the elastic limit of the material. The K denotes the spring constant in the hooks’s law and its equation is F=Kx and x denotes the spring’s displacement from its position. The spring constant can be calculated by using the inputs such as force, distance, and spring equilibrium position. The force can be calculated with the above mentioned inputs with the spring constant.",q1:"Force",qc1:"N",q2:"Distance",qc2:"m",q3:"Spring Equillibrium Position",qc3:"m",a1:"Spring Constant",ac1:"N/m"},
        {display:"Strain",id:86,descp:"This tool will help us to determine the strain in a material and for this calculation we need the change in length and original length of the material.",q1:"Change in Length",qc1:"m",q2:"Original Length",qc2:"m",a1:"Strain",ac1:""},
        {display:"K Value & Pipe Length",id:87,descp:"K value can be considered as the bending limit, so we can calculate the K value and pipe-length by using certain input parameters such as length, pipe diameter, and turbulent friction factor. ",q1:"Turbulent Friction Factor",qc1:"",q2:"Length",qc2:"m",q3:"Pipe Diameter",qc3:"mm",a1:"K Value",ac1:""},
        {display:"Young's modulus",id:88,descp:"This is a mechanical property and it is a measure that shows how much a material can withstand the changes in length and this can be calculated by using the stress and strain.",q1:"Stress",qc1:"N/m^2",q2:"Strain",qc2:"",a1:"Young's Modulus",ac1:"N/m^2"},
        {display:"Weber Number",id:89,descp:"This number will be helpful to analyze the flow of the fluid and this is a dimensionless number. In order to do the calculation we need the velocity, length, density, and surface tension.",q1:"Density",qc1:"kg/m^3",q2:"Velocity",qc2:"m/s",q3:"Length",qc3:"m",q4:"Surface Tension",qc4:"N/m",a1:"Weber Number",ac1:""},
        {display:"Chezy Coefficient",id:90,descp:"With this tool we can determine the chezy coefficient, this can also be considered as the hydraulic radius. The chezy coefficient can be determined by using certain inputs like slope, hydraulic radius, and mean velocity.",q1:"Mean Velocity",qc1:"m/s",q2:"Hydraulic radius",qc2:"m",q3:"Slope",qc3:"",a1:"Chezy Coefficient",ac1:""},
        {display:"Cauchy Number",id:91,descp:"",q1:"Flow Velocity",qc1:"m/s",q2:"Density",qc2:"kg/m^3",q3:"Bulk Modulus Elasticity",qc3:"N/m^2",a1:"Cauchy Number",ac1:""},
        {display:"Bulk Modulus Elasticity",id:92,descp:"By using this we can calculate the bulk modulus elasticity by using inputs such as Cauchy number, density, and flow velocity. There is other tool to determine the Cauchy number and it can be calculated by using the inputs such as flow velocity, density and bulk modulus elasticity.",q1:"Flow Velocity",qc1:"m/s",q2:"Density",qc2:"kg/m^3",q3:"Cauchy Number",qc3:"",a1:"Bulk Modulus Elasticity",ac1:"N/m^2"},

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
     <meta key="description" name="description"content={electricalList[electricalList.findIndex((item)=>item.id === id)].descp}/>

      </Head>
      {id!==undefined &&
          <div className="toolbox">
              <div className="toolbox-heading"> 
              {electricalList[electricalList.findIndex((list)=>list.id === id)].display}
              </div>
              <hr className="hr"/>
              <div className="toolbox-calc">
                  <div className="heading">Calculation</div>
                  {value.map((item)=>
            
                      electricalList[electricalList.findIndex((list)=>list.id === id)][item.b] !== undefined &&
          
                       <div className="toolbox-calc">
                        <div style={{display:"flex"}}>
                              <div style={{flex:2}}>
                                  {electricalList[electricalList.findIndex((item)=>item.id === id)][item.a]}
                              </div>
                              <div style={{flex:1}}>
                                  <Input placeholder="input" className="input box" type="number" onChange={(e)=>{item.c(e)
                                  console.log("input",e.target.value)}}></Input>
                              </div>
                              <div style={{flex:1}}>
                                  {electricalList[electricalList.findIndex((item)=>item.id === id)][item.b] || ""}
                              </div>
                         </div>
              
                      </div>
                     )} 
                     </div> 
                    
                    {electricalList[electricalList.findIndex((item)=>item.id === id)].img !== undefined &&
            //<Image src="/assets/11LT.png"/>
            <div>
               <hr className="hr"/>
                          <div className="toolbox-calc">
                            <div className="heading">FIGURE</div>
                          <Image alt="image" style={{marginTop:"60px",width:"90%"}} src={`/assets/${electricalList[electricalList.findIndex((item)=>item.id === id)].img}`}/>
                          </div>
                          </div>
                    }
                    
                  
                      {details.findIndex((list)=>list.id === id) !== -1 &&
                      <div>
                         <hr className="hr"/>
          <div className="toolbox-calc">
            
                                 <div className="heading">DETAILS</div>

                      {detail.map((item)=>
          
                          details[details.findIndex((list)=>list.id === id)][item.a] !== undefined &&
                 
                          <div style={{display:"flex",marginTop:"5px"}} key={item.id}>
                            <div style={{flex:1}}>
                                {details[details.findIndex((item)=>item.id === id)][item.a]}
                            </div>
                            <div style={{flex:1}}>
                                {details[details.findIndex((item)=>item.id === id)][item.b]}</div>
                          </div>
              
            )
          }
          </div>
          </div>}
          <div class="toolbox-desc">

          <Button className="calculate-button" onClick={()=>calculate(q1,q2,q3,q4,q5,q6,q7,q8,q9)}>CALCULATE</Button>
          </div>
          <hr className="hr"/>

          <div class="toolbox-desc">
            <div className="heading">Description</div>
          {electricalList[electricalList.findIndex((item)=>item.id === id)].descp}
            </div>
              {(answer1!== undefined) &&
         <div>
            <hr className="hr"/>

        

        <div class="toolbox-calc">
            <div className="heading">RESULT</div>
          {answer.map((item)=>
                        electricalList[electricalList.findIndex((list)=>list.id === id)][item.a] !== undefined &&
                 
          <div style={{display:"flex"}} key={item.id}>
                  <div style={{flex:2}}> {electricalList[electricalList.findIndex((item)=>item.id === id)][item.a]}</div>
                  <div style={{flex:1}}> {item.c}</div>
                  <div style={{flex:1}}>{electricalList[electricalList.findIndex((item)=>item.id === id)][item.b]}</div>

              </div>
              
            )}
          </div>
          </div>}
      {/* {      electricalList[electricalList.findIndex((item)=>item.id === id)].descp!== undefined &&

      <div className="description">
      {electricalList[electricalList.findIndex((item)=>item.id === id)].descp}
      </div>} */}
      </div>}
   
    </div>
  );
};

export default Functions;


