/*
 *   Data provider for Daily Journal application
 *
 *      Holds the raw data about each entry and exports
 *      functions that other modules can use to filter
 *      the entries for different purposes.
 */

const database = {
    "entries": [
        {
            id: 1,
            date: "07/24/2022",
            concept: "HTML & CSS",
            entry: "We talked about HTML components and how to make grid layouts with Flexbox in CSS.",
            mood: "Ok"
        },
        {
            id: 2,
            date: "08/22/2022",
            concept: "For-of loops",
            entry: "Used for-of loops to iterate arrays.",
            mood: "Ok"
        },
        {
            id: 3,
            date: "08/27/2022",
            concept: "Functions",
            entry: "Learned how to write and call functions.",
            mood: "Ok"
        }
    ]
}

/*
    You export a function that provides a version of the
    raw data in the format that you want
*/
export const getJournalEntries = () => database.entries.map(entry => ({ ...entry }))

