import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Table, Spin, Button } from 'antd';
import Container from '../Container';
import styled from 'styled-components';
import { useHistory } from 'react-router';

const CovidReport = () => {
  const [dataPost, setDataPost] = useState();
  const [loading, setLoading] = useState(false);
  const history = useHistory();
  const onClickLogout = () => {
    history.goBack();
  };

  const columns = [
    {
      title: 'ชื่อ',
      dataIndex: 'name',
    },
    {
      title: 'ผู้ใช้',
      dataIndex: 'username',
    },
    {
      title: 'อีเมล์',
      dataIndex: 'email',
    },
    {
      title: 'ที่อยู่',
      dataIndex: 'address',
      render: (record) => {
        const data = `${record.street}`;
        return data;
      },
    },
  ];

  useEffect(() => {
    getReportCovid();
  }, []);

  const getReportCovid = () => {
    axios
      .get('https://jsonplaceholder.typicode.com/users')
      .then((response) => {
        setDataPost(response.data);
        setTimeout(() => {
          setLoading(true);
        }, 1000);
        console.log(`response`, response);
      })
      .catch((error) => console.log(error));
  };

  return (
    <Container>
      <BodyTable>
        <h2> Users </h2>
        {loading ? (
          <>
            <Table
              rowKey="id"
              columns={columns}
              dataSource={dataPost}
              size={'middle'}
            ></Table>
          </>
        ) : (
          <Spin />
        )}
        <Button onClick={onClickLogout} style={{ marginTop: 10 }}>
          Go Back
        </Button>
      </BodyTable>
    </Container>
  );
};

export default CovidReport;

const BodyTable = styled.div`
  width: 800px;
  display: flex;
  background-color: white;
  padding: 20px;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;
