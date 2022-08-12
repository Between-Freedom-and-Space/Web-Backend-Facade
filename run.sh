docker build -t web_backend_facade .
docker run -d -p 8585:8585 --name web_backend_facade web_backend_facade