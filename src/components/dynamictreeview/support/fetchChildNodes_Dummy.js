function fetchChildNodes_Dummy(id) {
    console.log("fetchChildNodes activated with: "+id)
    return new Promise((resolve) => {
        setTimeout(() =>{//custom delay, to simulate API-delay, time (in ms) declared after this function
            if (id == 2) {
            console.log("fetchChildNodes option 1")
                resolve(
                    {children: [
                        {
                        id: "2",
                        name: "Calendar"
                        }
                ]});
            }
            else if(id == 3){
            console.log("fetchChildNodes option 2")
                resolve(
                    {children: [
                        {
                        id: "3",
                        name: "Settings"
                        }
                ]});
            }
            else {
            console.log("fetchChildNodes option 3 (default)")
                resolve(
                    {children: [
                        {
                        id: "2",
                        name: "Calendar"
                        },
                        {
                        id: "3",
                        name: "Settings"
                        },
                        {
                        id: "4",
                        name: "Music"
                        }
                    ]});}
        },
        400);//custom delay, to simulate API-delay
    });
}
export default fetchChildNodes_Dummy;