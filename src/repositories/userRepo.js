import User from '../model/user.js';

class UserRepository{
    async createUser(userData){
        return await User.create(userData);
    }

    async findUserByEmail(email){
        return await User.findOne({
            where: {
                email: email
            }
        });
    }

    async findUserById(id){
        return await User.findByPk(id);
    }
}

export default new UserRepository();