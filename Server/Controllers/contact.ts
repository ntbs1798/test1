import express,{Request, Response, NextFunction} from 'express';

// Contact Model Reference - db.clothing
import Contact from "../Models/contact";

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
        res.render('index',{title: 'Contact List', page: 'contact-list', contacts: contactCollection})
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
        res.render('index', { title: 'Edit', page: 'edit', item: contactItemToEdit  });
    });
}