#!/usr/bin/env sh

set -e

# 构建
npm run build


cd dist

# echo 'www.example.com' > CNAME

git init
git add -A
git commit -m 'deploy'

git push -f git@github.com:caixiaoguang/gz-plant-monitor.git master:gh-pages

cd -