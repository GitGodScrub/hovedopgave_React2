function getImplementStatusFromXml_Dummy(itemName) {
    if((typeof itemName) != "string"){
        console.log("Something that were not supposed to happen, happened")
    }//TODO check if this actually works
    return new Promise((resolve) => {
        setTimeout(() =>{//custom delay, to simulate API-delay, time (in ms) declared after this function
            if (Math.random()) {
                resolve(
                    true
                );
            }
            else {
                resolve(
                    false
                );
            }
        }, 400);//custom delay, to simulate API-delay
    });
};
export default getImplementStatusFromXml_Dummy;