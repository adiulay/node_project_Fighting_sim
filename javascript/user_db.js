const fs = require('fs');
const _ = require('lodash');

const path = './user_database.json';

try{
    if (fs.existsSync(path)){
        console.log('user_database.json is found');
    } else {
        throw 'File user_database.json is not found, creating new file...'
    }
} catch(err) {
    console.log(err);
    fs.writeFileSync('user_database.json', "{}");
}

var readUser = fs.readFileSync("user_database.json");
var userObject = JSON.parse(readUser);

var add_new_user = (first_name, last_name, email, password, password_repeat) => {

    if (email in userObject) {
        return 'Email has already been taken.'
    }

    if (password !== password_repeat) {
        return 'Password does not match'
    } else {
        userObject[email] = {
            First_Name: first_name,
            Last_Name: last_name,
            Email_Address: email,
            Password: password
        };
        var result_user_account = JSON.stringify(userObject, undefined, 2);
        fs.writeFileSync('user_database.json', result_user_account);

        return 'Your account is created!'
    }
};

var login_check = (email, password) => {
    // console.log(typeof userObject.Password);

    if (email in userObject) {
        if (userObject[`${email}`].Password === password) {
            return 'Success!'
        } else {
            return 'Password incorrect'
        }
    } else {
        return 'Email is not found'
    }
};

module.exports = {
    add_new_user: add_new_user,
    login_check: login_check
};