import {body, validationResult} from "express-validator";

function registerValidation() {
    return [
        body('firstname', "First Name is Required").notEmpty().isLength({ max: 30 }),
        body('lastname', "Last Name is Required").notEmpty().isLength({max: 30}),
        body('email', "Email is Required").isEmail(),
        body('password', "password should be minimum 8 characters, atleast 1 uppercase, 1 lowercase, 1 number, 1 special character").isStrongPassword(),
        body("password2").custom(
            (value, {req}) => {
                if (value != req.body.password) {
                    throw new Error("Password & Confirm Password do not match");
                } else {
                    return true;
                }
            }
        ),
    ]
}

function loginValidation() {
    return[
        body('email', "Email is Required").isEmail(),
        body('password', "Password is Required").notEmpty()
    ]
}

function errorMiddleware(req, res, next) {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    return next();
}

export { loginValidation, registerValidation, errorMiddleware }