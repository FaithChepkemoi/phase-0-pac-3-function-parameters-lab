function introduction(name) {
    return `Hi, my name is ${name}.`; // Ensure there is a space after the comma
}

// Call the function with "Aki" as an argument
const greeting = introduction("Aki");

// Output the result
console.log(greeting); // This will log: Hi, my name is Aki.

function introductionWithLanguage (name,language){
    return `Hi, my name is ${name} and I am learning to program in ${language}.`;
}
function introductionWithLanguageOptional(name="Gracie", language="JavaScript")
{
return `Hi, my name is ${name} and I am learning to program in ${language}.`;
}
