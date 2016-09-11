'use strict'

const xRay = require('x-ray');
const properties = require('../../properties.js');
const xray = new xRay();

const scrapper = {
	getSubindex: (url, resolve, reject) => {
		xray(url, {
			list: xray('.search-list li', [{
				value: 'a div .h-pw-w p',
				href: 'a@href',
				img: 'img@src'
			}])
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