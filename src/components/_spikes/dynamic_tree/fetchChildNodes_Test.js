/* eslint-disable eqeqeq */
export default function fetchChildNodes(id) {
    console.log("fetchChildNodes activated with: "+id)
    return new Promise(resolve => {
        setTimeout(() =>{
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
        //this was tricky to make, so i used this:
        //https://stackoverflow.com/questions/40029867/trying-to-implement-a-simple-promise-in-reactjs
        //https://react-cn.github.io/react/tips/if-else-in-JSX.html
        //https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise
        400);//custom delay, to simulate API-delay
    });
}