const express=require('express');

const router=express.Router();

const {
    getMessages,
    createMessages,
    deleteAllMessages

}=require('../controllers/messagecontrollers')

router.get('/',getMessages);

router.post('/',createMessages);

router.delete('/',deleteAllMessages);

module.exports=router;
