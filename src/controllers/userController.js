const UserModel = require("../models/userModel");

const getAllUsers = async (req, res) => {
  try {
    const allUsers = await UserModel.find({}, null);
    res.status(200).json(allUsers);
  } catch {
    res.status(500).json({ message: error.message });
  };
};

const getUserById = async (req, res) => {
  try {
   
    const findUser = await UserModel.findById(req.params.id);
    res.status(200).json(findUser);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const addNewUser = async (req, res) => {
  try {
    const {
      username,
      illness,
      email,
      number,
      city
    } = req.body;

    const newUser = new UserModel({
        username,
        illness,
        email,
        number,
        city
    });
    const savedUser = await newUser.save();
    res
      .status(200)
      .json({ message: "Cadastro realizado com sucesso!", savedUser });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: error.message });
  };
};

const updateUserById = async (req, res) => {
  try {
    const {
        username,
        illness,
        email,
        number,
        city
    } = req.body;
    const updateUser = await UserModel.findByIdAndUpdate(
      req.params.id,
      {
        username,
        illness,
        email,
        number,
        city
      }
    );
    res.status(200).json(updateUser);
  } catch {
  console.error(error);
  res.status(500).json({ message: error.message });
}
};

const deleteUser = async (req, res) => {
  try {
    const { id } = req.params;
    const findUsers = await UserModel.findById(id);

    if (findUsers == null) {
      return res.status(404).json({ message: `Usuário do id ${id} não foi encontrado` })
    };
    await findUsers.remove();
    res.status(200).json({ message: `Usuário do id ${id} foi deletado com sucesso` });
  } catch (error) {
    res.status(500).json({ message: error.message });
  };
};

module.exports = {
  getAllUsers,
  getUserById,
  addNewUser,
  updateUserById,
  deleteUser,
};