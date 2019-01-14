 

## Development

Para ejecutar en modo development

```
$ npm run install:packages
$ npm run start
```

Navegación de la aplicación Cliente:
```
http://localhost:4200/
```

Server:
```bash
http://localhost:3000/api
http://localhost:3000/api/items
```

La instrucción `$ npm run start` ejecuta `concurrently --kill-others \"cd client && ng serve --disable-host-check --proxy-config proxy.conf.json\" \"cd server && nodemon ./bin/www\"`. 

Tener en cuenta la siguiente configuracion del archivo client/proxy.conf.json.

```json
{
  "/api": {
    "target": "http://localhost:3000",
    "secure": false
  }
}
```

## Build (dist)
Para ejecutar en modo producción.

```
$ npm run build
```