docker rm newbepro -f
docker run -v %~dp0/src:/usr/src/app -v %~dp0/docs:/_site -p "4000:4000" -d --name newbepro newbe36524/newbe-blog
ping 127.0.0.1 -n 3 -w 1000 > nul
start http://127.0.0.1:4000
docker logs -f newbepro
