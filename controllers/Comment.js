import Users from "../models/CommentModel.js";
import { Sequelize } from "sequelize";
import db from "../config/Database.js";

const { DataTypes } = Sequelize;
// export const getComment = async(req, res) => {
//     try {
//         const users = await Users.findAll({
//             attributes:['id','rec_id','usr_id','comment']
//         });
//         res.json(users);
//     } catch (error) {
//         console.log(error);
//     }
// }
import {QueryTypes} from "sequelize"
// const { QueryTypes } = require('sequelize');
export const getComment = async(req, res) => {
    try {
        const [results, metadata] = await Users.sequelize.query(
            "SELECT c.id,c.rec_id, c.comment, name FROM comment AS c INNER JOIN users AS u ON c.usr_id=u.id"
        );
        res.json(results);
    } catch (error) {
        console.log(error);
    }
}

export const addComment = async(req, res) => {
    const { rec_id, usr_id, comment } = req.body;
    try {
        await Users.create({
            rec_id: rec_id,
            usr_id: usr_id,
            comment: comment,
        });
        res.json({msg: "Register Comment Successful"});
    } catch (error) {
        res.status(404).json({msg:"Email  or name already in use"});
        console.log(error);
}}

export const updComment = async(req, res) => {
    const { rec_id, usr_id, comment } = req.body;
    try {
        await Users.update(
            {id: req.params.id,
            rec_id: rec_id,
            usr_id: usr_id,
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