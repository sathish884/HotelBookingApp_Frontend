import React, { useEffect, useState } from 'react'
import { Table } from 'antd';
import { getAllUsers } from '../../Services/Api';
import './Admin.css'

function Users() {

  const columns = [
    {
      title: 'User Id',
      dataIndex: '_id',
    },
    {
      title: 'Name',
      dataIndex: 'name',
      sorter: (a, b) => a.name.length - b.name.length,
      sortDirections: ['descend'],
    },
    {
      title: 'Email',
      dataIndex: 'email',
    }
  ];

  const onChange = (pagination, filters, sorter, extra) => {
    console.log('params', pagination, filters, sorter, extra);
  };

  const styles = {
    boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px'
  }

  const [userList, setUserList] = useState([])

  useEffect(() => {
    const fetchDataList = async () => {
      try {
        const response = await getAllUsers();
        const usersWithKey = response.map(user => ({
          ...user,
          key: user._id
        }));
        setUserList(usersWithKey);
      } catch (error) {
        console.log(error);

      }
    }
    fetchDataList();

  }, [])

  return (
    <Table
      columns={columns}
      style={styles}
      className="custom-table mt-3 mb-5"
      dataSource={userList}
      onChange={onChange}
      showSorterTooltip={{
        target: 'sorter-icon',
      }}
    />
  );
}

export default Users