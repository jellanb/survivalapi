"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserRepository = void 0;
const TB_Users_1 = require("../../entities/shard/TB_Users");
function UserRepository() {
    return {
        findUserByName: async (name) => {
            try {
                const result = await TB_Users_1.Users.findAll({
                    attributes: ['StrUserId', 'JID'],
                    where: { strUserId: name }
                });
                return result[0];
            }
            catch (e) {
                console.log(e);
            }
        },
        findUserByEmail: async (email) => {
            try {
                const result = await TB_Users_1.Users.findAll({
                    attributes: ['Email'],
                    where: { email: email }
                });
                return result[0];
            }
            catch (e) {
                console.log(e);
            }
        },
        findUserByUsernamePassword: async (username, password) => {
            const result = await TB_Users_1.Users.findAll({
                attributes: ['StrUserID', 'JID', 'Email', 'password'],
                where: { strUserId: username, password: password }
            });
            return result[0];
        },
        createUser: async (username, email, pass) => {
            try {
                const newUserResult = await TB_Users_1.Users.create({
                    strUserId: username,
                    status: 2,
                    password: pass,
                    name: username,
                    email: email,
                    secPrimary: 3,
                    secContent: 3,
                    accPlayTime: 0,
                    latestUpdateTimeToPlayTime: 0,
                    playTime: 0
                });
                return newUserResult;
            }
            catch (e) {
                console.log(e);
            }
        },
        updateUserById: async (id, password, email) => {
            try {
                const updateSilk = await TB_Users_1.Users.update({
                    password: password,
                    email: email
                }, {
                    where: { JID: id }
                });
                console.log(`User: ${id} update successfully!`);
                return updateSilk;
            }
            catch (error) {
                console.log(error);
            }
        }
    };
}
exports.UserRepository = UserRepository;
exports.default = UserRepository();
