const express = require('express');
const { default: ParseServer } = require('parse-server');
const ParseDashboard = require('parse-dashboard');

const app = express();

const parseServer = new ParseServer({
    databaseURI: 'mongodb+srv://sabrina:sabrina123@cluster0.l0nim.mongodb.net/myFirstDatabase?retryWrites=true&w=majority',
    appId: 'aplicacao',
    masterKey: '12345678',
    serverURL: 'http://localhost:1337/parse',
    publicServerURL: 'http://localhost:1337/parse'
});

const dashboard = new ParseDashboard({
    apps: [
        {
            serverURL: 'http://localhost:1337/parse',
            appId: 'aplicacao',
            masterKey: '12345678',
            appName: "Insight Lab Flight"
        }
    ]
});

app.use('/parse', parseServer.app);
app.use('/dashboard', dashboard);

app.listen(1337, function() {
    console.log('REST API PARSE rodando em http://localhost:1337/parse');
});

