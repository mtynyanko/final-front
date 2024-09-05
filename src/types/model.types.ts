export interface User {
id: number;
login: string;
email: string;
avatar: string | null;
}

export interface Tag {
    id: number;
    name: string;
}

export interface Post {
    id: number;
    header: string;
    content: string;
    imageUrl: string;
    authorId: number;
    author: User;
    createdAt: Date;
    updatedAt: Date;
    tags: Tag[];
}
