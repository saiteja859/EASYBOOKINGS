const Listing = require("./models/listing");
const Review = require("./models/review");
const ExpressError = require("./utils/ExpressError.js");
const { listingSchema } = require("./Schema.js");
const { reviewSchema } = require("./Schema.js");

module.exports.isLoggedIn = (req,res,next) => {
    if (!req.isAuthenticated()) {
        req.session.redirectUrl = req.originalUrl;
        req.flash("error", "You must me logged in");
        return res.redirect("/login");
    }
    next();
};

module.exports.saveRedirectUrl = (req,res,next)=>{
    if(req.session.redirectUrl){
        res.locals.redirectUrl = req.session.redirectUrl;
    }
    next();
}

module.exports.isOwner = async(req,res,next)=>{
    let {id} = req.params;
    let listing = await Listing.findById(id);
    if(!listing.owner.equals(res.locals.currUser._id)){
        req.flash("error","You are not the owner of this listing");
        return res.redirect(`/listing/${id}`);
    }
    next();
}

module.exports.isReviewAuthor = async(req,res,next)=>{
    let {id,revId} = req.params;
    let review = await Review.findById(revId);
    console.log(review);
    if(!review.author.equals(res.locals.currUser._id)){
        req.flash("error","You are not the author of this review");
        return res.redirect(`/listing/${id}`);
    }
    next();
}


module.exports.validateListing = (req, res, next) => {
    let { error } = listingSchema.validate(req.body);

    if (error) {
        console.log(error);
        throw new ExpressError(400, error);
    } else {
        next();
    }
};

module.exports.validateReview = (req, res, next) => {
    let { error } = reviewSchema.validate(req.body);

    if (error) {
        console.log(error);
        throw new ExpressError(400, error);
    } else {
        next();
    }
};
