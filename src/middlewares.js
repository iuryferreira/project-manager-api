import data from './data';

export default {
  getProject: (req, res, next) => {
    const project = data.find((p) => p.id.toString() === req.params.id);
    req.project = project;
    return next();
  },
};
