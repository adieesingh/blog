import jwt from 'jsonwebtoken';
export const authMiddleware = (req, res, next) => {
    try {
        const header = req.headers["authorization"];
        if (!header) {
            return res.status(411).json({
                message: "Token Not Found"
            });
        }
        const decode = jwt.verify(header, process.env.JWT_SECRECT || "adarsh1233uu8ur");
        if (decode) {
            //@ts-ignore
            req.userId = decode.id;
            next();
        }
        if (!decode) {
            return res.status(411).json({
                message: "Token has not decoded"
            });
        }
    }
    catch (error) {
        return res.status(500).json({
            message: "Something went wrong",
            error
        });
    }
};
//# sourceMappingURL=middleware.js.map