Stack: React, Typescript, Vite

# Why?

Idea behind this is single build to multiple environments. This way we are more consistent with our dependencies as we are making sure that same code from node_modules is running in different environments. If we build app for `staging` and then after some time try to build for `production` we usually skip automatic testing as it was done before building `staging` app. However, there might be a case that dependency package been updated/patched and now behaviour of it might be different. That is why we need single build, but it comes with problem that we can't set `process.env` per environment as we have only single docker image. To solve this issue we are testing this runtime config approach. Which allows us with kubernetes help mount different `config.json` per environment and have those values inside app.

#### Where to save config file?

In most cases after build is completed all files needed to run application is stored in `dist` folder. This means that somehow our config file must move from any place to `dist` folder. Easiest way to do it is store file in `public` folder. Because all content inside `public` folder is automatically moved to `dist` folder.

#### Why config can't be saved in `src` folder?

Values will be hardcoded. Even if file will be copied name will contain hash value which means that it will be hard to mount config as volume.

#### Why you can't import config from public folder?

Imported values from json file during build process will be hardcoded.

#### How to run?

```
#Install node_modules
npm i

#Run in dev environemnt
npm run dev
```

#### How to test?

Run application using `npm run dev` or `npm run build & npm run preview`.
Open provided url for preview, and you should see table of values from `/public/config.json` file.

#### Why context?

Context allow us to load config single time and then provide values to any component.

#### Why hook?

This is one of common approaches how to encapsulate logic and keep modular.

#### Why validation?

We need to make sure that all required config values are provided so application won't crash. Most likely the best way to ensure that config values are valid is to validate those values as soon as possible.