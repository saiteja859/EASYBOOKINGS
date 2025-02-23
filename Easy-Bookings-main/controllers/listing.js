const Listing = require("../models/listing.js");

module.exports.index = async (req, res) => {
    const allListing = await Listing.find({});
    res.render("listing/index.ejs", { allListing });
};

module.exports.renderNewForm = (req, res) => {
    res.render("listing/new.ejs");
};

module.exports.showListings = async (req, res) => {
    let { id } = req.params;
    const listing = await Listing.findById(id)
        .populate({
            path: "reviews",
            populate: {
                path: "author",
            },
        })
        .populate("owner");
    res.render("listing/show.ejs", { listing });
};

module.exports.createListing = async (req, res, next) => {
    // if(!req.body){
    //     throw new ExpressError(400,"Send valid data for listing");
    // }
    let url = req.file.path;
    let filename = req.file.filename;
    
    let { title, description, image, price, location, country } = req.body;
    let listing = new Listing({
        title: title,
        description: description,
        image: {
            url: url,
            filename: filename,
        },
        price: price,
        location: location,
        country: country,
        owner: req.user._id,
    });
    await listing.save();
    req.flash("success", "New listing created!");
    res.redirect("/listing");

    // let listing = req.body.listing;
    // const newListing = new Listing(listing);
    // newListing.save();
};

module.exports.renderEditForm = async (req, res) => {
    let { id } = req.params;
    let listing = await Listing.findById(id);
    let originalImgUrl = listing.image.url;
    originalImgUrl = originalImgUrl.replace("/upload","/upload/w_250");
    res.render("listing/edit.ejs", { listing,originalImgUrl });
};

module.exports.updateListing = async (req, res) => {
    let url = req.file.path;
    let filename = req.file.filename;
    let { id } = req.params;
    let { title, description, image, price, location, country } = req.body;
    await Listing.findByIdAndUpdate(id, {
        title: title,
        description: description,
        image: {
            url: url,
            filename: filename,
        },
        price: price,
        location: location,
        country: country,
    });
    req.flash("success", "Listing is updated!");
    res.redirect(`/listing/${id}`);
};

module.exports.deleteListing = async (req, res) => {
    let { id } = req.params;
    await Listing.findByIdAndDelete(id);
    req.flash("success", "Listing is deleted!");
    res.redirect("/listing");
};
