import request from "../utils/request";

const validUsername = async (username) => {
    try {
        const response = await request.post("/pub/valid/username", {
            username
        })
        return response;
    } catch (error) {
        console.log(error)
    }
}

const validPassword = async (password) => {
    try {
        const response = await request.post("/pub/valid/password", {
            password
        })
        return response;
    } catch (error) {
        console.log(error)
    }
}

const validEmail = async (email) => {
    try {
        const response = await request.post("/pub/valid/email", {
            email
        })
        return response;
    } catch (error) {
        console.log(error)
    }
}

const ValidService = {
    validUsername,
    validPassword,
    validEmail
}

export default ValidService