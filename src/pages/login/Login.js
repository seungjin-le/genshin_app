import {useState} from 'react'
import {
  CButton,
  CCard,
  CCardBody,
  CCardGroup,
  CCol,
  CContainer,
  CForm,
  CFormFeedback,
  CFormInput,
  CInputGroup,
  CInputGroupText,
  CRow,
} from '@coreui/react'
import CIcon from '@coreui/icons-react'
import {cilLockLocked, cilUser} from '@coreui/icons'
import ApiConfig, {HttpMethod} from '../../dataManager/apiConfig'
import {EndPoint} from '../../dataManager/apiMapper'
import {isEmpty} from '../../utils/utility'
import {useNavigate} from 'react-router-dom'
import styled from 'styled-components'

const Login = () => {
  const navigate = useNavigate()

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const onKeyPress = event => {
    if (event.key === 'Enter') {
      handleSubmit().then()
    }
  }

  const handleSubmit = async () => {
    try {
      if (isEmpty(email)) {
        alert('이메일을 입력해 주세요.')
        return
      }

      if (isEmpty(password)) {
        alert('패스워드를 입력해 주세요.')
        return
      }

      const {data: response} = await ApiConfig.request({
        data: {
          loginId: email,
          password: password,
        },
        method: HttpMethod.POST,
        url: EndPoint.POST_LOGIN,
      })

      if (!response?.isSuccess || isEmpty(response?.result?.jwt)) {
        alert(response?.message)
        return
      }

      window.sessionStorage.setItem('jwt', response.result.jwt)
      window.sessionStorage.setItem('accessAuthority', response.result.accessAuthorityEnglish)
      window.sessionStorage.setItem('auth', response.result.editorAuthorityEnglish)
      navigate(`/`)
    } catch (error) {
      alert(`네트워크 통신 실패. 잠시후 다시 시도해주세요.\n${error.message}`)
    }
  }

  return (
    <div className='bg-light min-vh-100 d-flex flex-row align-items-center'>
      <CContainer>
        <CRow className='justify-content-center'>
          <CCol md={4}>
            <CCardGroup>
              <CCard className='p-4'>
                <CCardBody>
                  <CForm>
                    <h1 className='text-center mb-3'>관리자 로그인</h1>
                    <CInputGroup className='mb-3'>
                      <CInputGroupText>
                        <CIcon icon={cilUser} />
                      </CInputGroupText>
                      <CFormInput
                        type='email'
                        id='email'
                        placeholder='이메일주소를 입력해주세요.'
                        autoComplete='on'
                        maxLength={50}
                        onChange={e => setEmail(e.target.value)}
                      />
                      <CFormFeedback invalid>이메일을 올바르게 입력해주세요.</CFormFeedback>
                    </CInputGroup>
                    <CInputGroup className='mb-4'>
                      <CInputGroupText>
                        <CIcon icon={cilLockLocked} />
                      </CInputGroupText>
                      <CFormInput
                        type='password'
                        id='password'
                        placeholder='비밀번호를 입력해주세요.'
                        autoComplete='off'
                        onKeyPress={onKeyPress}
                        maxLength={20}
                        onChange={e => setPassword(e.target.value)}
                      />
                      <CFormFeedback invalid>비밀번호를 올바르게 입력해주세요.</CFormFeedback>
                    </CInputGroup>
                    <div className='d-grid'>
                      <CButton color='primary' onClick={handleSubmit}>
                        로그인
                      </CButton>
                      <SignUp onClick={() => navigate('/register')}>회원가입</SignUp>
                    </div>
                  </CForm>
                </CCardBody>
              </CCard>
            </CCardGroup>
          </CCol>
        </CRow>
      </CContainer>
    </div>
  )
}

export default Login

const SignUp = styled.span`
  margin-top: 10px;
  display: grid;
  place-items: center;
  font-size: 0.875rem;
  color: #606374;
  text-decoration: underline;
  cursor: pointer;
`
