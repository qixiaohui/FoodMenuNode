'use strict'

const xRay = require('x-ray');
const properties = require('../../properties.js');
const xray = new xRay();

const scrapper = {
	getCookGuide: (url, resolve, reject) => {
		xray(url, {
			content: {
				title: '.content h1:first-child',
				img: '.content div:nth-child(3) img@src',
				subtitle: ['.content .p01bgf .subtitle'],
				content: xray('.content div', [{
					list: ['p']
				}])
			}
		})((err, data) => {
			if(err) {
				console.error(err);
				reject({});
				return;
			}

			resolve(data);
		});
	}
}

module.exports = scrapper;