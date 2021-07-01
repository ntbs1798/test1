"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProcessDeletePage = exports.ProcessAddPage = exports.ProcessEditPage = exports.DisplayAddPage = exports.DisplayEditPage = exports.DisplayContactListPage = void 0;
const contact1_1 = __importDefault(require("../Models/contact1"));
const Util_1 = require("../Util");
function DisplayContactListPage(req, res, next) {
    contact1_1.default.find(function (err, contactCollection) {
        if (err) {
            console.error(err);
            res.end(err);
        }
        res.render('index', { title: 'Bussiness Contact List', page: 'contact-list1', contacts: contactCollection, displayName: Util_1.UserDisplayName(req) });
    });
}
exports.DisplayContactListPage = DisplayContactListPage;
function DisplayEditPage(req, res, next) {
    let id = req.params.id;
    contact1_1.default.findById(id, {}, {}, (err, contactItemToEdit) => {
        if (err) {
            console.error(err);
            res.end(err);
        }
        res.render('index', { title: 'Edit', page: 'edit', item: contactItemToEdit, displayName: Util_1.UserDisplayName(req) });
    });
}
exports.DisplayEditPage = DisplayEditPage;
function DisplayAddPage(req, res, next) {
    res.render('index', { title: 'Add', page: 'edit', item: '', displayName: Util_1.UserDisplayName(req) });
}
exports.DisplayAddPage = DisplayAddPage;
function ProcessEditPage(req, res, next) {
    let id = req.params.id;
    let updatedContactItem = new contact1_1.default({
        "_id": id,
        "FullName": req.body.FullName,
        "EmailAddress": req.body.EmailAddress,
        "ContactNumber": req.body.ContactNumber
    });
    contact1_1.default.updateOne({ _id: id }, updatedContactItem, {}, (err) => {
        if (err) {
            console.error(err);
            res.end(err);
        }
        res.redirect('/contact-list1');
    });
}
exports.ProcessEditPage = ProcessEditPage;
function ProcessAddPage(req, res, next) {
    let newContact = new contact1_1.default({
        "FullName": req.body.FullName,
        "EmailAddress": req.body.EmailAddress,
        "ContactNumber": req.body.ContactNumber
    });
    contact1_1.default.create(newContact, (err) => {
        if (err) {
            console.error(err);
            res.end(err);
        }
        res.redirect('/contact-list1');
    });
}
exports.ProcessAddPage = ProcessAddPage;
function ProcessDeletePage(req, res, next) {
    let id = req.params.id;
    contact1_1.default.remove({ _id: id }, (err) => {
        if (err) {
            console.error(err);
            res.end(err);
        }
        res.redirect('/contact-list1');
    });
}
exports.ProcessDeletePage = ProcessDeletePage;
//# sourceMappingURL=contact1.js.map