docker rm newbeJekyll -f
start http://127.0.0.1:4000
docker run -v %~dp0:/usr/src/app -p "4000:4000" --name newbeJekyll starefossen/github-pages
