import { DailyJournal } from "./DailyJournal.js"
import { JournalForm } from "./JournalForm.js"

const formContainer = document.querySelector("#createNew")
const entriesContainer = document.querySelector("#entries")



formContainer.innerHTML = JournalForm()

entriesContainer.insertAdjacentHTML("beforeend", DailyJournal())


