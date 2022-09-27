/* Con esto podemos cambiar en lugar de usar .env */
const CONFIG = {
	development: {
		REACT_APP_ENV: "LOCAL",
		PORT: "4000",
		API_SERVER: "http://localhost:4000",
		API_ROOT: "",
	},
};

const validateHost = () => {
	const sessionEnv = sessionStorage.getItem("env");
	console.log(sessionEnv);
	console.log(`Work In: ${window.location.hostname} con ENV ${sessionEnv}`);

	if (sessionEnv) {
		return CONFIG[String(sessionEnv)];
	}

	switch (window.location.hostname) {
		case "localhost":
			return CONFIG["development"];
		
		default:
			return CONFIG["development"];
	}
};

const CONSTANTS = validateHost();

export default CONSTANTS;
