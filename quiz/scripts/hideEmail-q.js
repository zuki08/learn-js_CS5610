/* anonymizes the username(local part) of an email ID, that is, 
replace the username part with * characters.
*/
const emails = ['mary@northeastern.edu', 'ari@khoury.northeastern.edu', 'jk_neu.edu', 'jk@neu.edu', 'jsned@', 'ai_me@mugar.northeastern.edu'];
window.onload = function hideEmail() {
    const list = document.getElementById('emails')
    list.innerHTML = '';
    for (const email of emails) {
        // complete the loop
        if(email.match(/^[0-9A-Za-z_]+@(.+\.)*northeastern.edu$/)){
            console.log(email);
            let splitArr = email.split("@");
            let swap = "";
            swap = splitArr[0].replace(/./g, "*") + "@" + splitArr[1];
            const listEle = document.createElement("li")
            listEle.textContent = swap;
            list.appendChild(listEle);
        }
    }
}