// @flow

import { observable } from 'mobx';

/**
 *  Store commons data, like info about logged in user
 */
class CommonsStore {

  /** Name of current logged in user */
  @observable
  username: string = 'Johnny5'

}

const commonsStore = new CommonsStore();

export default commonsStore;