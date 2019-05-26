import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
  })
export class UtilHelper {
    stripAccents(text: string): string {
        if (!text) {
          return text;
        }
    
        text = text.toString();
    
        const reAccents = /[àáâãäçèéêëìíîïñòóôõöùúûüýÿÀÁÂÃÄÇÈÉÊËÌÍÎÏÑÒÓÔÕÖÙÚÛÜÝ]/g;
        const replacements = '_aaaaaceeeeiiiinooooouuuuyyAAAAACEEEEIIIINOOOOOUUUUY';
    
        return text.replace(reAccents, match => {
          return replacements[reAccents.source.indexOf(match)];
        });
      }
}
