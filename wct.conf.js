module.exports = {
    npm:true,
    verbose: true,
    plugins: {
        local: {
            browsers: ["chrome"]
        }
    },
    suites:
        ["test/hello-world-test.html"],
    wctPackageName: "wct-browser-legacy"
};