FROM node:20.11.0
WORKDIR /usr/src/app
COPY package*.json ./
ADD . .
RUN npm install
RUN npm run build
RUN rm -r ./src
RUN mv ./build ./src
RUN npm install --production
RUN npx prisma generate
EXPOSE 3000
CMD ["npm", "run", "start"]