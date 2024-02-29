import Mainpage from "./Components/Mainpage";
import Navbar from "./Components/Navbar";
import { useState } from "react";

export default function NewsPage() {
    const[category,setCategory] = useState("general");
  return (
    <div>
    <Navbar setCategory={setCategory}/>
    <Mainpage category={category}/> 
    </div>
  )
}

