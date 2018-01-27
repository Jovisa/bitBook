import React from "react";

export default class ValidationService {

    validateEverything(data) {
        if (data) {
            if (!this.validateName(data.username)) {
                return;
            }
            if (!this.validateSurname(data.name)) {
                return;
            }
            if (!this.validateEmail(data.email)) {
                return;
            }
            if (!this.validatePassword(data.password)) {
                return;
            }
            if (!this.validateConfirmPassword(data.password, data.confirmedPassword)) {
                return;
            }

            return true;
        }
    }

    validateName(name) {
        if (!name) {
            alert("Please enter your name");
            return false;
        } else {
            return true;
        }
    }

    validateSurname(name) {
        if (!name) {
            alert("Please enter your user name");
            return false;
        } else {
            return true;
        }
    }

    validateEmail(email) {
        if (!email) {
            alert("Please enter your email");
            return false;
        } else {
            var re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            return re.test(email);
        }
    }

    validatePassword(password) {
        if (password.length <= 4) {
            alert("Password should be more then 6 characters.");
            return false;
        } else {
            return true;
        }
    }

    validateConfirmPassword(password, confirmedPassword) {
        if (password !== confirmedPassword) {
            alert("Password didn't match!");
            return false;
        } else {
            return true;
        }
    }
}