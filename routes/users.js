/*
 * All routes for Users are defined here
 * Since this file is loaded in server.js into /users,
 *   these routes are mounted onto /users
 * See: https://expressjs.com/en/guide/using-middleware.html#middleware.router
 */

<<<<<<< HEAD
const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.render("index.ejs");
});
=======
const express = require('express');
const router  = express.Router();
const app = express();
router.get('/', (req, res) => {
  res.render('index.ejs');
}); 
>>>>>>> feature/menu-page

module.exports = router;
