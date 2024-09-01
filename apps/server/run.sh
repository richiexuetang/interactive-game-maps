docker build -t nest-prisma-server .
docker run -d -t -p 5001:5001 nest-prisma-server