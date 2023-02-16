const router=require('express').Router();
const {login,dashboard}=require('../controllers/main')
const authMiddle=require('../middleware/auth')

router.route('/dashboard').get(authMiddle,dashboard)
router.post('/login',login)

module.exports=router