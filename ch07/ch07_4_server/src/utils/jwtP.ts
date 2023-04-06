import type {Jwt, JwtPayload} from 'jsonwebtoken'
import {sign, verify} from 'jsonwebtoken'
import type {SignOptions, VerifyOptions} from 'jsonwebtoken'

const secret = 'very important secret'
