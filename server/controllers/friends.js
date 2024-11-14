import Friend from "../models/friends.js";

export const getFriends = async (req, res) => {
  try {
    const friends = await Friend.find();
    res.status(200).json(friends);
  } catch (err) {
    res.status(500).json({ message: "Error getting friends" });
  }
};

export const deleteFriend = async (req, res) => {
  const friendId = req.params.id;

  try {
    const deletedFriend = await Friend.findByIdAndDelete(friendId);

    if (!deletedFriend) {
      return res.status(400).json({ message: "Friend not found" });
    }

    res.status(200).json({ message: "Friend deleted successfully" });
  } catch (err) {
    res.status(500).json({ message: "Error deleting friend" });
  }
};
