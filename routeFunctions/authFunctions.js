const { validationResult } = require('express-validator');
const UserCollection = require('../routeCollection/authCollection');


const liveStatus=async(req,res)=>{
    const response = UserCollection.liveStatus();
    res.status(201).json(response);
}
const startLive=async(req,res)=>{
    const response = UserCollection.startLive(req.body.id);
    res.status(201).json(response);
}
const stopLive=async(req,res)=>{
    const response = UserCollection.stopLive(req.body);
    res.status(201).json(response);
}

const createUser = async (req, res) => {
    const response = await UserCollection.createUser(req.body);
    res.status(201).json(response);
};
const getEvents = async (req, res) => {
    const response = await UserCollection.getEvents();
    res.status(201).json(response);
};
const getUsers = async (req, res) => {
    const response = await UserCollection.getUsers();
    res.status(201).json(response);
};
const getAdmins = async (req, res) => {
    const response = await UserCollection.getAdmins();
    res.status(201).json(response);
};

const addEvent = async (req, res) => {
    const response = await UserCollection.addEvent(req.body);
    res.status(201).json(response);
};
const addImage = async (req, res) => {
    const response = await UserCollection.addImage(req.body);
    res.status(201).json(response);
};
const getImages = async (req, res) => {
    const response = await UserCollection.getImages();
    res.status(201).json(response);
};
const getVideos = async (req, res) => {
    const response = await UserCollection.getVideos();
    res.status(201).json(response);
};

const addVideo = async (req, res) => {
    const response = await UserCollection.addVideo(req.body);
    res.status(201).json(response);
};


const createAdmin = async (req, res) => {
    const response = await UserCollection.createAdmin(req.body);
    res.status(201).json(response);
};

const loginUser = async (req, res) => {
    let email=req.params.email,password=req.params.password,admin=req.params.admin;
    console.log(email)
    const response = await UserCollection.loginUser(email,password,admin);
    res.status(201).json(response);
};

const adminStatus = async (req, res) => {
    const response = await UserCollection.adminStatus(req.params.authToken);
    res.status(201).json(response);
};

const verifyUser = async (req, res) => {
    let admin=req.params.admin;
    const response = await UserCollection.verifyUser(req.params.authToken,admin);
    res.status(201).json(response);
};

const updateUser = async (req, res) => {
    const response = await UserCollection.updateUser(req.body);
    res.status(201).json(response);
    
};

const forgotPassword = async (req, res) => {
    let email=req.params.email,admin=req.params.admin;
    const response = await UserCollection.forgotPassword(email,admin);
    res.status(201).json(response);
};

const updatePassword = async (req, res) => {
    const response = await UserCollection.updatePassword(req.body,req.body.admin);
    res.status(201).json(response);
};

const checkToken = async (req, res) => {
    let authToken=req.params.authToken
    const response = await UserCollection.checkToken(authToken);
    res.status(201).json(response);
};

const getUserDetails = async (req, res) => {
    let authToken=req.params.authToken,admin=req.params.admin;
    const response = await UserCollection.getUserDetails(authToken,admin);
    res.status(201).json(response);
};




module.exports = {
    getUsers,
    getAdmins,
    getImages,
    addImage,
    addVideo,
    getVideos,
    getEvents,
    addEvent,
    liveStatus,
    startLive,
    stopLive,
    createAdmin,
    adminStatus,
    createUser,
    loginUser,
    verifyUser,
    updateUser,
    forgotPassword,
    updatePassword,
    checkToken,
    getUserDetails,
};
