## Dockerized API: Express + PostgreSQL

A simple server setup with a PostgreSQL database, both running in Docker containers.

### ⚙️ Local Setup

- Clone the repository:

```bash
git clone https://github.com/aviralj02/express-postgres-docker.git
cd express-postgres-docker
```

- Install dependencies:

```bash
npm install
```

- Build the Docker Image for the Server:

```bash
docker build -t my-node-app .
```

- Verify the Docker Image:

```bash
docker images
```

- Start both the server and PostgreSQL database containers using `docker-compose`:

```bash
docker-compose up
```

- Once the containers are up, send API requests to the server using the localhost and the port specified in the `docker-compose.yaml`
