import { LogLevel } from '~/common/enums';
import { AppAsyncStorage } from '~/common/types';
import { AsyncLocalStorage } from './async-storage/async-storage.service';
import { EstateService } from './estate-service/estate-service.service';
import { Logger } from './logger/logger.service';
import { UserService } from './user-service/user-service.service';
import { InvestorService } from './user-service/investor-service.service';
import { TokenService } from './token-service/token-service.service';
import { MailService } from './mail-service/mail-service.service';
import { AuthService } from './auth-service/auth-service.service';
import { AppartmentService } from './appartment-service/appartment-service.service';
import { CompanyService } from './user-service/company-service.service';
import { InvestmentService } from './user-service/investment-service.service';

const appAsyncStorage = new AsyncLocalStorage<AppAsyncStorage>();

const logger = new Logger({
  logLevel: LogLevel.DEBUG,
  asyncStorage: appAsyncStorage,
});

const userService = new UserService();
const investorService = new InvestorService();
const tokenService = new TokenService();
const authService = new AuthService();
const mailService = new MailService();
const companyService = new CompanyService();
const estateService = new EstateService();
const appartmentService = new AppartmentService();
const investmentService = new InvestmentService();

export {
  appAsyncStorage,
  logger,
  userService,
  investorService,
  tokenService,
  authService,
  mailService,
  estateService,
  companyService,
  appartmentService,
  investmentService,
};
