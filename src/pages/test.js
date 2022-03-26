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


  let selectPost = () => {
    axios.get("http://test17song.co.kr/debate-post").then(res => {
      console.log(res);      
    }).catch((err)=>{
      // alert(err.msg);
      console.log(err);
    })
  }

  let createPost = () => {
    axios.post("http://test17song.co.kr/debate-post",{      
        title: 'Ti',
        content: 'Co',
        category: 'Ca',       
        method: 'Me'      
    }).then(res => {
      console.log(res);
      console.log('1')      
    }).catch((err)=>{
      // alert(err.msg);
      console.log(err);
    })
  }

  useEffect(() => { 
    getTestData()
  }, [])

  return (
    <div className="test">
      {/* <h3>{testReduxSate}</h3> 

      <button onClick={()=>{        
        dispatch(addTest("add 성공"));
      }}>증가</button>

      <button onClick={()=>{       
        dispatch(delTest("del 성공"));
      }}>감소</button> */}
      
      <button onClick={() => selectPost()}>조회하기</button>
      <button onClick={() => createPost()}>추가하기</button>
    </div>
  );
}

export default Test;
