

export interface PostProps {
    id: number;
    header: string;
    content: string;
    imageURL: string;
    authorId: number;
    createdAt: Date;
    updatedAt: Date;
}

export interface HeaderProps {
    title: string;
}

export interface PostBoxProps {
    title: string;
    content: string;
    imageURL: string;
}