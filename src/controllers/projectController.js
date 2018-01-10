const { selectAll, selectFromTableById } = require('../dbManager/queries/crud');

const getProject = (req, res, next) => {
  const query = selectFromTableById.bind(this, 'projecten', 'projectId');
  query(req.params.id).then(result => res.json({ message: result }))
    .catch(err => next(err));
};

const getProjects = (req, res, next) => {
  const result = selectAll('projecten');
  result.then((stuff => res.json({ message: stuff })))
    .catch(err => next(err));
};

const deleteProject = (req, res, next) => {
  res.json({ message: 'Currently unavailable endpoint!' });
};

const updateProject = (req, res, next) => {
  res.json({ message: 'Currently unavailable endpoint!' });
};

const addProject = (req, res, next) => {
  res.json({ message: 'Currently unavailable endpoint!' });
};

module.exports = {
  getProject,
  getProjects,
  deleteProject,
  updateProject,
  addProject
};
