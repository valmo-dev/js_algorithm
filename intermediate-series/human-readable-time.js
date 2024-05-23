/*
Write a function, which takes a non-negative integer (seconds) as input and returns the time in a human-readable format (HH:MM:SS)

HH = hours, padded to 2 digits, range: 00 - 99
MM = minutes, padded to 2 digits, range: 00 - 59
SS = seconds, padded to 2 digits, range: 00 - 59
The maximum time never exceeds 359999 (99:59:59)

You can find some examples in the test fixtures. 
*/

const humanReadable = (integer) => {
    if (integer >= 0 && integer <= 359999) {
        const hours = Math.floor(integer / 3600)
            .toString()
            .padStart(2, "0");
        const minutes = Math.floor((integer / 60) % 60)
            .toString()
            .padStart(2, "0");
        const seconds = Math.floor(integer % 60)
            .toString()
            .padStart(2, "0");

        const result = `${hours}:${minutes}:${seconds}`;
        return result;
    } else {
        console.error(
            "Must be an integer and the maximum time cannot exceed '359999' (99:59:59)"
        );
    }
};
