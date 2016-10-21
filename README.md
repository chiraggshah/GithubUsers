- git clone <repo-url>
- cd GithubUsers
- npm install
- npm start


If you get the following error when running `npm start`

> Module build failed: Error: Cannot find module 'babel-plugin-transform-es2015-unicode-regex'

Do the following:

- npm install -g npm@latest
- rm -rf node_modules
- npm install
