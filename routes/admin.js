const express = require("express");
const router = express.Router();
const adminController = require('../controller/admin');
const { verifyTokenHandler,verifyRole } = require("../middlewares/jwtHandler");
/**
 * @swagger
 * /api/admin/user:
 *   post:
 *     summary: Create a new user by admin
 *     description: Create a new user with the provided information by admin.
 *     tags:
 *       - Admin
 *     requestBody:
 *       description: User object
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/User'
 *     responses:
 *       201:
 *         description: User created successfully
 *         content:
 *           application/json:
 *             example:
 *               userid: 2
 *               username: new_user
 *               role: client
 *       400:
 *         description: Bad Request
 *         content:
 *           application/json:
 *             example:
 *               error: Invalid input data
 *       500:
 *         description: Internal Server Error
 *         content:
 *           application/json:
 *             example:
 *               error: Internal Server Error
 * 
 * components:
 *   schemas:
 *     User:
 *       type: object
 *       properties:
 *         userid:
 *           type: integer
 *           format: int32
 *           description: The unique identifier for the user.
 *         username:
 *           type: string
 *           description: The username of the user.
 *         password:
 *           type: string
 *           description: The password of the user.
 *         role:
 *           type: string
 *           enum:
 *             - admin
 *             - client
 *             - designer
 *           description: The role of the user.
 *         firstname:
 *           type: string
 *           description: The first name of the user.
 *         lastname:
 *           type: string
 *           description: The last name of the user.
 *         email:
 *           type: string
 *           format: email
 *           description: The email address of the user.
 *         phone:
 *           type: string
 *           description: The phone number of the user.
 *         place:
 *           type: string
 *           description: The place of the user.
 *         district:
 *           type: string
 *           description: The district of the user.
 */
  
//router.post('/user',[verifyTokenHandler,verifyRole('admin')],adminController.createUserByAdmin)
router.post('/user',adminController.createUserByAdmin)
router.delete('/user/:id',[verifyTokenHandler,verifyRole('admin')],adminController.deletUserAccount)
//router.route('/project',[verifyRole('admin')]).post(adminController.addProject).get(adminController.getProjects,)
router.post('/project',[verifyTokenHandler,verifyRole('admin')],adminController.addProject)
router.get('/project',[verifyTokenHandler,verifyRole('admin')],adminController.getProjects)
router.post('/project/assign_designer',[verifyTokenHandler,verifyRole('admin')],adminController.assignDesignerToProject)
router.get('/user',[verifyTokenHandler,verifyRole('admin')],adminController.getAllUsers)
router.get('/dashboard',[verifyTokenHandler,verifyRole('admin')],adminController.getAdminDashboardDetails)
router.post('/faq',[verifyTokenHandler,verifyRole('admin')],adminController.addFAQ)
router.post('/material',[verifyTokenHandler,verifyRole('admin')],adminController.addMaterial)

module.exports=router 
