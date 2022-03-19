import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Table, Spin, Button } from 'antd';
import Container from '../Container';
import styled from 'styled-components';
import moment from 'moment';
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
      title: 'เคสใหม่',
      dataIndex: 'new_case',
      render: (data) => data.toLocaleString(),
    },
    {
      title: 'ยอดรวม',
      dataIndex: 'total_case',
      render: (data) => data.toLocaleString(),
    },
    {
      title: 'รักษาหายแล้ว',
      dataIndex: 'total_recovered',
      render: (data) => data.toLocaleString(),
    },
    {
      title: 'วันที่',
      dataIndex: 'txn_date',
      render: (data) => moment(data).format('DD/MM/YYYY'),
    },
  ];

  useEffect(() => {
    getReportCovid();
  }, []);

  const getReportCovid = () => {
    axios
      .get('https://covid19.ddc.moph.go.th/api/Cases/timeline-cases-all')
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
        <h2> Covid Report List </h2>
        {loading ? (
          <Table
            rowKey="txn_date"
            columns={columns}
            dataSource={dataPost}
            size={'middle'}
          ></Table>
        ) : (
          <Spin />
        )}
        <Button onClick={onClickLogout} style={{marginTop: 10}}>Go Back</Button>
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
