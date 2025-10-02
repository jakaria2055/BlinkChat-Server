import MessageModel from "../models/MessageModel";

//GET ALL USER
export const getUsersForSidebar = async (req, res) => {
  try {
    const userId = req.user._id;
    const filteredUsers = await user
      .find({ _id: { $ne: userId } })
      .select("-password");

    //COUNT UNSEEN MSG
    const unseenMessage = {};
    const promises = filteredUsers.map(async (user) => {
      const messages = await MessageModel.find({
        senderId: user._id,
        receiverId: userId,
        seen: false,
      });

      if (messages.length > 0) {
        unseenMessage[user._id] = messages.length;
      }
    });

    await Promise.all(promises);
    res.json({ success: true, users: filteredUsers, unseenMessage });
  } catch (error) {
    console.log(error.message);
    res.json({ success: false, message: error.message });
  }
};

//GET MSG OF SELECTED USER
export const getMessages = async (req, res) => {
  try {
    const { id: selectedUserId } = req.params;
    const myId = req.user._id;

    const messages = await MessageModel.find({
      $or: [
        { senderId: myId, receiverId: selectedUserId },
        { senderId: selectedUserId, receiverId: myId },
      ],
    });
    await MessageModel.updateMany({senderId: selectedUserId, receiverId: myId}, {seen: true});

    req.json({success: true, messages})

  } catch (error) {
    console.log(error.message);
    res.json({ success: false, message: error.message });
  }
};
