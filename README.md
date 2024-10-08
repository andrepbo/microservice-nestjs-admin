## Project setup
Clone the [main repository](https://github.com/andrepbo/microservice-nestjs-main.git) and follow the instructions presented in it's README file.

Copy the .env.template file to .env and update it with your specific configurations:

```bash
$ cp .env.template .env
```

Install necessary dependencies:

```bash
$ npm install
```

Ensure you have Docker installed on your machine and run the following command to start the MySQL service:

```bash
$ docker-compose up -d
```

## Compile and run the project

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```