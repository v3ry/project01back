import Users from "../models/ItemModel.js";

export const getItems = async(req, res) => {
    try {
        const users = await Users.findAll({
            attributes:['id','cat','title','img','txtPreview','txtIngr','txtRec','publication_date','createdBy']
        });
        res.json(users);
    } catch (error) {
        console.log(error);
    }
}
export const getOneItems = async(req, res) => {
    try {
        const users = await Users.findOne(
            {
                where:{id: req.params.id}
            },{
            attributes:['id','cat','title','img','txtPreview','txtIngr','txtRec','publication_date','createdBy']
        });
        res.json(users);
    } catch (error) {
        console.log(error);
    }
}

export const addItems = async(req, res) => {
    const { cat, title, img, txtPreview,txtIngr,txtRec,publication_date,createdBy } = req.body;
    try {
        await Users.create({
            cat: cat,
            title: title,
            img: img,
            txtPreview: txtPreview,
            txtIngr: txtIngr,
            txtRec: txtRec,
            publication_date: publication_date,
            createdBy: createdBy
        });
        res.json({msg: "Register Successful"});
    } catch (error) {
        res.status(404).json({msg:"Email  or name already in use"});
        console.log(error);
    }
}

export const delItems = async(req, res) => {
    try {
        const users = await Users.destroy({
            where:{id: req.params.id}
        });
        res.json(users);
    } catch (error) {
        console.log(error);
    }
}

export const updItems = async(req, res) => {
    const { cat, title, img, txtPreview,txtIngr,txtRec,publication_date,createdBy ,sendBy} = req.body;
    try {
        await Users.update(
            {cat: cat,
            title: title,
            img: img,
            txtPreview: txtPreview,
            txtIngr: txtIngr,
            txtRec: txtRec,
            publication_date: publication_date,
            createdBy: createdBy
        },
            {where:{id: req.params.id}}
        );
        res.json({msg: "Register Successful"});
    } catch (error) {
        res.status(404).json({msg:"Email  or name already in use"});
        console.log(error);
    }
    console.log(sendBy);
}