import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/app/services/auth.service';
import { LoginUserDto } from '../models/login-user.dto';
import { TokenService } from '../services/token.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(
    private authService: AuthService,
    private tokenService: TokenService,
    private toastrService: ToastrService,
    private router: Router
  ) { }

  user: LoginUserDto = null!;

  public username: string = "";
  public password: string = "";

  ngOnInit(): void {
  }
  onGoogleLogin(){
    //to services
    try{this.authService.loginGoogle();

    } catch(error){
      console.log(error);
    }

    }

  onSubmitLogin(): void {
    this.user = new LoginUserDto(this.username, this.password);
    this.authService.login(this.user).subscribe(data => {
      this.toastrService.success('Autentificación exitosa', 'OK', {
        timeOut: 3000, positionClass: 'toast-top-right'
      });
      //console.log(data);
      if (!data.token) {
        this.toastrService.error(data.response.message, 'Fail', {
          timeOut: 3000, positionClass: 'toast-top-right',
        });
      } else {
        this.tokenService.setToken(data.token);
        this.router.navigate(['/'])
      }
    },
      err => {
        this.toastrService.error(err.error.message, 'Fail', {
          timeOut: 3000, positionClass: 'toast-top-right',
        });
      }
    );
  }

}
