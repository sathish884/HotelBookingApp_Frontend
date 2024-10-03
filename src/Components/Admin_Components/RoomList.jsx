import React, { useEffect, useState } from 'react'
import { Table, Button, Space, Tooltip, Modal, Input, Form, Popconfirm } from 'antd';
import { EditOutlined, DeleteOutlined } from '@ant-design/icons';
import { getRoomList, deleteRooms, updatedRoom } from '../../Services/Api';
import EditRoom from './EditRoom';


function RoomList() {

  const [roomList, setRoomList] = useState([]);
  const [editingRecord, setEditingRecord] = useState(null);

  // Columns for the table
  const columns = [
    {
      title: 'Room Id',
      dataIndex: '_id',
    },
    {
      title: 'Room Type',
      dataIndex: 'name',
      sorter: (a, b) => a.name.length - b.name.length,
      sortDirections: ['descend'],
    },
    {
      title: 'Rent Per Day',
      dataIndex: 'rentperday',
      sorter: (a, b) => a.rentperday - b.rentperday,
    },
    {
      title: 'Max Count',
      dataIndex: 'maxCount',
      sorter: (a, b) => a.maxCount - b.maxCount,
    },
    {
      title: 'Amenities',
      dataIndex: 'amenities',
      render: (amenities) => amenities.map(amenity => amenity.name).join(', '),
    },
    {
      title: 'Actions',
      dataIndex: 'actions',
      render: (_, record) => (
        <Space size="middle">
          <Tooltip title="Edit">
            <Button
              type="primary"
              shape="circle"
              icon={<EditOutlined />}
              onClick={() => handleEdit(record)}
              data-bs-toggle="modal" data-bs-target="#editmodel"
            />
          </Tooltip>
          <Tooltip title="Delete">
            <Popconfirm title="Sure to delete?" onConfirm={() => handleDelete(record._id)}>
              <Button
                type="danger"
                shape="circle"
                icon={<DeleteOutlined />}
              />
            </Popconfirm>
          </Tooltip>
        </Space>
      ),
    },
  ];

  const onChange = (pagination, filters, sorter, extra) => {
    console.log('params', pagination, filters, sorter, extra);
  };


  const handleEdit = (roomdata) => {
    setEditingRecord(roomdata);
  };

  // Function to update the room's data
  const handleUpdateRoom = (updatedRoom) => {
    // Updating the room list with the updated room information
    setRoomList(roomList.map(room => (room._id === updatedRoom._id ? updatedRoom : room)));
  };

  const handleDelete = async (id) => {
    try {
      await deleteRooms(id);
      // Update state to remove the deleted item
      setRoomList(roomList.filter(room => room._id !== id));
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    const fetchDataList = async () => {
      try {
        const response = await getRoomList();
        const roomsWithKey = response.data.map(room => ({
          ...room,
          key: room._id,
        }));
        setRoomList(roomsWithKey);
      } catch (error) {
        console.error(error);
      }
    };
    fetchDataList();
  }, []);

  return (
    <>
      <Table
        columns={columns}
        style={{ boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px' }}
        className="custom-table mt-3 mb-5"
        dataSource={roomList}
        onChange={onChange}
        showSorterTooltip={{ target: 'sorter-icon' }}
      />

      <EditRoom
        editingRecord={editingRecord} editRoom={handleUpdateRoom}
      />

    </>
  );
}

export default RoomList

