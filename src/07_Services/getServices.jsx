import axios from "axios";

const getService = (server, root, path, config) => {
	const srv = server || "";
	const rootPath = root || "";
	const endPoint = path || "";
	return new Promise((resolve, rejects) => {
		axios
			.get(`${srv}${rootPath}${endPoint}`, config || null)
			.then((response) => {
				const result = response;
				if (result.statusCode) {
					rejects(result);
				} else {
					resolve(result);
				}
			})
			.catch((error) => {
				if (error.response.status == "404")
					alert("No se encontro información");
				rejects(error);
			});
	});
};

export { getService };
