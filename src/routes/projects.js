const Express = require('express').Router;
const {
  getProject,
  getProjects,
  updateProject,
  deleteProject,
  addProject
} = require('../controllers/projectController');

const router = Express();

router.get('/:id', getProject);

router.get('/', getProjects);

router.post('/', addProject);

router.delete('/delete/:id', deleteProject);

router.put('/update/:id', updateProject);

module.exports = router;
