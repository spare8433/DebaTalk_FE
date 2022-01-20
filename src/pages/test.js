import axios from 'axios';

import { useEffect } from "react";

import { useSelector ,useDispatch } from 'react-redux'
import { addTest, delTest } from '../store/actions';

function Test() {
  const dispatch = useDispatch();
  
  const testReduxSate = useSelector(state => state.test)

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
      <h3>{testReduxSate}</h3> 

      <button onClick={()=>{        
        dispatch(addTest("add 성공"));
      }}>증가</button>

      <button onClick={()=>{       
        dispatch(delTest("del 성공"));
      }}>감소</button>
      
    </div>
  );
}

export default Test;
