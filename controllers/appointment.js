const { Appointment } = require('../models');
const createAppointment = async (req, res) => {
    try {
        const appointments = await Appointment.create(req.body);
        return res.status(201).json({
            appointments,
        });
    } catch (error) {
        return res.status(500).json({ error: error.message })
    }
}
module.exports = {
    createAppointment
}