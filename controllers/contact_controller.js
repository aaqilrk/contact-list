const {
    Contact
} = require('../models');

module.exports.create = async (req, res) => {
    await Contact.create(req.body).catch((err) => {
        if (err) return console.log('Error in creating a contact');
    });
    return res.redirect('back');
}

module.exports.delete = async (req, res) => {
    let id = req.query.id;
    await Contact.destroy({
        where: {
            id: id
        }
    }).catch((err) => {
        if (err) console.log("Error in deleting contact");
    });
    return res.redirect('back');
}