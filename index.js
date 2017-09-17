import http from 'http';
import url from 'url';
import moment from 'moment';

const server = http.createServer((req, res) => {
    res.writeHead(200, {
        'myname': 'Liudmila',
        'Content-Type': 'text/plain; charset=utf-8'
    });
    const urlObj = url.parse(req.url);
    switch (urlObj.pathname) {
        case '/time':
            const dateTime = moment().format('DD-MM-YY HH:mm');
            res.end(dateTime);
            break;
        case '/author':
            res.end('Людмила Букирёва');
            break;
        case '/length':
            res.end(countLength(urlObj));
            break;
        default:
            res.end('This path is not provided');
            break;
    }
});

server.listen(8000, () => console.log("Server start on port 8000"));

function countLength (urlObj) {
    const queryLength = (urlObj.query ? urlObj.query.length : 0).toString();
    return queryLength;
}

export {
    countLength
}