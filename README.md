## Using Lerna to manage SPFx projects with library components

## How to run the sample

1. install lerna
2. lerna init
3. update lerna config - add spfx-library/** etc. to support deep structures
4. scaffold lib component and web part - utils and org-app
5. lerna bootstrap - install deps
6. add dependency "spfx-utils" to org-app, update code
7. run lerna build - runs npm run build in each repo
8. dev flow - in lib project add npm command - "serve": "gulp serve --nobrowser" and chagne port to 4322 in serve.json; in app project add npm command "serve": "gulp serve"; run lerna run --parallel serve 

---  
Blog post - [Using Lerna to manage SPFx projects with library components](https://spblog.net/post/2019/06/24/using-lerna-to-manage-spfx-projects-with-library-components)
