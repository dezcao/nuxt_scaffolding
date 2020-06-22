
const { check, validationResult } = require('express-validator'); // npm install --save express-validator
import axios from 'axios'

export default async function (req, res, next) {
	// req는 Node.js http request 객체입니다
	// console.log(req);
	const { username, password } = req.body // nuxt.config.js의 serverMiddleware에서 bodyParser.json() 활성화 할 것.
	console.log('api/login payload ', req.url, username, password);
	
	// validation : express-validator 활용함.
	await check('password').isLength({ min: 5 }).withMessage('Too short').run(req);
	let result = validationResult(req);
	
	try {
		// let rs = await axios.post(process.env.baseURL+'/api/login', {
		// 	username, password
		// });
		
		// await API server
		// next는 다음 미들웨어를 실행하는 함수입니다
		// 여러분의 미들웨어가 엔드포인트가 아니라면 마지막에 next를 호출하는 것을 잊지 마세요
		// next();
	} catch (error) {
		console.error(error);
	}
}
