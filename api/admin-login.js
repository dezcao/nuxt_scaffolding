
const { check, validationResult } = require('express-validator'); // npm install --save express-validator
import axios from 'axios'

export default async function (req, res, next) {
	// req는 Node.js http request 객체입니다
	// console.log(req);
	const { username, password } = req.body
	console.log('api/auth/login payload ', req.url, username, password);
	
	// validation : express-validator 활용함.
	await check('password').isLength({ min: 5 }).withMessage('Too short').run(req);
	let result = validationResult(req);
	// console.log('api/auth/login validation result ', result);
	
	try {
		// await API server
		// next는 다음 미들웨어를 실행하는 함수입니다
		// 여러분의 미들웨어가 엔드포인트가 아니라면 마지막에 next를 호출하는 것을 잊지 마세요!
		let rs = await axios.get('http://icanhazip.com');
		// let rs2 = await axios.get('http://13.125.206.217:3000/fetch');
		let rs3 = await axios.get('http://localhost:3000/api/login');
		console.log(rs3.data);
		let status = rs.status;
		let accessToken = rs.data;
		let refreshToken = accessToken;
		req.token = accessToken;
		console.log('auth/login server API 다녀왔습니다. %o', {token: accessToken});
		console.log("***********************");
		// req.data = {
		// 	accessToken,
		// 	refreshToken
		// };
		res.status(status).json({token: accessToken});
		// res.redirect(status, '/')
		// res.status(status).json({token: accessToken});
		// res.writeHead(301, { Location: '/' });
    	// res.end();
		// next('/');
	} catch (error) {
		console.error(error);
	}
}
