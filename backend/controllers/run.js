const runSchema = require('../models/runModel');

exports.addRuns = async (req, res) => {

    const { title, distance, date, time } = req.body;

    const run = runSchema({
        title,
        distance,
        date,
        time,
    });
    try {
        if (!title || !distance || !date || !time) {
            return res.status(400).json({ message: "All fields are required" });
        }
        if (distance < 0 || !distance === 'number') {
            return res.status(400).json({ message: "Distance must be a positive number" });
        }
        await run.save();
        res.status(200).json({ message: 'Run saved!' });
    } catch (error) {
        if(error.name === "ValidationError"){
        return res.status(400).json({message: "Time is incorrect"});
    }
        res.status(500).json({ message: "Server error!" });
    }
    console.log(run);
}
exports.getRuns = async (req, res) => {
    try {
        const runs = await runSchema.find().sort({ createdAt: -1 });
        res.status(200).json(runs);
    } catch (error) {
        res.status(500).json({ message: "Server error!" });
    }
}
exports.deleteRun = async (req, res) => {
    const { id } = req.params;
    runSchema.findByIdAndDelete(id)
        .then((run) => {
            res.status(200).json({ message: "Run deleted!" });
        })
        .catch((err) => {
            res.status(500).json({ message: "Server error!" });
        });
}