import mongoose from 'mongoose';
export declare const UserModel: mongoose.Model<{
    username: string;
    password: string;
    name?: string | null;
}, {}, {}, {
    id: string;
}, mongoose.Document<unknown, {}, {
    username: string;
    password: string;
    name?: string | null;
}, {
    id: string;
}, mongoose.DefaultSchemaOptions> & Omit<{
    username: string;
    password: string;
    name?: string | null;
} & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}, "id"> & {
    id: string;
}, mongoose.Schema<any, mongoose.Model<any, any, any, any, any, any, any>, {}, {}, {}, {}, mongoose.DefaultSchemaOptions, {
    username: string;
    password: string;
    name?: string | null;
}, mongoose.Document<unknown, {}, {
    username: string;
    password: string;
    name?: string | null;
}, {
    id: string;
}, mongoose.ResolveSchemaOptions<mongoose.DefaultSchemaOptions>> & Omit<{
    username: string;
    password: string;
    name?: string | null;
} & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}, "id"> & {
    id: string;
}, {
    [path: string]: mongoose.SchemaDefinitionProperty<undefined, any, any>;
} | {
    [x: string]: mongoose.SchemaDefinitionProperty<any, any, mongoose.Document<unknown, {}, {
        username: string;
        password: string;
        name?: string | null;
    }, {
        id: string;
    }, mongoose.ResolveSchemaOptions<mongoose.DefaultSchemaOptions>> & Omit<{
        username: string;
        password: string;
        name?: string | null;
    } & {
        _id: mongoose.Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
}, {
    username: string;
    password: string;
    name?: string | null;
} & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}>, {
    username: string;
    password: string;
    name?: string | null;
} & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}>;
export declare const ContentModel: mongoose.Model<{
    title: string;
    content: string;
    userId: mongoose.Types.ObjectId;
}, {}, {}, {
    id: string;
}, mongoose.Document<unknown, {}, {
    title: string;
    content: string;
    userId: mongoose.Types.ObjectId;
}, {
    id: string;
}, mongoose.DefaultSchemaOptions> & Omit<{
    title: string;
    content: string;
    userId: mongoose.Types.ObjectId;
} & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}, "id"> & {
    id: string;
}, mongoose.Schema<any, mongoose.Model<any, any, any, any, any, any, any>, {}, {}, {}, {}, mongoose.DefaultSchemaOptions, {
    title: string;
    content: string;
    userId: mongoose.Types.ObjectId;
}, mongoose.Document<unknown, {}, {
    title: string;
    content: string;
    userId: mongoose.Types.ObjectId;
}, {
    id: string;
}, mongoose.ResolveSchemaOptions<mongoose.DefaultSchemaOptions>> & Omit<{
    title: string;
    content: string;
    userId: mongoose.Types.ObjectId;
} & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}, "id"> & {
    id: string;
}, {
    [path: string]: mongoose.SchemaDefinitionProperty<undefined, any, any>;
} | {
    [x: string]: mongoose.SchemaDefinitionProperty<any, any, mongoose.Document<unknown, {}, {
        title: string;
        content: string;
        userId: mongoose.Types.ObjectId;
    }, {
        id: string;
    }, mongoose.ResolveSchemaOptions<mongoose.DefaultSchemaOptions>> & Omit<{
        title: string;
        content: string;
        userId: mongoose.Types.ObjectId;
    } & {
        _id: mongoose.Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
}, {
    title: string;
    content: string;
    userId: mongoose.Types.ObjectId;
} & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}>, {
    title: string;
    content: string;
    userId: mongoose.Types.ObjectId;
} & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}>;
//# sourceMappingURL=db.d.ts.map