const Genre = require('../models/Genre');
const cloudinary = require('../config/cloudinary');

const getAllGenre = async (req, res) => {
  try {
    const genres = await Genre.find();
    res.status(200).json(genres);
  } catch (error) {
    res.status(500).json({ message: 'Error retrieving genres' });
  }
};

const getGenreById = async (req, res) => {
  try {
    const genre = await Genre.findById(req.params.id);
    if (!genre) return res.status(404).json({ message: 'Genre not found' });
    res.status(200).json(genre);
  } catch (error) {
    res.status(500).json({ message: 'Error retrieving genre' });
  }
};

const createGenre = async (req, res) => {
  try {
    const { name, description } = req.body;

    const result = await cloudinary.uploader.upload(req.file.path);

    const newGenre = new Genre({
      name,
      description,
      imgGenre: result.secure_url,
    });

    await newGenre.save();
    res.status(201).json(newGenre);
  } catch (error) {
    res.status(500).json({ message: 'Error creating genre' });
    console.log(error)
  }
};

const updateGenre = async (req, res) => {
  try {
    const { name, description } = req.body;
    const updateData = { name, description };

    if (req.file) {
      const result = await cloudinary.uploader.upload(req.file.path);
      updateData.imgGenre = result.secure_url;
    }

    const updatedGenre = await Genre.findByIdAndUpdate(req.params.id, updateData, { new: true });
    if (!updatedGenre) return res.status(404).json({ message: 'Genre not found' });

    res.status(200).json(updatedGenre);
  } catch (error) {
    res.status(500).json({ message: 'Error updating genre' });
  }
};

const deleteGenre = async (req, res) => {
  try {
    const deletedGenre = await Genre.findByIdAndDelete(req.params.id);
    if (!deletedGenre) return res.status(404).json({ message: 'Genre not found' });

    res.status(204).json();
  } catch (error) {
    res.status(500).json({ message: 'Error deleting genre' });
  }
};

module.exports = { getAllGenre, getGenreById, createGenre, updateGenre, deleteGenre };
