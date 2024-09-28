import React, { useEffect, useState, useRef } from 'react';
import './Admin.css';
import { Select } from 'antd';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { getAmenitiesList, createRooms } from '../../Services/Api';
import { UploadOutlined } from '@ant-design/icons';
import { Button, Upload } from 'antd';


// Sample initial form data
const initialValues = {
  name: '',
  bed: '',
  type: '',
  amenities: [],
  description: '',
  rentperday: '',
  maxCount: '',
  imagesurls: [],
};

// Validation schema using Yup
const validationSchema = Yup.object({
  name: Yup.string().required('Room Name is required'),
  bed: Yup.string().required('Bed Name is required'),
  type: Yup.string().required('Room Type is required'),
  rentperday: Yup.number().required('Rent Per Day is required'),
  maxCount: Yup.number().required('Max Count is required'),
  description: Yup.string().required('Description is required'),
  amenities: Yup.array().min(1, 'Select at least one amenity'),
  imagesurls: Yup.array().min(1, 'At least one image is required'),
});

function AddRoom() {

  const [amenities, setAmenities] = useState([]);
  const fileInputRef = useRef(null);

  useEffect(() => {
    const fetchDataList = async () => {
      try {
        const response = await getAmenitiesList();
        if (response && Array.isArray(response.data)) {
          setAmenities(response.data); // Adjust to match the structure
        } else {
          setAmenities([]); // Set an empty array if no data is returned
        }
      } catch (error) {
        console.error(error);
      }
    };
    fetchDataList();
  }, []);


  // Map room amenities to options for the select input
  const options = amenities.map((amenity, amenityIndex) => ({
    label: amenity.name,  // Assuming amenity has a `name` field
    value: amenity._id,   // Assuming amenity has an `_id` field
    key: `${amenity._id}-${amenityIndex}`,
  }));

  const [selectedImages, setSelectedImages] = useState([]);

  // // Handle image selection
  // const handleImageChange = (e) => {
  //   const files = Array.from(e.target.files);
  //   setSelectedImages(files);
  // };

  // Handle removing an image from the preview
  const handleRemoveImage = (indexToRemove) => {
    setSelectedImages((prevImages) =>
      prevImages.filter((_, index) => index !== indexToRemove)
    );
  };

  // Handle image selection
  const handleImageChange = (e, setFieldValue) => {
    const files = Array.from(e.target.files);
    setSelectedImages(files);

    // Set image URLs into Formik's imagesurls field
    const imageUrls = files.map(file => URL.createObjectURL(file));
    setFieldValue('imagesurls', imageUrls); // Store image URLs in the form
  };



  const onSubmit = async (values, { resetForm }) => {
    console.log(values); // Log form values before submitting
    try {
      await createRooms(values); // Assuming createRooms is your API call
      resetForm(); // Reset form data after successful submission
      if (fileInputRef.current) fileInputRef.current.value = ''; // Reset file input
    } catch (error) {
      console.error('Error creating room:', error);
    }
  }

  const styles = {
    boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px',
    padding: '10px',
  };

  return (
    <div className="container">
      <div className="card p-5 mt-3 mb-5" style={{ boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px' }}>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={onSubmit}
        >
          {({ setFieldValue, values }) => (
            <Form>
              <div className="row mb-3">
                <div className="col-md-6">
                  <label htmlFor="name" className="form-label">Name</label>
                  <Field name="name" type="text" className="form-control" style={styles} placeholder="Room Name" />
                  <ErrorMessage name="name" component="div" className="text-danger" style={{ marginTop: '10px', fontSize: '15px', fontWeight: 'bold' }} />
                </div>

                <div className="col-md-6">
                  <label htmlFor="type" className="form-label">Type</label>
                  <Field name="type" type="text" className="form-control" style={styles} placeholder="Room Type" />
                  <ErrorMessage name="type" component="div" className="text-danger" style={{ marginTop: '10px', fontSize: '15px', fontWeight: 'bold' }} />
                </div>
              </div>

              <div className="row mb-4">
                <div className="col-md-4">
                  <label htmlFor="bed" className="form-label">Bed</label>
                  <Field name="bed" type="text" className="form-control" style={styles} placeholder="Bed" />
                  <ErrorMessage name="bed" component="div" className="text-danger" style={{ marginTop: '10px', fontSize: '15px', fontWeight: 'bold' }} />
                </div>

                <div className="col-md-4">
                  <label htmlFor="rentperday" className="form-label">Rent Per Day</label>
                  <Field name="rentperday" type="number" className="form-control" style={styles} placeholder="Rent Per Day" />
                  <ErrorMessage name="rentperday" component="div" className="text-danger" style={{ marginTop: '10px', fontSize: '15px', fontWeight: 'bold' }} />
                </div>

                <div className="col-md-4">
                  <label htmlFor="maxCount" className="form-label">Max Count</label>
                  <Field name="maxCount" type="number" className="form-control" style={styles} placeholder="Max Count" />
                  <ErrorMessage name="maxCount" component="div" className="text-danger" style={{ marginTop: '10px', fontSize: '15px', fontWeight: 'bold' }} />
                </div>

              </div>

              <div className="row mb-4">
                <div className="col-md-6">
                  <label htmlFor="amenities" className="form-label">Amenities</label>
                  <Select
                    mode="multiple"
                    allowClear
                    style={{ width: '100%' }}
                    placeholder="Please select amenities"
                    value={values.amenities}
                    onChange={(value) => setFieldValue('amenities', value)}
                    options={options}
                  />
                  <ErrorMessage name="amenities" component="div" className="text-danger" style={{ marginTop: '10px', fontSize: '15px', fontWeight: 'bold' }} />
                </div>

                <div className="col-md-6">
                  <label htmlFor="description" className="form-label">Description</label>
                  <Field name="description" type="text" className="form-control" style={styles} placeholder="Description" />
                  <ErrorMessage name="description" component="div" className="text-danger" style={{ marginTop: '10px', fontSize: '15px', fontWeight: 'bold' }} />
                </div>
              </div>


              <div className="row mb-4">
                <div className="col-md-6">
                  <label htmlFor="imagesurls" className="form-label">Images</label>
                  <input
                    type="file"
                    multiple
                    accept="image/*"
                    onChange={(e) => handleImageChange(e, setFieldValue)}
                  />
                  <div style={{ display: 'flex', flexWrap: 'wrap', marginTop: '10px' }}>
                    {selectedImages.map((image, index) => (
                      <div key={index} style={{ margin: '10px', position: 'relative' }}>
                        <img
                          src={URL.createObjectURL(image)}
                          alt={`preview-${index}`}
                          style={{ width: '60px', height: '50px', objectFit: 'cover', borderRadius: '5px' }}
                        />
                        <button
                          style={{
                            position: 'absolute',
                            top: '5px',
                            right: '5px',
                            backgroundColor: 'red',
                            color: 'white',
                            border: 'none',
                            cursor: 'pointer',
                          }}
                          onClick={() => handleRemoveImage(index)}
                        >
                          X
                        </button>
                      </div>
                    ))}
                  </div>
                  <ErrorMessage name="imagesurls" component="div" className="text-danger" style={{ marginTop: '10px', fontSize: '15px', fontWeight: 'bold' }} />
                </div>
              </div>

              <div className="row justify-content-end">
                <div className="col-auto">
                  <button type="submit" style={styles} className="btn btn-dark">Add Room</button>
                </div>
              </div>

            </Form>
          )}
        </Formik>
      </div>
    </div >
  );
}

export default AddRoom

