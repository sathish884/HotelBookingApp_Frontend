import React, { useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import { addContact } from '../../Services/Api';

// Import the default Leaflet marker icons (using ES modules)
import iconUrl from 'leaflet/dist/images/marker-icon.png';
import iconRetinaUrl from 'leaflet/dist/images/marker-icon-2x.png';
import shadowUrl from 'leaflet/dist/images/marker-shadow.png';

// Set up custom marker with Leaflet icon options
const DefaultIcon = L.icon({
    iconUrl,
    iconRetinaUrl,
    shadowUrl,
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowSize: [41, 41],
});

function Contact() {

    const [contactForm, setContactForm] = useState({
        username: '',
        email: '',
        message: ''
    });

    const handleChangeField = (e) => {
        const { name, value } = e.target;
        setContactForm({ ...contactForm, [name]: value });
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await addContact(contactForm);
            setContactForm({
                username: '',
                email: '',
                message: ''
            })
        } catch (error) {
            console.log("error comment", error);

        }
    }
    return (
        <>
            {/* <!-- Contact Section Begin --> */}
            <section className="contact-section spad">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4">
                            <div className="contact-text">
                                <h2>Contact Info</h2>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                                    labore et dolore magna aliqua.</p>
                                <table>
                                    <tbody>
                                        <tr>
                                            <td className="c-o">Address:</td>
                                            <td>856 Cordia Extension Apt. 356, Lake, US</td>
                                        </tr>
                                        <tr>
                                            <td className="c-o">Phone:</td>
                                            <td>(12) 345 67890</td>
                                        </tr>
                                        <tr>
                                            <td className="c-o">Email:</td>
                                            <td>info.colorlib@gmail.com</td>
                                        </tr>
                                        <tr>
                                            <td className="c-o">Fax:</td>
                                            <td>+(12) 345 67890</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                        <div className="col-lg-7 offset-lg-1">
                            <form action="#" className="contact-form" onSubmit={handleSubmit}>
                                <div className="row">
                                    <div className="col-lg-6">
                                        <input className='form-control' type="text" placeholder="Your Name" name='username' value={contactForm.username} onChange={handleChangeField} />
                                    </div>
                                    <div className="col-lg-6">
                                        <input className='form-control' type="email" placeholder="Your Email" name='email' value={contactForm.email} onChange={handleChangeField} />
                                    </div>
                                    <div className="col-lg-12">
                                        <textarea className='form-control' placeholder="Your Message" name='message' value={contactForm.message} onChange={handleChangeField}></textarea>
                                        <button className='btn btn-outline-success' type="submit">Submit Now</button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                    <div className="map">
                        <MapContainer center={[20.5937, 78.9629]} zoom={13} style={{ height: "500px", width: "100%" }}>
                            <TileLayer
                                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                            />
                            <Marker position={[20.5937, 78.9629]}>
                                <Popup>
                                    A sample popup.<br /> Easily customizable.
                                </Popup>
                            </Marker>
                        </MapContainer>
                    </div>
                </div>
            </section>
            {/* <!-- Contact Section End --> */}

        </>
    )
}

export default Contact