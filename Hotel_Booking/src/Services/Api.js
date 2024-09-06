import axios from "axios";

const apiClient = axios.create({
    baseURL: 'http://localhost:3000/api',
    headers: {
        'Content-Type': 'application/json'
    }
});

export const getHotelList = async () => {
    try {
        const response = await apiClient.get('/getAllHotelList');
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


// User Registeration
export const bookingRooms = async (body) => {
    try {
        const response = await apiClient.post('/booking-room', body);
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

