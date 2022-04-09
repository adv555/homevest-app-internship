import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, OneToOne, JoinColumn } from "typeorm";
import { IAppartment } from '~/common/interfaces/appartment';
import { EstateEntity } from "./estate.entity";

@Entity({
  name: 'appartment',
})
export class AppartmentEntity implements IAppartment {

  @PrimaryGeneratedColumn("uuid")
  id!: string;

  @OneToOne(() => EstateEntity, (estate: EstateEntity) => estate.appartment)
  @JoinColumn({ name: 'estateId' })
  estate!: EstateEntity

  @Column()
  estateId!: string

  @Column({
    length: 50
  })
  nameOfBuilding!: string;

  @Column({
    length: 50
  })
  numberOfRooms!: string;

  @Column({
    length: 50
  })
  numberOfBathrooms!: string;

  @Column({
    length: 50
  })
  typeOfParking!: string;

  @Column({
    length: 50
  })
  price!: string;

  @Column({
    length: 50
  })
  priceForM2!: string;

  @Column({
    length: 50
  })
  location!: string;

  @Column({
    length: 50
  })
  appartmentClass!: string;

  @Column({
    length: 50
  })
  floors!: string;

  @Column({
    length: 50
  })
  appartmentState!: string;

  @Column({
    length: 50
  })
  currency!: string;

  @Column({
    length: 50
  })
  yearOfOperation!: string;

  @Column({
    length: 50
  })
  salesStatus!: string;

  @Column({
    length: 50
  })
  investmentType!: string;

  @Column()
  lending!: boolean;

  @Column()
  installments!: boolean;

  @Column()
  mortgage!: boolean;

  @Column()
  images!: string;

  @CreateDateColumn()
  createdAt!: Date;

  @UpdateDateColumn()
  updatedAt!: Date;

}
