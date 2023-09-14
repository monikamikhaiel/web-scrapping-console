const axios = require('axios');
const cheerio = require('cheerio');
const express = require('express');

// init express instance
const app=express();
var url='https://console.prod-cloud-ocb.orange-business.com/console/?agencyId=fc5fe321f3e44273b8473b2cddfc8fd0&region=eu-west-0&locale=en-us&refrence=resource#/resources';
var url='https://docs.prod-cloud-ocb.orange-business.com/en-us/api/vpcep/vpcep_06_0101.html';
axios(
// promise
    url).then(response => {
    console.log(response.data);
    const filter= cheerio.load(response.data);
    // filter the  html response 
    filter('.script',response.data).each (
        // callback fn 
        function(){
            console.log(filter(this).text());
        })
});

//app.
