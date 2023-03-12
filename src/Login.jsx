import React, {Component} from 'react';
import './Login.css';

class Login  extends Component {
    
    render() { 
        return (
            <div className="kotak_login">
                <h5 className="judul">Form Login</h5>
                <br/>
                <h3 className="judul">Tugas Pertemuan Ketiga</h3>

                <form>
                    <strong>Username</strong>
                    <input type="text" name="username" class="form_login" placeholder="Masukkan Username"></input>

                    <label><strong>Password</strong></label>
                    <input type="text" name="password" class="form_login" placeholder="Password .."/>
                    <input type="submit" class="tombol_login" value="Login"/>
                    <center>
                    <input type="checkbox" defaultChecked/> Remember me
                    </center>
                    <br/>
                    <center>
                        <button type="button" class="btn btn-danger">Cancel</button>
                    </center>
                </form>
            </div> 
         );
    }
}
 
export default Login ;