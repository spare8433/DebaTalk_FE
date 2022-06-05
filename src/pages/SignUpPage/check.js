const REGEX = {
  ID_RULE:/^[a-z0-9_]{4,20}$/,
  EMAIL:/^[\w]([-_\.]?[0-9a-zA-Z])*@[\w]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i,
  NAME_RULE: /^[가-힣a-zA-Z0-9]+$/,
  PWD_RULE:/^[a-zA-Z0-9\{\}\[\]\/?.,;:|\)*~`!^\-_+<>@\#$%&\\\=\(\'\"].{8,16}$/,
}

class ChkObject {
  constructor(check,msg){
    this.check = check
    this.msg = msg
  }
}


// 입력값 유효성 검사
const regexCheck = (str, type) => {
  if(type === 'id')
    return REGEX.ID_RULE.test(str)
  if(type === 'email')
    return REGEX.EMAIL.test(str)
  if(type === 'nickname')
    return REGEX.NAME_RULE.test(str)
  if(type === 'pw')
    return REGEX.PWD_RULE.test(str)
  
  return 'err'
}

// 전체 입력값 확인
export const regexCheckAll = (data) => {
  let type = ''
  let msg = ''

  if(regexCheck(data.userId,'id') === false){
    type = '아이디'
  }else if(regexCheck(data.email,'email') === false)
    type = '이메일'
  else if(regexCheck(data.nickname,'nickname') === false)
    type = '닉네임'
  else if(regexCheck(data.password,'pw') === false)
    type = '비밀번호'
  else{
    return new ChkObject(true,msg)
  }
  msg = `형식에 맞게 "${type}" 항목을 작성해주세요.`
  return new ChkObject(false,msg)
}

// 입력값 공백 확인
const emptyCheck = (str) => {
  if(str === '')
    return false
  return true
}

// 입력값 전체 확인
export const emptyCheckAll = (data) => {
  let type = ''
  let msg = ''

  if(!emptyCheck(data.userId))
    type = '아이디'
  else if(!emptyCheck(data.email))
    type = '이메일'
  else if(!emptyCheck(data.nickname))
    type = '닉네임'
  else if(!emptyCheck(data.password))
    type = '비밀번호'
  else if(!emptyCheck(data.rePassword))
    type = '비밀번호 확인'
  else
    return new ChkObject(true,msg)
  
  msg = `"${type}" 항목은 필수로 입력하셔야 합니다.`
  return new ChkObject(false,msg)
}


// //입력값 중복 검사
// const duplicateCheck = (str) => {
//   // api 서버 기능 추가되면 id, nickname 으로 요청 보내서 확인후 처리예정
//   return true
// }

// export const duplicateCheckAll = (data) => {
//   let type = ''
//   let msg = ''

//   if(!duplicateCheck(data.userId))
//     type = '아이디'
//   else if(!duplicateCheck(data.nickname))
//     type = '닉네임'
//   else
//     return new ChkObject(true,msg)
  
//   msg = `입력하신 "${type}" 항목이 이미 존재합니다 변경해주시기 바랍니다.`
//   return new ChkObject(false,msg)
// }

//두 비밀번호 입력값이 동일한지 확인
const equalPwCheck = (pw,rePw) => {
  if(pw === rePw)
    return true
  return false
}

// 한 입력값의 체크해야 하는 부분을 확인후 오류 메시지 리턴
// setMsg(['입력 값의 타입 ex) id,pw ..'],공백 여부, 유효성 여부, 중복 여부, 패스워드 중복 여부(생략 가능))
const setMsg = (type,empty=false,regex=false,equalPw=false) =>{
  
  if(equalPw && type === '비밀번호 확인')
    return `${type} 항목이 동일하지 않습니다`
  if(!regex)
    return `형식에 맞게 "${type}" 항목을 작성해주세요.`
  if(!empty)
    return `"${type}" 항목은 필수로 입력하셔야 합니다.`
  return ''
}

export const checkId = (str) => {
  let check = false;
  let msg = ''
  
  if (regexCheck(str,'id') && emptyCheck(str))
    check = true
  else
    msg = setMsg('아이디',emptyCheck(str),regexCheck(str,'id'))

  return new ChkObject(check,msg)
}

export const checkEmail = (str) => {
  let check = false;
  let msg = ''

  if (regexCheck(str,'email') && emptyCheck(str))
    check = true
  else
    msg=setMsg('이메일',emptyCheck(str),regexCheck(str,'email'))

  return new ChkObject(check,msg)
}

export const checkNickname = (str) => {
  let check = false;
  let msg = ''

  if (regexCheck(str,'nickname') && emptyCheck(str))
  check = true
  else
    msg=setMsg('닉네임',emptyCheck(str),regexCheck(str,'nickname'))

  return new ChkObject(check,msg)
}

export const checkPassword= (str) => {
  let check = false;
  let msg = ''

  if (regexCheck(str,'pw') && emptyCheck(str))
    check=true
  else
    msg=setMsg('비밀번호',emptyCheck(str),regexCheck(str,'pw'))

    return new ChkObject(check,msg)
}

export const checkRePassword= (pw,rePw) => {
  let check = false;
  let msg = ''

  if (emptyCheck(pw))
    check=true
  else
    msg=setMsg('비밀번호 확인',emptyCheck(rePw),true,equalPwCheck(pw,rePw))

  return new ChkObject(check,msg)
}