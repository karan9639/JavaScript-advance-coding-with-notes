// const res = async () => {
//     console.log("async await start");

//     try {
//         const response = await fetch('https://api.github.com/users');
//         if (!response.ok) {
//             throw new Error(`HTTP error! status: ${response.status}`);
//         }

//         const data = await response.json();
        
//         // Log entire data array
//         console.log(data);

//         // Parse and log specific details
//         data.forEach(user => {
//             console.log(`Username: ${user.login}`);
//             console.log(`Profile URL: ${user.html_url}`);
//         });

//     } catch (error) {
//         console.error("Error fetching data:", error);
//     }
// }

// res();

(async () => {
    console.log("async await start");

    try {
        const response = await fetch('https://api.github.com/users');
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        
        // Log entire data array
        console.log(data);

        // Parse and log specific details
        data.forEach(user => {
            console.log(`Username: ${user.login}`);
            console.log(`Profile URL: ${user.html_url}`);
        });

    } catch (error) {
        console.error("Error fetching data:", error);
    }
})();
