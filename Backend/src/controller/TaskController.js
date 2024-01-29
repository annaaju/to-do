const TaskModel = require('../model/TaskModel');
const {startOfDay, endOfDay, startOfWeek, endOfWeek,
startOfMonth, endOfMonth, startOfYear, endOfYear } = require('date-fns')

const current = new Date()

class TaskController {
  
  async create(req, res) {
    try {
      const task = new TaskModel(req.body);
      const response = await task.save();
      console.log("Task created:", response);
      return res.status(200).json(response);
    } catch (error) {
      console.error("Error creating task:", error);
      return res.status(500).json({ error: "Internal Server Error", details: error.message });
    }
  }

  async uptade(req, res){
    await TaskModel.findByIdAndUpdate({'_id' : req.params.id}, req.body, {new: true})
    .then(response => {
      return res.status(200).json(response)
    })
    .catch(error=>{
      return res.status(500).json(error)
    })
  }

  async all(req, res) {
    try {
      const tasks = await TaskModel.find({ macaddress: { $in: [req.params.macaddress] } })
        .sort('when');
  
      return res.status(200).json(tasks);
    } catch (error) {
      console.error(error);
      return res.status(500).json(error);
    }
  }
  

  async show(req, res){

    await TaskModel.findById(req.params.id)
      .then(response =>{
        if(response)https://chat.openai.com/c/d2eecece-2681-4bde-ac16-bdb78abb8422
          return res.status(200).json(response)
        else
          return res.status(404).json({error: 'tarefa não encontrada'})
      })

      .catch(error => {
          return res.status(500).json(error)
      })
  }

  async delete(req, res){
    await TaskModel.deleteOne({'_id': req.params.id})
    .then(response=>{
      return res.status(200).json(response)
    })
    .catch(error=>{
      return res.status(500).json(error)
    })
  }

  async done(req, res){
    await TaskModel.findByIdAndUpdate(
      {'_id': req.params.id},
      {'done': req.params.done},
      {new: true})
      .then(response => {
        return res.status(200).json(response)
      })
      .catch(error =>{
        return res.status(500).json(error)
      })



  }

  async late(req, res){
    await TaskModel
    .find({
      'when': {'$lt':current},
      'macaddress': {'$in': req.params.macaddress}
  }) //lt = less than
    .sort('when')
    .then( response=>{
      return res.status(200).json(response)
    })
    .catch(error=>{
      return res.status(500).json(error)
    })

  }

  async today(req, res){
    await TaskModel
    .find({
      'when': {'$gte': startOfDay(current), '$lte': endOfDay(current)},
      'macaddress': {'$in': req.params.macaddress}
  })
    .sort('when')
    .then( response =>{
      return res.status(200).json(response)
    })
    .catch( error => {
      return res.status(500).json(error)
    })
  }

  async week(req, res){
    await TaskModel
    .find({
      'when': {'$gte': startOfWeek(current), '$lte': endOfWeek(current)},
      'macaddress': {'$in': req.params.macaddress}
  })
    .sort('when')
    .then( response =>{
      return res.status(200).json(response)
    })
    .catch( error => {
      return res.status(500).json(error)
    })



  }

  async month(req, res){
    await TaskModel
    .find({
      'when': {'$gte': startOfMonth(current), '$lte': endOfMonth(current)},
      'macaddress': {'$in': req.params.macaddress}
  })
    .sort('when')
    .then( response =>{
      return res.status(200).json(response)
    })
    .catch( error => {
      return res.status(500).json(error)
    })
  }

  async year(req, res){
    await TaskModel
    .find({
      'when': {'$gte': startOfYear(current), '$lte': endOfYear(current)},
      'macaddress': {'$in': req.params.macaddress}
  })
    .sort('when')
    .then( response =>{
      return res.status(200).json(response)
    })
    .catch( error => {
      return res.status(500).json(error)
    })
  }


}


module.exports = new TaskController();

