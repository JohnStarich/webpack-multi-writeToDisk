# Reproduce

It seems webpack-dev-server does not like `writeToDisk: true` in a multi-target scenario. Please follow these steps to reproduce the problem:

1. Clean `./dist` directory: `rm -rf ./dist`
2. Start dev server: `npm start`
3. Observe `./dist` directory is **not** created
4. Shut down dev server
5. Run build: `npm run build`
6. Observe `./dist` and its contents are generated correctly
