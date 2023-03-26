import React, { useState } from "react";
import styled from "styled-components";
import Button from "@mui/material/Button";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import Card from "@mui/material/Card";
import Avatar from "@mui/material/Avatar";
import { List, ListItem, ListItemText } from "@material-ui/core";
import SearchIcon from "@mui/icons-material/Search";
import CloseIcon from "@mui/icons-material/Close";
import TextField from "@mui/material/TextField";
import { useNavigate } from "react-router-dom";
//
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Grid from '@mui/material/Grid';
//
const Link = require("react-router-dom").Link;

function Action() {
  const [ViewSelected, setViewSelected] = useState(1);

  const [isOverlayOpen, setIsOverlayOpen] = useState(false);
  const navigate = useNavigate();
  function  PendingQueuePressed(){
    navigate("/PendingQueuePlacement");
    
   }
   
   //

const [age, setAge] = React.useState('');
const handleChange = (event) => {
  setAge(event.target.value);
};

//
  const handleClickIcon = () => {
    setIsOverlayOpen(true);
  };
  const handleCloseOverlay = () => {
    setIsOverlayOpen(false);
  };


  function Overlay() {
    return (
      <div className="overlay">
      <CloseIcon className="crossIcon" onClick={handleCloseOverlay} />
      <h1 style={{textAlign:"center"}}>Set Filter from here !</h1>
      <p style={{fontSize:15,fontWeight:"bold",color:"#042940",textAlign:"center"}}>Communication Message Center</p>
      <div className="searchFieldsDiv">
      <Grid container spacing={3}>
      <Grid item xs="2.87">
      
      <Box >
    <FormControl fullWidth>
      <InputLabel >MCO</InputLabel>
      <Select
        labelId="demo-simple-select-label"
        id="demo-simple-select"
        value={age}
        label="Status"
        onChange={handleChange}
      >
        <MenuItem value={10}>Ten</MenuItem>
        <MenuItem value={20}>Twenty</MenuItem>
        <MenuItem value={30}>Thirty</MenuItem>
      </Select>
    </FormControl>
  </Box>  
      </Grid>
      <Grid item xs="2.87">
      
      <Box >
    <FormControl fullWidth>
      <InputLabel >Message Type</InputLabel>
      <Select
        labelId="demo-simple-select-label"
        id="demo-simple-select"
        value={age}
        label="Status"
        onChange={handleChange}
      >
        <MenuItem value={10}>Ten</MenuItem>
        <MenuItem value={20}>Twenty</MenuItem>
        <MenuItem value={30}>Thirty</MenuItem>
      </Select>
    </FormControl>
  </Box>  
      </Grid>
      <Grid item xs="2.87">
      
      <Box >
    <FormControl fullWidth>
      <InputLabel >Status</InputLabel>
      <Select
        labelId="demo-simple-select-label"
        id="demo-simple-select"
        value={age}
        label="Status"
        onChange={handleChange}
      >
        <MenuItem value={10}>Ten</MenuItem>
        <MenuItem value={20}>Twenty</MenuItem>
        <MenuItem value={30}>Thirty</MenuItem>
      </Select>
    </FormControl>
  </Box>  
      </Grid>
      <Grid item xs="2.87">
      
      <Box >
    <FormControl fullWidth>
      <InputLabel >Reason</InputLabel>
      <Select
        labelId="demo-simple-select-label"
        id="demo-simple-select"
        value={age}
        label="Status"
        onChange={handleChange}
      >
        <MenuItem value={10}>Ten</MenuItem>
        <MenuItem value={20}>Twenty</MenuItem>
        <MenuItem value={30}>Thirty</MenuItem>
      </Select>
    </FormControl>
  </Box>  
      </Grid>
      
        
      <Grid item xs="3">
        <TextField
         
          id="outlined-basic"
          label="From Date DD/MM/YYYY"
          variant="outlined"
        />
      </Grid>
      <Grid item xs="3">
      <TextField
          id="outlined-basic"
          label="Till Date DD//MM/YYYY"
          variant="outlined"
        />
      </Grid>
  </Grid>
      </div>
      <Button className="searchButton" variant="outlined" onClick={handleCloseOverlay}>
        Search
      </Button>
    </div>
    );
  }
  function CommunicationMessageCenterPressed (){
       setViewSelected(1);
  }
  function RenderViews() {
    switch (ViewSelected) {
      case 1:
        return CommunicationMessageCenterView();
      default:
        break;
    }
  }
  //
  const jsonData = [
    {
      id: 1,
      name: "Wanda De Martinez",
      address: "Upper tooting Road, SW14SW",
      expectedClockOn: "07:11 AM",
      expectedClockOut: "11:30 AM",
      date:"03/12/2023",
    },
    {
      id: 2,
      name: "Wanda De Martinez",
      address: "Upper tooting Road, SW14SW",
      expectedClockOn: "07:11 AM",
      expectedClockOut: "11:30 AM",
      date:"03/12/2023",
    },
    {
      id: 3,
      name: "Hector",
      address: "Upper tooting Road, SW14SW",
      expectedClockOn: "07:11 AM",
      expectedClockOut: "11:30 AM",
      date:"03/12/2023",
    },
    {
      id: 4,
      name: "Adam",
      address: "Upper tooting Road, SW14SW",
      expectedClockOn: "07:11 AM",
      expectedClockOut: "11:30 AM",
      date:"03/12/2023",
    },
  ];
 
  const CommunicationMessageCenterView = () => {
    return (
      <div>
      <table className="table">
         <thead>
          <tr>
      <th className="th">MCO</th>
      <th className="th">Message Type</th>
      <th className="th">Status</th>
      <th className="th">Reason</th>
      <th className="th">From Date</th>
      <th className="th">Till Date</th>
      
      
      
          </tr>
         </thead>
         <tbody>
          {jsonData.map((data,i)=>(
            <tr>
              <td className="td">Member ID</td>
              <td className="td">Admission ID</td>
              <td className="td">Care Giver IN</td>
              <td className="td">Member ID</td>
              <td className="td">Admission ID</td>
              <td className="td">Care Giver IN</td>
                    
            </tr>
          ))}
            
         </tbody>
      </table>      
   </div>
    );
  };

  return (
    <Wrapper>
      <div className="Header">
        <img className="headerImage" src="./EmpireHomeCareLogo.png" />
        <button className="button">Page 1</button>
        <button className="button">Page 2</button>
        <button className="button"> Page 3</button>
        <button className="button"> Page 4</button>
        <Button className="LogOutbutton" variant="outlined">
          Log Out
        </Button>
      </div>

      <div className="CardHolder">
        <Card className="TaskBar">
          <div className="UserInfo">
            <Avatar
              className="avatar"
              alt={"Hector"}
              src="/static/images/avatar/1.jpg"
            />
            <p
              style={{
                fontSize: "22px",
                marginTop: "8%",
                color: "white",
                fontWeight: "bold",
              }}
            >
              Hector Martinez
            </p>
          </div>
          <hr />
          <p
            style={{
              marginLeft: "45%",
              fontSize: "20px",
              color: "white",
              fontWeight: "bold",
            }}
          >
            Files
          </p>
          <hr style={{width:"50%",fontSize:"10px",opacity:"0.2"}}/>
          <div className="buttonHolder">
            <Button
              onClick={() => {
                PendingQueuePressed();
              }}
            >
              <p
                style={{
                  fontSize: "15px",
                  color: "white",
                  fontWeight: "bold",
                }}
              >
                Pending Placement Queue
              </p>
            </Button>
            <Button onClick={CommunicationMessageCenterPressed} className="navigationButton">
              <p
                style={{ fontSize: "15px", color: "white", fontWeight: "bold" }}
              >
                Communication Message Center
              </p>
            </Button>

           
          </div>

          
        </Card>

        <Card className="dataDisplay">
          <SearchIcon className="searchIcon" onClick={handleClickIcon} />
          {isOverlayOpen && <Overlay />}
          {RenderViews()}
        </Card>
      </div>

      <div className="footer">
        <div className="LogoHolder">
          <img src="/LogoBK.png"></img>
        </div>
        <div className="company">
          <h6 style={{ color: "grey" }}>COMPANY</h6>
          <h5 style={{ color: "white" }}>About Us</h5>
          <h5 style={{ color: "white" }}>Contact Us</h5>
          <h5 style={{ color: "white" }}>Careers</h5>
          <h5 style={{ color: "white" }}>Press</h5>
        </div>
        <div className="socials">
          <h6 style={{ color: "grey" }}>SOCIAL MEDIA</h6>
          <h5 style={{ color: "white" }}>
            <FacebookIcon fontSize="small" />
            Facebook
          </h5>
          <h5 style={{ color: "white" }}>
            <TwitterIcon fontSize="small" />
            Twitter
          </h5>
          <h5 style={{ color: "white" }}>
            <LinkedInIcon fontSize="small" />
            Linkdin
          </h5>
        </div>
      </div>
    </Wrapper>
  );
}
export default Action;

const Wrapper = styled.section`
height: 100%;
width: 100%;

.CardHolder{
    display:flex;
    flex-direction:row;
}
//

  .table {
    border-collapse: collapse;
    padding:1%;
    width:100%;
    background-color: #0b2b40;
  }
  
  .th {
    border: 1px solid #aaaaaa;
    text-align: center;
    font-size:17px;
    color:white;
  }
  .td {
    border: 1px solid #aaaaaa;
    text-align: center;
    color:white;
    font-size:16px;
    
  }

  //
.ListItem{
    margin-top:1%;
    margin-left:2%;
    background-color:#0B2B40;
    color:white;
    border-radius:10px;
    width: 95%;
}
.ListText{
    width:300px;
    text-align:center;
 
}
.ListItem:hover .ListText{
  color:black;
  font-weight:bold;
}
.overlay {
  position: fixed;
top: 50%;
left: 50%;
transform: translate(-50%, -50%);
width: 75%;
height: 75%;
z-index: 1000;
background-color: white;
padding: 1%;
}
// overlay css end
.overlay{
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 75%;
  height: 60%;
  z-index: 1000;
  background-color: white;
  padding: 1%;
}
.crossIcon{
    margin-left:95%;
    margin-top:2%;
}
.searchFieldsDiv{
  display: flex; 
  margin-top:2.5%;
  width:85%;
  margin-left:10%;
}
.searchButton {
  margin-left: 35%;
  margin-top: 5%;
  width:30%;
  background-color:#f26e22;
  color:white;
  font-weight:bold;
}
.searchButton:hover {
  background-color:#2E0F59;
  color:white;
}
.Field{
    width:50%;
    margin:2%;
}
.searchButton{
    margin-left:40%;
    margin-top:5%;
}

//overlay css end


//need help div start

.NeedHelpDiv{
    margin-left:35%;
    margin-top:30%;
}
.needHelpText{
    color:white;
}
.NeedHelpTele{
    color:white;
    text-decoration: none
}

//need help end

//data display card
.dataDisplay{
    height:600px;
    width:70%;
    margin-left:2%;
    margin-top:3%;
    background-color:#F2F2F2;
    padding:1.7%;
}
.columnName{
    display:flex;
    flex-direction:row;
    height:5.8%;
    border-radius:15px;
    
}
.colume1{
    margin-left:12%;
    font-size:15px;
    color:grey;
    font-weight:bold;
    margin-top:0.5%;
}
.colume2{
    margin-left:19%;
    font-size:15px;
    color:grey;
    font-weight:bold;
    margin-top:0.5%;
}
.colume3{
    margin-left:17.5%;
    font-size:15px;
    color:grey;
    font-weight:bold;
    margin-top:0.5%;
}
.colume4{
    margin-left:17%;
    font-size:15px;
    color:grey;
    font-weight:bold;
    margin-top:0.5%;
}
.colume5{
    margin-left:20%;
    font-size:15px;
    color:grey;
    font-weight:bold;
    margin-top:0.5%;
}
.colume6{
    margin-left:45%;
    font-size:15px;
    color:grey;
    font-weight:bold;
    margin-top:0.5%;
}
.searchIcon{
  position: absolute;
  z-index: 999;
  padding: 1%;
  font-size: 25px;
  color: white;
  margin-left: 69.2%;
  cursor: pointer;
  background-color: grey;
  border-radius: 500px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.25);
}

//data display card end


//UserInfo(TaskBar)
.TaskBar{

    width:20%;
    height:650px;
    background-color:#564873;
    margin-top:3%;
    margin-bottom:10%;
    margin-left:2%;
}

.UserInfo{
    display:flex;
    flex-direction:row;
    margin-top:5%;
    margin-left:10%;
}
.avatar{
    margin:2%;
    margin-top:5%;
}
.buttonHolder{
    display:flex;
    flex-direction:column;

}
.navigationButton{
    margin:2%;
}

//UserInfo Ending

//Footer CSS Files
.footer{
 display:flex;
 flex-direction:row;
 bottom:0;
 width:100%;
 height:250px;
 background-color: #2E0F59;
 margin-top:0%;
}
.company{
 margin-left:50%;
 margin-top:2%;
}
.socials{
 margin-left:5%;
 margin-top:2%;
}
.LogoHolder{
    margin-top:3%;
    margin-left:15%;
}
//Footer CSS Files end

//Header CSS FILES
.Header{
  display: flex;
  flex-direction: row;
  align-items:center;
  justify-content:center;
  margin-top: 0.5%;
  width: 100%;
  background-color: white;
}
.headerImage{
  width:7%;
  height:1%;
  border-radius:15px;
  }
.headerImage:hover{
animation: wave 1s infinite;

}
@keyframes wave {
0% {
transform: translateY(0);
}
50% {
transform: translateY(-5px);
}
100% {
transform: translateY(0);
}
}
.button{
background-color:white;
border-width:0;
margin-left:5.0%;
margin-top:0.5%;
width:08%;
height:50px; 
cursor: pointer;
transition: box-shadow 0.2s ease-in-out;
border-radius:10px;
}
.button:hover{
box-shadow: 0px 3px 10px rgba(0, 0, 0, 0.2);
}
.LogOutbutton{
background-color:#F26E22;
color:white;
width:10%;
height:150%;
margin-top:1%;
margin-left:15%;
padding:0.5%;
border-radius:10px;
}
.LogOutbutton:hover{
color:black;
}
//Header CSS FILES ENDING


`;
