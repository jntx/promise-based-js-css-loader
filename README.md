# promise-based-js-css-loader
A simple script to load external scripts and style sheet files based on Promise.

### Prerequisites

The script is in ES6 Vanilla JS. Uses Promise. Has no dependencies.

### Installing

Clone the project.

Add a line in your HTML pages like the following before using the loader:
```
<script type="text/javascript" src="the/path/where/you/cloned/it/promise-based-js-css-loader/promise-based-js-css-loader.js"></script>
```

## Use
### Unordered resource loading

This kind of usage is good if loading order doesn't matter (check also examples/examples.html for working code).

```
<script type="text/javascript">
	addResources([
		"mystyle.css",
		"myfirstscript.js",
		"mysecondscript.js",
		"subdir/mythirdscript.js"
	]).then(response => {
		// Setup code for loaded scripts or callback code
	}).catch(error => {
		// Error handling
	});
</script>
```

### Ordered resource loading

This kind of usage is good if loading order matters (check also examples/examples-ordered.html for working code). Basically ordering is done by chaining the Promises.

```
<script type="text/javascript">
	addResources([
		"mystyle.css",
		"myfirstscript.js"
	]).then(
		response => {
			// Setup code for the first script or callback
			return addResources("mysecondscript.js");
	}).then(
		response => {
			// Setup code for the second or callback
			return addResources("subdir/mythirdscript.js");
	}).then(response => {
		// Setup code for the third script or for all the loaded scripts
	}).catch(error => {
		// Error handling
	});
</script>
```

## Authors

* **Jenner Fusari** - *Initial work* - [jntx](https://github.com/jntx)

## License

This project is licensed under the GNU General Public License v.3 - see the [LICENSE](LICENSE) file for details.