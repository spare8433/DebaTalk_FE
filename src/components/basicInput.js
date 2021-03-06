import { React } from 'react'
import { InputBox } from '../styles/commonStyle'


export const BasicInput = ({styles={},value,onChange,type,onBlur,children}) => {
  return (
    <InputBox width={styles.width} height={styles.height} cssStyle={styles.cssStyle}>
      <input placeholder={styles.placeholder} value={value} onChange={onChange} onBlur={onBlur} type={type ? type : ''}  />
      {!!children && children}    
    </InputBox>
  )
}
