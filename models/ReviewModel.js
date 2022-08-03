import { Sequelize } from "sequelize";
import db from "../config/Database.js";

const { DataTypes } = Sequelize;

const Review = db.define('review',{
    recId:{
        type: DataTypes.INTEGER
    },
    userId:{
        type: DataTypes.INTEGER
    },
    review:{
        type: DataTypes.DECIMAL
    },
    reviewType:{
        type: DataTypes.TEXT
    }
},{
    freezeTableName:true
});

export default Review;