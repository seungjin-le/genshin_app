import { useState } from 'react';

import ApiConfig, { HttpMethod } from '../../dataManager/apiConfig';
import { EndPoint } from '../../dataManager/apiMapper';
import { isEmpty } from '../../utils/utility';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const Login = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const onKeyPress = (event) => {
    if (event.key === 'Enter') {
      handleSubmit().then();
    }
  };

  const handleSubmit = async () => {
    try {
      if (isEmpty(email)) {
        alert('이메일을 입력해 주세요.');
        return;
      }

      if (isEmpty(password)) {
        alert('패스워드를 입력해 주세요.');
        return;
      }

      const { data: response } = await ApiConfig.request({
        data: {
          loginId: email,
          password: password,
        },
        method: HttpMethod.POST,
        url: EndPoint.POST_LOGIN,
      });

      if (!response?.isSuccess || isEmpty(response?.result?.jwt)) {
        alert(response?.message);
        return;
      }

      window.sessionStorage.setItem('jwt', response.result.jwt);
      window.sessionStorage.setItem(
        'accessAuthority',
        response.result.accessAuthorityEnglish
      );
      window.sessionStorage.setItem(
        'auth',
        response.result.editorAuthorityEnglish
      );
      navigate(`/`);
    } catch (error) {
      alert(`네트워크 통신 실패. 잠시후 다시 시도해주세요.\n${error.message}`);
    }
  };

  return (
    <div className="bg-light min-vh-100 d-flex flex-row align-items-center"></div>
  );
};

export default Login;

const SignUp = styled.span`
  margin-top: 10px;
  display: grid;
  place-items: center;
  font-size: 0.875rem;
  color: #606374;
  text-decoration: underline;
  cursor: pointer;
`;
