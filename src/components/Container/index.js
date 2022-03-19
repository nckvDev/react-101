import React from 'react';
import styled from 'styled-components';

export default function index({ children }) {
  return <Container>{children}</Container>;
}

const Container = styled.section`
  width: 100%;
  height: 100vh;
  background-color: #9be3a2;
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 800px;
`;
