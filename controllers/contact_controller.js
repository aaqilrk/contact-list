const Contact = require('../models/contact');

module.exports.create = (req, res) => {
    return Contact.create(req.body)
        .then(() => res.redirect('back'))
        .catch(err => console.log(err));
}

module.exports.delete = (req, res) => {
    return Contact.destroy({
            where: {
                id: req.query.id
            }
        })
        .then(() => res.redirect('back'))
        .catch(err => console.log(err));
}