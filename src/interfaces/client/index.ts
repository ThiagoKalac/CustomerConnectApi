export interface IClient {
     nickname: string;
     fullName: string;
     telephone: string;
     telephonesExtra: string[],
     email: string;
     emailsExtra: string[];
     password: string;
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
 
export interface IClientLogin {
     email: string
     password: string
}
 
