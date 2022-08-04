# project01back

Add Databse.js file in config folder.

```js
{
import {Sequelize} from "sequelize";

const db = new Sequelize('project01','LOGIN','PASSWORD',{
    host: "localhost",
    dialect: "mysql"
});

export default db;
}