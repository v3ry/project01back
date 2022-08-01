import jwt from "jsonwebtoken";

export const verifyTokenUser = (req, res, next) => {
    const authHeader = req.headers['authorization'];
    const recetteCreated = req.headers['sendby'];
    
    const token = authHeader && authHeader.split(' ')[1];
    if(token == null) return res.sendStatus(401);
    jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, decoded) => {
        // console.log("decoded "+ decoded + "  erre : " + err)
        console.dir(err)
        console.log("recetteCreated: " + recetteCreated + "    recetteCreated: " + decoded.name);
        console.log("decoded.power: " + decoded.power + "    recetteCreated: " + (recetteCreated !== decoded.name ? "true":"false"));
        if(decoded.power === 0){
        if(err || recetteCreated !== decoded.name ) return res.sendStatus(403);
        req.email = decoded.email;
        next();
        }else if(decoded.power === 1){
            if(err ) return res.sendStatus(403);
        req.email = decoded.email;
        next();}
    })
}