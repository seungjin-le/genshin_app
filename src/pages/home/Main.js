import React from 'react';
import { Layout } from 'antd';

const Main = () => {
  // const [expiredAt, setExpiredAt] = useState(window.localStorage.getItem('expiredAt'))

  /*const extendJwtExpirationTime = async () => {
    try {
      const {data: response} = await ApiConfig.request({
        method: HttpMethod.GET,
        url: EndPoint.GET_V1_TEST_AUTO_LOGIN,
        path: {isManual: true},
      })

      alert(response.message)

      if (!response.isSuccess) {
        window.localStorage.clear()
        navigate(`/login`)
      } else {
        window.localStorage.setItem("jwt", response.result.jwt)
        window.localStorage.setItem("expiredAt", response.result.expiredAt)
        setExpiredAt(response.result.expiredAt)
      }
    } catch (error) {
      alert(`네트워크 통신 실패. 잠시후 다시 시도해주세요.\n${error.message}`)
      return false
    }
  }*/

  return (
    <>
      <br />
      <Layout
        style={{
          minHeight: '100vh',
        }}></Layout>
      asfasf
      <br />a
    </>
  );
};

export default Main;
