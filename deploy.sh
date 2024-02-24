# abort on errors
set -e

# build
echo Linting..
yarn run lint
echo Building. this may take a minute...
yarn run build

# navigate into the build output directory
cd docs

# remover comment if you are deploying to a custom domain
 echo 'manuelmejia.io' > CNAME

# getting out of the build output directory
cd -

# deploy
git add -A
read -p "enter git commit message: "  message 
git commit -m ''"$message"''
git push -f https://github.com/manuelmejiaio/personal-website master

