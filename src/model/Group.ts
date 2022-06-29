
export interface Group {
    id: number;
    groupName: string;
    numberOfMembers: number;
    members: string[];
    likedPlaces: Place[]
}

export interface Place {
    id: string;
    name: string;
    membersThatLiked: string[];
}