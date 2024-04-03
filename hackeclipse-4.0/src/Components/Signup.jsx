import React from 'react'
import './Signup.css'
const Signup = () => {
    function clearErrors() {
        errors = document.getElementsByClassName('formerror');
        for (let item of errors) {
            item.innerHTML = "";
        }


    }
    function seterror(id, error) {
        //sets error inside tag of id 
        element = document.getElementById(id);
        element.getElementsByClassName('formerror')[0].innerHTML = error;

    }

    function validateForm() {
        var returnval = true;
        clearErrors();

        //perform validation and if validation fails, set the value of returnval to false
        var name = document.forms['myForm']["fname"].value;
        if (name.length < 5) {
            seterror("name", "*Length of name is too short");
            returnval = false;
        }

        if (name.length == 0) {
            seterror("name", "*Length of name cannot be zero!");
            returnval = false;
        }

        var email = document.forms['myForm']["femail"].value;
        if (email.length > 15) {
            seterror("email", "*Email length is too long");
            returnval = false;
        }

        var phone = document.forms['myForm']["fphone"].value;
        if (phone.length != 10) {
            seterror("phone", "*Phone number should be of 10 digits!");
            returnval = false;
        }

        var password = document.forms['myForm']["fpass"].value;
        if (password.length < 6) {

            // Quiz: create a logic to allow only those passwords which contain atleast one letter, one number and one special character and one uppercase letter
            seterror("pass", "*Password should be atleast 6 characters long!");
            returnval = false;
        }

        var cpassword = document.forms['myForm']["fcpass"].value;
        if (cpassword != password) {
            seterror("cpass", "*Password and Confirm password should match!");
            returnval = false;
        }

        return returnval;
    }

    return (
        <div>
            <div>
                <form action="/signup" name="myForm" onsubmit="return validateForm()" method="post">
                    <div className="signup-container">
                        <div className="signup-box">
                            <h2><center>Sign Up</center></h2>
                            <div className="formdesign" id="name">
                                Name: <input type="text" name="name" required /><b><span className="formerror" /></b>
                            </div>

                            <div className="formdesign" id="email">
                                Email: <input type="email" name="email" required /><b><span className="formerror" /></b>
                            </div>


                            <div className="formdesign" id="pass">
                                Password: <input type="password" name="password" required /><b><span className="formerror" /></b>
                            </div>

                            <div className="formdesign" id="cpass">
                                Confirm Password: <input type="password" name="confirm_password" required /><b><span className="formerror" /></b>
                            </div>
                            <div className="input-field button">
                                <input type="submit" value="SignUp" className="submit-btn" />
                            </div>

                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Signup
