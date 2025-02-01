# Million Crypto - Prueba Técnica

Aplicación móvil desarrollada en React Native que permite visualizar información en tiempo real sobre criptomonedas, incluyendo precios, capitalización de mercado y variaciones porcentuales.

## Características Principales

- Listado de criptomonedas con paginación infinita
- Filtrado por variación de precio (positivo/negativo)
- Detalles completos de cada criptomoneda
- Soporte para modo claro/oscuro
- Diseño responsive y moderno
- Caché y manejo optimizado de datos

## Tecnologías Utilizadas

- React Native 0.77.0
- TypeScript
- React Query para gestión de estado y caché
- React Navigation para enrutamiento
- Zustand para estado global
- Axios para peticiones HTTP
- Jest para testing

Sigue estos pasos para instalar y ejecutar el proyecto:

### 1. Clonar el repositorio
```sh
 git clone <URL_DEL_REPOSITORIO>
 cd <NOMBRE_DEL_PROYECTO>
```

### 2. Instalar dependencias
```sh
yarn install
```

### 3. Configurar el entorno nativo
#### iOS
```sh
cd ios
pod install
cd ..
```

#### Android
No es necesario ejecutar un comando adicional, pero asegúrate de que el emulador o dispositivo esté correctamente configurado.

## Ejecución del Proyecto

### iOS
```sh
yarn ios
```

### Android
```sh
yarn android
```


