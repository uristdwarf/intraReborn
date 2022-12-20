docker-compose -f docker-compose-dev.yml up --build -d
docker-compose -f docker-compose-dev.yml exec intra bash
docker-compose -f docker-compose-dev.yml down
