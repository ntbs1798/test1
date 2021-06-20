import express,{Request, Response, NextFunction} from 'express';

// Contact Model Reference - db.clothing
import Contact from "../Models/contact";

// import Util Functions
import { UserDisplayName} from '../Util';

//(R)ead in CRUD
export function DisplayContactListPage(req: Request, res: Response, next: NextFunction): void
{
    Contact.find(function(err, contactCollection){
        if(err)
        {
            console.error(err);
            res.end(err);
        }
       
        //render the clothing-list content partial page
        res.render('index',{title: 'Bussiness Contact List', page: 'contact-list', contacts: contactCollection, displayName: UserDisplayName(req)} )
    });
}

// Display (E)dit page
export function DisplayEditPage(req: Request, res: Response, next: NextFunction): void
{
    let id = req.params.id;

    // pass the id to the db

    // db.clothing.find({"_id": id})

    Contact.findById(id, {}, {}, (err, contactItemToEdit) => 
    {
        if(err)
        {
            console.error(err);
            res.end(err);
        }

        // show the edit view
        res.render('index', { title: 'Edit', page: 'edit', item: contactItemToEdit, displayName: UserDisplayName(req)   });
    });
}

// Display (C)reate page
export function DisplayAddPage(req: Request, res: Response, next: NextFunction): void
{
    // show the edit view
    res.render('index', { title: 'Add', page: 'edit', item: '', displayName: UserDisplayName(req)  });
}

// Process Functions

// Process (E)dit page
export function ProcessEditPage(req: Request, res: Response, next: NextFunction): void
{
    let id = req.params.id;

    // instantiate a new Clothing Item
    let updatedContactItem = new Contact
    ({
      "_id": id,
      "FullName": req.body.FullName,
      "EmailAddress": req.body.EmailAddress,
      "ContactNumber": req.body.ContactNumber
    });
  
    // find the clothing item via db.contact.update({"_id":id}) and then update
    Contact.updateOne({_id: id}, updatedContactItem, {}, (err) =>{
      if(err)
      {
        console.error(err);
        res.end(err);
      }
  
      res.redirect('/contact-list');
    });
}

// Process (C)reate page
export function ProcessAddPage(req: Request, res: Response, next: NextFunction): void
{
  // instantiate a new Clothing
  let newContact = new Contact
  ({
    "FullName": req.body.FullName,
    "EmailAddress": req.body.EmailAddress,
    "ContactNumber": req.body.ContactNumber
  });
  // db.contact.insert({contact data is here...})
  Contact.create(newContact, (err) =>{
      if(err)
      {
          console.error(err);
          res.end(err);
      }

      res.redirect('/contact-list');
  });
}

// Process (D)elete page
export function ProcessDeletePage(req: Request, res: Response, next: NextFunction): void
{
    let id = req.params.id;

  // db.clothing.remove({"_id: id"})
  Contact.remove({_id: id}, (err) => {
    if(err)
    {
      console.error(err);
      res.end(err);
    }

    res.redirect('/contact-list');
  });
}