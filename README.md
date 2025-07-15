# MedAid 🎓📚

MedAid is a personalized study platform that helps students stay organized, retain knowledge, and collaborate with others using smart flashcards, note integration, and study plans.

---

## 🚀 Features

✅ Register & Login (JWT-based Auth)  
✅ Create multimedia flashcards (text, image, audio)  
✅ Review flashcards with spaced repetition  
✅ Upload lecture notes and auto-generate flashcards  
✅ Create personalized study plans by topic and exam date  
✅ Visualize study plan on a calendar  
✅ Share flashcard sets with friends or study groups  

---

## 🛠️ Tech Stack

**Frontend**: React, React Router, Tailwind  
**Backend**: Node.js, Express, MongoDB, JWT  
**Tools**: Multer, pdf-parse, Mammoth, Nodemailer, Calendar UI

---

## 🧪 Getting Started (Dev)

```bash
# Clone repo
git clone https://github.com/your-username/MedAid.git
cd MedAid

# Backend setup
cd backend
npm install
touch .env
# Add MONGO_URI and JWT_SECRET in .env
npm run dev

# Frontend setup
cd ../frontend
npm install
npm run dev
