const Listing = require("../models/listing.js");
const Review = require("../models/review");

module.exports.createReview = async (req, res) => {
    let listing = await Listing.findById(req.params.id);
    let newReview = new Review(req.body.review);

    newReview.author = req.user._id;
    listing.reviews.push(newReview);

    await newReview.save();
    await listing.save();
    res.redirect(`/listing/${listing._id}`);
};

module.exports.deleteReview = async (req, res) => {
    let { id, revId } = req.params;
    console.log(id, revId);
    await Listing.findByIdAndUpdate(id, { $pull: { reviews: revId } });
    await Review.findByIdAndDelete(revId);
    res.redirect(`/listing/${id}`);
};
