import jwt from 'jsonwebtoken';
export const authMiddleware = (req, res, next) => {
    try {
        const header = req.headers["authorization"];
        if (!header) {
            return res.status(411).json({
                message: "Token Not Found"
            });
        }
        const authHeader = header.startsWith("Bearer") ? header.substring(7) : header;
        const decode = jwt.verify(authHeader, process.env.JWT_SECRECT);
        if (decode) {
            //@ts-ignore
            req.userId = decode.id;
            //@ts-ignore
            req.userName = decode.name;
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