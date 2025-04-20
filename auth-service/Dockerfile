# Base de Node
FROM node:20

# Directorio de trabajo dentro del contenedor
WORKDIR /app

# Copia package.json y package-lock.json
COPY package*.json ./

# Instala dependencias
RUN npm install

# Copia el resto del código
COPY . .

# Expone el puerto (opcional si querés exponer un HTTP)
EXPOSE 3000

# Comando para iniciar el microservicio
CMD ["npm", "run", "start:dev"]
