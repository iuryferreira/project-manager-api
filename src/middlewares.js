const data = require('./data');

module.exports = {

  getProject(req, res, next) {
    const project = data.find((p) => p.id.toString() === req.params.id);
    req.project = project;
    return next();
  },
};
