export interface IContact {
     id: string
     nickname: string;
     fullName: string;
     telephone: string;
     telephonesExtra?: string[],
     email: string;
     emailsExtra?: string[];
     createdAt: Date;
     client: string;
}

export interface IContactRequest {
     nickname: string;
     fullName: string;
     telephone: string;
     telephonesExtra?: string[],
     email: string;
     emailsExtra?: string[];
}

export interface IContactUpdate {
     nickname?: string;
     fullName?: string;
     telephone?: string;
     telephonesExtra?: string[],
     email?: string;
     emailsExtra?: string[];
     password?: string;
}
 

