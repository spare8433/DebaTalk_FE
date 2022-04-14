import { React } from 'react'
import { InputBox } from '../styles/commonStyle'


export const BasicInput = ({styles={},value,onChange,type}) => {
  return (
    <InputBox width={styles.width}>
      <input placeholder={styles.placeholder} value={value} onChange={onChange} type={type ? type : ''}/>
    </InputBox>
  )
}
