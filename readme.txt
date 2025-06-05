1 - Crear en la raiz un archivo env.json con:
  {
    "API_ENDPOINT": "https://5938-2800-a4-c11a-800-11a-35cf-2d85-1297.ngrok-free.app/foods"
  }

  Cambiar ip por la que les de ngrok 

2 - correr npx json-server --watch data.json
3 - correr npx expo start --tunnel 