const {
    Contact
} = require('../models');

// module.exports.actionName = (res, req) => {}

module.exports.home = (req, res) => {
    Contact.findAll().then((contacts) => {
            return res.render('home', {
                title: 'My Contacts List',
                contact_list: contacts
            });
        })
        .catch((err) => {
            return console.log('Error in fetching contacts from db');
        });
};