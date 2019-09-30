import { Entity, model, property } from '@loopback/repository';

@model()
export class Profile extends Entity {
  @property({
    type: 'string',
    id: true,
    generated: true,
  })
  id?: string;

  @property({
    type: 'string',
  })
  first_name?: string;

  @property({
    type: 'string',
  })
  last_name?: string;

  @property({
    type: 'date',
  })
  created_at?: string;
  @property({
    type: 'string',
  })
  birth_date?: string;
  @property({
    type: 'number',
  })
  age?: number;

  @property({
    type: 'object',
  })
  history?: object;
  constructor(data?: Partial<Profile>) {
    super(data);
  }
}

export interface ProfileRelations {
  // describe navigational properties here
}

export type ProfileWithRelations = Profile & ProfileRelations;
