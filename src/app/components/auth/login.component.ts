import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { LoginUserDto } from 'src/app/models/login-user.dto';
import { AuthService } from 'src/app/services/auth.service';
import { TokenService } from 'src/app/services/token.service';

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

  username!: string;
  password!: string;


  ngOnInit(): void {
  }

  onLogin(): void {
    this.user = new LoginUserDto(this.username, this.password);
    this.authService.login(this.user).subscribe(data => {
      //console.log(data);
      if (!data.token) {
        this.toastrService.error(data.response.message, 'Fail', {
          timeOut: 3000, positionClass: 'toast-top-right',
        });
      } else {
        this.tokenService.setToken(data.token);
        this.toastrService.success('Autentificación exitosaa', 'OK', {
          timeOut: 3000, positionClass: 'toast-top-right'
        });
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
