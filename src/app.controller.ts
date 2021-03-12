import { Controller, HttpService } from '@nestjs/common';
import { MessagePattern } from '@nestjs/microservices';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Controller()
export class AppController {
  constructor(private httpService: HttpService) { }

  @MessagePattern({ cmd: 'getParkings' })
  findAllParkings(params: any): Observable<any> {
    return this.httpService.get('http://data.lacub.fr/wfs?key=9Y2RU3FTE8&SERVICE=WFS&VERSION=1.1.0&REQUEST=GetFeature&TYPENAME=ST_PARK_P&SRSNAME=EPSG:4326')
      .pipe(
        map(res => {
          return { data: res.data }
        })
      );
  }

  @MessagePattern({ cmd: 'getParking' })
  findOneParking(params: any): string {
    return 'findOneParking';
  }

  @MessagePattern({ cmd: 'createParking' })
  createParking(params: any): string {
    return 'createParking';
  }

  @MessagePattern({ cmd: 'updateParking' })
  updateParking(params: any): string {
    return 'updateParking';
  }

  @MessagePattern({ cmd: 'deleteParking' })
  deleteParking(params: any): string {
    return 'deleteParking';
  }

}
