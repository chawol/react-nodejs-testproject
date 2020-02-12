//這邊是進入點不支援 import!!! 懶得設定
const express = require('express');
const path = require('path'); // NEW

const app = express();
const port = process.env.PORT || 3000;
const DIST_DIR = path.join(__dirname, '../dist'); // NEW
const HTML_FILE = path.join(DIST_DIR, 'index.html'); // NEW
const webpack = require('webpack') ;
const WebpackDevServer =require( 'webpack-dev-server');
const config = require('../webpack.config.js');
const options = {
    contentBase: './dist',
    hot: true,
    host: 'localhost'
};

WebpackDevServer.addDevServerEntrypoints(config, options);
const compiler = webpack(config);
const server = new WebpackDevServer(compiler, options);

server.listen(5000, 'localhost', () => {
    console.log('dev server listening on port 5000');
});



const mockResponse = {
    foo: 'bar',
    bar: 'foo'
};
app.use(express.static(DIST_DIR)); // NEW
app.get('/api', (req, res) => {
    res.send(mockResponse);
});
app.get('/', (req, res) => {
    res.sendFile(HTML_FILE); // EDIT
});
app.listen(port, function () {
    console.log('App listening on port: ' + port);
});