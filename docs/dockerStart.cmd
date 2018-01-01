docker rm newbeJekyll -f
docker run -v %~dp0:/usr/src/app -v %~dp0/docs:/_site -p "4000:4000" -d --name newbeJekyll starefossen/github-pages
ping 127.0.0.1 -n 3 -w 1000 > nul
start http://127.0.0.1:4000
