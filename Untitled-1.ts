// Sample student data
const student = {
    name: "Alex Smith",
    id: "st12345",
    course: "Computer Science",
    year: 2
};

// Sample assignment
const assignment = {
    name: "Database Project",
    dueDate: "2024-05-15",
    complexity: "medium",
    markingCriteria: [
        "Database design",
        "Implementation",
        "Testing",
        "Documentation",
        "Presentation"
    ]
};

// Calculate start date based on complexity
function calculateStartDate(dueDate, complexity) {
    const due = new Date(dueDate);
    const timeNeeded = {
        'simple': 7,    // 1 week
        'medium': 14,   // 2 weeks
        'complex': 21   // 3 weeks
    };
    
    const startDate = new Date(due);
    startDate.setDate(due.getDate() - timeNeeded[complexity]);
    return startDate;
}

// Create timeline
function createTimeline(assignment) {
    const startDate = calculateStartDate(assignment.dueDate, assignment.complexity);
    const dueDate = new Date(assignment.dueDate);
    
    console.log("\n=== Assignment Timeline ===");
    console.log(`Assignment: ${assignment.name}`);
    console.log(`Start Date: ${startDate.toDateString()}`);
    console.log(`Due Date: ${dueDate.toDateString()}`);
    
    // Create milestones
    const totalDays = Math.round((dueDate - startDate) / (1000 * 60 * 60 * 24));
    const milestones = [
        { task: "Start project" },
        { task: "Complete initial design" },
        { task: "Finish main implementation" },
        { task: "Complete testing" },
        { task: "Submit final work" }
    ];

    console.log("\nMilestones:");
    milestones.forEach((milestone, index) => {
        const daysToAdd = Math.round((totalDays * index) / (milestones.length - 1));
        const milestoneDate = new Date(startDate);
        milestoneDate.setDate(startDate.getDate() + daysToAdd);
        console.log(`${milestoneDate.toDateString()}: ${milestone.task}`);
    });
}

// Break down marking criteria
function breakdownMarkingCriteria(criteria) {
    console.log("\n=== Marking Criteria Checklist ===");
    criteria.forEach((criterion, index) => {
        console.log(`□ ${criterion}`);
    });
}

// Run the prototype
console.log(`Student: ${student.name} (${student.id})`);
console.log(`Course: ${student.course}, Year ${student.year}`);

createTimeline(assignment);
breakdownMarkingCriteria(assignment.markingCriteria);