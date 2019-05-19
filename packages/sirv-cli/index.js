#!/usr/bin/env node
const sade = require('sade');
const pkg = require('./package');
const boot = require('./boot');

sade('sirv')
	.version(pkg.version)
		.example('build --cors --port 8080')
		.example('start build --cors --port 8080')
		.example('public --quiet --etag --maxage 31536000 --immutable')
		.example('public --http2 --key priv.pem --cert cert.pem')
		.example('start public -qeim 31536000')
		.example('--port 8080 --etag')
		.example('my-app --dev')
	.command('start [dir]', 'Start a static file server.', { default:true })
		.option('-D, --dev', 'Enable "dev" mode')
		.option('-e, --etag', 'Enable "ETag" header')
		.option('-d, --dotfiles', 'Enable dotfile asset requests')
		.option('-c, --cors', 'Enable "CORS" headers to allow any origin requestor')
		.option('-m, --maxage', 'Enable "Cache-Control" header & define its "max-age" value (sec)')
		.option('-i, --immutable', 'Enable the "immutable" directive for "Cache-Control" header')
		.option('-H, --http2', 'Enable the HTTP/2 protocol. Requires Node.js 8.4.0+')
		.option('-C, --cert', 'Path to certificate file for HTTP/2 server')
		.option('-K, --key', 'Path to certificate key for HTTP/2 server')
		.option('-s, --single', 'Serve single-page applications')
		.option('-q, --quiet', 'Disable logging to terminal')
		.option('-H, --host', 'Hostname to bind', 'localhost')
		.option('-p, --port', 'Port to bind', 5000)
		.action(boot)
	.parse(process.argv);
