import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm'
import { BaseEntity } from 'typeorm/repository/BaseEntity'
//import { IsIn } from 'class-validator'


const defaultBoard = [
	['o', 'o', 'o'],
	['o', 'o', 'o'],
	['o', 'o', 'o']
]

@Entity()
export default class Games extends BaseEntity {

  @PrimaryGeneratedColumn()
  id?: number

  @Column('text', {nullable:false})
  name: string

  //I think it should be somehting like this but I did not manage to make it work as expected
  // @IsIn(randomcolors, {message: "not allowed color"})  -- I would have to export and import the randomcolor
  @Column('text', {nullable:false})
  color: string

  @Column('json', {default: defaultBoard})
  board: JSON
}