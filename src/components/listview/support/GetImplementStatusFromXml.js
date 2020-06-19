
async function getImplementStatusFromXml() {
    const url = "https://localhost:5001/fakeLink";
    const obj = (await (await fetch(url)).json());
    return obj;
}//dummy

export default getImplementStatusFromXml;