## ✅ USER STORIES (Agile Format)

---

### **US-01: Customizable Flashcards**

> **As a** student
> **I want to** create and review flashcards using text, images, and audio
> **So that** I can study more effectively with a personalized method and spaced repetition.

**Acceptance Criteria:**

* Flashcards must support multimedia (text, images, audio).
* User can organize flashcards into sets with tags.
* A spaced repetition mode must be available.
* Progress should be tracked automatically.

---

### **US-02: Auto-Generate Flashcards from Notes**

> **As a** student
> **I want to** upload lecture notes and have flashcards generated automatically
> **So that** I can save time and focus on studying key concepts.

**Acceptance Criteria:**

* System accepts notes in PDF, DOCX, and TXT.
* Automatically extracts terms, questions, and definitions.
* Allows user to review and edit the suggestions before saving.

---

### **US-03: Personalized Study Plan**

> **As a** student
> **I want to** input my course syllabus and deadlines
> **So that** I can generate a personalized study schedule with reminders.

**Acceptance Criteria:**

* User can upload or manually input course topics and dates.
* Study hours and frequency preferences are configurable.
* The schedule auto-distributes topics across the timeline.
* Includes calendar and reminder features.

---

### **US-04: Share Study Sets**

> **As a** student
> **I want to** share flashcard sets with friends or study groups
> **So that** we can study collaboratively and help each other.

**Acceptance Criteria:**

* Flashcards can be shared via invite or study group.
* Owner can manage permissions (view/edit).
* Shared usage is tracked.
* Version history is maintained.

---

## ✅ SOFTWARE REQUIREMENTS SPECIFICATION (SRS Format)

---

### **1. Feature: Customizable Flashcards**

* **Functional Requirements:**

  * FR1.1: User can create flashcards with text, image, and audio.
  * FR1.2: Flashcards are grouped into user-defined sets with tags.
  * FR1.3: A spaced repetition algorithm schedules review sessions.
  * FR1.4: The system tracks user progress and completion rates.

---

### **2. Feature: Lecture Note Integration**

* **Functional Requirements:**

  * FR2.1: System accepts uploads of lecture notes in .pdf, .docx, .txt.
  * FR2.2: NLP module extracts potential Q\&A pairs and key terms.
  * FR2.3: Suggestions are shown to the user for approval/editing.
  * FR2.4: Approved flashcards are stored in a set.

---

### **3. Feature: Study Plan Creation**

* **Functional Requirements:**

  * FR3.1: User can input or upload syllabus information.
  * FR3.2: User sets study goals: available hours, exam dates.
  * FR3.3: Algorithm creates a day-by-day plan.
  * FR3.4: Reminders and notifications are sent via app/email.
  * FR3.5: Visual schedule is available in calendar view.

---

### **4. Feature: Shared Study Sets**

* **Functional Requirements:**

  * FR4.1: Users can share flashcard sets via invite or public links.
  * FR4.2: Permissions can be set to view-only or collaborative.
  * FR4.3: System logs edits and tracks usage by each collaborator.
  * FR4.4: Shared sets are grouped under “Study Group Sets.”

