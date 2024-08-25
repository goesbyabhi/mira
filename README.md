# Mira

# Setup searxng

```sh
docker build -t mira-searxng .
```

```sh
docker run -d -p 42069:8080 -v "./searxng:/etc/searxng" --name mira-searxng-container mira-searxng:latest
```

```sh
docker kill mira-searxng-container
```

# Todo

- figure out how to use the searxng api 😞
