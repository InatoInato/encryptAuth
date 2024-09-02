import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';
import userRepo from '../repositories/userRepo.js';

class AuthService{
    async register({username, email, password}){
        const hashed = await bcrypt.hash(password, 10);
        return await userRepo.createUser({username, email, password: hashed});
    }

    async login(email, password){
        const user = await userRepo.findUserByEmail(email);
        if(!user) throw new Error("User not found");

        const isValidPassword = await bcrypt.compare(password, user.password);
        if(!isValidPassword) throw new Error("Incorrect password");

        const token = jwt.sign({userId: user.id}, process.env.JWT_SECRET, {expiresIn: '1h'})
        return {token};
    }
}

export default new AuthService();