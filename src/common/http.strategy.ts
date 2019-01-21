import { ExtractJwt, Strategy } from 'passport-jwt';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { AuthService } from '../service/auth.service';

@Injectable()
export class HttpStrategy extends PassportStrategy(Strategy) {
  constructor(private readonly authService: AuthService) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      passReqToCallback: false,
      secretOrKey: 'secretKey',
    });
  }

  async validate(token: any, done: Function) {
    console.log('entered jwt', token)
    // const user = await this.authService.checkToken()
    console.log('user11', token)
    if (!token) {
      return done(new UnauthorizedException(), false);
    }
    done(null, token);
  }
}


