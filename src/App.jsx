import { useState } from "react";
import "./App.css";
import { Stack,Button } from "@mui/material";

function App() {
  const [backGroundColors, setbackGroundColors] = useState("white");
  
  const changeBackground = (color) => {
    console.log(`Changing background to ${color}`);
    setbackGroundColors(color);
  };

  return (
    <>
      <div style={{width:"100%",minHeight:"100vh", backgroundColor:"#F2F3F4"}} className='d-flex justify-content-center   p-3'>
        <div className=' p-3'>
          <h1 className=" text-center fw-bold   mb-3"> Background Genertor </h1>
          <div
             style={{ width:"500px", height: "400px", backgroundColor: backGroundColors, }}
            className=" shadow rounded " 
          ></div>
          <div  className="mt-3 ">
            <Stack direction="row" spacing={2}>
            <Button onClick={() => changeBackground("red")} style={{width:"25%",height:"45px"}} className="bg-danger " variant="contained">RED</Button>
            <Button onClick={() => changeBackground("blue")} style={{width:"25%",height:"45px"}} className="bg-primary" variant="contained">BLUE</Button>
            <Button onClick={() => changeBackground("gold")} style={{width:"25%",height:"45px"}} className="bg-warning" variant="contained">GOLD</Button>
            <Button onClick={() => changeBackground("black")} style={{width:"25%",height:"45px"}} className="bg-dark" variant="contained">BLACK</Button>
            </Stack>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
