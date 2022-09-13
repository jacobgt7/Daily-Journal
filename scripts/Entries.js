/*
    Which function allows this component to get a copy
    of the data? Import it on the following line of code
    and then invoke it on the third line of code.
*/
import { getJournalEntries } from "./database.js"

export const Entries = () => {
    const entries = getJournalEntries()
    let allEntriesAsHTML = ""


    for (const entry of entries) {
        allEntriesAsHTML += `<div id="entry--${entry.id}">
            <h3>${entry.concept}</h3>
            <p>${entry.entry}</p>
            <p>Mood was ${entry.mood}</p>
            <p>${entry.date}</p>
        </div>           
        `
    }

    return allEntriesAsHTML
}