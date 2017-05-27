docker rm newbeJekyll -f
docker run -v %~dp0:/usr/src/app -p "4000:4000" --name newbeJekyll starefossen/github-pages 