'use strict';

const proxy = require('http-proxy-middleware');
const request = require('request');
const router = require('express').Router();

router.get('/', function stickerRouteCreate(req, res) {
    const renderData = { pageTitle: 'Create', entry: 'create' };
    console.log('Render values: ', renderData);
    res.render('index', renderData);
});

router.get('/api/search', proxy({
    target: process.env.STICKER_SERVICE_URL,
    pathRewrite: { '^/create/api': '' }
}));

module.exports = router;
