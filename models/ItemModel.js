import { Sequelize } from "sequelize";
import db from "../config/Database.js";

const { DataTypes } = Sequelize;

const Recipe = db.define('recipes',{
    cat:{
        type: DataTypes.INTEGER
    },
    title:{
        type: DataTypes.STRING
    },
    img:{
        type: DataTypes.STRING
    },
    txtPreview:{
        type: DataTypes.STRING
    },
    txtIngr:{
        type: DataTypes.STRING
    },
    txtRec:{
        type: DataTypes.STRING
    },
    publication_date:{
        type: DataTypes.DATE
    },
    createdBy:{
        type: DataTypes.STRING
    }
},{
    freezeTableName:true
});

export default Recipe;