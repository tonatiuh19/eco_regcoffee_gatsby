import axios from "axios";

//PROD
//const server = 'https://agustirri.com/api/';
//TEST
const server = "http://localhost:8015/api/";

export const signIn = async (email: String, password: String) => {
	try {
		const response = await axios.post(server + "login.php", {
			email: email,
			pwd: password
		});
		if (response.data === 0) {
			return 0;
		} else {
			return response.data;
		}
	} catch (e) {
		return `😱 Request failed: ${e}`;
	}
};
