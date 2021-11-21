const Contact = require('../models/contact');

module.exports.home = (req, res) => {
    return Contact.findAll()
        .then((contacts) => {
            return res.render('home', {
                title: 'My Contacts List',
                contact_list: contacts
            });
        })
        .catch(err => console.log(err));
};