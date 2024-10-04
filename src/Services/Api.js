import axios from "axios";

const apiClient = axios.create({
  //  baseURL:'http://localhost:3000/api'
   baseURL: 'https://hotel-booking-app-backend-ecru.vercel.app/api',
});

// --------------------------------------------------------------- Rooms --------------------------------------------------

export const createRooms = async (body) => {
    // Retrieve token from sessionStorage
    const token = JSON.parse(sessionStorage.getItem('userToken'));
    try {
        const headers = {
            'Authorization': `${token}`,  // Pass Bearer token in header
            'Content-Type': 'application/json'  // Specify JSON content type
        };

        const response = await apiClient.post('/createroom', body, { headers });
        return response;
    } catch (error) {
        console.log("Error creating room:", error);  // Handle errors
        throw error;
    }
};



export const updatedRoom = async (id, body) => {
    const token = JSON.parse(sessionStorage.getItem('userToken'));
    try {
        const headers = {
            'Authorization': `Bearer ${token}`,  // Ensure token is passed as a Bearer token
            'Content-Type': 'application/json'
        };
        const response = await apiClient.put(`/updateRoom?roomId=${id}`, body, { headers });
        return response;
    } catch (error) {
        throw error;
    }
}

export const deleteRooms = async (id) => {
    const token = JSON.parse(sessionStorage.getItem('userToken'));
    try {
        const headers = {
            'Authorization': `Bearer ${token}`,  // Ensure token is passed as a Bearer token
            'Content-Type': 'application/json'
        };
        const response = await apiClient.delete(`/deleteRoom?roomId=${id}`, { headers });
        return response;
    } catch (error) {
        throw error;
    }
}

export const getRoomList = async () => {
    try {
        const response = await apiClient.get('/getAllRoomList');
        return response;
    } catch (error) {
        throw error;
    }
}

export const getSingleRoom = async (id) => {
    try {
        const response = await apiClient.get(`/getSingleRoom?roomId=${id}`);
        return response;
    } catch (error) {
        throw error;
    }
}

export const getAmenitiesList = async () => {
    const token = JSON.parse(sessionStorage.getItem('userToken'));
    try {
        const headers = {
            'Authorization': `Bearer ${token}`,  // Ensure token is passed as a Bearer token
            'Content-Type': 'application/json'
        };
        const response = await apiClient.get('/getAllAmenities', { headers });
        return response;
    } catch (error) {
        throw error;
    }
}

// -------------------------------------------------- Booking Rooms ------------------------------------------------------------

export const getRoomsByUser = async (body) => {
    const token = JSON.parse(sessionStorage.getItem('userToken'));
    try {
        const headers = {
            'Authorization': `Bearer ${token}`,  // Ensure token is passed as a Bearer token
            'Content-Type': 'application/json'
        };
        const response = await apiClient.post('/getBookingRoomsByUser', body, { headers });
        return response;
    } catch (error) {
        throw error;
    }
}

export const getBookingRoomList = async () => {
    const token = JSON.parse(sessionStorage.getItem('userToken'));
    try {
        const headers = {
            'Authorization': `Bearer ${token}`,  // Ensure token is passed as a Bearer token
            'Content-Type': 'application/json'
        };
        const response = await apiClient.get('/getallbooking', { headers });
        return response;
    } catch (error) {
        throw error;
    }
}


export const bookingRooms = async (body) => {
    const token = JSON.parse(sessionStorage.getItem('userToken'));
    try {
        const headers = {
            'Authorization': `Bearer ${token}`,  // Ensure token is passed as a Bearer token
            'Content-Type': 'application/json'
        };
        const response = await apiClient.post('/booking-room', body, { headers });
        return response;
    } catch (error) {
        throw error;
    }
}

export const cancelBookingRooms = async (body) => {
    const token = JSON.parse(sessionStorage.getItem('userToken'));
    try {
        const headers = {
            'Authorization': `Bearer ${token}`,  // Ensure token is passed as a Bearer token
            'Content-Type': 'application/json'
        };
        const response = await apiClient.post('/cancelbooking', body, { headers });
        return response;
    } catch (error) {
        throw error;
    }
}

// ------------------------------------------------------------ Review and Contact (query) ------------------------------------------

// Create Review
export const addReviews = async (body) => {
    try {
        const response = await apiClient.post('/createReview', body);
        return response;
    } catch (error) {
        throw error;
    }
}

// Get Review list
export const getReviewsList = async (body) => {
    try {
        const response = await apiClient.get('/getReviewByHotel', body);
        return response;
    } catch (error) {
        throw error;
    }
}

// Delete Review
export const deleteReview = async (id) => {
    const token = JSON.parse(sessionStorage.getItem('userToken'));
    try {
        const headers = {
            'Authorization': `${token}`,  // Pass Bearer token in header
            'Content-Type': 'application/json'  // Specify JSON content type
        };
        const response = await apiClient.delete(`/deleteReview?reviewId=${id}`, { headers });
        return response;
    } catch (error) {
        throw error;
    }
}

// Add contact
export const addContact = async (body) => {
    try {
        const response = await apiClient.post('/createContact', body);
        return response;
    } catch (error) {
        throw error;
    }
}

// Get Contact list
export const getContactList = async () => {
    const token = JSON.parse(sessionStorage.getItem('userToken'));
    console.log(token);
    
    try {
        const headers = {
            'Authorization': `${token}`,  // Pass Bearer token in header
            'Content-Type': 'application/json'  // Specify JSON content type
        };
        const response = await apiClient.get('/getAllContact', { headers });
        return response;
    } catch (error) {
        throw error;
    }
}

// Delete Contact
export const deleteContact = async (id) => {
    const token = JSON.parse(sessionStorage.getItem('userToken'));
    try {
        const headers = {
            'Authorization': `${token}`,  // Pass Bearer token in header
            'Content-Type': 'application/json'  // Specify JSON content type
        };
        const response = await apiClient.delete(`/deleteContact?contactId=${id}`, { headers });
        return response;
    } catch (error) {
        throw error;
    }
}


// ---------------------- User Authentication ------------------------

// User Registeration
export const registerUser = async (body) => {
    try {
        const response = await apiClient.post('/registerUser', body);
        return response;
    } catch (error) {
        throw error;
    }
}

// User Login
export const loginUser = async (body) => {
    try {
        const response = await apiClient.post('/login', body);
        return response;
    } catch (error) {
        throw error;
    }
}

// Otp Verify
export const otpVerify = async (body) => {
    try {
        const response = await apiClient.post('/otp-verify', body);
        return response;
    } catch (error) {
        throw error;
    }
}

// Forget password
export const forgetPassword = async ({ email }) => {
    try {
        const response = await apiClient.post('/forget-password', { email });
        return response;
    } catch (error) {
        throw error;
    }
}

// Token verify
export const tokenVerify = async (body) => {
    try {
        const response = await apiClient.post('/tokenverify', body);
        return response;
    } catch (error) {
        throw error;
    }
}

// Reset password
export const resetPassword = async (body) => {
    try {
        const response = await apiClient.post('/reset-passsword', body);
        return response.data;
    } catch (error) {
        throw error;
    }
};

// Get All users
export const getAllUsers = async () => {
    try {
        const response = await apiClient.get('/getallusers');
        return response.data;
    } catch (error) {
        throw error;
    }
};

