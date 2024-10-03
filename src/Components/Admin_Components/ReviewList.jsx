import React, { useState, useEffect } from 'react'
import { Table, Button, Space, Tooltip, Popconfirm } from 'antd';
import { DeleteOutlined } from '@ant-design/icons';
import { deleteReview, getReviewsList } from '../../Services/Api';

function ReviewList() {

    const [reviewList, setReviewList] = useState([]);

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
            title: 'Rating',
            dataIndex: 'rating',
            sorter: (a, b) => a.rentperday - b.rentperday,
        },
        {
            title: 'Reviewcomment',
            dataIndex: 'reviewcomment',
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
            await deleteReview(id);
            // Update state to remove the deleted item
            setReviewList(reviewList.filter(review => review._id !== id));
        } catch (error) {
            console.error(error);
        }
    };

    useEffect(() => {
        const fetchDataList = async () => {
            try {
                const response = await getReviewsList();
                const reviewWithKey = response.data.map(room => ({
                    ...room,
                    key: room._id,
                }));
                setReviewList(reviewWithKey);
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
                dataSource={reviewList}
                onChange={onChange}
                showSorterTooltip={{ target: 'sorter-icon' }}
            />
        </>
    )
}

export default ReviewList