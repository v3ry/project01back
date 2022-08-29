import Users from "../models/FavoritesModel.js";

export const getFavorites = async(req, res) => {
    try {
        const [results, metadata] = await Users.sequelize.query(
            "SELECT f.rec_id, name FROM favorites AS f INNER JOIN users AS u ON f.usr_id=u.id "
        );
        res.json(results);
    } catch (error) {
        console.log(error);
    }
}
export const getFavoritesFromUser = async(req, res) => {
    let login = req.params.login
    console.log(login);
    try {
        const [results, metadata] = await Users.sequelize.query(
            `SELECT f.rec_id, name FROM favorites AS f INNER JOIN users AS u ON f.usr_id=u.id WHERE name = "${login}"`
        );
        res.json(results);
    } catch (error) {
        console.log(error);
    }
}

export const addFavorite = async(req, res) => {
    const { rec_id, usr_id, comment } = req.body;
    try {
        await Users.create({
            usr_id: usr_id,
            rec_id: rec_id,
        });
        res.json({msg: "Register Favorite Successful"});
    } catch (error) {
        res.status(404).json({msg:"Email  or name already in use"});
        console.log(error);
}}

export const delFavorite = async(req, res) => {
    try {
        const users = await Users.destroy({
            where:{id: req.params.id}
        });
        res.json(users);
    } catch (error) {
        console.log(error);
    }
}



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