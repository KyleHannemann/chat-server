let messages = [];
let id = 0; 

module.exports = {
    create: (req,res) => {
        const {time, text} = req.body
        let message = {
            id: id,
            time: time,
            text: text,

        }
        messages.push(message);
        id++;
        res.status(200).send(messages);
    },
    read: (req,res)=>{
        res.status(200).send(messages);
    },
    update: (req, res)=>{
        const {text} = req.body
        let index = null;
        for (let i = 0; i < messages.length; i++){
            if (messages[i].id === parseInt(req.params.id)){
                index = i;
            }
        }
        messages[index] = {
            id: messages[index].id,
            time: messages[index].time,
            text: text || messages[index].text,
        }
        res.status(200).send(messages);
    },
    delete: (req,res) => {
        let index = null;
        for (let i = 0; i < messages.length; i++){
            if (messages[i].id === parseInt(req.params.id)){
                index = i;
            }
        }
        messages.splice(index, 1);
        res.status(200).send(messages);
    }
}