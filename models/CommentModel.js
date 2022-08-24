import { Sequelize } from "sequelize";
import db from "../config/Database.js";

const { DataTypes } = Sequelize;

const Comment = db.define('comment',{
    rec_id:{
        type: DataTypes.INTEGER
    },
    usr_id:{
        type: DataTypes.INTEGER
    },
    comment:{
        type: DataTypes.STRING
    }
},{
    freezeTableName:true
});

export default Comment;