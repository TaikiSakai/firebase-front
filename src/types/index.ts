
export type PageNation = {
    page: number;
    pages: number;
    size: number;
    total: number;
};

export type PageNationResponse<T> = PageNation & {
    items: T[];
};

export type User = {
    id: number;
    user_name: string;
    email: string;
    role: string;
};