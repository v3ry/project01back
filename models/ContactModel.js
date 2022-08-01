import { Sequelize } from "sequelize";
import db from "../config/Database.js";

const { DataTypes } = Sequelize;

const Contacte = db.define('contact',{
    name:{
        type: DataTypes.STRING
    },
    mail:{
        type: DataTypes.STRING
    },
    Subject:{
        type: DataTypes.STRING
    },
    Message:{
        type: DataTypes.STRING
    }
},{
    freezeTableName:true
});

export default Contacte;