import axios from 'axios';

import { useEffect } from "react";

function Test() {
  
  let getTestData = () => {
    axios.get("http://test17song.co.kr").then(res => {
      console.log("테스트1");
      alert(res.data);
      console.log(res.data);
    }).catch((err)=>{
      // alert(err.msg);
      console.log("테스트2");
    })
  };

  useEffect(() => { 
    getTestData()
  }, [])

  return (
    <div className="test">
      test
    </div>
  );
}

export default Test;
