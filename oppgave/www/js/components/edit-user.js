import { LitElement, html, css } from "../../node_modules/lit-element/lit-element.js";

class EditUser extends LitElement {
  static get properties() {
    return {
      user: { type: Object }
    };
  }

  // din kode her
    
    render() {
    return html`
    
<form onsubmit="javascript: return false;" id="userForm" method="POST">
    <div>
    <label for="email" style="margin-left: 50px;">Email: </label>
    <input id="uname" name="uname" type="text" value="${this.user.uname}" required>
    </div>
    
    <div>
    <label for="firstName" style="margin-left: 50px;">First name: </label>
    <input id="firstName" name="firstName" type="text" value="${this.user.firstName}">
    </div>

    <div>
    <label for="lastName" style="margin-left: 50px;">Last name: </label>
    <input id="lastName" name="lastName" type="text" value="${this.user.lastName}">
    </div>
    
    <div>
    <label for="oldpwd" style="margin-left: 50px;">Old password: </label>
    <input id="oldpwd" name="oldpwd" type="password" value="${this.user.oldpwd}">
    </div>
    
    <div>
    <label for="newpwd" style="margin-left: 50px;">New password: </label>
    <input id="newpwd" name="newpwd" type="password" value="${this.user.newpwd}">
    </div>
    
    <input type="submit" style="background-color: dimgray" @click=${this.updateUser} id="submit" name="editUser" value="Submit">
    </input>

</form>
    `;
  }

  //Function that updates the user info
  updateUser(e) {
    const dataForm = new FormData(e.target.form);
    console.log(e)
    fetch('api/updateUser.php', {
     
        method: 'POST',
     
        body: dataForm
    
    }).then(res=>res.json())
      .then(data=>{
        
        if (data.status=='success') {
            console.log("Success, the user info was updates");
            } 
        
        else {    
            console.log("Something went wrong, the user info was NOT updated");
            }
      
        })
  
  }


}
customElements.define('edit-user', EditUser);
