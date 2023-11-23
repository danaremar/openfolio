ng build --configuration=production --base-href="./"
git add dist -f && git commit -m "GitHub pages upload"
git subtree push --prefix dist origin gh-pages