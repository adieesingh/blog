import express from "express";
import cors from "cors";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
import { ContentModel, UserModel } from "./db.js";
import { authMiddleware } from "./middleware.js";
import { v2 as cloudinary } from "cloudinary";
dotenv.config();
import multer from "multer";
import path from "path";
const app = express();
app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("uploads"));
cloudinary.config({
    cloud_name: process.env.CLOUDNIARY_CLOUD_NAME,
    api_key: process.env.CLOUDNIARY_API_KEY,
    api_secret: process.env.CLOUDNIARY_API_SECRET,
});
// Making signup route
app.post("/api/v1/signup", async (req, res) => {
    try {
        const username = req.body.username;
        const password = req.body.password;
        const name = req.body.name;
        const response = await UserModel.create({
            username: username,
            password: password,
            name: name,
        });
        if (!response) {
            return res.status(411).json({
                message: "Creditiend went wrong",
            });
        }
        if (response) {
            return res.status(200).json({
                message: "SignUp Succesfully",
            });
        }
    }
    catch (error) {
        return res.status(500).json({
            error,
        });
    }
});
//  making sigin Route
app.post("/api/v1/signin", async (req, res) => {
    try {
        const username = req.body.username;
        const password = req.body.password;
        const response = await UserModel.findOne({
            username: username,
            password: password,
        });
        if (!response) {
            return res.status(411).json({
                message: "Email not Found,Register Please",
            });
        }
        // Making auth
        if (response) {
            const token = jwt.sign({ username, id: response._id }, process.env.JWT_SECRECT);
            return res.status(200).json({
                message: "Sign In Sucessfully",
                token: token,
            });
        }
    }
    catch (error) {
        return res.status(500).json({
            message: "Something went wrong in signin",
            error,
        });
    }
});
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, "./uploads");
    },
    filename: function (req, file, cb) {
        cb(null, `${Date.now()}-${file.originalname}`);
    },
});
const upload = multer({ storage: storage });
// Write a blog
app.post("/v1/blog", upload.single("photo"), authMiddleware, async (req, res) => {
    try {
        const title = req.body.title;
        const content = req.body.content;
        const file = req.file?.path;
        const cloudinaryResponse = await cloudinary.uploader.upload(file, {
            folder: "Medium_Blog_Image",
        });
        const image = {
            //@ts-ignore
            fileName: req.file?.filename,
            public_id: cloudinaryResponse.public_id,
            imgUrl: cloudinaryResponse.secure_url,
        };
        const saveToDb = await ContentModel.create({
            title: title,
            content: content,
            //@ts-ignore
            image: image,
            //@ts-ignore
            userId: req.userId,
        });
        if (saveToDb) {
            return res.status(200).json({ message: "Succesfully uploaded" });
        }
    }
    catch (error) {
        console.log(error);
        return res.status(500).json({
            message: "Something went wrong",
        });
    }
});
app.get("/v1/post", async (req, res) => {
    const response = await ContentModel.find({});
    if (!response) {
        return res.status(411).json({
            message: "Error While fetching data",
        });
    }
    if (response) {
        return res.status(200).json({
            response,
        });
    }
});
// Listening
app.listen(process.env.PORT, () => {
    console.log(`listening on port ${process.env.PORT}`);
});
//# sourceMappingURL=index.js.map