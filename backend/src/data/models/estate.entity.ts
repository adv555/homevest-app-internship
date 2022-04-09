import { IEstate } from '~/common/interfaces';
import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, OneToOne, JoinColumn, OneToMany } from "typeorm";
import { CompanyEntity } from './company.entity';
import { AppartmentEntity } from './appartment.entity';
import { InvestmentEntity } from './investmant.entity';

@Entity({
  name: 'estate',
})
export class EstateEntity implements IEstate {

  @PrimaryGeneratedColumn("uuid")
  id!: string;

  @OneToOne(() => CompanyEntity, (company: CompanyEntity) => company.estate)
  @JoinColumn({ name: 'userId' })
  company!: CompanyEntity

  @OneToOne(() => AppartmentEntity, (appartment: AppartmentEntity) => appartment.estate)
  appartment!: AppartmentEntity;

  @OneToMany(() => InvestmentEntity, (investment: InvestmentEntity) => investment.estate)
  investments!: InvestmentEntity[];

  @Column()
  companyId!: string

  @Column()
  estateName!: string

  @Column()
  estateLogo!: string

  @Column()
  numberOfFlats!: number

  @Column()
  numberOfBuildings!: number

  @Column()
  constructionDetails!: string

  @Column()
  amountOfMoney!: string

  @Column()
  location!: string

  @Column()
  status!: string

  @Column()
  fundingState!: string

  @Column()
  annualReturn!: number

  @Column()
  duration!: number

  @Column()
  distribution!: number

  @Column()
  profit!: string

  @Column()
  favorite!: boolean

  @CreateDateColumn()
  createdAt!: Date

  @UpdateDateColumn()
  updatedAt!: Date
}



