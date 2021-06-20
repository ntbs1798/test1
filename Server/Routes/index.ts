import express from 'express';
const router = express.Router();
export default router;

//create an index controller instance
import {DisplayAboutPage, DisplayContactPage, DisplayHomePage, DisplayLoginPage, DisplayProjectsPage, DisplayRegisterPage, DisplayServicesPage, ProcessLoginPage, ProcessLogoutPage, ProcessRegisterPage} from '../Controllers/index';

/* GET home page. */
router.get('/', DisplayHomePage);

/* GET home page. */
router.get('/home', DisplayHomePage);

/* GET about page. */
router.get('/about', DisplayAboutPage);

/* GET projects page. */
router.get('/projects', DisplayProjectsPage);

/* GET services page. */
router.get('/services', DisplayServicesPage);

/* GET contact page. */
router.get('/contact', DisplayContactPage);

/* GET login page - with/login . */
router.get('/login', DisplayLoginPage);

/*POST - process login page when user clicks Login */
router.post('/login', ProcessLoginPage);

/* GET -display register page -with /register . */
router.get('/register', DisplayRegisterPage);

/*POST - process login page when user clicks register */
router.post('/register', ProcessRegisterPage);

/* Get- process the logout page - with /logout . */
router.get('/logout', ProcessLogoutPage);

//module.exports = router;

