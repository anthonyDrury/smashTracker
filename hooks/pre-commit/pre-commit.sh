echo Building project
ng build --prod --output-path docs --base-href "https://anthonyDrury.github.io/smashTracker/"
cp ./docs/index.html ./docs/404.html
