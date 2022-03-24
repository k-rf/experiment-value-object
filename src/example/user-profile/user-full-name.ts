import { DomainPrimitive } from '~/shared/domain-primitive';

import { UserFamilyName } from './user-family-name';
import { UserFirstName } from './user-first-name';

type Props = {
  firstName: UserFirstName;
  familyName: UserFamilyName;
};

export class UserFullName extends DomainPrimitive<Props, 'UserFullNameD'> {
  protected validate(value: Props): Props {
    return value;
  }
}
