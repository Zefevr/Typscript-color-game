import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm'
import { BaseEntity } from 'typeorm/repository/BaseEntity'
import { IsIn } from 'class-validator'
import { randomcolor } from './controller'


const defaultBoard = [
	['o', 'o', 'o'],
	['o', 'o', 'o'],
	['o', 'o', 'o']
]

@Entity()
export default class Game extends BaseEntity {

  @PrimaryGeneratedColumn()
  id?: number

  @Column('text', {nullable:false})
  name: string

  @IsIn(randomcolor, {message: "not allowed color"})
  @Column('text', {nullable:false})
  color: string

  @Column('json', {default: defaultBoard})
  board: JSON
}