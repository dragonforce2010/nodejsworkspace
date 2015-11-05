function route(handle, pathname, res) {
    console.log('About to route a request for ' + pathname)
    if(typeof handle[pathname] == 'function') {
        var content = handle[pathname](res)
        res.writeHead(200, {"Content-Type":"text/plain"})
        res.write(content)
        res.end()
    } else {
        console.log('No request handler is found for ' + pathname)
        res.writeHead(404, {"Content-Type":"text/plain"})
        res.write('404 NOT FOUND!')
        res.end()
    }
}

exports.route = route