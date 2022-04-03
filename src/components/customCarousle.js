import {React, useState, useEffect, useRef, useCallback} from 'react'
import styled from 'styled-components'
 
export const CustomCarousle = ((props) => {  
  const [currentSlide,setCurrentSlide] = useState(1)
  const [isAutoPlay,setIsAutoPlay] = useState(true)
  const [test02,setTest02] = useState('')
  

  const timer = useRef(null)
  const track = useRef(null)
  const _currentSlide = useRef(1)
  const slideContent =useRef(null)
  
  const next = useCallback(() => {      
    if(currentSlide >= props.option.slideNum || currentSlide === 0){
      _currentSlide.current = 1;      
    }else{
      _currentSlide.current++;
    }
    //console.log('next')
    slide(_currentSlide.current);   
  },[currentSlide,props.option.slideNum])

  useEffect(()=>{
    const test = () =>{
       if(props.content.length > 0){
        setTest02( slideContent.current = props.content.map(res => {
          return <ContentSlide key={res.key} width={props.option.width}>{res}</ContentSlide>
        }) )      
      }
    }
    console.log('태그생성')
    test()
  },[props])

  useEffect(() => {
    if(isAutoPlay)
      clearTimeout(timer.current)
      timer.current = setTimeout(next, 2000)
        
    // return () => clearInterval(timer.current) // 언마운트 될 때 타이머 종료
 }, [next,isAutoPlay])
  
 

  const slide = (_currentSlide) => {
   let left = (_currentSlide-1) * (-100)
    //console.log(left)
    if(track){track.current.style.left = left+'%';}    
    //console.log('slide')
    setCurrentSlide(_currentSlide);
  }

  const prev = () => {
    if(currentSlide === 1){
      _currentSlide.current = props.option.slideNum;
    }else{
      _currentSlide.current--;
    }
    //console.log('prev')
    slide(_currentSlide.current);    
  }
  
 

  const pause = () => {
    setIsAutoPlay(false)
  }

  const start = () => {
    setIsAutoPlay(true)
  }
  
  return (
    <CarouselBox height={props.option.height}>
      <CarouselButton key='prev' className='prev' onClick={()=>{pause();prev();start();}}><img alt='prev' src='./img/leftArrow.png'></img></CarouselButton>
      <CarouselButton key='next' className='next' onClick={()=>{pause();next();start();}}><img alt='next' src='./img/rightArrow.png'></img></CarouselButton>
      <BannerImg><img alt='debatePeople' src='./img/mainBannerImg.png'></img></BannerImg>
      <CarouselTrack slideCount={props.option.slideCount} ref={track}>
        {/* {props.content.map(res => {
        return <ContentSlide key={res.key} width={props.option.width}>{res}</ContentSlide>
      })} */}
      {!!test02.length && test02}
      </CarouselTrack>
         
    </CarouselBox>
  )
});

const CarouselBox = styled.div`
  width: 100%;
  height: ${(props) => props.height + 'px'};
  position: relative;
  margin: 30px 0;
  overflow-x :hidden ;
`

const CarouselTrack = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  left: 0%;
  top: 0;
  display: flex;
  transition: opacity 1s ease-in-out;
`

const ContentSlide = styled.div`
  width: ${(props) => props.width + 'px'};
  position: relative;
  flex: 0 0 100%;
`

const BannerImg = styled.div`
  position: absolute;
  right: 0;
  bottom: 0;
  width: auto;
`


const CarouselButton = styled.div`
  position: absolute;
  top:50%;
  transform: translate(0, -50%);
  z-index: 2;
  width: auto;
  height: auto;
  img{

  }
  &.prev{
    left: 0;
  }
  &.next{
    right: 0;
  }
`