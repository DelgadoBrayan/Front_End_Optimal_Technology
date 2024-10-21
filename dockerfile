# Trae la imagen base de Node.js
FROM node:20

# Establece el directorio de trabajo dentro del contenedor
WORKDIR /app

# Copia el archivo package.json y package-lock.json
COPY package*.json ./

# Instalacion las dependencias
RUN npm install

# Copia el resto del código de la app
COPY . .

# Construye la aplicación para producción
RUN npm run build

# Configuracion del puerto
EXPOSE 5173

# Comando para servir la aplicación
CMD ["npm", "run", "preview"]

