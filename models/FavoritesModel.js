import { Sequelize } from "sequelize";
import db from "../config/Database.js";

const { DataTypes } = Sequelize;

const Favorite = db.define('favorites',{
    usr_id:{
        type: DataTypes.INTEGER
    },
    rec_id:{
        type: DataTypes.INTEGER
    }
},{
    freezeTableName:true
});

export default Favorite;