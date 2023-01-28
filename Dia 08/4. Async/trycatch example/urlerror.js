// given url string
let url_str = `http://demo.com>`;
//let url_str = `http://demo.com?id=100&cat=<img src="1" onerror="alert('hacked')">`;
console.log('typeof url_str: ', typeof url_str)
// create new URL object from the url string
let url = new URL(url_str);
console.log('url: ', typeof url)
// searchParams property is URLSearchParams object
let search_params = url.searchParams; 

// loop to get all query parameters
if(search_params) {
	search_params.forEach(function(value, key) {
		console.log(key + '=' + value);
	});
} else {
	console.log("No search Params")
}