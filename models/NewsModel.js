import { Sequelize } from "sequelize";
import db from "../config/Database.js";

const { DataTypes } = Sequelize;

const News = db.define('news',{
    date:{
        type: DataTypes.TEXT
    },
    postedBy:{
        type: DataTypes.TEXT
    },
    message:{
        type: DataTypes.TEXT
    },
    type:{
        type: DataTypes.INTEGER
    }
},{
    freezeTableName:true
});

export default News;