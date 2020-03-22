const Contact = require('../models/contact')
// const _ = require("lodash")


module.exports.list = (req, res) => {
    Contact.find({user : req.user._id})    //* Contact.find() 
        .then((contacts) => {
            res.json(contacts)
        })
        .catch((err) => {
            res.json(err)
        })
}

module.exports.create = (req, res) => {
    const { body } = req 
    const contact = new Contact(body)
    contact.user = req.user._id   //*
    contact.save()
        .then((contact) => {
            res.json(contact)
        })
        .catch((err) => {
            res.json(err)
        })
}

module.exports.show = (req, res) => {
    const id = req.params.id 
    Contact.findOne({_id:id, user: req.user._id})    //*   Contact.findById(id)  
        .then((contact) => {
            if(contact) { 
                res.json(contact)
            } else {
                res.json({})
            }
        })
        .catch((err) => {
            res.json(err)
        })
}

module.exports.update = (req, res) => {
    const id = req.params.id 
    const body = req.body 
    Contact.findOneAndUpdate({_id:id, user: req.user._id}, body, { new: true, runValidators: true })    //* Contact.findByIdAndUpdate(id, body, { new: true, runValidators: true })
        .then((contact) => {
            if(contact) {
                res.json(contact)
            } else {
                res.json({})
            }
        })
        .catch((err) => {
            res.json(err)
        })
}

module.exports.destroy = (req, res) => {
    const id = req.params.id 
    Contact.findOneAndDelete({_id:id, user: req.user._id})  //* Contact.findByIdAndDelete(id)
        .then((contact) => {
            if(contact) {
                res.json(contact)
            } else {
                res.json({})
            }
        })
        .catch((err) => {
            res.json(err)
        })
}