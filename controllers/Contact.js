import Users from "../models/ContactModel.js";

export const getContact = async(req, res) => {
    try {
        const users = await Users.findAll({
            attributes:['id','name','mail','Subject','Message']
        });
        res.json(users);
    } catch (error) {
        console.log(error);
    }
}

export const delContact = async(req, res) => {
    try {
        const users = await Users.destroy({
            where:{id: req.params.id}
        });
        res.json(users);
    } catch (error) {
        console.log(error);
    }
}

export const addContact = async(req, res) => {
    const { name, mail, Subject, Message } = req.body;
    try {
        await Users.create({
            name: name,
            mail: mail,
            Subject: Subject,
            Message: Message
        });
        res.json({msg: "Register Successful"});
    } catch (error) {
        res.status(404).json({msg:"Email  or name already in use"});
        console.log(error);
    }

}

export const updContact = async(req, res) => {
    const { name, mail, Subject, Message } = req.body;
    try {
        await Users.update(
            {id: req.params.id,
            name: name,
            mail: mail,
            Subject: Subject,
            Message: Message},
            {where:{id: req.params.id}}
        );
        res.json({msg: "Register Successful"});
    } catch (error) {
        res.status(404).json({msg:"Email  or name already in use"});
        console.log(error);
    }}