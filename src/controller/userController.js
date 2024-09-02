import authService from '../service/auth.js';

export const register = async (req, res) => {
    try{
        const {username, email, password} = req.body;
        const user = await authService.register(username, email, password);
        res.status(201).json({message: "User has registered!", user});
    }
    catch(err){
        res.status(400).json({err: err.message});
    }
}

export const login = async (req, res) => {
    try{
        const {email, password} = req.body;
        const {token} = await authService.login(email, password);
        res.status(200).json({message: "Welcome!", token});
    }
    catch(err){
        res.status(400).json({err: err.message});
    }
}