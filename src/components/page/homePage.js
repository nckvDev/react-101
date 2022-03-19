import React from 'react';
import { useHistory } from 'react-router';
import Container from '../Container';
import styled from 'styled-components';
import { Button } from 'antd'

const HomePage = () => {
  const history = useHistory();
  const onClickLogout = () => {
    localStorage.clear();
    history.push('/');
  };

  return (
    <Container>
      <BodyHomePage>
        <h2>Home Page</h2>
        <Button onClick={() => history.push('/covid19')}> Covid Report</Button>
        <Button onClick={() => history.push('/news')} style={{marginTop: 15}}> News DevHub</Button>
        <CustomButton type="primary" onClick={onClickLogout} > Logout </CustomButton>
      </BodyHomePage>
    </Container>
  );
};

export default HomePage;

const CustomButton = styled(Button)`
  margin-top: 20px;
`
const BodyHomePage = styled.div`
  width: 300px;
  height: 200px;
  background-color: white;
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 6px;
`;
