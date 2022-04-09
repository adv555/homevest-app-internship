import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, OneToOne } from "typeorm";
import { CompanyEntity } from "./company.entity";
import { InvestorEntity } from "./investor.entity";

@Entity({
  name: 'user',
})
export class UserEntity  {

  @PrimaryGeneratedColumn("uuid")
  id!: string;

  @OneToOne(() => InvestorEntity, (investor: InvestorEntity) => investor.user)
  investor!: InvestorEntity;
  
  @OneToOne(() => CompanyEntity, (company: CompanyEntity) => company.user)
  company!: CompanyEntity;

  @Column() 
  firstName!: string;

  @Column()
  lastName!: string;

  @Column()
  email!: string;

  @Column()
  password!: string;

  @Column()
  role!: string;

  @Column('boolean', {default: false})
  isActivated!: boolean;

  @CreateDateColumn()
  createdAt!: Date;

  @UpdateDateColumn()
  updatedAt!: Date;
}




