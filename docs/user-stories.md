# User Stories

As a new user, I need to register an account so that I can store and retrieve my own tasks.
Acceptance criteria:
	* New User Form (email address, password).
	* Confirmation email is sent to email address.
	* Upon confirmation, user's email and hashed password are saved to database.
	* User is logged in after submitting the form.

As a new user, I want the option to Sign in with Google.
Acceptance criteria:
	* New User Form contains a link to register with a Google account.
	* User is logged in after submitting the form.

As a user without any tasks, I want to be guided to the New Task Form so that I know where to begin using the app.
Acceptance criteria:
	* Upon logging into the app with no tasks, a large button guides the user to the Add Task Form.

As a user, I want to add a task so that I can be reminded to do it in the future.
Acceptance criteria:
	* A button the List page takes the user to the Add Task Form.
	* A user cannot submit the form without entering a descriptive title for the task.
	* User can input when the task is due, when to start the task, make the task recurring, priority level, and comments.
	* An acknowledgement notifies the user that the task was added successfully.
	* The form data is saved to the database for the user.

As a user, I want the app to display my tasks so that I can plan ahead to do them.
Acceptance criteria:
	* Display user's list of tasks when the user logs in.
	* Each task shows the number of days/months/years until due.

As a user, I want the UI to identify overdue tasks so that I can prioritize them.
Acceptance criteria:
	* Overdue tasks are sorted to the top of the list.
	* Overdue tasks on the list have a label indicating how long they have been overdue.
	* Overdue tasks are visually distinct from other tasks.

As a user, I want my tasks to be sorted so that I can focus on the soonest tasks and ignore those in the distant future.
Acceptance criteria:
	* Tasks are sorted by due date, ascending top to bottom.
	* Tasks which share the same due date are sorted by priority, then by percentage of recurring period, then by date created.

As a user, I want the option to be notified when a task is due, so that I can make time for it.
Acceptance criteria:
	* 
