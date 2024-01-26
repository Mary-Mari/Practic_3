
import { IUser } from '../user/user';

export interface ITicket {
  id: string,
  description: string;
  name: string;
  price: string;
  tourOperator: string;
  location: {
    x: string;
    y: string;
  };
  hotel: string;
}

export interface IVipTicket extends ITicket {   //Эта часть означает, что интерфейс IVipTicket расширяет/наследует интерфейс ITicket
  vipNumber: number;
  vipStatus: string;
}

export type TicketType = ITicket | IVipTicket;

export interface IPostTicketData {
  ticket: TicketType;
  user: IUser;
}
