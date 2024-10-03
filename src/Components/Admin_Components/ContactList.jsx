import React, {useState, useEffect} from 'react'
import { Table, Button, Space, Tooltip, Popconfirm } from 'antd';
import { DeleteOutlined } from '@ant-design/icons';
import { deleteContact, getContactList } from '../../Services/Api';

function ContactList() {
    const [contactList, setContactList] = useState([]);

    // Columns for the table
    const columns = [
        {
            title: 'User ID',
            dataIndex: '_id',
        },
        {
            title: 'User Name',
            dataIndex: 'username',
            sorter: (a, b) => a.name.length - b.name.length,
            sortDirections: ['descend'],
        },
        {
            title: 'Email',
            dataIndex: 'email',
        },
        {
            title: 'Message',
            dataIndex: 'message',
        },
        {
            title: 'Actions',
            dataIndex: 'actions',
            render: (_, record) => (
                <Space size="middle">
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


    const handleDelete = async (id) => {
        try {
            await deleteContact(id);
            // Update state to remove the deleted item
            setContactList(contactList.filter(contact => contact._id !== id));
        } catch (error) {
            console.error(error);
        }
    };

    useEffect(() => {
        const fetchDataList = async () => {
            try {
                const response = await getContactList();
                const contactsWithKey = response.data.map(room => ({
                    ...room,
                    key: room._id,
                }));
                setContactList(contactsWithKey);
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
                dataSource={contactList}
                onChange={onChange}
                showSorterTooltip={{ target: 'sorter-icon' }}
            />
        </>
    )
}

export default ContactList