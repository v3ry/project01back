import Users from "../models/CommentModel.js";

export const getComment = async(req, res) => {
    try {
        const users = await Users.findAll({
            attributes:['id','rec_id','user_id','comment']
        });
        res.json(users);
    } catch (error) {
        console.log(error);
    }
}

export const addComment = async(req, res) => {
    const { rec_id, user_id, comment } = req.body;
    try {
        await Users.create({
            rec_id: rec_id,
            user_id: user_id,
            comment: comment,
        });
        res.json({msg: "Register Review Successful"});
    } catch (error) {
        res.status(404).json({msg:"Email  or name already in use"});
        console.log(error);
}}

export const updComment = async(req, res) => {
    const { rec_id, user_id, comment } = req.body;
    try {
        await Users.update(
            {id: req.params.id,
            rec_id: rec_id,
            user_id: user_id,
            comment: comment,},
            {where:{id: req.params.id}}
        );
        res.json({msg: "Register Successful"});
    } catch (error) {
        res.status(404).json({msg:"Email  or name already in use"});
        console.log(error);
}}

export const delComment = async(req, res) => {
    try {
        const users = await Users.destroy({
            where:{id: req.params.id}
        });
        res.json(users);
    } catch (error) {
        console.log(error);
    }
}