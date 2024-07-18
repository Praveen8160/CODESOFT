const Project = require("../models/Project.model.js");
const handleAddProject = async (req, res) => {
  try {
    const data = req.body;
    await Project.create({
      name: data.name,
      description: data.description,
      createdBy: req.users.id,
    });
    return res.status(200).json({ success: true });
  } catch (error) {
    return res.status(500).json({ success: false });
  }
};
module.exports = { handleAddProject };
