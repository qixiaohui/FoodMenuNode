'use strict'

const xRay = require('x-ray');
const properties = require('../../properties.js');
const xray = new xRay();

const scrapper = {
	getIndex: (resolve, reject) => {
		let url = properties.caipudaquanUrl;
		xray(url, {
			list: xray('.content .w-bg', [{
				category: '.gb-title .mlr1 .c-name',
				subCategory: xray('.line-list li', [{
					value: 'a',
					href: 'a@href'
				}])
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
};

module.exports = scrapper;