import jwt from "jsonwebtoken";

export const verifyToken = (req, res, next) => {
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1];
    if(token == null) return res.sendStatus(401);
    jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, decoded) => {
        // console.log("decoded "+ decoded + "  erre : " + err)
        console.dir(decoded)
        if(err||decoded.power===0) return res.sendStatus(403);
        req.email = decoded.email;
        next();
    })
}