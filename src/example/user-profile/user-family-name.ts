import { z } from 'zod';

import { DomainPrimitive } from '~/shared/domain-primitive';

export class UserFamilyName extends DomainPrimitive<string, 'UserFamilyName'> {
  protected validate(value: string): string {
    return z.string().min(1).max(30).parse(value);
  }
}
