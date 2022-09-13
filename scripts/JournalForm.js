export const JournalForm = () => {
    return `<form class="entryForm">
    <fieldset>
        <label for="entryDate">Date of entry</label>
        <input type="date" name="entryDate" class="entryForm__date" id="entryDate">
    </fieldset>
    <fieldset>
        <label for="conceptsCovered">Concepts covered</label>
        <input type="text" name="conceptsCovered" class="entryForm__concepts" id="conceptsCovered">
    </fieldset>
    <fieldset>
        <label for="journalEntry">Journal Entry</label>
        <textarea name="journalEntry" class="entryForm__journalEntry" id="journalEntry"></textarea>
    </fieldset>
    <fieldset>
        <label for="entryMood">Mood</label>
        <select name="entryMood" class="entryForm__mood" id="entryMood">
            <option value="happy">Happy</option>
            <option value="ok">OK</option>
            <option value="sad">Sad</option>
        </select>
    </fieldset>
    <input type="submit" value="Record Journal Entry">
</form>`
}