# Paso 1: Usa una imagen base con Node.js
FROM node:latest as build

# Paso 2: Establece el directorio de trabajo
WORKDIR /app

# Paso 3: Copia los archivos de tu proyecto
COPY package.json package-lock.json ./

# Paso 4: Instala las dependencias
RUN npm install

# Paso 5: Copia el resto de tus archivos de proyecto
COPY . ./

# Paso 6: Construye tu aplicación React
RUN npm run build

# Paso 7: Usa una imagen ligera para el servidor
FROM nginx:alpine

# Paso 8: Copia los archivos estáticos generados
COPY --from=build /app/build /usr/share/nginx/html

# Paso 9: Expone el puerto 80
EXPOSE 80

# Paso 10: Inicia el servidor de Nginx
CMD ["nginx", "-g", "daemon off;"]
