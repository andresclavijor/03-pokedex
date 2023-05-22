<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>

## Ejecutar en desarrollo

1. Clonar el repositorio
2. Ejecutar

```
npm install
```

3. Tener Nest CLI instalado

```
npm i -g @nestjs/cli
```

4. levantar la base de datos

```
docker-compose up -d
```

5. Clonar el archivo `.env.template` y renombrar la copia a `.env`.

6. llenar las variables de entorno definidas `.env`

7. ejecutar la aplicacion en dev :

```
npm run start:dev
```

8. Reconstruir la base de datos con la semilla

```
http://localhost:3000/api/v2/seed
```

### stack usado

- MongoDb
- Nest

### Production Build

1. Crear el archivo `.env.prod`
2. llenar las variables de entorno de prod
3. crear la nueva imagen

```
docker-compose -f docker-compose.prod.yaml --env-file .env.prod up --build
```
### codigo para compilar imagen con cache
docker-compose -f docker-compose.prod.yaml --env-file .env.prod up -d

