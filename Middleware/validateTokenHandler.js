import jwt from "jsonwebtoken";

export const validateToken = (req,res,next)=>{

    let token;

    const authHeader = req.headers.authorization || req.headers.Authorization;

    if(authHeader && authHeader.startsWith("Bearer ")){

        token = authHeader.split(" ")[1];

        jwt.verify(token, process.env.JWT_SECRET, (err,decoded)=>{

            if(err){
                return res.status(401).json({
                    message:"User not authorized"
                });
            }

            req.user = decoded.user;
            next();
        });

    } else {

        return res.status(401).json({
            message:"Token missing"
        });

    }

};