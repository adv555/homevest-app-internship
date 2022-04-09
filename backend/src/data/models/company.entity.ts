import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, OneToOne, JoinColumn } from "typeorm";
import { ICompany } from '~/common/interfaces/company';
import { UserEntity } from "./user.entity";
import { EstateEntity } from './estate.entity';
@Entity({
  name: 'company',
})
export class CompanyEntity implements ICompany {

  @PrimaryGeneratedColumn("uuid")
  id!: string;

  @OneToOne(() => UserEntity, (user: UserEntity) => user.company)
  @JoinColumn({ name: 'userId' })
  user!: UserEntity

  @OneToOne(() => EstateEntity, (estate: EstateEntity) => estate.company)
  estate!: EstateEntity;

  @Column()
  userId!: string

  @Column({
    length: 50
  })
  companyName!: string;

  @Column({
    length: 50
  })
  companyLogo!: string;

  @Column()
  dateOfEstablishment!: Date;

  @Column({
    length: 50
  })
  website!: string;

  @Column({
    length: 50
  })
  address!: string;

  @Column({
    length: 20
  })
  phoneNumber!: string;

  @Column("text")
  documents!: string;

  @CreateDateColumn()
  createdAt!: Date;

  @UpdateDateColumn()
  updatedAt!: Date;
}