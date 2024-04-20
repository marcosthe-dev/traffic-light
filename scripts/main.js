requirejs.config({
    baseUrl: 'scripts',
    paths: {
        'text': '../node_modules/text/text',
    }
});

require(['./modulo'], function(modulo) {
    modulo.init();
});
