1 - Crearorrer "npx json-server --watch data.json" (tienen que estar en /data/)
2 - Correr "npx ngrok http 3000" (necesitan instalar ngrok, pueden hacerlo con "npm i -g ngrok")
3 - Crear en la raiz del proyecto un archivo llamado env.json con:
    {
      "API_ENDPOINT": "https://5938-2800-a4-c11a-800-11a-35cf-2d85-1297.ngrok-free.app/foods"
    }
4 - correr "npx expo start --tunnel"

Nota: cada vez que corren "npx ngrok http 3000" se crea una nueva url, por lo que deben repetir el paso 3 cada vez que lo haga