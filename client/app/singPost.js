// grap the id from html link
// fetch a post by id from api
// dispalying as aresults
// console.log(location.href);
// var dloc= window.location.href;
// var dsplt= dloc.split("?");
// console.log(dsplt);
// var sanitize= dsplt[1].split("=");
// console.log(sanitize[1]);

// grap the window link wich contain query
const link = window.location.href;
// split the link on query sign ?
const [header, query] = link.split("?")
console.log(query);
const postId = query.split("=")[1]
console.log(postId);