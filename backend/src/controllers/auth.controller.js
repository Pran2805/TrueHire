export const registerUser = async(req, res) =>{
    try {
        
    } catch (error) {
        console.warn(error.message)
        res.status(400).json({
            error: error.message,
            message: "Bad Request",
            success: false
        })
    }
}
export const loginUser = async(req, res) =>{
    try {
        
    } catch (error) {
        console.warn(error.message)
        res.status(400).json({
            error: error.message,
            message: "Bad Request",
            success: false
        })
    }
}
export const logoutUser = async(req, res) =>{
    try {
        
    } catch (error) {
        console.warn(error.message)
        res.status(400).json({
            error: error.message,
            message: "Bad Request",
            success: false
        })
    }
}