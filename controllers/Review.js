import Users from "../models/ReviewModel.js";

export const getReview = async(req, res) => {
    try {
        const users = await Users.findAll({
            attributes:['id','recId','userId','review','reviewType']
        });
        res.json(users);
    } catch (error) {
        console.log(error);
    }
}

export const addReview= async(req, res) => {
    const { recId, userId, review, reviewType } = req.body;
    try {
        await Users.create({
            recId: recId,
            userId: userId,
            review: review,
            reviewType: reviewType
        });
        res.json({msg: "Register Review Successful"});
    } catch (error) {
        res.status(404).json({msg:"Email  or name already in use"});
        console.log(error);
    }}

    export const updReview = async(req, res) => {
        const { recId, userId, review, reviewType } = req.body;
        try {
            await Users.update(
                {id: req.params.id,
                recId: recId,
                userId: userId,
                review: review,
                reviewType: reviewType},
                {where:{id: req.params.id}}
            );
            res.json({msg: "Register Successful"});
        } catch (error) {
            res.status(404).json({msg:"Email  or name already in use"});
            console.log(error);
        }}