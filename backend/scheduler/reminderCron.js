const cron = require('node-cron');
const StudyPlan = require('../models/StudyPlan');
const User = require('../models/User');
const sendEmail = require('../utils/sendEmail');

cron.schedule('0 7 * * *', async () => {
  const today = new Date().toDateString();

  try {
    const plans = await StudyPlan.find().populate('user');

    for (const plan of plans) {
      const todayTasks = plan.schedule.filter(
        item => new Date(item.date).toDateString() === today
      );

      if (todayTasks.length > 0) {
        const taskList = todayTasks.map(t => `- ${t.topic}`).join('\n');
        await sendEmail({
          to: plan.user.email,
          subject: `📚 Your MedAid Tasks for Today (${plan.courseName})`,
          text: `Hello ${plan.user.name || ''},\n\nHere are your study tasks for today:\n${taskList}\n\nKeep up the good work! 💪`
        });
      }
    }

    console.log('✅ Daily study plan reminders sent.');
  } catch (err) {
    console.error('❌ Reminder email failed:', err.message);
  }
});
