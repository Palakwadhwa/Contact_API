import { Contact } from "../Models/contact.js";


// GET CONTACTS
export const getContacts = async (req,res)=>{

    const contacts = await Contact.find({
        user_id:req.user.id
    });

    res.status(200).json(contacts);
};



// CREATE CONTACT
export const createContact = async (req,res)=>{

    const {name,email,phone} = req.body;

    if(!name || !email || !phone){
        return res.status(400).json({
            message:"All fields required"
        });
    }

    const contact = await Contact.create({

        name,
        email,
        phone,
        user_id:req.user.id

    });

    res.status(201).json(contact);
};



// UPDATE CONTACT
export const updateContact = async (req,res)=>{

    const contact = await Contact.findById(req.params.id);

    if(!contact){
        return res.status(404).json({
            message:"Contact not found"
        });
    }

    const updatedContact = await Contact.findByIdAndUpdate(

        req.params.id,
        req.body,
        {new:true}

    );

    res.status(200).json(updatedContact);
};



// DELETE CONTACT
export const deleteContact = async (req,res)=>{

    const contact = await Contact.findById(req.params.id);

    if(!contact){
        return res.status(404).json({
            message:"Contact not found"
        });
    }

    await Contact.deleteOne({_id:req.params.id});

    res.status(200).json({
        message:"Contact deleted"
    });
};