# Paso 1: Usa una imagen base con Node.js
FROM node:latest as build

# Paso 2: Establece el directorio de trabajo
WORKDIR /app

# Paso 3: Establece el entorno de ejecución
ARG ENVIRONMENT=staging

# Paso 4: Copia los archivos de tu proyecto
COPY package.json package-lock.json ./

# Paso 5: Instala las dependencias
RUN npm install

# Paso 6: Copia el resto de tus archivos de proyecto
COPY . ./

# Paso 7: Construye tu aplicación React
RUN npm run build:${ENVIRONMENT}

# Paso 8: Usa una imagen ligera para el servidor
FROM nginx:alpine

# Paso 9: Copia los archivos estáticos generados
COPY --from=build /app/build /usr/share/nginx/html

# Paso 10: Expone el puerto 80
EXPOSE 80

# Paso 11: Inicia el servidor de Nginx
CMD ["nginx", "-g", "daemon off;"]

