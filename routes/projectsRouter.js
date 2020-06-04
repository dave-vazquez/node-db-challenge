const express = require('express');
const Projects = require('./projectsModel.js');

const router = express.Router();

router.get('/:id', async (req, res, next) => {
  const { id } = req.params;

  try {
    const project = await Projects.getProjectById(id);
    project
      ? res.status(200).json({
          success: true,
          project
        })
      : res.status(404).json({
          sucess: false,
          message: `Could not find a project by id ${id}.`
        });
  } catch (err) {
    next(err);
  }
});

module.exports = router;
