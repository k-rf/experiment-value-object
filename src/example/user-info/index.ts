import { Entity } from '~/shared/entity';

import { UserProfile } from '../user-profile';
import { UserAge } from '../user-profile/user-age';
import { UserFamilyName } from '../user-profile/user-family-name';
import { UserFirstName } from '../user-profile/user-first-name';
import { UserFullName } from '../user-profile/user-full-name';

import { UserInfoId } from './user-info-id';

type Props = {
  id: UserInfoId;
  profile: UserProfile;
};

export class UserInfo extends Entity<Props, 'UserInfo'> {
  protected validate(value: Props): Props {
    return value;
  }

  constructor(props: Props) {
    super(props);
  }
}

const profile = new UserProfile({
  age: new UserAge(42),
  fullName: new UserFullName({
    familyName: new UserFamilyName('doe'),
    firstName: new UserFirstName('john'),
  }),
});

new UserInfo({
  id: new UserInfoId(),
  profile,
});
