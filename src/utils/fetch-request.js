
const checkResponse = (res) => {
  if (res.ok) return res.json();
  return Promise.reject(`Ошибка: ${res.status}`);
  
};

/* универсальная функция запроса с проверкой ответа
 принимает два аргумента: url и объект опций, как и `fetch`*/
export async function  request(url, options) {
    return await fetch(url, options)
                 .then(res => checkResponse(res))
}