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

// ---------------------- User Authentication ------------------------

// User Registeration
export const registerUser = async (body) => {
    try {
        const response = await apiClient.post('/signup', body);
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

