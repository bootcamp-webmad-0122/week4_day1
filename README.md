# week4_day1

> Node: intro, basic commands & server
>
> MongoDB & MongoDB Compass


## Main points: NPM commands

- `npm init`: comienza un proyecto de NPM creando `package.json`
- `npm install`: instala las dependencias del archivo `package.json` presente en el directorio  (shortcut `npm i`)
- `npm install`*`module_name`*: instala el módulo indicado en el proyecto de NPM (equivalente a `npm i`*`module_name`*), lo que supone:
  - Referenciarlo en el archivo `package.json` bajo la propiedad `dependencies`
  - Incluir sus archivos en el directorio `node_modules`
- `npm uninstall`*`module_name`*: desinstala el módulo indicado en el proyecto de NPM, lo que supone:
  - Eliminarlo del archivo `package.json` bajo la propiedad `dependencies`
  - Excluir sus archivos del directorio `node_modules`
  
> El archivo `.gitignore` permite a Git ignorar directorios y/o archivos.


## Main points: `mongoimport`

El comando `mongoimport` permite importar un archivo JSON o CSV a una colección de MongoDB con la siguiente sintaxis:

`mongoimport --db <dabataseName> --collection <collectionName> --file <fileName> [flags]`

- El flag `--jsonArray` identifica un JSON con un array de objetos
- El flag `--drop` vacía la colección previo a importar los nuevos datos
