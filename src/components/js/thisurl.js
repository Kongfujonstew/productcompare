const protocol = window.location.protocol;
const port = window.location.port || '';
const hostname = window.location.hostname;
const thisurl = protocol + '//' + hostname + ':' + port;

export default thisurl;
