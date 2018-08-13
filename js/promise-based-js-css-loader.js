let packageName = "Promise Based JS CSS Loader";

let warningMessage = function(text) {
	console.warn("[" + packageName + "] " + text);
}

function addResources(resourceURIs) {
	if (!resourceURIs.isArray() && (typeof(resourceURIs) != "string")) {
		warningMessage("Resource URIs must be an array or a string");
		return new Promise(function(resolve, reject) { reject(); });
	}

	if (typeof(resourceURIs) === "string") {
		resourceURIs = [resourceURIs];
	}

	let promises = [];

	for (var index in resourceURIs) {
		let isJS = /^.+\.js$/.test(resourceURIs);
		let isCSS = /^.+\.css$/.test(resourceURIs);
		let isSupportedResource = isJS || isCSS;

		if (isSupportedResource) {
			promises.push(new Promise(function(resolve, reject) {
				let resource = document.createElement(isJS ? "script" : "link");
			
				if (isJS) {
					resource.type = "text/javascript";
					resource.src = resourceURIs[index];
				} else if (isCSS) {
					resource.type = "text/css";
					resource.rel = "stylesheet";
					resource.href = resourceURI;
				}

				resource.addEventListener("load", () => { resolve(); } );

				document.head.appendChild(resource);
			}));
		}
	}

	return Promise.all(promises);
}