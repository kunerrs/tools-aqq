'use strict'

const BaseModel = use('MongooseModel')

/**
 * @class Foo
 */
class Foo extends BaseModel {
  /**
   * Exclude created_at and updated_at from the model
   */
  static get timestamps () {
    return false
  }
  static boot ({ schema }) {
    // Hooks:
    // this.addHook('preSave', () => {})
    // this.addHook('preSave', 'FooHook.method')
    // Indexes:
    // this.index({}, {background: true})
  }
  /**
   * Foo's schema
   */
  static get schema () {
    return {

    }
  }
}

module.exports = Foo.buildModel('Foo')
