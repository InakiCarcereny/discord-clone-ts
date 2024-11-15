import FriendRequest from "../models/friendRequest.js";
import Friend from "../models/friends.js";
import User from "../models/auth.js";

import { JWT_SECRET } from "../config.js";
import jwt from "jsonwebtoken";

export const getFriendRequests = async (req, res) => {
  const token = req.cookies.token;

  if (!token) {
    return res.status(401).json({ message: "Unauthorized" });
  }

  try {
    const data = jwt.verify(token, JWT_SECRET);

    const { id } = data;

    const userFind = await User.findById(id);

    if (!userFind) {
      return res.status(400).json({ message: "User not found" });
    }

    const friendRequests = await FriendRequest.find({
      sender: userFind._id,
    });

    res.status(200).json(friendRequests);
  } catch (err) {
    res.status(500).json({ message: "Error getting friend requests" });
  }
};

export const getFriendRecipientRequests = async (req, res) => {
  const token = req.cookies.token;

  if (!token) {
    return res.status(401).json({ message: "Unauthorized" });
  }

  try {
    const data = jwt.verify(token, JWT_SECRET);

    const { id } = data;

    const userFind = await User.findById(id);

    if (!userFind) {
      return res.status(400).json({ message: "User not found" });
    }

    const friendRequests = await FriendRequest.find({
      recipient: userFind._id,
    });

    res.status(200).json(friendRequests);
  } catch (err) {
    res.status(500).json({ message: "Error getting friend requests" });
  }
};

export const createRequest = async (req, res) => {
  const recipientUsername = req.params.recipientUsername;
  const senderUsername = req.params.senderUsername;
  const token = req.cookies.token;

  if (!token) {
    return res.status(401).json({ message: "Unauthorized" });
  }

  try {
    const decoded = jwt.verify(token, JWT_SECRET);
    const userAuthUsername = decoded.username;

    if (userAuthUsername !== senderUsername) {
      return res
        .status(403)
        .json({ message: "No autorizado para enviar la solicitud" });
    }

    const sender = await User.findOne({ username: senderUsername });
    if (!sender) {
      return res
        .status(400)
        .json({ message: "Usuario remitente no encontrado" });
    }

    const recipient = await User.findOne({ username: recipientUsername });
    if (!recipient) {
      return res
        .status(400)
        .json({ message: "Usuario destinatario no encontrado" });
    }

    const existingRequest = await FriendRequest.findOne({
      sender: sender._id,
      recipient: recipient._id,
    });
    if (existingRequest) {
      return res.status(400).json({
        message: "Ya existe una solicitud de amistad pendiente o aceptada.",
      });
    }

    const friendRequest = new FriendRequest({
      sender: sender._id,
      recipient: recipient._id,
    });
    await friendRequest.save();

    res.status(200).json(friendRequest);
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ message: "Error al enviar la solicitud de amistad." });
  }
};

export const acceptRequest = async (req, res) => {
  const requestId = req.params.requestId;

  const token = req.cookies.token;

  if (!token) {
    return res.status(401).json({ message: "Unauthorized" });
  }

  try {
    const decoded = jwt.verify(token, JWT_SECRET);

    console.log(decoded, "decoded");

    const userId = decoded.id;

    const friendRequest = await FriendRequest.findById(requestId);
    if (!friendRequest) {
      return res
        .status(404)
        .json({ message: "Solicitud de amistad no encontrada" });
    }

    if (friendRequest.recipient.toString() !== userId) {
      return res
        .status(403)
        .json({ message: "No autorizado para aceptar esta solicitud" });
    }

    if (friendRequest.status === "accepted") {
      return res
        .status(400)
        .json({ message: "La solicitud ya ha sido aceptada" });
    }

    friendRequest.status = "accepted";
    await friendRequest.save();

    const friendship = new Friend({
      user1: friendRequest.sender,
      user2: friendRequest.recipient,
    });
    await friendship.save();

    res.status(200).json({ message: "Solicitud de amistad aceptada." });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error al aceptar la solicitud de amistad." });
  }
};

export const rejectRequest = async (req, res) => {
  const token = req.cookies.token;

  if (!token) {
    return res.status(401).json({ message: "Unauthorized" });
  }

  const requestId = req.params.requestId;

  try {
    const decoded = jwt.verify(token, JWT_SECRET);

    const userId = decoded.id;
    // Obtener la solicitud de amistad
    const friendRequest = await FriendRequest.findById(requestId);
    if (
      !friendRequest ||
      friendRequest.recipient.toString() !== userId.toString()
    ) {
      return res.status(400).json({
        message: "Solicitud de amistad no encontrada o no autorizada.",
      });
    }

    // Cambiar el estado de la solicitud a "rejected"
    friendRequest.status = "rejected";
    await friendRequest.save();

    res.status(200).json({ message: "Solicitud de amistad rechazada." });
  } catch (error) {
    console.log(error);
    res
      .status(500)
      .json({ message: "Error al rechazar la solicitud de amistad." });
  }
};

export const deleteRequest = async (req, res) => {
  const token = req.cookies.token;

  if (!token) {
    return res.status(401).json({ message: "Unauthorized" });
  }
  const requestId = req.params.requestId;

  try {
    const decoded = jwt.verify(token, JWT_SECRET);

    const userId = decoded.id;
    // Obtener la solicitud de amistad
    const friendRequest = await FriendRequest.findById(requestId);
    if (
      !friendRequest ||
      friendRequest.sender.toString() !== userId.toString()
    ) {
      return res.status(400).json({
        message: "Solicitud de amistad no encontrada o no autorizada.",
      });
    }

    // Eliminar la solicitud de amistad
    await friendRequest.delete();

    res.status(200).json({ message: "Solicitud de amistad eliminada." });
  } catch (error) {
    console.log(error);
    res
      .status(500)
      .json({ message: "Error al eliminar la solicitud de amistad." });
  }
};
