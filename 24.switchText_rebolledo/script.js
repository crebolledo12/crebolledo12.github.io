        const sentences = [
            "Overlook of the town of Copper Harbor.",
            "This image is a representation of the friendship I have with the subject.",
            "I remember sitting at the Capitol with my family, eating ice cream and watching people go by.",
            "A great friend would hike over a mountain for you.",
            "The grass is always greener on the other side."
        ];
        let index = 0;

        function changeText() {
            index = (index + 1) % sentences.length;
            document.getElementById("textBox").innerText = sentences[index];
        }
// JavaScript Document