import express from 'express';
import cors from 'cors';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
import { ContentModel, ImageModel, UserModel } from './db.js';
import { authMiddleware } from './middleware.js';
dotenv.config();
import multer from 'multer';
const app = express();
app.use(express.json());
app.use(cors());
//handle multer
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, './uploads');
    },
    filename: function (req, file, cb) {
        cb(null, `${Date.now()}-${file.originalname}`);
    }
});
const upload = multer({ storage: storage });
// Making signup route
app.post("/api/v1/signup", async (req, res) => {
    try {
        const username = req.body.username;
        const password = req.body.password;
        const name = req.body.name;
        const response = await UserModel.create({
            username: username,
            password: password,
            name: name
        });
        if (!response) {
            return res.status(411).json({
                message: "Creditiend went wrong"
            });
        }
        if (response) {
            return res.status(200).json({
                message: "SignUp Succesfully"
            });
        }
    }
    catch (error) {
        return res.status(500).json({
            error
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
            password: password
        });
        if (!response) {
            return res.status(411).json({
                message: "Email not Found,Register Please"
            });
        }
        // Making auth
        if (response) {
            const token = jwt.sign({ username, id: response._id }, process.env.JWT_SECRECT);
            return res.status(200).json({
                message: "Sign In Sucessfully",
                token: token
            });
        }
    }
    catch (error) {
        return res.status(500).json({
            message: "Something went wrong in signin",
            error
        });
    }
});
// Write a blog 
app.post("/v1/blog", authMiddleware, async (req, res) => {
    try {
        const title = req.body.title;
        const content = req.body.content;
        const response = await ContentModel.create({
            title: title,
            content: content,
            //@ts-ignore
            userId: req.userId
        });
        if (!response) {
            return res.status(411).json({
                message: "Creditinals is required"
            });
        }
        if (response) {
            return res.status(200).json({
                message: "Post was succesfully"
            });
        }
    }
    catch (error) {
        return res.status(500).json({
            message: "Something went wrong",
            error
        });
    }
});
app.get("/v1/post", async (req, res) => {
    const response = await ContentModel.find();
    if (!response) {
        return res.status(411).json({
            message: "Error While fetching data"
        });
    }
    if (response) {
        return res.status(200).json({
            message: response
        });
    }
});
// Making Route For Phot upload
app.post("/upload", upload.single('photo'), authMiddleware, async (req, res) => {
    try {
        //@ts-ignore
        const { path, filename } = req.file;
        //@ts-ignore
        const userId = req.userId;
        console.log(path);
        console.log(filename);
        //@ts-ignore
        const image = await ImageModel({ path, filename, userId });
        console.log(image);
        if (!image) {
            return res.status(411).json({
                message: "Photo not Uploaded"
            });
        }
        if (image) {
            await image.save();
            return res.status(200).json({
                message: "Photo Uploaded Sucessfully"
            });
        }
    }
    catch (error) {
        return res.status(500).json({
            error,
            message: "Something went wrong"
        });
    }
});
// Listening 
app.listen(process.env.PORT, () => {
    console.log(`listening on port ${process.env.PORT}`);
});
//# sourceMappingURL=index.js.map