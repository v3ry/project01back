import Users from "../models/NewsModel.js";

export const getNews = async(req, res) => {
    try {
        const users = await Users.findAll({
            attributes:['id','date','postedBy','message','type']
        });
        res.json(users);
    } catch (error) {
        console.log(error);
    }
}

export const addNews = async(req, res) => {
    const { date, postedBy, message, type } = req.body;
    try {
        await Users.create({
            date: date,
            postedBy: postedBy,
            message: message,
            type: type
        });
        res.json({msg: "Register Review Successful"});
    } catch (error) {
        res.status(404).json({msg:"Email  or name already in use"});
        console.log(error);
    }}

    export const updNews = async(req, res) => {
        const { date, postedBy, message, type } = req.body;
        try {
            await Users.update(
                {id: req.params.id,
                date: date,
                postedBy: postedBy,
                message: message,
                type: type},
                {where:{id: req.params.id}}
            );
            res.json({msg: "Register Successful"});
        } catch (error) {
            res.status(404).json({msg:"Email  or name already in use"});
            console.log(error);
        }}

    export const delNews = async(req, res) => {
        try {
            const users = await Users.destroy({
                where:{id: req.params.id}
            });
            res.json(users);
        } catch (error) {
            console.log(error);
        }
    }