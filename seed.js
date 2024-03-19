const mongoose = require('mongoose');
const Job = require('./models/job');
const dbconnect = require('./config/dbConnect')

const date_posted = (days = 0) =>{
    const currentDate = new Date();
    return currentDate.setDate(currentDate.getDate() - days)
}
const jobsData = [
    {
        role: 'Software Engineer',
        company_name: 'Amazon',
        experience: 3,
        date_posted: date_posted(),
        location: 'Coimbatore, Tamil Nadu',
        tech_stack: ['Node.js', 'React', 'MongoDB'],
        salary: 500000,
        education: ['Bachelors', 'Masters']
    },
    {
        role: 'Data Scientist',
        company_name: 'Google',
        experience: 5,
        date_posted: date_posted(20),
        location: 'Chennai, Tamil Nadu',
        tech_stack: ['Python', 'TensorFlow', 'MongoDB'],
        salary: 1500000,
        education: ['Bachelors', 'Masters']
    },
    {
        role: 'Software Engineer',
        company_name: 'Incresco',
        experience: 1,
        date_posted: date_posted(10),
        location: 'Bangalore, Karnataka',
        tech_stack: ['Python', 'React', 'express'],
        salary: 1500000,
        education: ['Bachelors', 'Masters']
    },
    {
        role: 'Software Engineer only Phd',
        company_name: 'Incresco',
        experience: 1,
        date_posted: date_posted(10),
        location: 'Bangalore, Karnataka',
        tech_stack: ['Python', 'React', 'express'],
        salary: 1500000,
        education: ['Phd']
    },
];

async function seedDatabase() {
    try {
        dbconnect();
        await Job.deleteMany(); // Clear existing data
        await Job.insertMany(jobsData); // Insert dummy data
        console.log('Database seeded successfully');
    } catch (err) {
        console.error('Error seeding database:', err.message);
    } finally {
        mongoose.disconnect();
    }
}

seedDatabase();