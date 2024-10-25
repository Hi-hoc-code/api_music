const Album = require('../models/Album');

const getAllAlbum = async (req, res) => {
    try {
        const albums = await Album.find();
        res.status(200).json(albums);
    } catch (err) {
        console.error("Lỗi khi lấy tất cả album:", err);
        res.status(500).json({ message: "Có lỗi xảy ra khi lấy album." });
    }
};

const getAlbumById = async (req, res) => {
    try {
        const album = await Album.findById(req.params.id);
        if (!album) {
            return res.status(404).json({ message: "Album không tìm thấy." });
        }
        res.status(200).json(album);
    } catch (err) {
        console.error("Lỗi khi lấy album:", err);
        res.status(500).json({ message: "Có lỗi xảy ra khi lấy album." });
    }
};

const createAlbum = async (req, res) => {
    try {
        const { title, artist, genre, releaseYear, imgAlbum } = req.body;

        const newAlbum = new Album({
            title,
            artist,
            genre,
            releaseYear,
            imgAlbum,
        });

        await newAlbum.save();
        res.status(201).json(newAlbum);
    } catch (error) {
        console.error('Error creating album:', error); // Log lỗi chi tiết
        res.status(500).json({ message: 'Error creating album', error });
    }
};

const updateAlbum = async (req, res) => {
    try {
        const updatedAlbum = await Album.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!updatedAlbum) {
            return res.status(404).json({ message: "Album không tìm thấy." });
        }
        res.status(200).json(updatedAlbum);
    } catch (err) {
        console.error("Lỗi khi cập nhật album:", err);
        res.status(500).json({ message: "Có lỗi xảy ra khi cập nhật album." });
    }
};

const deleteAlbum = async (req, res) => {
    try {
        const deletedAlbum = await Album.findByIdAndDelete(req.params.id);
        if (!deletedAlbum) {
            return res.status(404).json({ message: "Album không tìm thấy." });
        }
        res.status(200).json({ message: "Album đã được xóa thành công." });
    } catch (err) {
        console.error("Lỗi khi xóa album:", err);
        res.status(500).json({ message: "Có lỗi xảy ra khi xóa album." });
    }
};

module.exports = { getAllAlbum, getAlbumById, createAlbum, updateAlbum, deleteAlbum };
