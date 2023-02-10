import { useEffect } from 'react';
import {
  AppContent,
  AppFooter,
  AppHeader,
  AppSidebar,
} from '../components/index';
import { useLocation, useNavigate } from 'react-router-dom';
import { isEmpty } from '../utils/utility';

import { CToast, CToastBody } from '@coreui/react';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';

const DefaultLayout = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const authority = window.sessionStorage.getItem('accessAuthority');
  const auth = window.sessionStorage.getItem('auth');
  const toast = useSelector((state) => state.toast);
  const dispatch = useDispatch();
  useEffect(() => {
    if (isEmpty(window.sessionStorage.getItem('jwt'))) {
      window.sessionStorage.clear();
      navigate(`/login`);
      return;
    }
    if (location.pathname === '/memeber' && !auth.includes('ADMIN')) {
      alert('접근 권한이 없습니다!');
      navigate(-1);
      return;
    } else if (location.pathname !== '/' && location.pathname !== '/home') {
      if (auth === 'EDITOR_PROHIBIT') {
        alert('접근 권한이 없습니다!');
        navigate(-1);
        return;
      }
      //경로 명이랑 담당 도메인이 다르면 접근권한 막기(회원관리 제외)
      if (authority[0].toLowerCase() !== location.pathname[1]) {
        if (auth !== 'ADMIN') {
          alert('접근 권한이 없습니다!');
          navigate(-1);
          return;
        }
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    let timeoutId;
    if (toast.visibleState) {
      timeoutId = setTimeout(() => {
        dispatch({
          type: 'SET_TOAST_STATE',
          visibleState: false,
          toastColor: 'success',
          textColor: 'white',
          text: '',
        });
      }, 3000);
    }
    return () => {
      if (timeoutId !== undefined) {
        clearTimeout(timeoutId);
      }
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [toast]);

  useEffect(() => {
    if (sessionStorage.getItem('auth') === 'EDITOR_PROHIBIT') {
      alert(
        '메인 관리자의 승인이 있을시 관리자페이지 이용이 가능합니다. 메인 관리자의 회원관리 내역을 확인해주세요.'
      );
    }
  }, []);

  return (
    <Container>
      <AppSidebar />
      <div className="wrapper d-flex flex-column min-vh-100 bg-light dark:bg-transparent">
        <AppHeader />
        <div className="body flex-grow-1 px-3">
          <AppContent />
        </div>
        <AppFooter />
      </div>
      <CToast
        visible={toast.visibleState}
        color={toast.toastColor}
        className={`text-${toast.textColor}`}>
        <CToastBody>{toast.text}</CToastBody>
      </CToast>
    </Container>
  );
};

export default DefaultLayout;

const Container = styled.main`
  & .toast {
    position: absolute;
    top: 170px;
    right: 150px;
  }
`;
