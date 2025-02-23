const User = require("../models/user.js");
const passport = require("passport");

module.exports.renderSignupForm = (req, res) => {
    res.render("user/signup.ejs");
};

module.exports.signup = async (req, res) => {
    try {
        let { email, password, username } = req.body;
        let newUser = new User({ username, email });
        let registeredUser = await User.register(newUser, password);
        req.login(registeredUser, (err) => {
            if (err) {
                return next(err);
            }
            req.flash("success", "Welcome to Wanderlust!");
            res.redirect("/listing");
        });
    } catch (e) {
        req.flash("error", e.message);
        res.redirect("/signup");
    }
};

module.exports.renderLoginForm = (req, res) => {
    res.render("user/login.ejs");
};

module.exports.login = async (req, res) => {
    req.flash("success", "Welcome to WanderLust!");
    let redirectUrl = res.locals.redirectUrl || "/listing";
    res.redirect(redirectUrl);
    //console.log(req.session);
};

module.exports.logout = (req, res, next) => {
    req.logout((err) => {
        if (err) {
            return next(err);
        }
        req.flash("error", "you are logged out");
        res.redirect("/listing");
    });
};
