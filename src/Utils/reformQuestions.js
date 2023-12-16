export function Reform_to_suitable_form(questions, index) {
    console.log(index)
    const question  = questions['question_text']
    const options = Object.values(questions)
    // console.log(options)
    return {question, id:options[0],number: index + 1,options: [{
        label: "a",
        text: options[2],
    },
    {
        label: "b",
        text: options[3],
    },
    {
        label: "c",
        text: options[4]
    },
    {
        label: "d",
        text: options[5]
    }]}
}