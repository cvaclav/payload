import * as migration_20241204_184256_initial from './20241204_184256_initial'

export const migrations = [
  {
    up: migration_20241204_184256_initial.up,
    down: migration_20241204_184256_initial.down,
    name: '20241204_184256_initial',
  },
]
