import { DomainPrimitive } from '~/shared/domain-primitive';

import { UserAge } from './user-age';
import { UserFullName } from './user-full-name';

type Props = {
  fullName: UserFullName;
  age: UserAge;
};

export class UserProfile extends DomainPrimitive<Props, 'UserProfile'> {
  protected validate(value: Props): Props {
    return value;
  }
}
