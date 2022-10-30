const express = require("express");
const Student = require("../models/students") // To know about collections in db 
// 1. create a router 
const router = new express.Router();

// 2. Define router 

// create a new student using promises 

// router.post("/students", (req, res) => {
//     console.log(req.body);
//     const user = new Student(req.body);
//     user.save().then(() => {
//         res.status(201).send(user);
//     }).catch((err) => {
//         res.status(400).send(err)
//     })
// })

// same thing using async and await 

router.post("/students", async(req, res) => {

    try {
        // console.log(req.body);
        const user = new Student(req.body);
        const createUser = await user.save();
        res.status(201).send(createUser);

    } catch (err) {
        res.status(400).send(err)
    }
})

// get all students data 

router.get("/students", async(req, res) => {
    try {
        // const studentData = await Student.find({
        //     _id: "62bb06f3aa905d82c48c8273"
        // });
        const studentsData = await Student.find();
        res.send(studentsData); 
    } catch (e) {
        res.send(e);
    }
})

// get indivisual student data 

router.get("/students/:id", async(req, res) => {
    try {
        const _id = req.params.id;
        const studentData = await Student.findById(_id);
        res.send(studentData);
    } catch (e) {
        res.status(500).send(e);
    }
})

// update student details by id 

router.patch("/students/:email", async(req, res) => {
    try {
        const _email = req.params.email;

        const updateStudents = await Student.findByIdAndUpdate(_email, req.body, {
            new: true // by new:true - showes updated data
        })
        res.send(updateStudents);
    } catch (e) {
        res.status(404).send(e);
    }
})


// Delete student 

router.delete("/students/:id", async(req, res) => {
    try {
        const _id = req.params.id;
        const deleteStudent = await Student.findByIdAndDelete(_id)
        res.send(deleteStudent);
    } catch (e) {
        res.status(500).send(e);
    }
})


module.exports = router;