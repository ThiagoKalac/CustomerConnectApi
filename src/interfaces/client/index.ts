export interface IClient {
     id: string
     nickname: string;
     fullName: string;
     telephone: string;
     telephonesExtra: string[],
     email: string;
     emailsExtra: string[];
     createdAt: Date;
     contact?: string[];
}

export interface IClientRequest {
     nickname: string;
     fullName: string;
     telephone: string;
     telephonesExtra?: string[],
     email: string;
     emailsExtra?: string[];
     password: string;
}

export interface IClientUpdate {
     nickname?: string;
     fullName?: string;
     telephone?: string;
     telephonesExtra?: string[],
     email?: string;
     emailsExtra?: string[];
     password?: string;
}
 

