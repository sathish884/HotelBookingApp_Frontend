import React, { useEffect, useState } from 'react';
import { Table } from 'antd';
import { getBookingRoomList } from '../../Services/Api';
import './Admin.css';
import moment from 'moment';

function BookingList() {

  const columns = [
    {
      title: 'Booking Id',
      dataIndex: '_id',
    },
    {
      title: 'Room Id',
      dataIndex: 'roomid',
    },
    {
      title: 'User Id',
      dataIndex: 'userid',
    },
    {
      title: 'Room Type',
      dataIndex: 'room',
      sorter: (a, b) => a.room.length - b.room.length,
      sortDirections: ['descend'],
    },
    {
      title: 'From',
      dataIndex: 'fromdate',
      sorter: (a, b) => Date.parse(a.fromdate) - Date.parse(b.fromdate),
      sortDirections: ['descend', 'ascend'],
      render: (text) => moment(text).format('DD-MM-YYYY'), // Change format as needed
    },
    {
      title: 'To',
      dataIndex: 'todate',
      sorter: (a, b) => Date.parse(a.todate) - Date.parse(b.todate),
      sortDirections: ['descend', 'ascend'],
      render: (text) => moment(text).format('DD-MM-YYYY'), // Change format as needed
    },
    {
      title: 'Status',
      dataIndex: 'status',
      filters: [
        {
          text: 'Booked',
          value: 'booked',
        },
        {
          text: 'Cancelled',
          value: 'cancelled',
        },
      ],
      onFilter: (value, record) => record.status.indexOf(value) === 0,
    },
  ];

  const onChange = (pagination, filters, sorter, extra) => {
    console.log('params', pagination, filters, sorter, extra);
  };

  // Inline styles for the table
  const styles = {
    boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px',
    borderRadius: '10px',
    overflow: 'hidden',
  };

  const [bookingList, setBookingList] = useState([]);

  // Fetch booking list data on component mount
  useEffect(() => {
    const fetchDataList = async () => {
      try {
        const response = await getBookingRoomList();
        const bookingsWithKey = response.data.map(booking => ({
          ...booking,
          key: booking._id, // Use _id as the unique key
        }));
        setBookingList(bookingsWithKey);
      } catch (error) {
        console.error(error);
      }
    };
    fetchDataList();
  }, []);

  return (
    <div className="table-responsive">
      <Table
        columns={columns}
        style={styles}
        className="custom-table mt-3 mb-5"
        dataSource={bookingList}
        onChange={onChange}
        showSorterTooltip={{
          target: 'sorter-icon',
        }}
      />
    </div>
  );

}

export default BookingList