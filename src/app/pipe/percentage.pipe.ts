import { Pipe, PipeTransform } from '@angular/core';
import {applySourceSpanToExpressionIfNeeded} from "@angular/compiler/src/output/output_ast";

@Pipe({
  /* this is our name of the pipe that we use in {{"statement" : ***here***}}*/
  name: 'myPercentage'
})
export class PercentagePipe implements PipeTransform {
/* in the value we can give any data types. and any return type. args means its parameters like USD, LKR*/
  transform(value: number, ...args: unknown[]): string {
    return `${value}%`;
  }

}
