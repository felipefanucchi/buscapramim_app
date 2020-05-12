import axios from 'axios';

export const api = axios.create({
  baseURL: 'http://192.168.15.4:3333/' // Genymotion Simulator
});

axios.defaults.headers.common['Content-Type'] = 'application/json';

/*
* Endereços para cada emulador/simulador:
** Genymotion:              http://10.0.3.2:3333/
** Emulador Android Studio: http://10.0.2.2:3333/
** Simulador IOS:           http://localhost:3333/
*/