const path = require('path');

exports.onCreatePage = async ({page, actions}) => {
    const {createPage} = actions
    console.log("Page", page.path);
    if (page.path.match(/^\//)) {
        createPage({
            path: "/",
            matchPath: "/*",
            component: path.resolve('./src/pages/index.tsx'),
        })
    }
}