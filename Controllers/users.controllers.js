import User from "../Models/users.models.js";

export const getAllUsersHandler = async (req, res) => {
    const users = await User.findAll();
    res.json(users)
};

export const getUserByIdHandler = async (req, res) => {
    const user = await User.findByPk(req.params.id)
    if (!user) return res.status(404).json({message: `Não foi encontrado o usuário com ID: ${req.params.id}`});
    res.json(user);
};

export const createUserHandler = async (req, res) => {
    const { name, email } = req.body;
    try{
        const newUser = await User.create({ name, email });
        res.status(201).json(newUser);
    } catch(error) {
        res.status(400).json({ message: "Erro ao criar usuário" });
    }
};

export const updateUserHandler = async (req, res) => {
    const { name, email } = req.body;
    const user = await User.findByPk(req.params.id);
    if (!user) return res.status(404).json({message: `Não foi encontrado o usuário com ID: ${req.params.id}`});

    user.name = name ?? user.name;
    user.email = email ?? user.email;

    try {
        await user.save();
        res.json(user);
    } catch (error) {
        res.status(400).json({ message: "Erro ao adicionar usuário" });
    };
};

export const deleteUserHandler = async (req, res) => {
    const user = await User.findByPk(req.params.id);
    if (!user) return res.status(404).json({message: `Não foi encontrado o usuário com ID: ${req.params.id}`});

    await user.destroy();
    res.status(204).send();
};