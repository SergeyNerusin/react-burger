import { TOrder } from "./type";


type TOptionRequest = {} | {
   method: 'GET' | 'POST' | 'PATCH',
   headers: {
      [key:string]: string
   },
   body?: string
}

type Tres = {
  success: boolean;
  data: any;
  accessToken: string;
  refreshToken: string;
  user: {
    name: string;
    email: string;
  };
  message: string;
  orders: TOrder[]; 
  order: {
    number: number;
  };
  
}

const checkResponse = (res:Response):Promise<Tres> => {
  if (res.ok) return res.json();
  return Promise.reject(`Ошибка: ${res.status}`);
  
};

/* универсальная функция запроса с проверкой ответа
 принимает два аргумента: url и объект опций, как и `fetch`*/
export async function  request(url:string, options:TOptionRequest) {
    return await fetch(url, options)
                 .then(res => checkResponse(res))
}