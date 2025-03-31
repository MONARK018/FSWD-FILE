export const tasklist = [];

export function addtask(title, duetime, priority) {
    try {
        if (!title || typeof duetime !== 'number' || !priority) {
            throw new Error("Invalid task data. Ensure title, dueTime (number), and priority are provided.");
        }
        
        const task = { 
            title, 
            duetime: Date.now() + duetime * 60000, 
            priority: priority.toLowerCase() // Ensure consistent case
        };

        tasklist.push(task);
        console.log(`✅ Task "${title}" added successfully!`);
        scheduleReminder(task);
    } catch (error) {
        console.error("❌ Error adding task:", error.message);
    }
}

export function sorttaskbypriority() {

    tasklist.sort((a, b) => a.priority.localeCompare(b.priority));
    console.log("📌 Tasks sorted by priority:", tasklist);
}

export function gettaskduewithin(minutes) {
    const now = Date.now();
    const upcomingtasks = tasklist.filter(task => task.duetime - now <= minutes * 60000);

    console.log(`⏳ Tasks due within ${minutes} minutes:`);
    upcomingtasks.forEach(task => console.log(`- ${task.title} (Priority: ${task.priority})`));
}

function scheduleReminder(task) {
    const delay = task.duetime - Date.now();
    if (delay > 0) {
        setTimeout(() => {
            console.log(`⏰ Reminder: Task "${task.title}" is due now!`);
        }, delay);
    }
}




addtask("Submit Assignment", 10, "High");
addtask("Buy Groceries", 30, "Medium");
addtask("Watch Movie", 60, "Low");

sorttaskbypriority();
gettaskduewithin(20);
