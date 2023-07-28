import {Type} from '@angular/core';
import {Resolve, ResolveFn} from '@angular/router';

export interface Link {
  path: string | undefined;
  title: string | Type<Resolve<string>> | ResolveFn<string> | undefined;
}
