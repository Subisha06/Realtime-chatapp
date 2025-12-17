const { text } = require("express");

let messages = [
    {
        id: 1,
        text: "Hello welcome to the Real time chatapp",
        user: "Subisha",
        timestamp: new Date().toISOString(),
    },
    {
        id: 2,
        text: "Hello welcome to the realtime chatapp",
        user: "Swetha",
        timestamp: new Date().toISOString(),
    },
];

// GET all messages
const getMessages = (req, res) => {
    try {
        res.json({
            success: true,
            count: messages.length,
            data: messages
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: 'Server Error',
            error: error.message
        });
    }
};

// POST a message
const createMessages = (req, res) => {
    try {
        const { text, user } = req.body;

        // Validation
        if (!text || !user) {
            return res.status(400).json({
                success: false,
                message: 'Please provide both text and user'
            });
        }

        const newMessage = {
            id: messages.length + 1,
            text,
            user,
            timestamp: new Date().toISOString(),
        };

        messages.push(newMessage);

        res.status(201).json({
            success: true,
            message: "Message created",
            data: newMessage
        });

    } catch (error) {
        res.status(500).json({
            success: false,
            message: 'Server Error',
            error: error.message
        });
    }
};

// DELETE all messages
const deleteAllMessages = (req, res) => {
    try {
        messages = [];

        res.json({
            success: true,
            message: 'All messages deleted'
        });

    } catch (error) {
        res.status(500).json({
            success: false,
            message: 'Server Error',
            error: error.message
        });
    }
};


const addMessage=(messageData)=>{
    const newMessage={
        id:messages.length+1,
        text:messageData.text,
        user:messageData.user,
        timestamp:new Date().toISOString()
    }
    messages.push(newMessage);
    return newMessage;
}

module.exports = {
    getMessages,
    createMessages,
    deleteAllMessages,
    addMessage
};
