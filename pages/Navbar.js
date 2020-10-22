import React from 'react';
import {Menu, Layout} from 'antd'
import Link from 'next/link'

export default function Navbar({showDrawer}) {
    return (
        <Layout className="navbar">
          <style jsx global>
            {
              `
              html,
body {
  padding: 0;
  margin: 0;
  overflow: auto;
  font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
    Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
}
.card {
  padding:20px;
  margin:10px; 
}
.ant-tabs-ink-bar{
  background: #F73406 !important;
}
.ant-tabs-tab.ant-tabs-tab-active .ant-tabs-tab-btn {
  color:#F73406 !important;
}
.ant-tabs-tab:hover .ant-tabs-tab:hover .ant-tabs-tab-btn:hover {
  color:#F73406 !important;
}
.heading {
  font-size: larger;
  text-transform: uppercase;
  font-weight: bold;
  color:#F73406;
}
.center {
  display:flex;
  align-items: center;
  align-content: center;
  
}
html, .tools-container,.body {
  --antd-wave-shadow-color: #F73406 !important;
  --scroll-bar: 0;
  font-family: 'Nexalight' !important;
}
.h2 {
  margin-left: 20px;
  color:white;
  margin-top:10px !important;
}
.h2-nav {
  margin-left: 20px;
  color:white;
  margin-top:20px !important;
  margin-bottom:20px !important;
}
.input {
  border:1px solid gray;
  padding:5px;
  margin-right: 20px;
}
.result-heading {
  font-weight:bold;
  color:#F73406;
  text-transform: uppercase;
}
.result {
  margin:20px 0px;
  padding:20px;
  border:solid 1px #F73406;
  width:100%;
}
a {
  color: inherit;
  text-decoration: none;
}

* {
  box-sizing: border-box;
}

.appbar {
  background:#F73406;
}
.descp {
  font-style: italic;
}

.contain {
  display: flex;
}
.ant-tabs-content-holder {
  display: flex;
}
.ant-tabs {
  
  width:100% !important;
}
.ant-input-affix-wrapper:hover,.ant-input-affix-wrapper:hover:focus {
  border:1px solid lightgray !important;
  box-shadow: 0px 0px 0px 0px;
}
input[type="text"]:focus {
  border:0 !important;
  box-shadow: 0px 0px 0px 0px
   !important;
}
.ant-tabs-tab {
  flex-grow: 1;
  margin-left: 20px !important;
}
.input {
  margin-left:25px;
  margin-right:30px;
}
@font-face {
  font-family: 'Nexabold';
    src: url('../public/fonts/Nexa\ Bold.otf') format('opentype');
}
@font-face {
  font-family: 'Nexalight';
    src: url('../public/fonts/Nexa\ Light.otf') format('opentype');
}

.input-col , .input-col input {
  min-width:60px;
  width:100px;
  margin-right:30px;
}
.slider {
  float:right;
  right:0;
}
.center {
  display: inline;
}
.icon-wrapper {
  position: relative;
  padding: 0px 30px;
}

.ant-menu a {
  color:white !important;
}
.ant-layout {
  background: white !important;
}
a {color:black !important;}
.ant-card:hover a {
  color:black !important;
}
.ant-card , .ant-card a{
  transition: cubic-bezier(0.77, 0, 0.175, 1) 0.5s;
}
.ant-card {
  background: #fcfcfc !important;
  border-radius: 10px !important;
}
.ant-input-affix-wrapper,.ant-input-affix-wrapper:hover,.ant-input-affix-wrapper:focus {
  box-shadow: 0 !important;
  border:0 !important;}
 .ant-tabs-tab-btn:hover , .ant-tabs-tab:hover {
  color:#F73406 !important;
}
.ant-input:focus {
  border:1px solid gray !important;
}
.ant-card {
  margin-top: 20px;
}
.card , .carditems,.ant-card-body,.ant-card {
  color:black !important;
}
.ant-slider-track {
  background:#F73406 !important;
  }
  .ant-slider-handle {
    border:2px solid #F73406 !important;
  }


  .appBar  {
    background:red;
    color:red;
  }

  .taabs {
        color:red;
        display: inline;
  }

  .left {
      float:left;
  }
  .tab {
      float:left;width:50%;
  }

  .menu {
      background:red;
      color:white;
      width:100%;
      
  }
  .input {
      min-width:100px;
  }
  .contain {
      display: inline;
  }
  .carditems {
      max-width:90%;
      min-width: 30%;
      width:350px;
      padding:10px;
      margin:10px;
  }
 
  @media only screen and (max-width: 600px) {
    .carditems {
     min-width:250px;
    }
  }
  .carditems:hover {
    box-shadow: 0px 4px 8px 0px rgba(0,0,0,0.5);

  }
  .tool {
      width:100%;
      padding:50px 100px;
      display:flex;
      align-self: center;
  }

  .row {
      margin-bottom:20px;
  }

  .toolbox {
    width:100%;
    align-self: center;
    margin:50px 70px;
    margin-top:20px;
    padding:0px !important;
    border-radius: 30px;
    border:0px !important;
}
.ant-card-body {
    padding:0px !important;
    margin-top:20px;
}
.toolbox-heading {
    color:black;
    font-weight: bold;
    font-size: 20px;
    padding:20px;
}

.toolbox-calc {
    padding:20px;
    background: white;
    font-size:15px !important;
}

.toolbox-desc {
    padding:20px;
    
    border-radius: 0px 0px 20px 20px;
}

.toolbox-layout {
    background: white !important;
    height:100vh;
    margin-top: 60px;
    color:black !important;
    font-size: 17px;

}
.cardwidth {
    min-width:100% !important;
}
.hr {
    size:0.25px;
    width:95%;
    color:lightgray;
}


.tools-container {
    display:flex;
}

.toolbox {
  width:100%;
  align-self: center;
  margin:50px 70px;
  margin-top:20px;
  padding:0px !important;
  border-radius: 30px;
  border:0px !important;
}
.ant-card-body {
  padding:0px !important;
  margin-top:20px;
}
.toolbox-heading {
  color:black;
  font-weight: bold;
  font-size: 20px;
  padding:20px;
}

.toolbox-calc {
  padding:20px;
  background: white;
  font-size:15px !important;
}

.toolbox-desc {
  padding:20px;
  
  border-radius: 0px 0px 20px 20px;
}

.toolbox-layout {
  background: white !important;
  height:100vh;
  margin-top: 60px;
  color:black !important;
  font-size: 17px;

}
.cardwidth {
  min-width:100% !important;
}
.hr {
  size:0.25px;
  width:95%;
  color:lightgray;
}


.tools-container {
  display:flex;
}


.center {
  display:flex;
  align-items: center;
}
.tools-left {
  height:100vh;
  min-width:300px;
  max-width: 50%;
  overflow:auto;
}
.tools-container {
  height:90vh;
}
.menu {
  position:sticky;
}

@media screen and (max-width:700px) {
  .tools-left {
      display:none;
  }
.menu-icon {
    display: block !important;
}
}
.menu-icon {
  display: none;
}
.nav-surround {   
 display: inline;
 
}
.ant-card-body {
  margin:0 !important;
}
.carditems {
  padding:10px !important;
  font-size:17px !important;
}
@media screen and (max-width:700px) {
  .toolbox {
      margin:0px;
      border:0;
      border-radius:0;
  }
  .input,.input-col input{
      width:60px !important;
      margin-right:10px;
  }
  .input-col {
      min-width:10px;
  }
  .toolbox-heading {
      border-radius:0;}

      .card , .carditems,.ant-card-body ,.ant-card-borde#F73406,.ant-card{
          width:100% !important;
      }
}
.menu {
  display:flex;
  align-items: center;
}
.menu-icon {
  float:left;
  margin-left: 20px;
}
.navbar {
  position:fixed;
  top:0;
  width:100%;
  overflow:hidden;
  z-index:1;
  height:60px;
}
.tools-container {
  margin-top:0px;
  /* overflow:hidden; */
 
}
.h2-nav {
  font-family: 'Nexabold' !important;
}
.ant-drawer-header ,.ant-drawer-title  {
  background:#F73406 !important;
  color:white !important;
  font-size: 17px  !important;
  font-weight: bold  !important;
}
.calculate-button {
  background:#F73406 !important;
  color:white !important;
  display: flex;
  align-items: center;
}
.toolbox-layout {
  height:100%;
  overflow:auto;
}
.center {
    display:flex;
    align-items: center;
}
.tools-left {
    height:100vh;
    min-width:300px;
    max-width: 50%;
    overflow:auto;
}
.tools-container {
    height:90vh;
}
.menu {
    position:sticky;
}

@media screen and (max-width:700px) {
    .tools-left {
        display:none;
    }
  .menu-icon {
      display: block !important;
  }
}
.menu-icon {
    display: none;
}
.nav-surround {   
   display: inline;
   
}
.ant-card-body {
    margin:0 !important;
}
.carditems {
    padding:10px !important;
    font-size:17px !important;
}
@media screen and (max-width:700px) {
    .toolbox {
        margin:0px;
        border:0;
        border-radius:0;
    }
    .input,.input-col input{
        width:60px !important;
        margin-right:10px;
    }
    .input-col {
        min-width:10px;
    }
    .toolbox-heading {
        border-radius:0;}

        .card , .carditems,.ant-card-body ,.ant-card-borde#F73406,.ant-card{
            width:100% !important;
        }
}
.menu {
    display:flex;
    align-items: center;
}
.menu-icon {
    float:left;
    margin-left: 20px;
}
.navbar {
    position:fixed;
    top:0;
    width:100%;
    overflow:hidden;
    z-index:1;
    height:60px;
}
.tools-container {
    margin-top:0px;
    /* overflow:hidden; */
   
}
.h2-nav {
    font-family: 'Nexabold' !important;
}
.ant-drawer-header ,.ant-drawer-title  {
    background:#F73406 !important;
    color:white !important;
    font-size: 17px  !important;
    font-weight: bold  !important;
}
.calculate-button {
    background:#F73406 !important;
    color:white !important;
    display: flex;
    align-items: center;
}
.toolbox-layout {
    height:100%;
    overflow:auto;
}


 `
            }
          </style>
        <div >
        <Menu className="menu">
          
        <i onClick={()=>showDrawer()} className="material-icons menu-icon">dehaze</i>
        <h2 className="h2-nav">
         
          <Link href="/"><a>gudofConvert</a></Link>
          </h2></Menu>
        </div>
        </Layout>
  )
}

