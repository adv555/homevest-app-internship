import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { IInvestment } from '~/common/interfaces/investment';
import { EstateEntity } from "./estate.entity";
import { InvestorEntity } from "./investor.entity";

@Entity({
  name: 'investment',
})
export class InvestmentEntity implements IInvestment {
  @PrimaryGeneratedColumn("uuid")
  id!: string;

  @ManyToOne(() => InvestorEntity, (investor: InvestorEntity) => investor.investments)
  @JoinColumn({ name: 'investorId' })
  investor!: InvestorEntity;

  @Column()
  investorId!: string;

  @ManyToOne(() => EstateEntity, (estate: EstateEntity) => estate.investments)
  @JoinColumn({ name: 'estateId' })
  estate!: EstateEntity;

  @Column()
  estateId!: string;

  @Column()
  fullName!: string;

  @Column()
  companyName!: string;

  @Column()
  country!: string;

  @Column()
  city!: string;

  @Column()
  street!: string;

  @Column()
  zipcode!: string;

  @Column()
  nameOfBank!: string;

  @Column()
  nameOfCard!: string;

  @Column()
  cardNumberMask!: string;

  @Column()
  expirationYear!: number;

  @Column()
  paymentAmount!: number;

  @CreateDateColumn()
  createdAt!: Date;

  @UpdateDateColumn()
  updatedAt!: Date;
}