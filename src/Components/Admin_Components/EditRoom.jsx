import React, { useEffect, useState, useRef } from 'react';
import { Select } from 'antd';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { getAmenitiesList, updatedRoom } from '../../Services/Api';

// Validation schema for Formik
const validationSchema = Yup.object({
    name: Yup.string().required('Room Name is required'),
    type: Yup.string().required('Room type is required'),
    rentperday: Yup.number().required('Rent per day is required').positive('Must be positive'),
    maxCount: Yup.number().required('Max count is required').positive('Must be positive'),
    description: Yup.string().required('Description is required'),
    amenities: Yup.array().min(1, 'Select at least one amenity').required('Amenities are required'),
});

function EditRoom({ editingRecord, editRoom }) {

    const [amenities, setAmenities] = useState([]);
    const fileInputRef = useRef(null);

    useEffect(() => {
        const fetchDataList = async () => {
            try {
                const response = await getAmenitiesList();
                if (response && Array.isArray(response.data)) {
                    setAmenities(response.data);
                    console.log("Fetched amenities:", response.data);  // Debugging to check fetched data
                } else {
                    setAmenities([]);
                }
            } catch (error) {
                console.error(error);
            }
        };
        fetchDataList();
    }, [editingRecord]);



    const options = amenities.map((amenity, amenityIndex) => ({
        label: amenity.name,
        value: amenity._id,
        key: `${amenity._id}-${amenityIndex}`,
    }));
    console.log("Amenities options:", options);



    // Ensure initial values are correctly set based on the editingRecord
    const initialValues = {
        name: editingRecord?.name || '',
        bed: editingRecord?.bed || '',
        type: editingRecord?.type || '',
        amenities: editingRecord?.amenities?.map(a => a._id) || [],  // Extract _id from amenities
        description: editingRecord?.description || '',
        rentperday: editingRecord?.rentperday || '',
        maxCount: editingRecord?.maxCount || '',
        imagesurls: editingRecord?.imagesurls || [], // Ensure this is an array
    };

    const onSubmit = async (values, { resetForm }) => {
        try {
            await updatedRoom(editingRecord._id, values);
            resetForm();  // Reset the form after successful submission
            editRoom({ ...editingRecord, ...values });
            document.getElementById("editCloseModalButton").click();
        } catch (error) {
            console.error("Error updating room", error);
        }
    };

    const handleFileChange = (e, setFieldValue) => {
        const files = Array.from(e.target.files);
        const imageUrls = files.map((file) => URL.createObjectURL(file));
        setFieldValue('imagesurls', imageUrls);  // Set Formik field with image URLs
    };

    return (
        <div className="modal fade" id="editmodel" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalLabel">Edit Room Details</h5>
                        <button type="button" className="btn-close" id="editCloseModalButton" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                        <Formik
                            initialValues={initialValues}
                            validationSchema={validationSchema}
                            onSubmit={onSubmit}
                            enableReinitialize={true}  // Reinitialize form when initialValues change
                        >
                            {({ setFieldValue, values }) => {
                                console.log("Formik values for amenities:", values.amenities);  // Log to debug Formik's state
                                return (
                                    <Form>
                                        <div className="row mb-3">
                                            <div className="col-12">
                                                <label htmlFor="name">Room Name</label>
                                                <Field className="form-control" id="name" name="name" />
                                                <ErrorMessage name="name" component="div" className="text-danger" />
                                            </div>
                                        </div>

                                        <div className="row mb-3">
                                            <div className="col-12">
                                                <label htmlFor="type">Type</label>
                                                <Field className="form-control" id="type" name="type" />
                                                <ErrorMessage name="type" component="div" className="text-danger" />
                                            </div>
                                        </div>

                                        <div className="row mb-3">
                                            <div className="col-12">
                                                <label htmlFor="type">Bed</label>
                                                <Field className="form-control" id="type" name="bed" />
                                                <ErrorMessage name="bed" component="div" className="text-danger" />
                                            </div>
                                        </div>

                                        <div className="row mb-3">
                                            <div className="col-12">
                                                <label htmlFor="amenities">Amenities</label>
                                                <Select
                                                    mode="multiple"
                                                    allowClear
                                                    style={{ width: '100%' }}
                                                    placeholder="Please select amenities"
                                                    value={values.amenities}  // Ensure this is an array of values (e.g., _id strings)
                                                    onChange={(value) => setFieldValue('amenities', value)}
                                                    options={options}  // Ensure this is an array of { label, value } objects
                                                />
                                                <ErrorMessage name="amenities" component="div" className="text-danger" />
                                            </div>
                                        </div>


                                        <div className="row mb-3">
                                            <div className="col-12">
                                                <label htmlFor="description">Description</label>
                                                <Field as="textarea" className="form-control" id="description" name="description" />
                                                <ErrorMessage name="description" component="div" className="text-danger" />
                                            </div>
                                        </div>

                                        <div className="row mb-3">
                                            <div className="col-12">
                                                <label htmlFor="rentperday">Rent Per Day</label>
                                                <Field className="form-control" type="number" id="rentperday" name="rentperday" />
                                                <ErrorMessage name="rentperday" component="div" className="text-danger" />
                                            </div>
                                        </div>

                                        <div className="row mb-3">
                                            <div className="col-12">
                                                <label htmlFor="maxCount">Max Count</label>
                                                <Field className="form-control" type="number" id="maxCount" name="maxCount" />
                                                <ErrorMessage name="maxCount" component="div" className="text-danger" />
                                            </div>
                                        </div>

                                        <div className="row mb-3">
                                            <div className="col-12">
                                                <label htmlFor="imagesurls">Upload Images</label>
                                                <input
                                                    type="file"
                                                    className="form-control"
                                                    ref={fileInputRef}
                                                    accept="image/*"
                                                    multiple
                                                    onChange={(e) => handleFileChange(e, setFieldValue)}
                                                />
                                                <ErrorMessage name="imagesurls" component="div" className="text-danger" />
                                            </div>
                                        </div>

                                         {/* Inside the Formik form, display the images preview */}
                                        <div className="row mb-3">
                                            <div className="col-12">
                                                {values.imagesurls.length > 0 && values.imagesurls.map((url, index) => (
                                                    <img key={index} src={url} alt={`Preview ${index}`} style={{ width: '50px', height: '50px', marginRight: '10px' }} />
                                                ))}
                                            </div>
                                        </div>
                                        
                                        <div className="modal-footer">
                                            <button type="button" className="btn btn-danger" data-bs-dismiss="modal">Close</button>
                                            <button type="submit" className="btn btn-primary">Update</button>
                                        </div>
                                    </Form>
                                );
                            }}
                        </Formik>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default EditRoom