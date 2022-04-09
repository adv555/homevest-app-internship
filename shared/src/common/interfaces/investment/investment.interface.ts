export interface IInvestment {
  userId?: string;
  fullName?: string;
  companyName?: string;
  country?: string;
  city?: string;
  street?: string;
  zipcode?: string;
  nameOfBank?: string;
  nameOfCard?: string;
  cardNumberMask?: string;
  expirationYear?: number;
  paymentAmount?: number;
}